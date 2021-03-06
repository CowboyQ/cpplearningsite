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

<h2>Lekcja 17: Operacje na plikach</h2>

Witajcie ponownie! Dzi?? pom??wimy o pracy na plikach: jak odczyta?? plik oraz zapisa?? co?? do niego. Zobaczmy na czym to polega i zaczniemy od zapisu *do* pliku:

```c
#include <iostream>
#include <fstream>

int main(){
	std::ofstream mojPlik(???test.txt???);
	mojPlik << ???Zapisujemy fragment tekstu do pliku, yay!???;
	mojPlik.close();
	return 0;
}
```

Pom??wmy o zmianach i nowo??ciach w kodzie:
- dodajemy now?? bibliotek?? na g??rze: ???fstream??? pozwala ona nam na zapis oraz odczyt plik??w.
- dzi??ki niej mo??emy u??ywa?? dw??ch metod: ???ofstream??? oraz ???ifstream???. Pierwsza zapisuje *do* pliku, druga odczytuje *z* pliku.
- za pomoc?? ???<<??? mo??emy zapisa?? tekst do pliku .txt
- po zako??czeniu pracy z plikiem nale??y zamkn???? go poprzez u??ycie metody close()

???Czy to znaczy, ??e podobnie mo??emy odczytywa?? pliki????<br/>
No c????.. podobnie, ale nie do ko??ca. Przedstawi?? wam przyk??ad:

Plik "test.txt" wygl??da nast??puj??co:
```
5 20 19 14 2
20 42 5 16
0 3 15 2 18 25
```

Natomiast program wygl??da tak:

```c
#include <iostream>
#include <fstream>

int main(){
	std::string tekst;
	std::ifstream mojPlik(???test.txt???);
	while(std::getline (mojPlik, tekst)){
		std::cout << tekst << std::endl;
	}
	mojPlik.close();
	return 0;
}
```
Ten prosty programik pomo??e nam wypisa?? zawarto???? pliku "test.txt" w konsoli. Otwieramy plik przy pomocy ```ifstream```, po kt??rej nast??puje nazwa zmiennej, dzi??ki kt??rej mo??emy pracowa?? na pliku. Sam?? nazw?? pliku zamieszczamy w nawiasach obok nazwy zmiennej. *Uwaga:* ??cie??ka do pliku musi by?? relatywna do *pliku .cpp*, dlatego te?? warto zastosowa?? tu mechanizm zabezpiecznia przed prac?? na nieistniej??cym pliku:

```
#include <iostream>
#include <fstream>

int main(){
	std::string tekst;
	std::ifstream mojPlik("test.txt");
	if(mojPlik.is_open()){
		while(std::getline (mojPlik, tekst)){
		std::cout << tekst << std::endl;
		}
	mojPlik.close();
	}
	else{
		std::cout << "Nie uda??o si?? otworzy?? pliku." << std::endl;
	}
	return 0;
}
```

Jeden prosty if pozwala nam zabezpieczy?? si?? przed b????dem :)<br/>
No ale, samo wypisywanie tekstu w konsoli jest do???? nudne, przejd??my do ciekawszych rzeczy, na przyk??ad przyjmowania danych z pliku.<br/>
Zacznijmy od czego?? prostego: przyjmowanie samych liczb typu ca??kowitego:

```
#include <iostream>
#include <fstream>

int main(){
	std::ifstream mojPlik("test.txt");
	int a;
	int i = 0;
	int ilosc = 15;
	int tab[ilosc]; //zak??adamy ??e z g??ry wiemy, ile przyjmujemy liczb
	if(mojPlik.is_open()){
		while(mojPlik >> a){
			tab[i] = a;
			i++;
		}
	for(i = 0; i < ilosc; i++){
		std::cout << tab[i] << " " << std::endl;
	}
	mojPlik.close();
	}
	else{
		std::cout << "Nie uda??o si?? otworzy?? pliku." << std::endl;
	}
	return 0;
}
```

Ten program pozwoli nam przyj???? 15 liczb ca??kowitych, zapisa?? je do tablicy, a nast??pnie wy??wietli?? je w konsoli. Zaczyna si?? robi?? ciekawie, ale to wci???? bardzo prosty przyk??ad: co je??li dane b??d?? r????ni??y si?? typem? No c????, najpierw potrzebujemy nieco inny plik, nazwijmy go "dane.txt". Wygl??da on w ten spos??b (wszystkie dane s?? wymy??lone, nie reprezentuj?? one prawdziwych os??b):

```
1980 Janusz Kowalski 18.9
1999 Marek Kowalewski 17.5
1975 Jaroslaw Mak 22.45
```

Jak widzimy, mamy tu do czynienia z rokiem urodzenia, imieniem oraz stawk?? godzinow?? danego fikcyjnego pracownika. Znaj??c jednak struktur?? pliku wiemy, jak mo??emy si?? nim zaj????:

```
#include <iostream>
#include <fstream>

int main(){
	std::ifstream mojPlik("dane.txt");
	int pracownicy = 3;
	int rokUrodzenia[pracownicy];
	std::string imie[pracownicy];
	std::string nazwisko[pracownicy];
	double stawka[pracownicy];
	int i = 0;
	if(mojPlik.is_open()){
		while(!mojPlik.eof()){
			mojPlik>>rokUrodzenia[i]>>imie[i]>>nazwisko[i]>>stawka[i];
			i++;
		}
		mojPlik.close();
		for(i = 0; i < pracownicy; i++){
			std::cout << "Pracownik: " << rokUrodzenia[i]
			<< " " << imie[i] <<  " " << nazwisko[i] << " " << stawka[i] << std::endl;
		}
	}
	else{
		std::cout << "Nie uda??o si?? otworzy?? pliku." << std::endl;
	}
	return 0;
}
```

Przeanalizujmy powy??szy fragment:
- Wiemy, ??e mamy trzech pracownik??w, dlatego te?? tworzymy zmienn?? "pracownicy" ??eby nie pisa?? wsz??dzie 3 (przy zmianie liczby pracownik??w zmieniamy tylko jedno przypisanie).
- Wworzymy tablice na ka??dy z typ??w danych: rok, imi??, nazwisko oraz stawk??
- Otwieramy plik, sprawdzamy czy jest otwarty
- U??ywamy p??tli while do "przechodzenia" po pliku:
	- Metoda .eof() zwraca koniec pliku
	- Ale jako, ??e j?? negujemy (wykorzyknik z przodu!) oznacza to, ??e m??wimy kompilatorowi "czytaj linie z pliku dop??ki nie napotkasz ko??ca pliku".
- Wewn??trz p??tli *wczytujemy kolejno dane*. Wszystkie spacje s?? ignorowane i czytamy dane do odpowiednich tablic.
- Na ko??cu zwi??kszamy zmienn?? *i* aby kolejne dane by??y wpisane do nast??pnego miejsca w tablicach.

Jak widzicie, operacje na plikach mog?? by?? skomplikowane, dlatego przeczytajcie t?? lekcj?? bardzo uwa??nie. Ponadto, je??li macie jeszcze jakie?? pytania zach??cam do skorzystania z dodatkowych ??r??de?? zamieszczonych poni??ej.

Je??li jednak chcecie nieco prze??wiczy?? dzia??ania na plikach, polecam zapozna?? si?? z dost??pnymi zadankami ;)

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Zmodyfikujcie powy??szy program:<br/>
  Napiszcie klas?? "Pracownik" oraz stw??rzcie jej obiekty, kt??re b??dz?? przechowywa?? dane pobrane z pliku .txt<br/>
  Napiszcie konstruktor parametryczny kt??ry b??dzie przyjmowa?? dane pobrane z pliku .txt<br/>
  Napiszcie metody klasy pozwalajace zmienia?? dane oraz je wy??wietla?? (getter'y i setter'y).<br/>
  Napiszcie prze????dowan?? funkcj?? kt??ra pozwoli na ustawienie pensji pracownika zar??wno jako double jak i int<br/>
2.<br/>
  Zmodyfikujcie powy??szy program:<br/>
  Analogicznie dla ??w. 1 stw??rzcie klas?? "Samoch??d", "Ko??o" oraz "Karoseria" (Ko??o i Karoseria b??d??ce polami klasy Samoch??d)<br/>
  Pobierzcie dla nich dane z trzech plik??w .txt.
</div>

Bawcie si?? dobrze, i do zobaczenia na kolejnych zaj??ciach: tym razem z dziedziczenia!

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_files.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Dodatkowe-materialy/Obsluga-plikow/305">Strona cpp0x</a>
- <a href="https://www.cplusplus.com/doc/tutorial/files/">Strona cplusplus</a>
- <a href="https://www.youtube.com/watch?v=h2Taf16gQDI">Filmik autorstwa "Pasja Informatyki"</a>

</div>
