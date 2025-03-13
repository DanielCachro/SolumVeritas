import {Suspense} from 'react'
import {useLoaderData, Await} from 'react-router-dom'
import {IMAGES_URL} from '@/util/http'
import calculateReadTime from '@/util/calculateReadTime.js'
import ArticleCard from '@/components/common/ArticleCard/ArticleCard'
import classes from './FeedSection.module.css'

export default function FeedSection() {
	const {feed} = useLoaderData()

	return (
		<section className={`wrapper ${classes.section}`}>
			<h2>Aktualności</h2>
			<ul className={classes.cards}>
				<Suspense fallback={<p>Loading...</p>}>
					<Await resolve={feed}>
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
				</Suspense>
			</ul>
		</section>
	)
}
