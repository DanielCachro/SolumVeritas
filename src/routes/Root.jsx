import {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'

const ScrollToTop = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return null
}

export default function RootLayout() {
	return (
		<>
			<ScrollToTop />
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
