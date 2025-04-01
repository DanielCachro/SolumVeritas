import {useLoaderData} from 'react-router-dom'
import {IMAGES_URL} from '@/util/http'
import PersonCard from './PersonCard/PersonCard'
import classes from './PersonsSection.module.css'

import {motion} from 'framer-motion'
import {getFadeUpProps} from '@/constants/motionVariants'

export default function PersonsSection() {
	const persons = useLoaderData()

	return (
		<section className='wrapper'>
			<ul className={classes.persons}>
				{persons.data.map(person => (
					<PersonCard
						CardContainer={motion.li}
						key={person.id}
						{...person}
						image={`${IMAGES_URL}${person.image.url}`}
						{...getFadeUpProps(true)}
					/>
				))}
			</ul>
		</section>
	)
}
