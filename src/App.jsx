import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from '@/util/http.js'

import './App.css'
import RootLayout from './routes/Root'
import Error from './routes/Error'
import HomePage from './routes/Home'
import ContactPage from './routes/Contact'
import ArticlesPage from './routes/Articles'
import ArticlePage, {loader as articleLoader} from './routes/Article'
import PrivacyPolicyPage from './routes/PrivacyPolicy'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loader: () => import('./routes/Home').then(module => module.loader()),
			},
			{
				path: 'kontakt',
				element: <ContactPage />,
				loader: () => import('./routes/Contact').then(module => module.loader()),
			},
			{
				path: ':blogType',
				element: <ArticlesPage />,
				loader: async ({params}) => {
					const allowedBlogTypes = ['aktualnosci', 'nasze-sprawy']
					if (!allowedBlogTypes.includes(params.blogType)) {
						throw new Response('Not Found', {status: 404})
					}
					return null
				},
			},
			{
				path: ':blogType/:slug',
				element: <ArticlePage />,
				loader: articleLoader,
			},
			{
				path: 'polityka-prywatnosci',
				element: <PrivacyPolicyPage />,
			},
		],
		errorElement: <Error />,
	},
])

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
