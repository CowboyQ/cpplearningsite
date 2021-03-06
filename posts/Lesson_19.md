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

<h2>Lekcja 19: Polimorfizm</h2>
Witajcie ponownie! :) Dzi?? pom??wimy nieco o polimorfizmie. 

??eby zrozumie?? polimorfizm, musimy cofn???? si?? do lekcji o wska??nikach. Rozwa??my poni??szy kod:

```c
#include <iostream>

class Pojazd{
	public:
		void honk(){
			std::cout << "Honk Pojazdu!" << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		void honk(){
			std::cout << "Honk Auta!" << std::endl;
		}
};

int main(){
	Pojazd *pojazd = new Auto();
	Auto *autko = new Auto();
	
	pojazd->honk();
	autko->honk();
	
	return 0;
}

```

**Co wy??wietli powy??szy program??**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Honk Pojazdu oraz Honk Auta</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Dwa razy Honk Pojazdu</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">Dwa razy Honk Auta</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Zgadza si??!';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Niestey nie';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Nie tym razem';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Odpowied?? nie jest niczym dziwnym: wystarczy spojrze?? na *typ* wska??nika: wska??nik typu ```Pojazd``` zawsze b??dzie wskazywa?? na metod?? z tej samej klasy bez wzgl??du na to, co przypiszemy p????niej.

Ale co je??li *wcale nie musi tak by???*<br/>
Zobaczcie jak za pomoc?? jednego s??owa zmieniam to wi??zanie:

```c
#include <iostream>

class Pojazd{
	public:
		virtual void honk(){
			std::cout << "Honk Pojazdu!" << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		void honk(){
			std::cout << "Honk Auta!" << std::endl;
		}
};

int main(){
	Pojazd *pojazd = new Auto();
	Auto *autko = new Auto();
	
	pojazd->honk();
	autko->honk();
	
	return 0;
}
```

Zauwa??cie: metoda ```honk()``` w klasie ```Pojazd``` sta??a si?? nagle *virtual*. Co to oznacza?<br/>
Oznacza to, ??e *wi??zanie jest dla niej dynamiczne* zamiast *statycznego* definiowanego typem zmiennej.<br/>

Tak wi??c... **Jaki tym razem b??dzie wynik?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op4">
<div class="rad-design"></div>
<div class="rad-text">Honk Pojazdu oraz Honk Auta</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op5">
<div class="rad-design"></div>
<div class="rad-text">Dwa razy Honk Pojazdu</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op6">
<div class="rad-design"></div>
<div class="rad-text">Dwa razy Honk Auta</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op4').checked || document.getElementById('op5').checked || document.getElementById('op6').checked){
	if(document.getElementById('op4').checked){
		document.getElementById('answer2').innerHTML = 'Niestety nie.';
		document.getElementById('answer2').style='display:block;';
		}
	else if(document.getElementById('op5').checked){
		document.getElementById('answer2').innerHTML = 'Niestety nie tym razem.';
		document.getElementById('answer2').style='display:block;';
	}
	else if(document.getElementById('op6').checked){
		document.getElementById('answer2').innerHTML = 'Tak, dok??adnie!';
		document.getElementById('answer2').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer2" class="exercise" style="display:none;"></p>

Jak widzicie, metoda ```honk()``` dzia??a teraz w zale??no??ci od tego, *jaki typ do niej przypiszemy*, zamiast tego, *jakiego typu jest wska??nik.*<br/>
Jest to bardzo wygodne rozwi??zanie, jednak warto u??ywa?? go z ostro??no??ci??, gdy?? program mo??e straci?? na szybko??ci (ze wzgl??du na zajmowane przez takie funkcje miejsce).

Polimorfizm nie jest niczym strasznym, jak sami si?? o tym przed chwil?? przekonali??cie. Warto z niego korzysta??, jednak pamietajcie: "z wielk?? moc?? przychodzi wielka odpowiedzialno????" ;)

To tyle na dzi??; zostawiam wam (ostatni ju??) zestaw zadanek oraz odno??nik??w i do zobaczenia na zako??czeniu!

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">

  Stw??rzcie klas?? "Obiekt" oraz dzieci tej klasy: klas?? "Okr??g", "Tr??jk??t" oraz "Kwadrat". W klasie "Obiekt" napiszcie wirtualn?? metod?? "rysuj()", kt??r?? nast??pnie nadpiszecie w klasach-dzieciach. Wykorzystuj?? polimorfizm odwo??ajcie si?? do tej metody.
</div>
<br/>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_polymorphism.asp">Strona W3Schools [ang.]</a>
- <a href="https://www.p-programowanie.pl/cpp/polimorfizm-metody-wirtualne">Strona pprogramowanie</a>

</div>

