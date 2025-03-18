import {QueryClient} from '@tanstack/react-query'

const API_URL = 'http://localhost:1337/api'
export const IMAGES_URL = 'http://localhost:1337'

export const queryClient = new QueryClient()

async function fetchData(endpoint, query) {
	const response = await fetch(`${API_URL}/${endpoint}?${query}`)

	if (!response.ok) {
		throw new Error(`Could not fetch ${endpoint}.`)
	}

	const resData = await response.json()
	return resData
}

export async function loadFeed(query) {
	return await fetchData('feeds', query)
}

export async function loadCases(query) {
	return await fetchData('cases', query)
}

export async function loadPersons(query) {
	return await fetchData('members', query)
}
