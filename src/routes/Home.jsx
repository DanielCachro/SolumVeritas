import qs from 'qs'
import EntrySection from '../components/home/EntrySection/EntrySection'
import AboutSection from '../components/home/AboutSection/AboutSection'
import PersonsSection from '../components/home/PersonsSection/PersonsSection'
import CasesSection from '../components/home/CasesSection/CasesSection'
import FeedSection from '../components/home/FeedSection/FeedSection'

import {loadFeed} from '@/util/http'
import {loadCases} from '../util/http'

export default function HomePage() {
	return (
		<>
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
				sort: ['publishedAt:desc'],
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
				sort: ['publishedAt:desc'],
				populate: ['blocks', 'cover'],
			},
			{
				encodeValuesOnly: true,
			}
		),
	}

	try {
		const feed = loadFeed(queries.feed)
		const cases = loadCases(queries.cases)
		return {feed, cases}
	} catch (error) {
		return {error: error.message}
	}
}
