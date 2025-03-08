import classes from './CasesSectionArticle.module.css'
import SecondaryButton from '@/components/common/SecondaryButton/SecondaryButton'

export default function CasesSectionArticle({title, text, cover}) {
	return (
		<article className={classes.article}>
			<img src={cover} alt={`Okładka artykułu: ${title}`}></img>
			<div className={classes.article__content}>
				<h3>{title}</h3>
				<p>{text}</p>
				<SecondaryButton title='Przeczytaj' whiteVariant={true} />
			</div>
		</article>
	)
}
