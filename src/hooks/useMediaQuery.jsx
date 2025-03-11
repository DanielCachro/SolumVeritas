import {useState, useEffect} from 'react'

export default function useMediaQuery(mediaQuery) {
	mediaQuery = window.matchMedia(`(${mediaQuery})`)
	const [matches, setMatches] = useState(mediaQuery.matches)

	useEffect(() => {
		const handleChange = event => {
			setMatches(event.matches)
		}

		handleChange(mediaQuery)
		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [])

	return matches
}
