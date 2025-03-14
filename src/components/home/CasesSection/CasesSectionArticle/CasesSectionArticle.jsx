import {useNavigate} from 'react-router-dom'
import SecondaryButton from '@/components/common/SecondaryButton/SecondaryButton'
import classes from './CasesSectionArticle.module.css'

export default function CasesSectionArticle({cover, title, description, articlePath}) {
	const navigate = useNavigate()
	return (
		<li className={classes.article}>
			<img src={cover} alt={`Okładka artykułu: ${title}`}></img>
			<div className={classes.article__content}>
				<h3>{title}</h3>
				<p>{description}</p>
				<SecondaryButton
					title='Przeczytaj'
					whiteVariant={true}
					onClick={() => {
						navigate(articlePath)
					}}
				/>
			</div>
		</li>
	)
}
