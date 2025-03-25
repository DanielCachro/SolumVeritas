import qs from 'qs'
import {loadPersons} from '@/util/http'
import EntrySection from '../components/contact/EntrySection/EntrySection'
import PersonsSection from '../components/contact/PersonsSection/PersonsSection'

export default function ContactPage() {
	return (
		<>
			<title>Solum Veritas | Kontakt</title>
			<meta
				name='description'
				content='Masz jakieś pytania lub potrzebujesz pomocy? Skontaktuj się z nami – działamy na terenie całej Polski, oferując wsparcie w poszukiwaniach zaginionych.'
			/>
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
