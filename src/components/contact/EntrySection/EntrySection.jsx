import {motion} from 'framer-motion'
import {Mail} from 'lucide-react'
import useMediaQuery from '@/hooks/useMediaQuery'
import {getFadeUpProps} from '@/constants/motionVariants'
import blueDressedWoman from '@/assets/BlueDressedWoman.jpg'
import classes from './EntrySection.module.css'

export default function EntrySection() {
	const isMobile = useMediaQuery('max-width: 790px')

	return (
		<motion.section className={`wrapper ${classes.wrapper}`} {...getFadeUpProps()}>
			<div className={classes.content}>
				<div className={classes.header}>
					<h1>Kontakt</h1>
					<div className={classes.texts}>
						<p>Masz jakieś pytania lub potrzebujesz pomocy?</p>
						<p>Skontaktuj się z nami!</p>
					</div>
				</div>
				<div className={classes.emailBox}>
					<Mail strokeWidth={1.5} />
					<a href='mailto:biuro@solumveritas.org'>biuro@solumveritas.org</a>
				</div>
			</div>
			{!isMobile && (
				<motion.img src={blueDressedWoman} alt='Uśmiechnięta kobieta ubrana na niebiesko' {...getFadeUpProps()} />
			)}
		</motion.section>
	)
}
