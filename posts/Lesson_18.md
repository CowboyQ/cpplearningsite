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

<h2>Lekcja 18: Dziedziczenie</h2>
Witajcie! Dzi?? zajmiemy si?? dziedziczeniem w klasach!

Klasy s?? bardzo obszernym tematem, dlatego wracamy do niego jak bumerang ;)<br/>
Dzi?? wyja??ni?? wam zasady dziedziczenia, kt??re pozwalaj?? nam na korzystanie klasie z metod *innej klasy!*<br/>
Przejd??my jednak do sedna: dziedziczenie pozwala klasie *dziecku* korzysta?? z metod oraz atrybut??w *rodzica.* Nazewnictwo nie jest tu przypadkowe: dzi??ki odniesieniu do relacji rodzinnych mo??emy lepiej zrozumie?? zasady panuj??ce w dziedziczeniu. No ale mniejsza z tym, przejd??my do kodu ;)

```c
#include <iostream>

class Pojazd{
	public:
		std::string marka = ???Ford???;
		void honk(){
			std::cout << ???Honk honk!??? << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		std::string model = ???Mustang???;
};

int main(){
	Auto autko1;
	autko1.honk();
	std::cout << autko1.marka + ??? ??? + autko1.model << std::endl;
	return 0;
}
```

Zobaczmy, co dzieje si?? w kodzie: 
- deklarujemy klas?? ???Pojazd??? maj??c?? jeden atrybut oraz jedn?? metod?? honk().
- poni??ej deklarujemy klas?? ???Auto???, po czym (po dwukropku) oznaczamy klas?? ???Pojazd??? jako *rodzica* klasy Auto. Teraz Auto ma dost??p do *publicznych* metod oraz atrybut??w klasy Pojazd.
- oznacza to, ??e obiekt klasy *Auto* mo??e u??ywa?? metod klasy Pojazd (oraz ma dost??p do atrybut??w klasy Pojazd).

Jest to bardzo u??yteczne, gdy?? dobrze napisana metoda w klasie rodzica mo??e by?? p????niej wykorzystywana przez dzieci bez konieczno??ci przepisywania takiego samego kodu kilka razy :)<br/>
Zabawa nie ko??czy si?? jednak na jednej klasie!<br/>
Dziedziczenie dzia??a wielopoziomowo (je??li tylko tego chcemy). Zobaczcie:

```c
class Pojazd{
	public:
		std::string marka = ???Ford???;
		void honk(){
			std::cout << ???Honk honk!??? << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		std::string model = ???Mustang???;
};

class KonkretnyModel: public Auto{
	public:
		std::string seria = ???GT500???;
}

int main(){
	KonkretnyModel autko1;
	autko1.honk();
	std::cout << autko1.marka + ??? ??? + autko1.model + ??? ??? + autko1.seria << std::endl;
	return 0;
}
```

Dzi??ki takiej modyfikacji w kodzie mamy dost??p do klasy Pojazd, Auto *oraz* KonkretnyModel! Niemniej jednak warto uwa??a??, gdy?? przy wielopoziomowym dziedziczeniu mo??e nast??pi?? konflikt nazewnictwa atrybut??w oraz metod, dlatego te?? musimy by?? ostro??ni.<br/>
Warto te?? wspomnie??, ??e klasa mo??e r??wnie?? dziedziczy?? po *wielu* innych klasach:

```c
class Model: public Pojazd, public Auto{ ??? }
```

Ponownie jednak, nale??y zachowa?? ostro??no???? i przemy??le??, gdzie i w jakim stopniu chcemy, aby wyst??powa??o dziedziczenie mi??dzy klasami :)<br/>
Jak do tej pory widzieli??cie, u??ywali??my jedynie modyfikatora ???public???, aby u??atwi?? zrozumienie zasad panuj??cych w dziedziczeniu. Co jednak z innymi modyfikatorami?
- modyfikator public, jak wiecie, pozwala na pe??en dost??p do atrybut??w oraz metod.
- modyfikator private *nie pozwala* na odczyt lub zapis *klasie podrz??dnej.* Oznacza to, ??e je??li klasa Auto jest dzieckiem klasy Pojazd, natomiast klasa Pojazd ma pola (lub metody) private, to klasa Auto **nie ma dost??pu** do tych atrybut??w oraz metod.
- modyfikator *protected.* Tutaj sprawa jest nieco bardziej skomplikowana???

Rozwa??my przyk??ad:

```c
#include <iostream>

class Pojazd{
	public:
		std::string marka = ???Ford???;
		void honk(){
			std::cout << ???Honk honk!??? << std::endl;
		}
	private:
		int pojemnosc;
	protected:
		int siedzenia;
		void wypisz(){
			std::cout << ???Jestesmy w ???protected???!??? << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		std::string model = ???Mustang???;
		int getSiedzenia(){
			return siedzenia;
		}
		void setSiedzenia(int x){
			siedzenia = x;
		}
};

int main(){
	Auto autko1;
	autko1.honk(); //dzia??a
	std::cout << autko1.pojemnosc << std::endl; //nie zadzia??a: pojemno???? jest private
	autko1.setSiedzenia(5); //zadzia??a, siedzenia s?? protected
	std::cout << autko1.getSiedzenia() << std::endl;	//zadzia??a, siedzenia s?? protected
	autko1.wypisz(); //nie zadzia??a, wypisz() jest protected
	return 0;
}
```

Po przeanalizowaniu powy??szego kodu mo??ecie by?? nieco zdziwieni.<br/>
???Mamy dost??p do atrybut??w protected, ale do metod ju?? nie????.

No c??????? Dok??adnie tak! Dlatego te?? pisz??c kod, metody powinny by?? albo publiczne, albo prywatne: metody napisane z modyfikatorem ???protected??? b??d?? niedost??pne dla klas dziedzicz??cych, wi??c nie ma sensu ich tam wstawia?? ;)

**Do metod jakiego typu nie mamy dost??pu?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Private</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Protected</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">Public</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Zgadza si??! Jest to jedna z dw??ch poprawnych odpowiedzi :)';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Dok??adnie tak! Jest to jedna z dw??ch poprawnych odpowiedzi :)';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Niestety nie: do publicznych metod klasy mamy dost??p zawsze.';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

No ale, na dzi?? wystarczy tych informacji. Na nast??pnej (i niestety ostatniej ju??) lekcji zajmiemy si?? czym??, co tajemniczo nazywa si?? ???polimorfizm???. Do zobaczenia ;)

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_inheritance.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Programowanie-obiektowe-C++/Polimorfizm/Dziedziczenie/494">Strona cpp0x</a>

</div>
