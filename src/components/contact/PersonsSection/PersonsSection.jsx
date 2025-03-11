import PersonCard from './PersonCard/PersonCard'
import classes from './PersonsSection.module.css'

import anetaGrabowska from '@/assets/persons/aneta_grabowska_1.jpg'
import monikaKonopkoKarazniewicz from '@/assets/persons/monika_konopko_karaźniewicz_1.jpg'
import juliaRomanska from '@/assets/persons/julia_romańska_1.jpg'
import marikaKrajewska from '@/assets/persons/marika_krajewska_1.jpg'

const persons = [
	{
		id: '1',
		name: 'Aneta Garbowska',
		phone: '+48 453 487 072',
		image: anetaGrabowska,
		email: 'aneta.garbowska@solumveritas.org',
		operationalArea: ['Małopolska', 'Śląsk'],
	},
	{
		id: '2',
		name: 'Julia Romańska',
		phone: '+48 453 487 072',
		image: juliaRomanska,
		email: 'julia.romanska@solumveritas.org',
		operationalArea: ['Wielkopolska', 'Lubusz', 'Dolny Śląsk'],
	},
	{
		id: '3',
		name: 'Marika Krajewska',
		phone: '+48 453 487 072',
		image: marikaKrajewska,
		email: 'marika.krajewska@solumveritas.org',
		operationalArea: ['Kujawy', 'Pomorze'],
	},
	{
		id: '4',
		name: 'Monika Konopko-Karaźniewicz',
		phone: '+48 453 487 072',
		image: monikaKonopkoKarazniewicz,
		email: 'monika.konopko@solumveritas.org',
		operationalArea: ['Mazowsze'],
	},
]

export default function PersonsSection() {
	return (
		<section className='wrapper'>
			<ul className={classes.persons}>
				{persons.map(person => (
					<PersonCard key={person.id} {...person} />
				))}
			</ul>
		</section>
	)
}
