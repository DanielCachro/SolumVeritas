import {useRouteError, useNavigate} from 'react-router-dom'
import SecondaryButton from '@/components/common/SecondaryButton/SecondaryButton'
import sadCat from '@/assets/sad-cry.gif'
import classes from './Error.module.css'

export default function Error() {
	const error = useRouteError()
	const navigate = useNavigate()
	return (
		<main>
			<section className={classes.section}>
				<h1>Wystąpił błąd!</h1>
				<p>{`Błąd: ${error.status === 404 ? 'Nie znaleziono strony.' : error.message}`}</p>
				<img src={sadCat} alt='Płaczący kotek' />
				<SecondaryButton
					title='Strona główna'
					whiteVariant
					onClick={() => {
						navigate('/')
					}}
				/>
			</section>
		</main>
	)
}
