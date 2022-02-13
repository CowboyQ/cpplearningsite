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

<h2>Lekcja 12: Wskaźniki</h2>

Witajcie! Dzisiejsza lekcja jest wyjątkowo istotna, gdyż powiemy sobie co nieco o wskaźnikach.<br/>
Czym są wskaźniki? No cóż... Wyobraźcie sobie taką sytuację:<br/>
Jesteście w muzeum. Podziwiacie piękny obraz, zachwycacie się jego walorami estetycznymi, kolorystyką, oraz... czerwoną kropką na samym środku tego obrazu..?<br/>
Zauważacie, że kropka ta nie wzięła się znikąd: jest to koniec wiązki wskaźnika laserowego którym bawi się jakiś facet stojący po drugiej stronie pokoju.<br/>
Tym facetem jestem ja, starając się wam pokazać, czym jest wskaźnik, gdyż jest właśnie tym co trzymam w ręce: wskaźnikiem laserowym *na jakiś przedmiot.*

Wskaźnik robi to co w nazwie: *wskazuje.* Dla przykładu może wskazywać na jakąś zmienną.<br/>
Po co miałby na nią wskazywać? Dowiecie się już niedługo, gdyż jak się okazuje: jest to bardzo istotne narzędzie programistyczne (mowa o wskaźnikach w programowaniu chociaż wskaźniki laserowe też są całkiem fajne).<br/>
Spójrzcie na poniższy kod:

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

Początek jest wam chyba znajomy: definiujemy zwykłą zmienną typu ```int```. A później? Co to za gwiazda?<br/>
Gwiazdka przy typie oznacza, że definiujemy *zmienną wskaźnikową.* Przypisujemy do niej ```&a```. Dlaczego ```&```?<br/>
Gdyż zmienna wskaźnikowa wskazuje **miejsce**, w którym znajduje się zmienna ```a```. Dlatego gdy wyświetlamy ```a``` wyświetli nam się 5, natomiast gdy wyświetlimy zmienną wskaźnikową... No cóż, spójrzcie sami:<br/>

<img src="https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/img%2F04.png?alt=media" alt="screenshot" style="display: block; margin: 0 auto; width: 50%;"/>

To, moi drodzy, jest *adres w pamięci* naszej zmiennej ```a```.<br/>
"No dobrze, ale po co nam wiedzieć, w którym miejscu w pamięci jest jakaś zmienna?".<br/>
Spieszę z odpowiedzią: *funkcje.*<br/>
Gdy na następnej lekcji poznacie jak je zapisujemy, zauważycie, że wewnątrz funkcji pracujemy na *kopii* zmiennej. Wskaźniki natomiast umożliwiają nam pracę na *konkretnej zmiennej zamiast na kopii.* Jest to niesamowicie użyteczne przy okazji przesyłania do funkcji tablic, gdyż możemy stworzyć wskaźnik do danej tablicy i przesłać go do funkcji.<br/>
Nie musimy z tym jednak czekać aż do przyszłego tematu, dlatego pokażę wam jak to działa już teraz!

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

Jak widzicie, nieco się pozmieniało.
- tworzymy tablicę pięciu zmiennych typu float
- tworzymy wskaźnik do tablicy. *Uwaga:* gdy wskazujemy na tablicę *nie musimy uzywać znaku &*
- wewnątrz pętli wstawiamy elementy do tablicy "b" za pomocą wskaźnika. Dlaczego?
	- wskaznikB *wskazuje* na miejsce w pamięci pierwszego elementu. Sam jednak jest *adresem,* prawda?
	- wewnątrz adresu dodajemy "i" które początkowo wynosi 0. Mamy więc wciąż do czynienia z tym samym adresem.
	- całe wyrażenie jest jednak w nawiasie. Po lewej stronie nawiasu: gwiazdka. Co ona oznacza?
	- Oznacza ona, że zmieniamy **wartość wskazywaną przez wskaźnik!**
	- Wyświetlenie wskaźnika daje adres, natomiast wyświetlenie ```*wskaznikB``` wyświetli nam **liczbę!**
- w kolejnej pętli po prostu wyświetlamy wartości tablicy b

Jeśli mi nie wierzycie, sprawdźcie sami. Taka *arytmetyka wskaźnikowa* jest bardzo powszechna, jednak jest też niebezpieczna: możemy bardzo łatwo "wyjechać" poza przestrzeń naszej tablicy i nadpisać coś, czego nie chcemy. Dlatego też warto posługiwać się wskaźnikami bardzo ostrożnie :)

Chętnych zapraszam na dawkę zadanek:

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Zmodyfikujcie program z lekcji tak, aby wyświetlać znaki napisane w zmiennej typu string. Użyjcie w tym celu wskaźników.<br/>
2.<br/>
  Zmodyfikujcie z ćw.1 tak, aby napis był wyświetlany od tyłu.
</div>


A póki co wystarczy. Zapraszam na kolejną lekcję o… funkcjach!

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materiały:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_pointers.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Dodatkowe-materialy/Wskazniki/304">Strona cpp0x</a>
- <a href="https://www.youtube.com/watch?v=0DQl74alJzw">Filmik autorstwa "Pasja Informatyki"</a>

</div>