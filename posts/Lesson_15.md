<style>
.rad-label {
  display: flex;
  align-items: center;

  border-radius: 100px;
  padding: 10px 16px;
  margin: 10px 0;

  cursor: pointer;
  transition: .3s;
}

.rad-label:hover,
.rad-label:focus-within {
  background: hsla(0, 0%, 80%, .14);
}

.rad-input {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
}

.rad-design {
  width: 18px;
  height: 18px;
  border-radius: 80px;

  background: linear-gradient(to right bottom, hsl(154, 97%, 62%), hsl(225, 97%, 62%));
  position: relative;
}

.rad-design::before {
  content: '';

  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;

  background: hsl(0, 0%, 90%);
  transform: scale(1.1);
  transition: .3s;
}

.rad-input:checked+.rad-design::before {
  transform: scale(0);
}

.rad-text {
  color: hsl(0, 0%, 60%);
  margin-left: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 900;

  transition: .3s;
}

.rad-input:checked~.rad-text {
  color: hsl(0, 0%, 40%);
}

.btn {
  background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

.btn:hover {
  color: #fff;
}

.btn .btnspan {
  align-items: center;
  background: #0e0e10;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.btn:hover .btnspan {
  background: transparent;
}

.exercise {
	position: relative;
	max-width: 30em;
	
	background-color: #fff;
	padding: 1.125em 1.5em;
	font-size: 1.25em;
	border-radius: 1rem;
  box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
}

.exercise::before {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	bottom: 100%;
	left: 1.5em; 
	border: .75rem solid transparent;
	border-top: none;

	border-bottom-color: #fff;
	filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
}

.exerciseButton {
  border: 0;
  text-align: center;
  display: inline-block;
  padding: 14px;
  width: 150px;
  margin: 7px;
  color: #ffffff;
  background-color: #36a2eb;
  border-radius: 8px;
  font-family: "proxima-nova-soft", sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 200ms ease-out;
}
</style>

<h2>Lekcja 15: klasy cd.</h2>

Witam was ponownie! :) <br/>
Pierwsza część nauki o klasach już za nami, dobra robota! Czas jednak poszerzyć nieco nasze informacje, gdyż klasy skrywają o wiele więcej funkcjonalności niż może wam się wydawać!<br/>
Przejdźmy jednak do rzeczy, a raczej… Do metod ;)<br/>
„Metody” to *funkcje zawarte w klasie.* Pamiętacie funkcje z poprzednich lekcji? Tak? To dobrze, bo chodzi tu o dokładnie to samo. Metody to funkcje danej klasy, umożliwiając nam pracę na atrybutach danej klasy (o czym za chwilkę).<br/>
Jak wyglądają takie metody? Spójrzmy na kod przedstawiony poniżej:<br/>

```c
class Osoba{
	public:
		int wiek;
		std::string imie;
		std::string getImie(){
			return imie;
		}
}
```

Jak widzicie, dodaliśmy właśnie *metodę* “getImie” typu string, która zwraca nam zawartość atrybutu “imie”.<br/>
„Okej, ale… dlaczego ją zwracamy skoro możemy stworzyć obiekt (np. „ Osoba osoba1”) i wyciągnąć imię w ten sposób?”<br/>
Jest to kolejne świetne pytanie, na które odpowiedź jest nieco bardziej skomplikowana.<br/>
Widzicie, określanie atrybutów jako „public” jest *złą* praktyką i nie powinno się ich w ten sposób definiować. Wiąże się to z wieloma potencjalnymi problemami: w trakcie pisania kodu można przypadkiem nadpisać jakąś ważną wartość. Można również uzyskać dostęp do czegoś, do czego *nie powinniśmy* mieć dostępu.<br/>

„Ale przecież programiści wiedzą co robią, prawda?”<br/>

Prawda, jednak kontrolowanie dostępu w dużych projektach byłoby bardzo ciężkie, dlatego też warto odrobinę „utrudnić” sobie pracę aby zaoszczędzić potencjalnych szkód. Ponadto, nie tylko programiści wiedzą co robią…<br/>
Wyobraźcie sobie sytuację, gdzie klasa reprezentująca wasze konto bankowe ma same pola typu *public*. Niektórym samo to mogło zmrozić krew w żyłach, ale pójdę o krok dalej: co jeśli jakiś haker zmieniłby ilość pieniędzy na waszym koncie i wpędził was w wielomilionowy debet? Wyzerował wszystkie środki na koncie? Albo po prostu wykasował wasze dane z systemu?<br/>
W takich sytuacjach dostęp (oraz jego kontrola) nabiera wyjątkowego znaczenia.<br/>

„Ale… my nie piszemy systemów bankowych! Dlaczego nie możemy robić wszystkiego jako ‘public’?”<br/>

Ponieważ wyrobienie sobie dobrych nawyków teraz będzie skutkowało w bardziej profesjonalnym kodzie w przyszłości (na co zwróci uwagę każda osoba spoglądająca na wasz program) ;)<br/>
Poznaliście modyfikator *public* więc teraz czas poznać drugi z nich: **private**.<br/>
Private sprawia, że *tylko metody danej klasy mają dostęp do zmiennej.* Gdy zmienna jest prywatna, wypisanie „std::cout << osoba.imie << std::endl;” (zakładając że „imie” jest prywatne) wywoła błąd i program się nie uruchomi.<br/>
Jak więc dostać się do tej zmiennej z poza programu (czyli np. z funkcji main?)<br/>
Bardzo prosto: *tworząc publiczne metody.*<br/>
Zauważcie: *tylko metody danej klasy* mają dostęp do zmiennych w klasie. Dlatego też zmienne pozostają dla nas prywatne i zamiast tego używamy publicznych metod *które już mają dostęp.*<br/>
Dobra, dość gadania, czas zobaczyć jak to działa w praktyce:<br/>

```c
#include<iostream>

class Osoba{
	private:
		int wiek;
		std::string imie;
	public:
		int getWiek(){
			return wiek;
		}
		void setWiek(int x){
			wiek = x;
		}
		std::string getImie(){
			return imie;
		}
		void setImie(std::string s){
			imie = s;
		}
}

int main(){
	Osoba osoba;
	osoba.setImie(„Paweł”);
	osoba.setWiek(28);
	std::cout << osoba.getImie() << std::endl;
	return 0;
}
```

Tak wygląda poprawnie napisana klasa: mamy prywatne zmienne oraz publiczne metody aby do nich dotrzeć. Nazewnictwo nie jest tu przypadkowe: tzw. „getter’y i setter’y” w niektórych edytorach tworzą się automatycznie dla każdej zmiennej w klasie (niestety, nie w naszym). Zauważcie: metoda „get” jest zawsze tego samego typu co zmienna, gdyż chcemy ją dzięki tej metodzie zwrócić. Metoda „set” powinna natomiast być typu void, gdyż nie musimy nic zwracać: jedynie ustawiamy wartość atrybutu.<br/>
„No dobrze, ale inicjowanie każdej zmiennej w ten sposób jest po prostu niepraktyczne, zwłaszcza gdy mamy ich o wiele więcej!” ktoś może krzyknąć.<br/>
I to się zgadza.<br/>
Dlatego też wprowadzę wam dwa ostatnie (na dzisiaj) pojęcia: *konstruktory* oraz *destruktor.* Zauważcie: konstruktor**y**, możemy mieć ich więcej niż jeden. Jest to szczególnie przydatne, za chwilkę zobaczycie, dlaczego.<br/>
Jak wiecie, w klasie nie podajemy żadnych wartości do atrybutów bezpośrednio. Ale co jeśli chcemy, żeby obiekt klasy miał już zdefiniowane atrybuty *bez potrzeby wywoływania pojedynczych metod?* Innymi słowy: co jeśli chcemy, żeby obiekt klasy zaczynał z jakimiś wartościami domyślnymi?<br/>
W tym miejscu pomaga nam konstruktor.<br/>
Domyślnie, konstruktor jest wywoływany *zawsze*, gdy tworzymy obiekt. Jest to idealny moment, aby podstawić jakieś domyślne zmienne.<br/>
Poprzednio, atrybuty były domyślnie puste dla naszej Osoby. Zróbmy coś z tym!<br/>

```c
#include <iostream>

class Osoba{
	private:
		int wiek;
		std::string imie;
	public:
		Osoba(){
			wiek = 30;
			imie = „Jan”;
		}
		//getter’y oraz setter’y dla zmiennych
}

int main(){
	Osoba osoba;
	std::cout << osoba.getImie() << std::endl;
	return 0;
}
```

**Co wydarzy się po uruchomieniu programu?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Kompilator wyrzuci błąd dostępu</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Konsola nic nie wypisze (pusty napis)</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">Konsola wypisze "Jan"</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Nie tym razem: mamy dostęp do tej zmiennej dzięki publicznej metodzie.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie: napis istnieje dzieki przypisaniu w konstruktorze.';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Dokładnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Programowanie staje się jeszcze prostsze gdy użyjemy konstruktora *z parametrami.* Zobaczcie:

```c
#include <iostream>

class Osoba{
	private:
		int wiek;
		std::string imie;
	public:
		Osoba(){
			wiek = 30;
			imie = „Jan”;
		}
		Osoba(int x, std::string s){
			wiek = x;
			imie = s;
		}
		//getter’y oraz setter’y dla zmiennych
}

int main(){
	Osoba osoba1;
	Osoba osoba2(20, „Przemek”);
	std::cout << osoba1.getImie() << std::endl; // wypisze „Jan”
	std::cout << osoba2.getImie() << std::endl; // wypisze „Przemek”
	return 0;
}
```

**Co zostanie wypisane tym razem?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op4">
<div class="rad-design"></div>
<div class="rad-text">Kompilator wyrzuci błąd dostępu</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op5">
<div class="rad-design"></div>
<div class="rad-text">"Jan" oraz "Przemek"</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op6">
<div class="rad-design"></div>
<div class="rad-text">Konsola wypisze "Jan" dwa razy</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op4').checked || document.getElementById('op5').checked || document.getElementById('op6').checked){
	if(document.getElementById('op4').checked){
		document.getElementById('answer2').innerHTML = 'Nie tym razem: mamy dostęp do tej zmiennej dzięki publicznej metodzie.';
		document.getElementById('answer2').style='display:block;';
		}
	else if(document.getElementById('op5').checked){
		document.getElementById('answer2').innerHTML = 'Dokładnie tak, brawo!';
		document.getElementById('answer2').style='display:block;';
	}
	else if(document.getElementById('op6').checked){
		document.getElementById('answer2').innerHTML = 'Niestety nie: spójrzcie jeszcze raz na tworzenie obiektów w funkcji main()';
		document.getElementById('answer2').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer2" class="exercise" style="display:none;"></p>

W kolejnych lekcjach, gdy nauczymy się operować na plikach, będziemy mogli załadować całą bazę potrzebnych nam danych z pliku, a następnie użyć jej jako parametrów dla konstruktorów! Dzięki takim rozwiązaniom zajęcie, które *mogłoby* zająć tysiące linijek (jeśli pisalibyśmy wszystko ręcznie) może zająć raptem 10-20 przy pomocy pętli, tablic oraz klas.<br/>
Mam nadzieję, że spodobała się wam ta lekcja i przybliżyła wam nieco zasadę funkcjonowania klas. Rozumiem też, że jest to strasznie dużo informacji, dlatego też przemyślcie je na spokojnie i „prześpijcie się z tym”.

Oczywiście możecie też poćwiczyć nowe informacje na poniższych zadankach:

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Napiszcie klasę "lodówka": opatrzcie ją w funkcję chłodzenia oraz mrożenia.<br/>
2.<br/>
  Rozszerzmy program z ćw.1: dołóżcie klasy "owoc" oraz "warzywo", pozwólcie lodówce przechowywać po kilka z nich (np 5, 8).<br/>
3.<br/>
  Rozszerzając dalej nasz program: napiszcie metody mówiące użytkownikowi, ile ma wolnego miejsca. Zauważcie: wolne miejsce jest *wspólne* dla warzyw i owoców.<br/>
  Może jakaś zmienna licząca dostępne miejsce..?
</div>



A następnym razem powiemy nieco o przeładowaniu funkcji, do zobaczenia! :)
