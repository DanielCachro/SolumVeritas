import qs from 'qs'
import {loadFeed, loadCases, loadPersons} from '@/util/http'
import EntrySection from '../components/home/EntrySection/EntrySection'
import AboutSection from '../components/home/AboutSection/AboutSection'
import PersonsSection from '../components/home/PersonsSection/PersonsSection'
import CasesSection from '../components/home/CasesSection/CasesSection'
import FeedSection from '../components/home/FeedSection/FeedSection'

export default function HomePage() {
	return (
		<>
			<meta
				name='description'
				content='Wspieramy osoby dotknięte zaginięciami. Nasz zespół specjalistów działa pro bono, organizując poszukiwania i niosąc pomoc rodzinom zaginionych.'
			/>
			<EntrySection />
			<AboutSection />
			<PersonsSection />
			<CasesSection />
			<FeedSection />
		</>
	)
}

export async function loader() {
	const queries = {
		feed: qs.stringify(
			{
				pagination: {
					start: 0,
					limit: 3,
				},
				sort: ['createdAt:desc'],
				populate: ['blocks', 'cover'],
			},
			{
				encodeValuesOnly: true,
			}
		),
		cases: qs.stringify(
			{
				pagination: {
					start: 0,
					limit: 2,
				},
				sort: ['createdAt:desc'],
				populate: ['blocks', 'cover'],
			},
			{
				encodeValuesOnly: true,
			}
		),
		persons: qs.stringify(
			{
				populate: ['image'],
			},
			{
				encodeValuesOnly: true,
			}
		),
	}

	try {
		const feed = loadFeed(queries.feed)
		const cases = loadCases(queries.cases)
		const persons = loadPersons(queries.persons)
		return {feed, cases, persons}
	} catch (error) {
		return {error: error.message}
	}
}
