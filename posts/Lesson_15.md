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
Pierwsza cz?????? nauki o klasach ju?? za nami, dobra robota! Czas jednak poszerzy?? nieco nasze informacje, gdy?? klasy skrywaj?? o wiele wi??cej funkcjonalno??ci ni?? mo??e wam si?? wydawa??!<br/>
Przejd??my jednak do rzeczy, a raczej??? Do metod ;)<br/>
???Metody??? to *funkcje zawarte w klasie.* Pami??tacie funkcje z poprzednich lekcji? Tak? To dobrze, bo chodzi tu o dok??adnie to samo. Metody to funkcje danej klasy, umo??liwiaj??c nam prac?? na atrybutach danej klasy (o czym za chwilk??).<br/>
Jak wygl??daj?? takie metody? Sp??jrzmy na kod przedstawiony poni??ej:<br/>

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

Jak widzicie, dodali??my w??a??nie *metod??* ???getImie??? typu string, kt??ra zwraca nam zawarto???? atrybutu ???imie???.<br/>
???Okej, ale??? dlaczego j?? zwracamy skoro mo??emy stworzy?? obiekt (np. ??? Osoba osoba1???) i wyci??gn???? imi?? w ten spos??b????<br/>
Jest to kolejne ??wietne pytanie, na kt??re odpowied?? jest nieco bardziej skomplikowana.<br/>
Widzicie, okre??lanie atrybut??w jako ???public??? jest *z????* praktyk?? i nie powinno si?? ich w ten spos??b definiowa??. Wi????e si?? to z wieloma potencjalnymi problemami: w trakcie pisania kodu mo??na przypadkiem nadpisa?? jak???? wa??n?? warto????. Mo??na r??wnie?? uzyska?? dost??p do czego??, do czego *nie powinni??my* mie?? dost??pu.<br/>

???Ale przecie?? programi??ci wiedz?? co robi??, prawda????<br/>

Prawda, jednak kontrolowanie dost??pu w du??ych projektach by??oby bardzo ci????kie, dlatego te?? warto odrobin?? ???utrudni????? sobie prac?? aby zaoszcz??dzi?? potencjalnych szk??d. Ponadto, nie tylko programi??ci wiedz?? co robi?????<br/>
Wyobra??cie sobie sytuacj??, gdzie klasa reprezentuj??ca wasze konto bankowe ma same pola typu *public*. Niekt??rym samo to mog??o zmrozi?? krew w ??y??ach, ale p??jd?? o krok dalej: co je??li jaki?? haker zmieni??by ilo???? pieni??dzy na waszym koncie i wp??dzi?? was w wielomilionowy debet? Wyzerowa?? wszystkie ??rodki na koncie? Albo po prostu wykasowa?? wasze dane z systemu?<br/>
W takich sytuacjach dost??p (oraz jego kontrola) nabiera wyj??tkowego znaczenia.<br/>

???Ale??? my nie piszemy system??w bankowych! Dlaczego nie mo??emy robi?? wszystkiego jako ???public???????<br/>

Poniewa?? wyrobienie sobie dobrych nawyk??w teraz, b??dzie skutkowa??o w bardziej profesjonalnym kodzie w przysz??o??ci (na co zwr??ci uwag?? ka??da osoba spogl??daj??ca na wasz program) ;)<br/>
Poznali??cie modyfikator *public* wi??c teraz czas pozna?? drugi z nich: **private**.<br/>
Private sprawia, ??e *tylko metody danej klasy maj?? dost??p do zmiennej.* Gdy zmienna jest prywatna, wypisanie ???std::cout << osoba.imie << std::endl;??? (zak??adaj??c ??e ???imie??? jest prywatne) wywo??a b????d i program si?? nie uruchomi.<br/>
Jak wi??c dosta?? si?? do tej zmiennej z poza programu (czyli np. z funkcji main?)<br/>
Bardzo prosto: *tworz??c publiczne metody.*<br/>
Zauwa??cie: *tylko metody danej klasy* maj?? dost??p do zmiennych w klasie. Dlatego te?? zmienne pozostaj?? dla nas prywatne i zamiast tego u??ywamy publicznych metod *kt??re ju?? maj?? dost??p.*<br/>
Dobra, do???? gadania, czas zobaczy?? jak to dzia??a w praktyce:<br/>

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
	osoba.setImie(???Pawe?????);
	osoba.setWiek(28);
	std::cout << osoba.getImie() << std::endl;
	return 0;
}
```

Tak wygl??da poprawnie napisana klasa: mamy prywatne zmienne oraz publiczne metody aby do nich dotrze??. Nazewnictwo nie jest tu przypadkowe: tzw. ???getter???y i setter???y??? w niekt??rych edytorach tworz?? si?? automatycznie dla ka??dej zmiennej w klasie (niestety, nie w naszym). Zauwa??cie: metoda ???get??? jest zawsze tego samego typu co zmienna, gdy?? chcemy j?? dzi??ki tej metodzie zwr??ci??. Metoda ???set??? powinna natomiast by?? typu void, gdy?? nie musimy nic zwraca??: jedynie ustawiamy warto???? atrybutu.<br/>
???No dobrze, ale inicjowanie ka??dej zmiennej w ten spos??b jest po prostu niepraktyczne, zw??aszcza gdy mamy ich o wiele wi??cej!??? kto?? mo??e krzykn????.<br/>
I to si?? zgadza.<br/>
Dlatego te?? wprowadz?? wam dwa ostatnie (na dzisiaj) poj??cia: *konstruktory* oraz *destruktor.* Zauwa??cie: konstruktor**y**, mo??emy mie?? ich wi??cej ni?? jeden. Jest to szczeg??lnie przydatne, za chwilk?? zobaczycie, dlaczego.<br/>
Jak wiecie, w klasie nie podajemy ??adnych warto??ci do atrybut??w bezpo??rednio. Ale co je??li chcemy, ??eby obiekt klasy mia?? ju?? zdefiniowane atrybuty *bez potrzeby wywo??ywania pojedynczych metod?* Innymi s??owy: co je??li chcemy, ??eby obiekt klasy zaczyna?? z jakimi?? warto??ciami domy??lnymi?<br/>
W tym miejscu pomaga nam konstruktor.<br/>
Domy??lnie, konstruktor jest wywo??ywany *zawsze*, gdy tworzymy obiekt. Jest to idealny moment, aby podstawi?? jakie?? domy??lne zmienne.<br/>
Poprzednio, atrybuty by??y domy??lnie puste dla naszej Osoby. Zr??bmy co?? z tym!<br/>

```c
#include <iostream>

class Osoba{
	private:
		int wiek;
		std::string imie;
	public:
		Osoba(){
			wiek = 30;
			imie = ???Jan???;
		}
		//getter???y oraz setter???y dla zmiennych
}

int main(){
	Osoba osoba;
	std::cout << osoba.getImie() << std::endl;
	return 0;
}
```

**Co wydarzy si?? po uruchomieniu programu?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Kompilator wyrzuci b????d dost??pu</div>
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
		document.getElementById('answer').innerHTML = 'Nie tym razem: mamy dost??p do tej zmiennej dzi??ki publicznej metodzie.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie: napis istnieje dzieki przypisaniu w konstruktorze.';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Dok??adnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Programowanie staje si?? jeszcze prostsze, gdy u??yjemy konstruktora *z parametrami.* Zobaczcie:

```c
#include <iostream>

class Osoba{
	private:
		int wiek;
		std::string imie;
	public:
		Osoba(){
			wiek = 30;
			imie = ???Jan???;
		}
		Osoba(int x, std::string s){
			wiek = x;
			imie = s;
		}
		//getter???y oraz setter???y dla zmiennych
}

int main(){
	Osoba osoba1;
	Osoba osoba2(20, ???Przemek???);
	std::cout << osoba1.getImie() << std::endl; // wypisze ???Jan???
	std::cout << osoba2.getImie() << std::endl; // wypisze ???Przemek???
	return 0;
}
```

**Co zostanie wypisane tym razem?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op4">
<div class="rad-design"></div>
<div class="rad-text">Kompilator wyrzuci b????d dost??pu</div>
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
		document.getElementById('answer2').innerHTML = 'Nie tym razem: mamy dost??p do tej zmiennej dzi??ki publicznej metodzie.';
		document.getElementById('answer2').style='display:block;';
		}
	else if(document.getElementById('op5').checked){
		document.getElementById('answer2').innerHTML = 'Dok??adnie tak, brawo!';
		document.getElementById('answer2').style='display:block;';
	}
	else if(document.getElementById('op6').checked){
		document.getElementById('answer2').innerHTML = 'Niestety nie: sp??jrzcie jeszcze raz na tworzenie obiekt??w w funkcji main()';
		document.getElementById('answer2').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer2" class="exercise" style="display:none;"></p>

W kolejnych lekcjach, gdy nauczymy si?? operowa?? na plikach, b??dziemy mogli za??adowa?? ca???? baz?? potrzebnych nam danych z pliku, a nast??pnie u??y?? jej jako parametr??w dla konstruktor??w! Dzi??ki takim rozwi??zaniom zaj??cie, kt??re *mog??oby* zaj???? tysi??ce linijek (je??li pisaliby??my wszystko r??cznie) mo??e zaj???? raptem 10-20 przy pomocy p??tli, tablic oraz klas.<br/>
Mam nadziej??, ??e spodoba??a si?? wam ta lekcja i przybli??y??a wam nieco zasad?? funkcjonowania klas. Rozumiem te??, ??e jest to strasznie du??o informacji, dlatego te?? przemy??lcie je na spokojnie i ???prze??pijcie si?? z tym???.

Oczywi??cie mo??ecie te?? po??wiczy?? nowe informacje na poni??szych zadankach:

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Napiszcie klas?? "lod??wka": opatrzcie j?? w funkcj?? ch??odzenia oraz mro??enia.<br/>
2.<br/>
  Rozszerzmy program z ??w.1: do??????cie klasy "owoc" oraz "warzywo", pozw??lcie lod??wce przechowywa?? po kilka z nich (np 5, 8).<br/>
3.<br/>
  Rozszerzaj??c dalej nasz program: napiszcie metody m??wi??ce u??ytkownikowi, ile ma wolnego miejsca. Zauwa??cie: wolne miejsce jest *wsp??lne* dla warzyw i owoc??w.<br/>
  Mo??e jaka?? zmienna licz??ca dost??pne miejsce..?
</div>

A nast??pnym razem powiemy nieco o prze??adowaniu funkcji, do zobaczenia! :)

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_classes.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Dodatkowe-materialy/Klasy-obiekty/311">Strona cpp0x</a>
- <a href="https://www.p-programowanie.pl/cpp/klasy-c">Strona P-Programowanie</a>
- <a href="https://www.youtube.com/watch?v=aDXjubGK0jU">Filmik autorstwa "Pasja Informatyki"</a>

</div>