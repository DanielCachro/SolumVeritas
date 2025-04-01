import {useLoaderData} from 'react-router-dom'
import {IMAGES_URL} from '@/util/http'
import calculateReadTime from '@/util/calculateReadTime.js'
import getMinuteString from '@/util/getMinuteString.js'
import classes from './Article.module.css'

// Article Blocks
import Image from './blocks/Image/Image'
import PureText from './blocks/PureText/PureText'
import TextBlock from './blocks/TextBlock/TextBlock'

import {motion} from 'motion/react'
import {fadeUp} from '@/constants/motionVariants'

export default function Article() {
	const article = useLoaderData()

	return (
		<motion.section className={classes.section} variants={fadeUp} initial='hidden' animate='visible'>
			<div className={classes.header}>
				<p>{`Przeczytasz w ${getMinuteString(calculateReadTime(article.blocks))}`}</p>
				<h1>{article.title}</h1>
				<img src={`${IMAGES_URL}${article.cover.url}`} />
			</div>
			<div className={classes.blocks}>
				{article.blocks.map(block => {
					switch (block.__component) {
						case 'blog-component.image':
							return (
								<Image
									key={block.id}
									src={`${IMAGES_URL}${block.image.url}`}
									alt={
										block.image.alternativeText ||
										`Zdjęcie w środku artykułu o nazwie ${block.image.name.split('.')[0]}`
									}
								/>
							)
						case 'blog-component.pure-text':
							return <PureText key={block.id} text={block.text} />
						case 'blog-component.text-block':
							return <TextBlock key={block.id} title={block.title} text={block.text} />
						default:
							return null
					}
				})}
			</div>
		</motion.section>
	)
}
