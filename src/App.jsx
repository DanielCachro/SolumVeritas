import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import RootLayout from './routes/Root'
import HomePage, {loader as HomePageLoader} from './routes/Home'
import ContactPage, {loader as ContactPageLoader} from './routes/Contact'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loader: HomePageLoader,
			},
			{
				path: 'kontakt',
				element: <ContactPage />,
				loader: ContactPageLoader,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
