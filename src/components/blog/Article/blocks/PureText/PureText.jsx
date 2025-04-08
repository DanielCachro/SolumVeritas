import ReactMarkdown from 'react-markdown'
import classes from './PureText.module.css'

export default function PureText({text, className = '', ...props}) {
	return (
		<div className={`${classes.textBlock} ${className}`.trim()} {...props}>
			<ReactMarkdown>{text}</ReactMarkdown>
		</div>
	)
}
