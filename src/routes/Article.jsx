import qs from 'qs'
import {loadFeed, loadCases} from '@/util/http.js'
import Article from '../components/blog/Article/Article'
export default function ArticlePage() {
	return (
		<>
			<Article />
		</>
	)
}

export async function loader({params}) {
	const {blogType, slug} = params

	const query = qs.stringify(
		{
			filters: {
				slug: {
					$eq: slug,
				},
			},
			populate: {
				blocks: {
					populate: '*',
				},
				cover: {
					populate: '*',
				},
			},
		},
		{
			encodeValuesOnly: true,
		}
	)

	try {
		const queryData = await (blogType === 'aktualnosci' ? loadFeed(query) : loadCases(query))
		return queryData?.data[0] || null
	} catch {
		throw new Error(`Nie udało się załadować artykułu.`)
	}
}
