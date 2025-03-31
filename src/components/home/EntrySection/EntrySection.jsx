import {motion} from 'motion/react'
import {fadeUpStaggerParentProps, fadeUpStaggerChild} from '@/constants/motionVariants'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import entrySectionPictures from '@/assets/EntrySectionPictures.png'
import classes from './EntrySection.module.css'


export default function EntrySection() {
	return (
		<motion.section className={`wrapper ${classes.section}`} {...fadeUpStaggerParentProps}>
			<motion.div className={classes.aboutBox} variants={fadeUpStaggerChild}>
				<h1>Solum Veritas</h1>
				<p>
					Stowarzyszenie SOLUM VERITAS wspiera osoby dotknięte zaginięciami. Nasz zespół specjalistów z różnych dziedzin
					życia działa pro bono, niosąc pomoc i wsparcie. Posiadamy doświadczenie w organizowaniu poszukiwań, także w
					najtrudniejszych warunkach.
				</p>
				<PrimaryButton
					onClick={() => {
						const element = document.getElementById('about')
						if (element) {
							const elementPosition = element.getBoundingClientRect().top + window.scrollY
							window.scrollTo({top: elementPosition - 100, behavior: 'smooth'})
						}
					}}
					title='O Nas'
				/>
			</motion.div>
			<motion.img
				className={classes.image}
				src={entrySectionPictures}
				alt='Kolaż zdjęć zagubionych osób i osób w trakcie poszukiwań.'
				variants={fadeUpStaggerChild}
				whileHover={{scale: 1.05}}
			/>
			<motion.div className={classes.contactBox} variants={fadeUpStaggerChild}>
				<div>
					<h2>Potrzebujesz pomocy?</h2>
					<p>Skontaktuj się z nami.</p>
				</div>
				<div>
					<p>+48 453 487 068</p>
					<p>biuro@solumveritas.org</p>
				</div>
			</motion.div>
		</motion.section>
	)
}
