import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import RootLayout from './routes/Root'
import Error from './routes/Error'
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
		errorElement: <Error />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
