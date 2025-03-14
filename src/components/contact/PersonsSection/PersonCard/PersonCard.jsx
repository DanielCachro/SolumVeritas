import {useRef, useState} from 'react'
import {Copy, MailCheck, MailWarning} from 'lucide-react'
import classes from './PersonCard.module.css'

export default function PersonCard({name, phone, image, email, operationalArea}) {
	const [emailCopied, setEmailCopied] = useState(false)
	const [emailFailedToCopy, setEmailFailedToCopy] = useState(false)

	const timeoutRef = useRef()

	function copyEmailToClipboard() {
		clearTimeout(timeoutRef.current)

		if (navigator.clipboard) {
			navigator.clipboard.writeText(email).then(() => {
				setEmailCopied(true)
				timeoutRef.current = setTimeout(() => {
					setEmailCopied(false)
				}, 2000)
			})
		} else {
			setEmailFailedToCopy(true)
			timeoutRef.current = setTimeout(() => {
				setEmailFailedToCopy(false)
			}, 8000)
		}
	}

	return (
		<li className={classes.card}>
			<figure>
				<img src={image} alt={name} />
				<figcaption>{name}</figcaption>
			</figure>
			<p>{phone}</p>
			<div className={classes.card__operationalArea}>
				<p>Obszar działań:</p>
				<p>{operationalArea.map(voivodeship => voivodeship.trim()).join(', ')}</p>
			</div>
			<div className={classes.card__emailBox}>
				<a href={`mailto:${email}`}>{`${email.split('@')[0]}...`}</a>
				<button onClick={copyEmailToClipboard} className={classes.card__copy}>
					{!emailCopied && !emailFailedToCopy && <Copy size={16} />}
					{emailCopied && (
						<>
							<MailCheck size={16} />
							<p className={classes.card__emailCopied}>Skopiowano</p>
						</>
					)}
					{emailFailedToCopy && (
						<>
							<MailWarning size={16} />
							<p className={`${classes.card__emailCopied} ${classes.card__emailCopied_error}`.trim()}>
								Nie udało się skopiować, pełny email to: {email}
							</p>
						</>
					)}
				</button>
			</div>
		</li>
	)
}
