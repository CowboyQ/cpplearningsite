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

Witajcie ponownie! Dziś pomówimy o pracy na plikach: jak odczytać plik oraz zapisać coś do niego. Zobaczmy na czym to polega i zaczniemy od zapisu *do* pliku:

```c
#include <iostream>
#include <fstream>

int main(){
	std::ofstream mojPlik(„test.txt”);
	mojPlik << „Zapisujemy fragment tekstu do pliku, yay!”;
	mojPlik.close();
	return 0;
}
```

Pomówmy o zmianach i nowościach w kodzie:
- dodajemy nową bibliotekę na górze: „fstream” pozwala ona nam na zapis oraz odczyt plików.
- dzięki niej możemy używać dwóch metod: „ofstream” oraz „ifstream”. Pierwsza zapisuje *do* pliku, druga odczytuje *z* pliku.
- za pomocą „<<” możemy zapisać tekst do pliku .txt
- po zakończeniu pracy z plikiem należy zamknąć go poprzez użycie metody close()

„Czy to znaczy, że podobnie możemy odczytywać pliki?”<br/>
No cóż.. podobnie, ale nie do końca. Przedstawię wam przykład:

Plik "test.txt" wygląda następująco:
```
5 20 19 14 2
20 42 5 16
0 3 15 2 18 25
```

Natomiast program wygląda tak:

```c
#include <iostream>
#include <fstream>

int main(){
	std::string tekst;
	std::ifstream mojPlik(„test.txt”);
	while(std::getline (mojPlik, tekst)){
		std::cout << tekst << std::endl;
	}
	mojPlik.close();
	return 0;
}
```
Ten prosty programik pomoże nam wypisać zawartość pliku "test.txt" w konsoli. Otwieramy plik przy pomocy ```ifstream```, po której następuje nazwa zmiennej, dzięki której możemy pracować na pliku. Samą nazwę pliku zamieszczamy w nawiasach obok nazwy zmiennej. *Uwaga:* ścieżka do pliku musi być relatywna do *pliku .cpp*, dlatego też warto zastosować tu mechanizm zabezpiecznia przed pracą na nieistniejącym pliku:

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
		std::cout << "Nie udało się otworzyć pliku." << std::endl;
	}
	return 0;
}
```

Jeden prosty if pozwala nam zabezpieczyć się przed błędem :)<br/>
No ale, samo wypisywanie tekstu w konsoli jest dość nudne, przejdźmy do ciekawszych rzeczy, na przykład przyjmowania danych z pliku.<br/>
Zacznijmy od czegoś prostego: przyjmowanie samych liczb typu całkowitego:

```
#include <iostream>
#include <fstream>

int main(){
	std::ifstream mojPlik("test.txt");
	int a;
	int i = 0;
	int ilosc = 15;
	int tab[ilosc]; //zakładamy że z góry wiemy, ile przyjmujemy liczb
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
		std::cout << "Nie udało się otworzyć pliku." << std::endl;
	}
	return 0;
}
```

Ten program pozwoli nam przyjąć 15 liczb całkowitych, zapisać je do tablicy, a następnie wyświetlić je w konsoli. Zaczyna się robić ciekawie, ale to wciąż bardzo prosty przykład: co jeśli dane będą różniły się typem? No cóż, najpierw potrzebujemy nieco inny plik, nazwijmy go "dane.txt". Wygląda on w ten sposób (wszystkie dane są wymyślone, nie reprezentują one prawdziwych osób):

```
1980 Janusz Kowalski 18.9
1999 Marek Kowalewski 17.5
1975 Jaroslaw Mak 22.45
```

Jak widzimy, mamy tu do czynienia z rokiem urodzenia, imieniem oraz stawką godzinową danego fikcyjnego pracownika. Znając jednak strukturę pliku wiemy, jak możemy się nim zająć:

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
		std::cout << "Nie udało się otworzyć pliku." << std::endl;
	}
	return 0;
}
```

Przeanalizujmy powyższy fragment:
- Wiemy, że mamy trzech pracowników, dlatego też tworzymy zmienną "pracownicy" żeby nie pisać wszędzie 3 (przy zmianie liczby pracowników zmieniamy tylko jedno przypisanie).
- Wworzymy tablice na każdy z typów danych: rok, imię, nazwisko oraz stawkę
- Otwieramy plik, sprawdzamy czy jest otwarty
- Używamy pętli while do "przechodzenia" po pliku:
	- Metoda .eof() zwraca koniec pliku
	- Ale jako, że ją negujemy (wykorzyknik z przodu!) oznacza to, że mówimy kompilatorowi "czytaj linie z pliku dopóki nie napotkasz końca pliku".
- Wewnątrz pętli *wczytujemy kolejno dane*. Wszystkie spacje są ignorowane i czytamy dane do odpowiednich tablic.
- Na końcu zwiększamy zmienną *i* aby kolejne dane były wpisane do następnego miejsca w tablicach.

Jak widzicie, operacje na plikach mogą być skomplikowane, dlatego przeczytajcie tę lekcję bardzo uważnie. Ponadto, jeśli macie jeszcze jakieś pytania zachęcam do skorzystania z dodatkowych źródeł zamieszczonych poniżej.

Jeśli jednak chcecie nieco przećwiczyć działania na plikach, polecam zapoznać się z dostępnymi zadankami ;)

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Zmodyfikujcie powyższy program:<br/>
  Napiszcie klasę "Pracownik" oraz stwórzcie jej obiekty, które będzą przechowywać dane pobrane z pliku .txt<br/>
  Napiszcie konstruktor parametryczny który będzie przyjmował dane pobrane z pliku .txt<br/>
  Napiszcie metody klasy pozwalajace zmieniać dane oraz je wyświetlać (getter'y i setter'y).<br/>
  Napiszcie przełądowaną funkcję która pozwoli na ustawienie pensji pracownika zarówno jako double jak i int<br/>
2.<br/>
  Zmodyfikujcie powyższy program:<br/>
  Analogicznie dla ćw. 1 stwórzcie klasę "Samochód", "Koło" oraz "Karoseria" (Koło i Karoseria będące polami klasy Samochód)<br/>
  Pobierzcie dla nich dane z trzech plików .txt.
</div>

Bawcie się dobrze, i do zobaczenia na kolejnych zajęciach: tym razem z dziedziczenia!

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materiały:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_files.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Dodatkowe-materialy/Obsluga-plikow/305">Strona cpp0x</a>
- <a href="https://www.cplusplus.com/doc/tutorial/files/">Strona cplusplus</a>
- <a href="https://www.youtube.com/watch?v=h2Taf16gQDI">Filmik autorstwa "Pasja Informatyki"</a>

</div>
