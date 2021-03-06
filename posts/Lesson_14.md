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

<h2>Lekcja 14: Klasy</h2>

Witajcie! Dzisiejsza lekcja jest jedyna w swoim rodzaju, gdy?? b??dzie ona podzielona na dwie cz????ci. Mamy bardzo du??o materia??u do przerobienia, ale nie martwcie si??: b??dzie to r??wnie proste jak wszystko co do tej pory robili??my :)<br/>
Klasy mo??na w skr??cie opisa?? jako *nasz w??asny typ danych.* Mo??emy go u??ywa?? do przechowywania danych oraz wykonywania na nich operacji, tak jak robili??my to w przypadku typ??w int, char czy string.<br/>
Zacznijmy jednak od najprostszych rzeczy, czyli jak napisa?? w??asn?? klas??:

```c
class Osoba{
	public:
		int wiek;
		std::string imie;
}
```

Brawo, w??a??nie napisali??cie swoj?? pierwsz?? klas??, mo??ecie by?? z siebie dumni! :)<br/>
Teraz musimy jednak zrozumie??, co *dok??adnie* napisali??my, a nast??pnie przejdziemy do tego, jak mo??emy u??y?? naszej klasy.<br/>
Ka??d?? klas?? definiujemy przez s??owo kluczowe ???class???, a nast??pnie przez nazw?? klasy. Przy wyborze nazwy pami??tajcie, aby kierowa?? si?? prostot??: ka??dy zrozumie co b??dzie robi??a klasa ???Car???, ale ???simpleAnimatronicsBuilderClassForWheelsAndChasis??? mo??e by?? nieco bardziej skomplikowane do zrozumienia ;)<br/>
Nast??pnie mamy do czynienia z *modyfikatorem dost??pu* ???public???, o kt??rych wi??cej dowiecie si?? na nast??pnej lekcji. Na razie wiedzcie, ??e deklaruj??c zmienne jako ???public??? pozwalacie ca??emu programowi na dost??p do nich, co *na razie* chcemy.<br/>
Pod modyfikatorem dost??pu (zauwa??cie dwukropek zamiast ??rednika) mamy dost??pne zmienne *dost??pne w naszej klasie.* Bardzo istotnym jest to, ??e *nie mo??emy im przypisywa?? warto??ci wewn??trz klasy:* mo??emy jedynie je tam deklarowa??, co zostanie wyja??nione za chwilk??.<br/>
Klasa, b??d??c z??o??onym typem danych (gdy?? sama sk??ada si?? z kilku komponent??w), sama w sobie nie daje nam zbyt wiele. Nie mo??emy pracowa?? *bezpo??rednio* na niej, tak samo jak nie mogli??my pracowa?? *bezpo??rednio* na **typie** int, double etc.<br/>
Potrzebujemy zatem *zmiennej* **typu** Osoba.<br/>
Sp??jrzcie na poni??szy przyk??ad:<br/>

```c
class Osoba{
	public:
		int wiek;
		std::string imie;
}

int main(){
	Osoba pierwszyObiekt;
	pierwszyObiekt.wiek = 25;
	pierwszyObiekt = ???Andrzej???;
	std::cout << pierwszyObiekt.wiek << std::endl;
	return 0;
}
```

??eby pracowa?? na klasach potrzebujemy *zmiennych typu Osoba.* Takie zmienne nazywamy **obiektami.** Rozumiem, ??e jest to do???? abstrakcyjna koncepcja, dlatego przejd??my przez to jeszcze raz:
- tworzymy *klas??*, kt??ra posiada w sobie *zmienne*.
- klasa jest *nowym*, stworzonym przez nas *typem danych*.
- je??li klasa jest tylko *typem* danych, to potrzebujemy *zmiennych* tego typu aby na nich pracowa??.
- zmienne, kt??re odnosz?? si?? do klasy nazywamy **obiektami**.

Podobnie jak ???int??? reprezentuje liczb?? ca??kowit??, ???float??? liczb?? zmiennoprzecinkow??, ???Osoba??? reprezentuje (w bardzo uproszczony spos??b) pewn?? osob??. Ka??dy z nas ma wiek oraz imi??, kt??re mo??emy przedstawi?? jako uproszczony typ danych (kolejno int oraz string).<br/>
Analogicznie mo??emy stworzy?? klas?? ???Pies???:

```c
class Pies{
	public:
		int wiek;
		std::string imie;
		std::string rasa;
		std::string kolor;
}

int main(){
	Pies burek;
	burek.wiek = 3;
	burek.imie = ???Burek???;
	burek.rasa = ???Jamnik???;
	burek.kolor = ???Br??zowy???;
	std::cout << burek.kolor << std::endl;
	return 0;
}
```

Jak widzicie, klasy pomagaj?? nam opisywa?? otaczaj??cy nas ??wiat w bardziej z??o??onej formie ni?? same liczby i nazwy.<br/>
???Ale??? przecie?? ta klasa sk??ada si?? z samych liczb i nazw!???<br/>
Zgadza si??, tak w??a??nie jest.<br/>
Ale co je??li powiem wam, ??e??? *Wcale nie musi tak by??? ;)*<br/>

```c
class Opona{
	public:
		int rozmiar;
		std::string kolor;
}

class Silnik{
	public:
		double pojemnosc;
		std::string marka;
}

class Samochod{
	public:
		Opona opony[4];
		Silnik silnik;
		std::string kolor;
}
```

Zobaczcie sami: obiekty klasy mog?? s??u??y?? za *zmienne wewn??trz innej klasy.* Dzi??ki takiemu rozwi??zaniu mo??emy szczeg????owo opisywa?? ??wiat, dodaj??c tak wiele parametr??w, jak tylko to potrzebne!<br/>
Oczywi??cie, koniec ko??c??w ka??dy z nich roz??o??ony jest na najbardziej elementarne z czynnik??w: opisujemy je liczbami oraz napisami. To, czego nie mo??emy w ten spos??b opisa?? rozbijamy na kolejne klasy i ich atrybuty.<br/>
Pami??tajcie jednak: jest to jedynie *mo??liwo????.* Nie musicie rozk??ada?? klasy ???Silnik??? do ka??dej pojedynczej ??rubki ;)<br/>
Wszystko zale??y od tego jakiej dok??adno??ci potrzebujecie; na potrzeby tego kursu opisanie silnika za pomoc?? pojemno??ci i marki w zupe??no??ci wystarczy. Niemniej jednak w du??ych projektach z??o??ono???? mo??e by?? o wiele bardziej skomplikowana.<br/>

**Jak nazywa si?? zmienna Klasy?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">klasa (pisane z ma??ej)</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">zmienna</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">obiekt</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op4">
<div class="rad-design"></div>
<div class="rad-text">cz??stka</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked || document.getElementById('op4').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Musz?? was zmartwi??, ale niestety nie.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie do ko??ca; pytamy o zmienn?? *klasy*';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Dok??adnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie tym razem: w informatyce nie mamy takiego poj??cia.';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Na razie wystarczy tych informacji. Przejrzyjcie t?? lekcj?? ponownie je??li potrzebujecie i przygotujcie si?? na wi??cej, gdy?? na kolejnej lekcji r??wnie?? zajmiemy si?? klasami (oraz ich modyfikatorami dost??pu i metodami). Powodzenia i do zobaczenia! :)
