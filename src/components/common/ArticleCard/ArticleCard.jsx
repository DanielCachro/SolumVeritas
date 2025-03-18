import {useNavigate} from 'react-router-dom'
import getMinuteString from '@/util/getMinuteString'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import classes from './ArticleCard.module.css'

export default function ArticleCard({CardContainer = 'li', readTimeInMinutes, cover, title, description, articlePath}) {
	const navigate = useNavigate()

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
