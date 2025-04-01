import {Suspense} from 'react'
import {Await, useLoaderData} from 'react-router-dom'
import {motion} from 'framer-motion'
import {IMAGES_URL} from '@/util/http'
import calculateReadTime from '@/util/calculateReadTime.js'
import {getFadeUpStaggerParentProps, fadeUpStaggerChild} from '@/constants/motionVariants'
import ArticleCard from '@/components/common/ArticleCard/ArticleCard'
import Loader from '@/components/common/Loader/Loader'
import classes from './FeedSection.module.css'


export default function FeedSection() {
	const {feed} = useLoaderData()

	return (
		<section className={`wrapper ${classes.section}`}>
			<h2>Aktualności</h2>
			<Suspense fallback={<Loader />}>
				<motion.ul className={classes.cards} {...getFadeUpStaggerParentProps(true)}>
					<Await
						resolve={feed}
						errorElement={
							<li>
								Nie udało sie pobrać aktualności. <br /> Spróbuj ponownie później.
							</li>
						}>
						{resolvedFeed =>
							resolvedFeed.data.map(article => {
								return (
									<ArticleCard
										key={article.documentId}
										readTimeInMinutes={calculateReadTime(article.blocks)}
										cover={`${IMAGES_URL}${article.cover.url}`}
										title={article.title}
										description={article.description}
										articlePath={`/aktualnosci/${article.slug}`}
										CardContainer={motion.li}
										variants={fadeUpStaggerChild}></ArticleCard>
								)
							})
						}
					</Await>
				</motion.ul>
			</Suspense>
		</section>
	)
}
