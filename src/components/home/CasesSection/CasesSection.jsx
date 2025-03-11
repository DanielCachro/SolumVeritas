import useMediaQuery from '@/hooks/useMediaQuery'
import classes from './CasesSection.module.css'
import SecondaryButton from '@/components/common/SecondaryButton/SecondaryButton'
import CasesSectionArticle from './CasesSectionArticle/CasesSectionArticle'

import anetaGrabowska from '@/assets/persons/aneta_grabowska_1.jpg'
import monikaKonopkoKarazniewicz from '@/assets/persons/monika_konopko_karaźniewicz_1.jpg'
import juliaRomanska from '@/assets/persons/julia_romańska_1.jpg'

import firstArticleCover from '@/assets/articles/article1.jpg'
import secondArticleCover from '@/assets/articles/article1.jpg'

export default function CasesSection() {
	const isDesktop = useMediaQuery('min-width: 992px')
	return (
		<section className={classes.section}>
			<div className={`wrapper ${classes.wrapper}`}>
				<div className={classes.content}>
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
					<SecondaryButton className={classes.button} title='Nasze Sprawy' whiteVariant={true} />
				</div>
				{isDesktop && (
					<div className={classes.articles}>
						<CasesSectionArticle
							title='Zaginiona odnaleziona - kulisy akcji ratunkowej'
							text='Nasze działania doprowadziły do szczęśliwego zakończenia poszukiwań. Dzięki współpracy specjalistów i wolontariuszy udało się odnaleźć zaginioną osobę i zapewnić jej bezpieczeństwo'
							cover={firstArticleCover}
						/>
						<CasesSectionArticle
							title='Determinacja, która przyniosła rezultat'
							text='Nasze działania doprowadziły do szczęśliwego zakończenia poszukiwań. Dzięki współpracy specjalistów i wolontariuszy udało się odnaleźć zaginioną osobę i zapewnić jej bezpieczeństwo'
							cover={secondArticleCover}
						/>
					</div>
				)}
			</div>
		</section>
	)
}
