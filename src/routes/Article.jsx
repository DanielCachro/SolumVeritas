import qs from 'qs'
import {useLoaderData} from 'react-router-dom'
import {loadFeed, loadCases} from '@/util/http.js'
import Article from '../components/blog/Article/Article'
export default function ArticlePage() {
	const {title, description} = useLoaderData()

	return (
		<>
			<title>{`Solum Veritas | ${title}`}</title>
			<meta name='description' content={description} />
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

		if (!queryData?.data[0]) {
			throw new Response('Not Found', {status: 404})
		}

		return queryData?.data[0]
	} catch {
		throw new Error(`Nie udało się znaleźć artykułu.`)
	}
}
