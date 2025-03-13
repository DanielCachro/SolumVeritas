const API_URL = 'http://localhost:1337/api'
export const IMAGES_URL = 'http://localhost:1337'

export async function loadFeed(query) {
	const response = await fetch(`${API_URL}/feeds?${query}`)

	if (!response.ok) {
		return {isError: true, message: 'Could not fetch feeds.'}
	}

	const resData = await response.json()
	return resData
}
