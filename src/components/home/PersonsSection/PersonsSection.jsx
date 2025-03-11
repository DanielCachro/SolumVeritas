import {useRef} from 'react'
import {CircleChevronUp} from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import classes from './PersonsSection.module.css'

import anetaGrabowska from '@/assets/persons/aneta_grabowska_1.jpg'
import monikaKonopkoKarazniewicz from '@/assets/persons/monika_konopko_karaźniewicz_1.jpg'
import juliaRomanska from '@/assets/persons/julia_romańska_1.jpg'
import marikaKrajewska from '@/assets/persons/marika_krajewska_1.jpg'

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
		image: marikaKrajewska,
		name: 'Marika Krajewska',
		description:
			'Na rzecz osób zaginionych działa od 7 lat. Zamiłowanie do niesienia pomocy ludziom jak i braciom mniejszym wyniosła z rodzinnego domu. Uczestniczyła w akcjach poszukiwawczych w Polsce oraz zagranicą. Posiada łatwość w nawiązywaniu kontaktów z nowo poznanymi osobami. Jej motto życiowe: volere è potere- chcieć to moc. Prywatnie pasjonatka podróży i pływania, nie pogardzi również wybornym podcastem kryminalnym.',
	},
	{
		id: '4',
		image: juliaRomanska,
		name: 'Julia Romańska',
		description:
			'Swoje zainteresowania tematyką kryminalną, które ma od lat, postanowiła przełożyć na pomoc rodzinom osób dotkniętych dramatami utraty bliskich. Od dawna siedzi na grupach w sprawach zaginięć i zabójstw, w tym w jednych z głośniejszych spraw. Świetnie analizuje, oraz łączy fakty, miała kontakt z rodzinami osób zaginionych, a także z profesjonalistami z branż zajmujących się tematyką kryminalną i śledczą. Posiada lekkie pióro. Zawsze znajdzie czas by wysłuchać i pomóc w potrzebie.',
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
		accessibility: false,
		arrows: false,
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
