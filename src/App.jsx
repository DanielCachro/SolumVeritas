import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import RootLayout from './routes/Root'
import HomePage, {loader as HomePageLoader} from './routes/Home'
import ContactPage from './routes/Contact'

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
				path: 'contact',
				element: <ContactPage />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
