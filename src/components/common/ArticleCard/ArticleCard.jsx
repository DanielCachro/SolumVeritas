import {useNavigate} from 'react-router-dom'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import classes from './ArticleCard.module.css'

export default function ArticleCard({CardContainer = 'li', readTimeInMinutes, cover, title, description, articlePath}) {
	const navigate = useNavigate()

	function getMinuteString(number) {
		const lastDigit = number % 10
		const lastTwoDigits = number % 100

		if (number === 1) {
			return `${number} minutę`
		} else if (lastDigit === 1 && lastTwoDigits !== 11) {
			return `${number} minut`
		} else if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
			return `${number} minuty`
		} else {
			return `${number} minut`
		}
	}

	return (
		<CardContainer className={classes.card}>
			<img src={cover} alt={`Okładka artykułu ${title}`}></img>
			<div className={classes.card__content}>
				<div className={classes.card__header}>
					<p>{`Przeczytasz w ${getMinuteString(readTimeInMinutes)}`}</p>
					<h3>{title}</h3>
				</div>
				<p>{description}</p>
				<SecondaryButton
					title='Przeczytaj'
					onClick={() => {
						navigate(articlePath)
					}}
				/>
			</div>
		</CardContainer>
	)
}
