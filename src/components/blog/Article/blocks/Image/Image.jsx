import classes from './Image.module.css'

export default function Image({className = '', ...props}) {
	return <img className={`${classes.image} ${className}`.trim()} {...props} />
}
