import classes from './SecondaryButton.module.css'
import {MoveRight} from 'lucide-react'

export default function SecondaryButton({title, whiteVariant, className = '', ...props}) {
	return (
		<button
			className={`
				${classes.secondaryButton} 
				${whiteVariant ? classes.secondaryButton_whiteVariant : ''} 
				${className}
			`.trim()}
			{...props}>
			{title} <MoveRight strokeWidth={1.5} />
		</button>
	)
}
