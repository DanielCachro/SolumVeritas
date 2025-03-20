import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from '@/util/http.js'

import './App.css'
import RootLayout from './routes/Root'
import Error from './routes/Error'
import HomePage, {loader as HomePageLoader} from './routes/Home'
import ContactPage, {loader as ContactPageLoader} from './routes/Contact'
import ArticlesPage from './routes/Articles'
import ArticlePage, {loader as ArticleLoader} from './routes/Article'

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
				loader: ArticleLoader,
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
