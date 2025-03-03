import classes from './AboutSection.module.css'
import useMediaQuery from '@/hooks/useMediaQuery'

import blueDressedWoman from '@/assets/AboutSection_BlueDressedWoman.jpg'
import Puzzles from '@/assets/AboutSection_Puzzles.png'

export default function Section() {
	const isMobile = useMediaQuery('max-width: 1200px')

	return (
		<section className={`${classes.section} ${!isMobile ? 'desktop' : ''}`.trim()}>
			<div className='wrapper'>
				<div className={classes.box}>
					<div className={classes.box__content}>
						<div className={classes.box__header}>
							<p>Nasze Stowarzyszenie</p>
							<h2>Jak działamy?</h2>
						</div>
						<p>
							Działamy pro bono - bez wynagrodzenia, z dobrego serca. Każdą sprawę prowadzimy kompleksowo i rzetelnie,
							dostosowując działania do indywidualnych potrzeb, tak by zwiększyć szanse na odnalezienie osoby
							zaginionej. Pracujemy nieszablonowo w zależności od specyfiki danej sprawy - m.in. analizujemy akta spraw
							w przypadku długotrwałych zaginięć, tworzymy plakaty z informacjami o osobie zaginionej i okolicznościach
							zaginięcia oraz pomagamy w ich rozprzestrzenianiu. Wspieramy także rodziny w kontakcie ze służbami w
							zakresie zgłoszenia zaginięcia oraz świadczymy pomoc prawną w późniejszych etapach. Mamy spore
							doświadczenie w organizowaniu poszukiwań oraz przeszukiwaniu trudno dostępnych terenów - z powietrza, na
							lądzie i w wodzie we współpracy ze służbami m.in. OSP, Policją, PSP.
						</p>
						<p>&quot;Tylko życie poświęcone innym warte jest przeżycia&quot; - Albert Einstein</p>
					</div>
					{!isMobile && <img src={blueDressedWoman} alt='Uśmiechnięta kobieta ubrana na niebiesko'></img>}
				</div>
				<div className={classes.team}>
					<div className={classes.team__content}>
						<h2>Nasz zespół</h2>
						<div>
							<p>
								Chociaż poznaliśmy się przypadkiem około 6 lat temu, wiedzieliśmy od początku, że pewnego dnia stworzymy
								razem coś wyjątkowego. Mieliśmy wspólny cel - wykorzystać jak najlepiej nasze wykształcenie, pasje oraz
								umiejętności, aby nieść kompleksową pomoc. Każdy z nas przez lata zdobywał cenne doświadczenie działając
								na rzecz osób zaginionych i ich rodzin poprzez wolontariat w różnych instytucjach i organizacjach.
							</p>
							<p>
								Z połączenia pasji, doświadczenia i wielkich serc powstało stowarzyszenie o niecodziennej nazwie SOLUM
								VERITAS (łac. tylko prawda), którego głównym celem jest działanie na rzecz osób dotkniętych problemem
								zaginięć.
							</p>
							<p>
								W naszych szeregach mamy: Panią detektyw, która jest także dziennikarzem śledczym i osobą ze znajomością
								języka niemieckiego oraz hiszpańskiego, doświadczoną mediatorkę, specjalistę z zakresu zarządzania
								kryzysowego, księgową, operatora drona, płetwonurka, psychologa oraz radcę prawnego. Grono specjalistów
								zasilających naszą grupę wciąż się powiększa.
							</p>
						</div>
					</div>
					{!isMobile && <img src={Puzzles} alt='Puzzle'></img>}
				</div>
			</div>
		</section>
	)
}
