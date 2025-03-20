import qs from 'qs'
import {useNavigate, useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import {loadFeed, loadCases, IMAGES_URL} from '@/util/http.js'
import calculateReadTime from '@/util/calculateReadTime.js'
import getMinuteString from '@/util/getMinuteString.js'
import Loader from '@/components/common/Loader/Loader'
import classes from './LatestPostSection.module.css'

export default function LatestPostSection() {
	const navigate = useNavigate()
	const {blogType} = useParams()

	const query = qs.stringify(
		{
			populate: ['blocks', 'cover'],
			sort: ['createdAt:desc'],
			pagination: {
				limit: 1,
			},
		},
		{
			encodeValuesOnly: true,
		}
	)

	const {
		data: queryData,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['feed', 'latestPost', blogType],
		queryFn: () => (blogType === 'aktualnosci' ? loadFeed(query) : loadCases(query)),
		staleTime: 60000,
	})

	if (isError) {
		throw new Error(error.message)
	}

	const latestPost = queryData?.data[0]

	return (
		<section className={`wrapper ${classes.section}`}>
			{!isPending && (
				<div className={classes.imageContainer} style={{backgroundImage: `url(${IMAGES_URL}${latestPost?.cover.url})`}}>
					<button
						className={classes.headerBox}
						onClick={() => {
							navigate(`${latestPost?.slug}`)
						}}>
						<p>{`
						Przeczytasz w ${getMinuteString(calculateReadTime(latestPost?.blocks))}`}</p>
						<h2>{latestPost?.title}</h2>
					</button>
				</div>
			)}
			{isPending && (
				<div className={classes.loader}>
					<Loader />
				</div>
			)}
		</section>
	)
}
