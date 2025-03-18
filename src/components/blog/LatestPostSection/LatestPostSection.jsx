import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import {loadFeed} from '@/util/http.js'
import {IMAGES_URL} from '@/util/http'
import calculateReadTime from '@/util/calculateReadTime.js'
import getMinuteString from '@/util/getMinuteString.js'
import classes from './LatestPostSection.module.css'

import Loader from '@/components/common/Loader/Loader'

export default function LatestPostSection() {
	const navigate = useNavigate()

	const query = qs.stringify(
		{
			populate: ['blocks', 'cover'],
			sort: ['publishedAt:desc'],
			pagination: {
				limit: 1,
			},
		},
		{
			encodeValuesOnly: true,
		}
	)

	const {data: queryData, isPending} = useQuery({
		queryKey: ['feed', 'latestPost'],
		queryFn: () => loadFeed(query),
		staleTime: 5000,
	})

	const latestPost = queryData?.data[0]

	return (
		<section className={`wrapper ${classes.section}`}>
			{!isPending && (
				<div className={classes.imageContainer} style={{backgroundImage: `url(${IMAGES_URL}${latestPost.cover.url})`}}>
					<button
						className={classes.headerBox}
						onClick={() => {
							navigate(`${latestPost.slug}`)
						}}>
						<p>{`
						Przeczytasz w ${getMinuteString(calculateReadTime(latestPost.blocks))}`}</p>
						<h2>{latestPost.title}</h2>
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
