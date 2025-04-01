import qs from 'qs'
import {useNavigate, useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import {loadFeed, loadCases, IMAGES_URL} from '@/util/http.js'
import calculateReadTime from '@/util/calculateReadTime.js'
import getMinuteString from '@/util/getMinuteString.js'
import Loader from '@/components/common/Loader/Loader'
import classes from './LatestPostSection.module.css'

import {motion, AnimatePresence} from 'framer-motion'

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
			<AnimatePresence mode='wait'>
				{!isPending && (
					<motion.div
						key={latestPost.id}
						className={classes.imageContainer}
						style={{backgroundImage: `url(${IMAGES_URL}${latestPost.cover.url})`}}
						variants={{
							hidden: {opacity: 0, y: 20},
							visible: {opacity: 1, y: 0, transition: {duration: 0.5, staggerChildren: 0.3}},
							exit: {opacity: 0, y: -20, transition: {duration: 0.3}},
						}}
						initial='hidden'
						animate='visible'
						exit='exit'>
						<motion.button
							className={classes.headerBox}
							onClick={() => navigate(`${latestPost.slug}`)}
							variants={{
								hidden: {opacity: 0, y: 20},
								visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
								exit: {opacity: 0, y: -10, transition: {duration: 0.2}},
							}}>
							<p>{`Przeczytasz w ${getMinuteString(calculateReadTime(latestPost.blocks))}`}</p>
							<h2>{latestPost.title}</h2>
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
			{isPending && (
				<div className={classes.loader}>
					<Loader />
				</div>
			)}
		</section>
	)
}
