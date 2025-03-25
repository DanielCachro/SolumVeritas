import {useParams} from 'react-router-dom'
import LatestPostSection from '../components/blog/LatestPostSection/LatestPostSection'
import PostsSection from '../components/blog/PostsSection/PostsSection'

export default function ArticlesPage() {
	const {blogType} = useParams()
	return (
		<>
			<title>{`Solum Veritas | ${blogType === 'aktualnosci' ? 'Aktualności' : 'Nasze Sprawy'}`}</title>
			<meta
				name='description'
				content={
					blogType === 'aktualnosci'
						? 'Bądź na bieżąco z działaniami Solum Veritas. Przeczytaj najnowsze aktualności o naszych akcjach poszukiwawczych i wsparciu rodzin zaginionych osób.'
						: 'Dokumentacja zakończonych sukcesem poszukiwań osób zaginionych. Przeczytaj historie o rozwiązanych sprawach, które zmieniły życie rodzin.'
				}
			/>
			<LatestPostSection />
			<PostsSection />
		</>
	)
}
