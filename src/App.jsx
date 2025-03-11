import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import RootLayout from './routes/Root'
import HomePage from './routes/Home'
import ContactPage from './routes/Contact'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
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
