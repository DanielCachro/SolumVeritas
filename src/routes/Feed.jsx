// import {useState} from 'react'
// import {keepPreviousData, useQuery} from '@tanstack/react-query'
// import qs from 'qs'
// import {loadFeed} from '@/util/http.js'
import LatestPostSection from '../components/blog/LatestPostSection/LatestPostSection'

export default function FeedPage() {
	// const [page, setPage] = useState(1)

	// const query = qs.stringify(
	// 	{
	// 		populate: ['blocks', 'cover'],
	// 		sort: ['publishedAt:desc'],
	// 		pagination: {
	// 			page: page,
	// 			pageSize: 6,
	// 		},
	// 	},
	// 	{
	// 		encodeValuesOnly: true,
	// 	}
	// )

	// const {data} = useQuery({
	// 	queryKey: ['feed', page],
	// 	queryFn: () => loadFeed(query.current),
	// 	placeholderData: keepPreviousData,
	// 	staleTime: 5000,
	// })

	// console.log(data)

	return (
		<>
			<LatestPostSection />
		</>
	)
}
