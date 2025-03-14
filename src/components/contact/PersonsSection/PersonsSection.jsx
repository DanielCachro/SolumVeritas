import {useLoaderData} from 'react-router-dom'
import {IMAGES_URL} from '@/util/http'
import PersonCard from './PersonCard/PersonCard'
import classes from './PersonsSection.module.css'

export default function PersonsSection() {
	const persons = useLoaderData()

	return (
		<section className='wrapper'>
			<ul className={classes.persons}>
				{persons.data.map(person => (
					<PersonCard key={person.id} {...person} image={`${IMAGES_URL}${person.image.url}`} />
				))}
			</ul>
		</section>
	)
}
