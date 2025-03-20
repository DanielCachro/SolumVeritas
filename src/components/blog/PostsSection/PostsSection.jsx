import {useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router-dom'
import {keepPreviousData, useQuery} from '@tanstack/react-query'
import qs from 'qs'
import {MoveLeft, MoveRight} from 'lucide-react'
import {queryClient, loadFeed, loadCases, IMAGES_URL} from '@/util/http'
import calculateReadTime from '@/util/calculateReadTime'
import ArticleCard from '@/components/common/ArticleCard/ArticleCard'
import Loader from '@/components/common/Loader/Loader'
import classes from './PostsSection.module.css'

export default function PostsSection() {
	const [page, setPage] = useState(1)
	const {blogType} = useParams()

	useEffect(() => {
		setPage(1)
	}, [blogType])

	const postsRef = useRef(null)
	const scrollToPosts = () => {
		postsRef.current?.scrollIntoView({behavior: 'smooth'})
	}

	const query = qs.stringify(
		{
			populate: ['blocks', 'cover'],
			sort: ['createdAt:desc'],
			pagination: {
				page: page,
				pageSize: 6,
			},
		},
		{
			encodeValuesOnly: true,
		}
	)

	const {
		data: queryData,
		isPlaceholderData,
		isFetching,
		isError,
		error,
	} = useQuery({
		queryKey: ['feed', page, blogType],
		queryFn: () => (blogType === 'aktualnosci' ? loadFeed(query) : loadCases(query)),
		placeholderData: keepPreviousData,
		staleTime: 60000,
	})

	if (isError) {
		throw new Error(error.message)
	}

	const {pageCount} = queryData?.meta.pagination || {}

	const generatePaginationNumbers = (currentPage, pageCount) => {
		const range = []
		const side = 3

		let start = Math.max(currentPage - side, 1)
		let end = Math.min(currentPage + side, pageCount)

		if (end - start < 4) {
			start = Math.max(end - 4, 1)
		}

		for (let i = start; i <= end; i++) {
			range.push(i)
		}
		return range
	}

	const paginationNumbers = generatePaginationNumbers(page, pageCount)

	const handlePageChange = newPage => {
		if (newPage >= 1 && newPage <= pageCount) {
			setPage(newPage)
		}
	}

	// Prefetch the next page
	useEffect(() => {
		if (!isPlaceholderData && page !== pageCount) {
			const query = qs.stringify(
				{
					populate: ['blocks', 'cover'],
					sort: ['publishedAt:desc'],
					pagination: {
						page: page + 1,
						pageSize: 6,
					},
				},
				{
					encodeValuesOnly: true,
				}
			)
			queryClient.prefetchQuery({
				queryKey: ['feed', page + 1],
				queryFn: () => loadFeed(query),
				staleTime: 60000,
			})
		}
	}, [queryData, isPlaceholderData, page, queryClient])

	return (
		<section ref={postsRef} className={`wrapper ${classes.section}`}>
			<h1>{blogType === 'aktualnosci' ? 'Aktualności' : 'Nasze Sprawy'}</h1>
			<div className={classes.posts}>
				{!isFetching && (
					<>
						<ul className={classes.posts__cards}>
							{queryData?.data.map(article => (
								<ArticleCard
									key={article.documentId}
									readTimeInMinutes={calculateReadTime(article.blocks)}
									cover={`${IMAGES_URL}${article.cover.url}`}
									title={article.title}
									description={article.description}
									articlePath={article.slug}
								/>
							))}
						</ul>
						<div className={classes.posts__pagination}>
							<button
								className={classes.posts__paginationButton}
								onClick={() => {
									handlePageChange(page - 1)
								}}
								disabled={page === 1}>
								<MoveLeft strokeWidth={1.5} /> Wstecz
							</button>
							<menu className={classes.posts__paginationNumbers}>
								{paginationNumbers.map(number => (
									<li key={number} className={number === page ? classes.posts__activeNumber : ''}>
										<button
											onClick={() => {
												scrollToPosts()
												handlePageChange(number)
											}}>
											{number}
										</button>
									</li>
								))}
							</menu>
							<button
								className={classes.posts__paginationButton}
								onClick={() => {
									handlePageChange(page + 1)
								}}
								disabled={page === pageCount}>
								Dalej <MoveRight strokeWidth={1.5} />
							</button>
						</div>
					</>
				)}
				{isFetching && <Loader />}
			</div>
		</section>
	)
}
