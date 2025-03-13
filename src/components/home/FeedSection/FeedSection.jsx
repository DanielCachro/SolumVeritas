import {Suspense} from 'react'
import {Await, useLoaderData} from 'react-router-dom'
import {IMAGES_URL} from '@/util/http'
import calculateReadTime from '@/util/calculateReadTime.js'
import ArticleCard from '@/components/common/ArticleCard/ArticleCard'
import Loader from '@/components/common/Loader/Loader'
import classes from './FeedSection.module.css'

export default function FeedSection() {
	const {feed} = useLoaderData()

	return (
		<section className={`wrapper ${classes.section}`}>
			<h2>Aktualności</h2>
			<Suspense fallback={<Loader />}>
				<ul className={classes.cards}>
					<Await resolve={feed} errorElement={<li>Could not fetch feeds.</li>}>
						{resolvedFeed =>
							resolvedFeed.data.map(article => {
								return (
									<ArticleCard
										key={article.documentId}
										readTimeInMinutes={calculateReadTime(article.blocks)}
										cover={`${IMAGES_URL}${article.cover.url}`}
										title={article.title}
										description={article.description}
										articlePath={`/aktualnosci/${article.slug}`}></ArticleCard>
								)
							})
						}
					</Await>
				</ul>
			</Suspense>
		</section>
	)
}
