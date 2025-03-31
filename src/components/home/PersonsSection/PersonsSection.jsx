import {Suspense, useRef} from 'react'
import {Await, useLoaderData} from 'react-router-dom'
import {motion} from 'motion/react'
import {fadeUpStaggerParentProps, fadeUpStaggerChild} from '@/constants/motionVariants'
import {IMAGES_URL} from '@/util/http'
import Slider from 'react-slick'
import Loader from '@/components/common/Loader/Loader'
import {CircleChevronUp} from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from './PersonsSection.module.css'

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
	const {persons} = useLoaderData()

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
			<Suspense
				fallback={
					<div className={classes.loader}>
						<div>
							<h2>Nasz zespół.</h2>
							<Loader />
						</div>
					</div>
				}>
				<Await
					resolve={persons}
					errorElement={
						<div className={classes.error}>
							<div>
								<h2>Nasz zespół.</h2>
								<p>
									Nie udało się wczytać osób. <br /> Spróbuj ponownie później.
								</p>
							</div>
						</div>
					}>
					{resolvedPersons => (
						<motion.div className={classes.carousel} {...fadeUpStaggerParentProps}>
							<motion.div className={classes.carousel__header} variants={fadeUpStaggerChild}>
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
							</motion.div>
							<Slider
								ref={slider => {
									sliderRef = slider
								}}
								className={classes.carousel__items}
								{...settings}>
								{resolvedPersons.data.map(person => (
									<motion.div
										className={classes.carousel__item}
										key={`${person.documentId}`}
										variants={fadeUpStaggerChild}>
										<figure>
											<img src={`${IMAGES_URL}${person.image.url}`} alt={person.name} />
											<figcaption>{person.name}</figcaption>
										</figure>
										<p>{person.description}</p>
									</motion.div>
								))}
							</Slider>
						</motion.div>
					)}
				</Await>
			</Suspense>
		</section>
	)
}
