import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import {loadFeed} from '@/util/http.js'
import {IMAGES_URL} from '@/util/http'
import calculateReadTime from '@/util/calculateReadTime.js'
import getMinuteString from '@/util/getMinuteString.js'
import classes from './LatestPostSection.module.css'

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

	const {data: queryData} = useQuery({
		queryKey: ['feed', 'latestPost'],
		queryFn: () => loadFeed(query),
		staleTime: 5000,
	})

	console.log(queryData)

	return (
		<section className={`wrapper ${classes.section}`}>
			<div
				className={classes.imageContainer}
				style={{backgroundImage: `url(${IMAGES_URL}${queryData?.data[0].cover.url})`}}>
				<button
					className={classes.headerBox}
					onClick={() => {
						navigate(`${queryData?.data[0].slug}`)
					}}>
					<p>{`
						Przeczytasz w ${getMinuteString(calculateReadTime(queryData?.data[0].blocks))}`}</p>
					<h2>{queryData?.data[0].title}</h2>
				</button>
			</div>
		</section>
	)
}
