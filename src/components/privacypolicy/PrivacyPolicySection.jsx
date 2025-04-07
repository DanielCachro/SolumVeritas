import classes from './PrivacyPolicySection.module.css'

export default function PrivacyPolicySection() {
	return (
		<section className={classes.section}>
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
					<li>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: OVH</li>
					<li>
						Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi
						mogą podlegać:
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
			<div className={classes.block}>
				<h2>5. Informacje w formularzach</h2>
				<ol>
					<li>
						Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.
					</li>
					<li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
					<li>
						Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem
						e-mail użytkownika wypełniającego formularz.
					</li>
					<li>
						Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu
						dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp.
					</li>
				</ol>
			</div>
			<div className={classes.block}>
				<h2>6. Logi Administratora</h2>
				<ol>
					<li>
						Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu
						administrowania serwisem.
					</li>
				</ol>
			</div>
			<div className={classes.block}>
				<h2>7. Istotne techniki marketingowe</h2>
				<ol>
					<li>
						Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w
						USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje.
						Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
					</li>
					<li>
						Operator stosuje techniki remarketingowe, pozwalające na dopasowanie przekazów reklamowych do zachowania
						użytkownika na stronie.
					</li>
					<li>
						Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook wie, że dana
						osoba w nim zarejestrowana korzysta z Serwisu.
					</li>
					<li>
						Operator stosuje rozwiązanie badające zachowanie użytkowników poprzez tworzenie map ciepła oraz nagrywanie
						zachowania na stronie.
					</li>
					<li>Operator stosuje rozwiązanie automatyzujące działanie Serwisu w odniesieniu do użytkowników.</li>
				</ol>
			</div>
			<div className={classes.block}>
				<h2>8. Informacja o plikach cookies</h2>
				<ol>
					<li>Serwis korzysta z plików cookies.</li>
					<li>
						Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które
						przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
						internetowych Serwisu.
					</li>
				</ol>
			</div>
			<div className={classes.block}>
				<h2>9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h2>
				<ol>
					<li>
						Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że
						wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania
						preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.
					</li>
				</ol>
			</div>
		</section>
	)
}
