import classes from './ImageContain.module.css'

export default function ImageContain({className = '', ...props}) {
	return <img className={`${classes.image} ${className}`.trim()} {...props} />
}
