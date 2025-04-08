import classes from './TextBlock.module.css'
import ReactMarkdown from 'react-markdown'

export default function TextBlock({title, text, className = '', ...props}) {
	return (
		<div className={`${classes.textBlock} ${className}`.trim()} {...props}>
			<h3 className={classes.textBlock__title}>{title}</h3>
			<ReactMarkdown>{text}</ReactMarkdown>
		</div>
	)
}
