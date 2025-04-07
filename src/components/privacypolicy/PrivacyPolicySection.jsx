import classes from './PrivacyPolicySection.module.css'

export default function PrivacyPolicySection() {
	return (
		<section className={`wrapper ${classes.section}`.trim()}>
			<h1>Polityka prywatności</h1>
			<h2>
				Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych
				oraz ciasteczek, czyli tzw. cookies.
			</h2>
			<div className={classes.block}>
				<h2>1. Informacje ogólne</h2>
				<ol>
					<li>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: solumveritas.org</li>
					<li>
						Operatorem serwisu oraz Administratorem danych osobowych jest: STOWARZYSZENIE SOLUM VERITAS 35A, Wola
						Osińska, 24-103 Żyrzyn, Polska
					</li>
					<li>Adres kontaktowy poczty elektronicznej operatora: biuro@solumveritas.org</li>
					<li>
						Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
						Serwisie.
					</li>
					<li>
						Serwis wykorzystuje dane osobowe w następujących celach:
						<ul>
							<li>Prowadzenie newslettera</li>
							<li>Obsługa zapytań przez formularz</li>
							<li>Obsługa zamówień towarów - przygotowanie, pakowanie, wysyłka</li>
							<li>Realizacja zamówionych usług</li>
							<li>Obsługa odpowiednich dokumentów księgowych</li>
							<li>Windykacja należności</li>
							<li>Prezentacja oferty lub informacji</li>
							<li>
								Wykonanie przez Administratora danych osobowych prawnie ciążących na nim obowiązków zgodnie z art. 6
								ust. 1 lit. c) RODO w zakresie w jakim przewidują to przepisy szczególne (np. prowadzenie księgowości).
							</li>
						</ul>
					</li>
					<li>
						Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
						<ul>
							<li>
								Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
							</li>
							<li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
						</ul>
					</li>
				</ol>
			</div>
			<div className={classes.block}>
				<h2>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
				<ol>
					<li>
						Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL).
						Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
						użytkownika i mogą być odczytane jedynie na docelowym serwerze.
					</li>
				</ol>
			</div>
			<div className={classes.block}>
				<h2>3. Hosting</h2>
				<ol>
					<li>
						Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: OVH. Firma hostingowa w celu
						zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
						<ul>
							<li>zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików)</li>
							<li>czas nadejścia zapytania</li>
							<li>czas wysłania odpowiedzi</li>
							<li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP</li>
							<li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP</li>
							<li>
								adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do
								Serwisu nastąpiło przez odnośnik
							</li>
							<li>informacje o przeglądarce użytkownika</li>
							<li>informacje o adresie IP</li>
							<li>
								informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na
								stronie
							</li>
							<li>
								informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez
								Operatora
							</li>
						</ul>
					</li>
				</ol>
			</div>
			<div className={classes.block}>
				<h2>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
				<ol>
					<li>
						W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie
						to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
						Administratorze. Dotyczy to takich grup odbiorców:
						<ul>
							<li>
								osoby upoważnione przez nas, pracownicy i współpracownicy, którzy muszą mieć dostęp do danych osobowych
								w celu wykonywania swoich obowiązków
							</li>
							<li>firma hostingowa</li>
							<li>firmy obsługująca mailingi</li>
							<li>firmy obsługująca komunikaty SMS</li>
							<li>firmy, z którymi Administrator współpracuje w zakresie marketingu własnego</li>
							<li>kurierzy</li>
							<li>ubezpieczyciele</li>
							<li>kancelarie prawne i windykatorzy</li>
							<li>banki</li>
							<li>operatorzy płatności</li>
							<li>organy publiczne</li>
						</ul>
					</li>
					<li>
						Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania
						związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu
						do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
					</li>
					<li>
						Przysługuje Ci prawo żądania od Administratora:
						<ul>
							<li>dostępu do danych osobowych Ciebie dotyczących</li>
							<li>ich sprostowania</li>
							<li>usunięcia</li>
							<li>ograniczenia przetwarzania</li>
							<li>oraz przenoszenia danych</li>
						</ul>
					</li>
					<li>
						Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec przetwarzania
						danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym
						profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie
						uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności
						ustalenia, dochodzenia lub obrony roszczeń.
					</li>
					<li>
						Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2,
						00-193 Warszawa.
					</li>
					<li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
					<li>
						W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w
						tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez
						Administratora marketingu bezpośredniego.
					</li>
					<li>
						Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych.
						Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
					</li>
				</ol>
			</div>
		</section>
	)
}
