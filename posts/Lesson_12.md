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

<h2>Lekcja 12: Wska??niki</h2>

Witajcie! Dzisiejsza lekcja jest wyj??tkowo istotna, gdy?? powiemy sobie co nieco o wska??nikach.<br/>
Czym s?? wska??niki? No c????... Wyobra??cie sobie tak?? sytuacj??:<br/>
Jeste??cie w muzeum. Podziwiacie pi??kny obraz, zachwycacie si?? jego walorami estetycznymi, kolorystyk??, oraz... czerwon?? kropk?? na samym ??rodku tego obrazu..?<br/>
Zauwa??acie, ??e kropka ta nie wzi????a si?? znik??d: jest to koniec wi??zki wska??nika laserowego kt??rym bawi si?? jaki?? facet stoj??cy po drugiej stronie pokoju.<br/>
Tym facetem jestem ja, staraj??c si?? wam pokaza??, czym jest wska??nik, gdy?? jest w??a??nie tym co trzymam w r??ce: wska??nikiem laserowym *na jaki?? przedmiot.*

Wska??nik robi to co w nazwie: *wskazuje.* Dla przyk??adu mo??e wskazywa?? na jak???? zmienn??.<br/>
Po co mia??by na ni?? wskazywa??? Dowiecie si?? ju?? nied??ugo, gdy?? jak si?? okazuje: jest to bardzo istotne narz??dzie programistyczne (mowa o wska??nikach w programowaniu chocia?? wska??niki laserowe te?? s?? ca??kiem fajne).<br/>
Sp??jrzcie na poni??szy kod:

```c
#include <iostream>
int main(){
	int a = 5;
	int* wskaznikA = &a;
	
	std::cout << "a: " << a << std::endl;
	std::cout << "Wskaznik na a: " << wskaznikA << std::endl;
	
	return 0;
}
```

Pocz??tek jest wam chyba znajomy: definiujemy zwyk???? zmienn?? typu ```int```. A p????niej? Co to za gwiazda?<br/>
Gwiazdka przy typie oznacza, ??e definiujemy *zmienn?? wska??nikow??.* Przypisujemy do niej ```&a```. Dlaczego ```&```?<br/>
Gdy?? zmienna wska??nikowa wskazuje **miejsce**, w kt??rym znajduje si?? zmienna ```a```. Dlatego gdy wy??wietlamy ```a``` wy??wietli nam si?? 5, natomiast gdy wy??wietlimy zmienn?? wska??nikow??... No c????, sp??jrzcie sami:<br/>

<img src="https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/img%2F04.png?alt=media" alt="screenshot" style="display: block; margin: 0 auto; width: 50%;"/>

To, moi drodzy, jest *adres w pami??ci* naszej zmiennej ```a```.<br/>
"No dobrze, ale po co nam wiedzie??, w kt??rym miejscu w pami??ci jest jaka?? zmienna?".<br/>
Spiesz?? z odpowiedzi??: *funkcje.*<br/>
Gdy na nast??pnej lekcji poznacie jak je zapisujemy, zauwa??ycie, ??e wewn??trz funkcji pracujemy na *kopii* zmiennej. Wska??niki natomiast umo??liwiaj?? nam prac?? na *konkretnej zmiennej zamiast na kopii.* Jest to niesamowicie u??yteczne przy okazji przesy??ania do funkcji tablic, gdy?? mo??emy stworzy?? wska??nik do danej tablicy i przes??a?? go do funkcji.<br/>
Nie musimy z tym jednak czeka?? a?? do przysz??ego tematu, dlatego poka???? wam jak to dzia??a ju?? teraz!

```c
#include <iostream>

int main(){
	float b[5];
	float* wskaznikB = b;
	
	for(int i = 0; i < 5; i++){
		*(wskaznikB + i) = i;
	}
	for(int i = 0; i < 5; i++){
		std::cout << b[i] << std::endl;
	}
	return 0;
}
```

Jak widzicie, nieco si?? pozmienia??o.
- tworzymy tablic?? pi??ciu zmiennych typu float
- tworzymy wska??nik do tablicy. *Uwaga:* gdy wskazujemy na tablic?? *nie musimy uzywa?? znaku &*
- wewn??trz p??tli wstawiamy elementy do tablicy "b" za pomoc?? wska??nika. Dlaczego?
	- wskaznikB *wskazuje* na miejsce w pami??ci pierwszego elementu. Sam jednak jest *adresem,* prawda?
	- wewn??trz adresu dodajemy "i" kt??re pocz??tkowo wynosi 0. Mamy wi??c wci???? do czynienia z tym samym adresem.
	- ca??e wyra??enie jest jednak w nawiasie. Po lewej stronie nawiasu: gwiazdka. Co ona oznacza?
	- Oznacza ona, ??e zmieniamy **warto???? wskazywan?? przez wska??nik!**
	- Wy??wietlenie wska??nika daje adres, natomiast wy??wietlenie ```*wskaznikB``` wy??wietli nam **liczb??!**
- w kolejnej p??tli po prostu wy??wietlamy warto??ci tablicy b

Je??li mi nie wierzycie, sprawd??cie sami. Taka *arytmetyka wska??nikowa* jest bardzo powszechna, jednak jest te?? niebezpieczna: mo??emy bardzo ??atwo "wyjecha??" poza przestrze?? naszej tablicy i nadpisa?? co??, czego nie chcemy. Dlatego te?? warto pos??ugiwa?? si?? wska??nikami bardzo ostro??nie :)

Ch??tnych zapraszam na dawk?? zadanek:

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Zmodyfikujcie program z lekcji tak, aby wy??wietla?? znaki napisane w zmiennej typu string. U??yjcie w tym celu wska??nik??w.<br/>
2.<br/>
  Zmodyfikujcie z ??w.1 tak, aby napis by?? wy??wietlany od ty??u.
</div>


A p??ki co wystarczy. Zapraszam na kolejn?? lekcj?? o??? funkcjach!

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_pointers.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Dodatkowe-materialy/Wskazniki/304">Strona cpp0x</a>
- <a href="https://www.youtube.com/watch?v=0DQl74alJzw">Filmik autorstwa "Pasja Informatyki"</a>

</div>