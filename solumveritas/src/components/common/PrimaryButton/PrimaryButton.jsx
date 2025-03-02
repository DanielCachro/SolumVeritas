import classes from './PrimaryButton.module.css'

export default function PrimaryButton({title, hasShadow = true, className = '', ...props}) {
	return (
		<button className={`${classes.button} ${hasShadow ? classes.shadow : ''} ${className}`.trim()} {...props}>
			{title}
		</button>
	)
}
