import classes from './TextBlock.module.css'

export default function TextBlock({title, text, className = '', ...props}) {
	return (
		<div className={`${classes.textBlock} ${className}`.trim()} {...props}>
			<h3 className={classes.textBlock__title}>{title}</h3>
			<p>{text}</p>
		</div>
	)
}
