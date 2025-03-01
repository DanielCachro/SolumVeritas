import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import HomePage from './routes/Home'
import RootLayout from './routes/Root'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
