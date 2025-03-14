import qs from 'qs'
import {loadPersons} from '@/util/http'
import EntrySection from '../components/contact/EntrySection/EntrySection'
import PersonsSection from '../components/contact/PersonsSection/PersonsSection'

export default function Contact() {
	return (
		<>
			<EntrySection />
			<PersonsSection />
		</>
	)
}

export async function loader() {
	const query = qs.stringify(
		{
			populate: ['image'],
		},
		{
			encodeValuesOnly: true,
		}
	)

	const persons = await loadPersons(query)

	return persons
}
