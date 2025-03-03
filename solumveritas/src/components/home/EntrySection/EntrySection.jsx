import PrimaryButton from '../../common/PrimaryButton/PrimaryButton'
import classes from './EntrySection.module.css'

import entrySectionPictures from '@/assets/EntrySectionPictures.png'

export default function EntrySection() {
	return (
		<section className={`wrapper ${classes.section}`}>
			<div className={classes.aboutBox}>
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
							window.scrollTo({top: elementPosition - 100})
						}
					}}
					title='O Nas'
				/>
			</div>
			<img
				className={classes.image}
				src={entrySectionPictures}
				alt='Kolaż zdjęć zagubionych osób i osób w trakcie poszukiwań.'
			/>
			<div className={classes.contactBox}>
				<div>
					<h2>Potrzebujesz pomocy?</h2>
					<p>Skontaktuj się z nami.</p>
				</div>
				<div>
					<p>+48 453 487 068</p>
					<p>biuro@solumveritas.org</p>
				</div>
			</div>
		</section>
	)
}
