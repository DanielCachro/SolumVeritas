import {Outlet} from 'react-router-dom'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'

export default function RootLayout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
