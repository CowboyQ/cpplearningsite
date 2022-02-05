Lekcja 15: klasy cd.
Witam was ponownie! :) 
Pierwsza część nauki o klasach już za nami, dobra robota! Czas jednak poszerzyć nieco nasze informacje, gdyż klasy skrywają o wiele więcej funkcjonalności niż może wam się wydawać!
Przejdźmy jednak do rzeczy, a raczej… Do metod ;)
„Metody” to *funkcje zawarte w klasie.* Pamiętacie funkcje z poprzednich lekcji? Tak? To dobrze, bo chodzi tu o dokładnie to samo. Metody to funkcje danej klasy, umożliwiając nam pracę na atrybutach danej klasy (o czym za chwilkę).
Jak wyglądają takie metody? Spójrzmy na kod przedstawiony poniżej:

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

Jak widzicie, dodaliśmy właśnie *metodę* “getImie” typu string, która zwraca nam zawartość atrybutu “imie”.
„Okej, ale… dlaczego ją zwracamy skoro możemy stworzyć obiekt (np. „ Oosba osoba1”) i wyciągnąć imię w ten sposób?”
Jest to kolejne świetne pytanie, na które odpowiedź jest nieco bardziej skomplikowana.
Widzicie, określanie atrybutów jako „public” jest *złą* praktyką i nie powinno się ich w ten sposób definiować. Wiąże się to z wieloma potencjalnymi problemami: w trakcie pisania kodu można przypadkiem nadpisać jakąś ważną wartość. Można również uzyskać dostęp do czegoś, do czego *nie powinniśmy* mieć dostępu.
„Ale przecież programiści wiedzą co robią, prawda?”
Prawda, jednak kontrolowanie dostępu w dużych projektach byłoby bardzo ciężkie, dlatego też warto odrobinę „utrudnić” sobie pracę aby zaoszczędzić potencjalnych szkód. Ponadto, nie tylko programiści wiedzą co robią…
Wyobraźcie sobie sytuację, gdzie klasa reprezentująca wasze konto bankowe ma same pola typu „public”. Niektórym samo to mogło zmrozić krew w żyłach, ale pójdę o krok dalej: co jeśli jakiś haker zmieniłby ilość pieniędzy na waszym koncie i wpędził was w wielomilionowy debet? Wyzerował wszystkie środki na koncie? Albo po prostu wykasował wasze dane z systemu?
W takich sytuacjach dostęp (oraz jego kontrola) nabiera wyjątkowego znaczenia.
„Ale… my nie piszemy systemów bankowych! Dlaczego nie możemy robić wszystkiego jako ‘public’?”
Ponieważ wyrobienie sobie dobrych nawyków teraz będzie skutkowało w bardziej profesjonalnym kodzie w przyszłości (na co zwróci uwagę każda osoba spoglądająca na wasz program) ;)
Dobra, nagadałem się, czas żebyśmy napisali trochę kodu.
Poznaliście modyfikator „public” więc teraz czas poznać drugi z nich: „private”.
Private sprawia, że *tylko metody danej klasy mają dostęp do zmiennej.* Gdy zmienna jest prywatna, wypisanie „std::cout << osoba.imie << std::endl;” (zakładając że „imie” jest prywatne) wywoła błąd i program się nie uruchomi.
Jak więc dostać się do tej zmiennej z poza programu (czyli np. z funkcji main?)
Bardzo prosto: *tworząc publiczne metody.*
Zauważcie: *tylko metody danej klasy* mają dostęp do zmiennych w klasie. Dlatego też zmienne pozostają dla nas prywatne i zamiast tego używamy publicznych metod *które już mają dostęp.*
Dobra, dość gadania, czas zobaczyć jak to działa w praktyce:

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

Tak wygląda poprawnie napisana klasa: mamy prywatne zmienne oraz publiczne metody aby do nich dotrzeć. Nazewnictwo nie jest tu przypadkowe: tzw. „getter’y i setter’y” w niektórych edytorach tworzą się automatycznie dla każdej zmiennej w klasie (niestety, nie w naszym). Zauważcie: metoda „get” jest zawsze tego samego typu co zmienna, gdyż chcemy ją dzięki tej metodzie zwrócić. Metoda „set” powinna natomiast być typu void, gdyż nie musimy nic zwracać: jedynie ustawiamy wartość atrybutu.
„No dobrze, ale inicjowanie każdej zmiennej w ten sposób jest po prostu niepraktyczne, zwłaszcza gdy mamy ich o wiele więcej!” ktoś może krzyknąć.
I to się zgadza.
Dlatego też wprowadzę wam dwa ostatnie (na dzisiaj) pojęcia: *konstruktory* oraz *destruktor.* Zauważcie: konstruktor**y**, możemy mieć ich więcej niż jeden. Jest to szczególnie przydatne, za chwilkę zobaczycie, dlaczego.
Jak wiecie, w klasie nie podajemy żadnych wartości do atrybutów bezpośrednio. Ale co jeśli chcemy, żeby obiekt klasy miał już zdefiniowane atrybuty *bez potrzeby wywoływania pojedynczych metod?* Innymi słowy: co jeśli chcemy, żeby obiekt klasy zaczynał z jakimiś wartościami domyślnymi?
W tym miejscu pomaga nam konstruktor.
Domyślnie, konstruktor jest wywoływany *zawsze*, gdy tworzymy obiekt. Jest to idealny moment, aby podstawić jakieś domyślne zmienne.
Poprzednio, atrybuty były domyślnie puste dla naszej Osoby. Zróbmy coś z tym!

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

Jeśli myślicie, że program wypisze w konsoli „Jan”, to… macie absolutną rację!
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

W kolejnych lekcjach, gdy nauczymy się operować na plikach, będziemy mogli załadować całą bazę potrzebnych nam danych z pliku, a następnie użyć jej jako parametrów dla konstruktorów! Dzięki takim rozwiązaniom zajęcie, które *mogłoby* zająć tysiące linijek (jeśli pisalibyśmy wszystko ręcznie) może zająć raptem 10-20 przy pomocy pętli, tablic oraz klas.
Mam nadzieję, że spodobała się wam ta lekcja i przybliżyła wam nieco zasadę funkcjonowania klas. Rozumiem też, że jest to strasznie dużo informacji, dlatego też przemyślcie je na spokojnie i „prześpijcie się z tym”. A następnym razem powiemy nieco o przeładowaniu funkcji, do zobaczenia! :)
