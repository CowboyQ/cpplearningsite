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

Witajcie! Dzisiejsza lekcja jest jedyna w swoim rodzaju, gdyż będzie ona podzielona na dwie części. Mamy bardzo dużo materiału do przerobienia, ale nie martwcie się: będzie to równie proste jak wszystko co do tej pory robiliśmy :)<br/>
Klasy można w skrócie opisać jako *nasz własny typ danych.* Możemy go używać do przechowywania danych oraz wykonywania na nich operacji, tak jak robiliśmy to w przypadku typów int, char czy string.<br/>
Zacznijmy jednak od najprostszych rzeczy, czyli jak napisać własną klasę:

```c
class Osoba{
	public:
		int wiek;
		std::string imie;
}
```

Brawo, właśnie napisaliście swoją pierwszą klasę, możecie być z siebie dumni! :)<br/>
Teraz musimy jednak zrozumieć, co *dokładnie* napisaliśmy, a następnie przejdziemy do tego, jak możemy użyć naszej klasy.<br/>
Każdą klasę definiujemy przez słowo kluczowe „class”, a następnie przez nazwę klasy. Przy wyborze nazwy pamiętajcie, aby kierować się prostotą: każdy zrozumie co będzie robiła klasa „Car”, ale „simpleAnimatronicsBuilderClassForWheelsAndChasis” może być nieco bardziej skomplikowane do zrozumienia ;)<br/>
Następnie mamy do czynienia z *modyfikatorem dostępu* „public”, o których więcej dowiecie się na następnej lekcji. Na razie wiedzcie, że deklarując zmienne jako „public” pozwalacie całemu programowi na dostęp do nich, co *na razie* chcemy.<br/>
Pod modyfikatorem dostępu (zauważcie dwukropek zamiast średnika) mamy dostępne zmienne *dostępne w naszej klasie.* Bardzo istotnym jest to, że *nie możemy im przypisywać wartości wewnątrz klasy:* możemy jedynie je tam deklarować, co zostanie wyjaśnione za chwilkę.<br/>
Klasa, będąc złożonym typem danych (gdyż sama składa się z kilku komponentów), sama w sobie nie daje nam zbyt wiele. Nie możemy pracować *bezpośrednio* na niej, tak samo jak nie mogliśmy pracować *bezpośrednio* na **typie** int, double etc.<br/>
Potrzebujemy zatem *zmiennej* **typu** Osoba.<br/>
Spójrzcie na poniższy przykład:<br/>

```c
class Osoba{
	public:
		int wiek;
		std::string imie;
}

int main(){
	Osoba pierwszyObiekt;
	pierwszyObiekt.wiek = 25;
	pierwszyObiekt = „Andrzej”;
	std::cout << pierwszyObiekt.wiek << std::endl;
	return 0;
}
```

Żeby pracować na klasach potrzebujemy *zmiennych typu Osoba.* Takie zmienne nazywamy **obiektami.** Rozumiem, że jest to dość abstrakcyjna koncepcja, dlatego przejdźmy przez to jeszcze raz:
- tworzymy *klasę*, która posiada w sobie *zmienne*.
- klasa jest *nowym*, stworzonym przez nas *typem danych*.
- jeśli klasa jest tylko *typem* danych, to potrzebujemy *zmiennych* tego typu aby na nich pracować.
- zmienne, które odnoszą się do klasy nazywamy **obiektami**.

Podobnie jak „int” reprezentuje liczbę całkowitą, „float” liczbę zmiennoprzecinkową, „Osoba” reprezentuje (w bardzo uproszczony sposób) pewną osobę. Każdy z nas ma wiek oraz imię, które możemy przedstawić jako uproszczony typ danych (kolejno int oraz string).<br/>
Analogicznie możemy stworzyć klasę „Pies”:

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
	burek.imie = „Burek”;
	burek.rasa = „Jamnik”;
	burek.kolor = „Brązowy”;
	std::cout << burek.kolor << std::endl;
	return 0;
}
```

Jak widzicie, klasy pomagają nam opisywać otaczający nas świat w bardziej złożonej formie niż same liczby i nazwy.<br/>
„Ale… przecież ta klasa składa się z samych liczb i nazw!”<br/>
Zgadza się, tak właśnie jest.<br/>
Ale co jeśli powiem wam, że… *Wcale nie musi tak być? ;)*<br/>

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

Zobaczcie sami: obiekty klasy mogą służyć za *zmienne wewnątrz innej klasy.* Dzięki takiemu rozwiązaniu możemy szczegółowo opisywać świat, dodając tak wiele parametrów, jak tylko to potrzebne!<br/>
Oczywiście, koniec końców każdy z nich rozłożony jest na najbardziej elementarne z czynników: opisujemy je liczbami oraz napisami. To, czego nie możemy w ten sposób opisać rozbijamy na kolejne klasy i ich atrybuty.<br/>
Pamiętajcie jednak: jest to jedynie *możliwość.* Nie musicie rozkładać klasy „Silnik” do każdej pojedynczej śrubki ;)<br/>
Wszystko zależy od tego jakiej dokładności potrzebujecie; na potrzeby tego kursu opisanie silnika za pomocą pojemności i marki w zupełności wystarczy. Niemniej jednak w dużych projektach złożoność może być o wiele bardziej skomplikowana.<br/>

**Jak nazywa się zmienna Klasy?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">klasa (pisane z małej)</div>
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
<div class="rad-text">cząstka</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked || document.getElementById('op4').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Muszę was zmartwić, ale niestety nie.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie do końca; pytamy o zmienną *klasy*';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Dokładnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie tym razem: w informatyce nie mamy takiego pojęcia.';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Na razie wystarczy tych informacji. Przejrzyjcie tę lekcję ponownie jeśli potrzebujecie i przygotujcie się na więcej, gdyż na kolejnej lekcji również zajmiemy się klasami (oraz ich modyfikatorami dostępu i metodami). Powodzenia i do zobaczenia! :)
