import classes from './EntrySection.module.css'

import {Mail} from 'lucide-react'
import blueDressedWoman from '@/assets/BlueDressedWoman.jpg'

export default function EntrySection() {
	return (
		<section className='wrapper'>
			<div className={classes.content}>
				<h1>Kontakt</h1>
				<p>Masz jakieś pytania lub potrzebujesz pomocy?</p>
				<p>Skontaktuj się z nami.</p>
				<div>
					<Mail strokeWidth={1.5} />
					<p>
						<a href='mailto:biuro@solumveritas.org'>biuro@solumveritas.org</a>
					</p>
				</div>
			</div>
			<img src={blueDressedWoman} alt='Uśmiechnięta kobieta ubrana na niebiesko' />
		</section>
	)
}
