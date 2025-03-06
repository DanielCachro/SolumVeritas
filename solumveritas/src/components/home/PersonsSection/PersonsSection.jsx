import {useRef} from 'react'
import {CircleChevronUp} from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import classes from './PersonsSection.module.css'

import anetaGrabowska from '@/assets/persons/aneta_grabowska_1.jpg'
import monikaKonopkoKarazniewicz from '@/assets/persons/monika_konopko_karaźniewicz_1.jpg'

// TODO: Get Persons from Strapi
const persons = [
	{
		id: '1',
		image: anetaGrabowska,
		name: 'Aneta Grabowska',
		description:
			'Dobra dusza z sercem na dłoni. Mimo aktywności zawodowej nigdy nie odmawia pomocy rodzinom osób zaginionych. Od 6 lat otacza ich szczególnym wsparciem merytorycznym oraz niebywałą troską. Prywatnie fanka 4 kółek, więc chętnie wyrusza w teren na poszukiwania jak i w celu nawiązania osobistego kontaktu z potrzebującymi. Mieszka u 3 kotów 😉 - gdzie w wolnych chwilach zaczytuje się w książkach o zabarwieniu kryminalnym.',
	},
	{
		id: '2',
		image: monikaKonopkoKarazniewicz,
		name: 'Monika Konopko-Karaźniewicz',
		description:
			'Z zawodu mediator, żołnierz, kucharz, urzędnik. Z powołania poszukiwacz, opiekun osób starszych. Miłośniczka górskich wędrówek, oraz grotołaźnictwa. Zawsze znajdzie czas dla drugiego człowieka, jak również na rozwijanie swojej pasji, którą jest eksplorowanie opuszczonych budynków - urbex.',
	},
	{
		id: '3',
		image: monikaKonopkoKarazniewicz,
		name: 'Monika Konopko-Karaźniewicz',
		description:
			'Z zawodu mediator, żołnierz, kucharz, urzędnik. Z powołania poszukiwacz, opiekun osób starszych. Miłośniczka górskich wędrówek, oraz grotołaźnictwa. Zawsze znajdzie czas dla drugiego człowieka, jak również na rozwijanie swojej pasji, którą jest eksplorowanie opuszczonych budynków - urbex.',
	},
	{
		id: '4',
		image: anetaGrabowska,
		name: 'Aneta Grabowska',
		description:
			'Dobra dusza z sercem na dłoni. Mimo aktywności zawodowej nigdy nie odmawia pomocy rodzinom osób zaginionych. Od 6 lat otacza ich szczególnym wsparciem merytorycznym oraz niebywałą troską. Prywatnie fanka 4 kółek, więc chętnie wyrusza w teren na poszukiwania jak i w celu nawiązania osobistego kontaktu z potrzebującymi. Mieszka u 3 kotów 😉 - gdzie w wolnych chwilach zaczytuje się w książkach o zabarwieniu kryminalnym.',
	},
]

function CarouselButton({disabled = false, ...props}) {
	return (
		<button
			className={`${classes.carousel__button} ${disabled ? classes.carousel__button_disabled : ''}`.trim()}
			{...props}>
			<CircleChevronUp strokeWidth={1} />
		</button>
	)
}

export default function PersonsSection() {
	let sliderRef = useRef(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 2,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					fade: false,
					rows: 1,
				},
			},
		],
	}

	return (
		<section>
			<div className={classes.carousel}>
				<div className={classes.carousel__header}>
					<h2>Tworzą nas ludzie</h2>
					<div className={classes.carousel__buttons}>
						<CarouselButton
							onClick={() => {
								sliderRef.slickPrev()
							}}
						/>
						<CarouselButton
							onClick={() => {
								sliderRef.slickNext()
							}}
						/>
					</div>
				</div>
				<Slider
					ref={slider => {
						sliderRef = slider
					}}
					className={classes.carousel__items}
					{...settings}>
					{persons.map(person => (
						<li className={classes.carousel__item} key={`${person.id}`}>
							<figure>
								<img src={person.image}></img>
								<figcaption>{person.name}</figcaption>
							</figure>
							<p>{person.description}</p>
						</li>
					))}
				</Slider>
			</div>
		</section>
	)
}
