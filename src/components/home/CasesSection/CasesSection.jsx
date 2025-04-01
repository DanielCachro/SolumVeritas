import {Suspense} from 'react'
import {Await, useLoaderData, useNavigate} from 'react-router-dom'
import {motion} from 'motion/react'

import useMediaQuery from '@/hooks/useMediaQuery'
import {IMAGES_URL} from '@/util/http'

import {getFadeUpProps, getFadeUpStaggerParentProps, fadeUpStaggerChild} from '@/constants/motionVariants'

import CasesSectionArticle from './CasesSectionArticle/CasesSectionArticle'
import SecondaryButton from '@/components/common/SecondaryButton/SecondaryButton'

import anetaGrabowska from '@/assets/persons/aneta_grabowska_1.jpg'
import monikaKonopkoKarazniewicz from '@/assets/persons/monika_konopko_karaźniewicz_1.jpg'
import juliaRomanska from '@/assets/persons/julia_romańska_1.jpg'
import classes from './CasesSection.module.css'

export default function CasesSection() {
	const navigate = useNavigate()
	const {cases} = useLoaderData()
	const isDesktop = useMediaQuery('min-width: 992px')

	return (
		<section className={classes.section}>
			<div className={`wrapper ${classes.wrapper}`}>
				<motion.div className={classes.content} {...getFadeUpProps(true)}>
					<h2>Pomagamy wrócić do domu.</h2>
					<div className={classes.persons}>
						<img src={anetaGrabowska} alt='Janina K., odnaleziona - 5 marca 2024' />
						<img src={monikaKonopkoKarazniewicz} alt='Julia N., odnaleziona - 27 kwietnia 2024' />
						<img src={juliaRomanska} alt='Maria  W., odnaleziona - 13 stycznia 2025' />
					</div>
					<p>
						Pomogliśmy wielu osobom, wspierając ich w najtrudniejszych momentach. Wspólnie z rodzinami, służbami
						ratunkowymi i organizacjami prowadzimy skuteczne poszukiwania zaginionych. Dokumentujemy każdą sprawę,
						dzieląc się historiami i doświadczeniami, które mogą pomóc innym. Przeczytaj je na naszej stronie i dowiedz
						się, jak działamy, by przywracać nadzieję i łączyć bliskich.
					</p>
					<SecondaryButton
						className={classes.button}
						title='Nasze Sprawy'
						whiteVariant={true}
						onClick={() => navigate('/nasze-sprawy')}
					/>
				</motion.div>
				{isDesktop && (
					<Suspense>
						<motion.ul className={classes.articles} {...getFadeUpStaggerParentProps(true)}>
							<Await
								resolve={cases}
								errorElement={
									<li className={classes.error}>
										Nie udało sie pobrać naszych spraw. <br /> Spróbuj ponownie później.
									</li>
								}>
								{resolvedCases =>
									resolvedCases.data.map(article => (
										<CasesSectionArticle
											key={article.documentId}
											cover={`${IMAGES_URL}${article.cover.url}`}
											title={article.title}
											description={article.description}
											articlePath={`/nasze-sprawy/${article.slug}`}
											Container={motion.li}
											variants={fadeUpStaggerChild}
										/>
									))
								}
							</Await>
						</motion.ul>
					</Suspense>
				)}
			</div>
		</section>
	)
}
