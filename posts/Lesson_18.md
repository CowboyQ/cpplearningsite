Lekcja 18: Dziedziczenie
Witajcie! Dziś zajmiemy się dziedziczeniem w klasach!
Klasy są bardzo obszernym tematem, dlatego wracamy do niego jak bumerang ;)
Dziś wyjaśnię wam zasady dziedziczenia, które pozwala nam na korzystanie klasie z metod *innej klasy!*
Przejdźmy jednak do sedna: dziedziczenie pozwala klasie *dziecku* korzystać z metod oraz atrybutów *rodzica.* Nazewnictwo nie jest tu przypadkowe: dzięki odniesieniu do relacji rodzinnych możemy lepiej zrozumieć zasady panujące w dziedziczeniu. No ale mniejsza z tym, przejdźmy do jakiegoś kodu ;)

```c
#include <iostream>

class Pojazd{
	public:
		std::string marka = „Ford”;
		void honk(){
			std::cout << „Honk honk!” << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		std::string model = „Mustang”;
};

int main(){
	Auto autko1;
	autko1.honk();
	std::cout << autko1.marka + „ „ + autko1.model << std::endl;
	return 0;
}
```

Zobaczmy, co dzieje się w kodzie: 
- deklarujemy klasę „Pojazd” mającą jeden atrybut oraz jedną metodę honk().
- poniżej deklarujemy klasę „Auto”, po czym (po dwukropku) oznaczamy klasę „Pojazd” jako *rodzica* klasy Auto. Teraz Auto ma dostęp do *publicznych* metod oraz atrybutów klasy Pojazd.
- oznacza to, że obiekt klasy *Auto* może używać metod klasy Pojazd (oraz ma dostęp do atrybutów klasy Pojazd).
Jest to bardzo użyteczne, gdyż dobrze napisana metoda w klasie rodzica może być później wykorzystywana przez dzieci bez konieczności przepisywania takiego samego kodu kilka razy 
Zabawa nie kończy się jednak w na jednej klasie!
Dziedziczenie działa wielopoziomowo (jeśli tylko tego chcemy). Zobaczcie:

```c
class Pojazd{
	public:
		std::string marka = „Ford”;
		void honk(){
			std::cout << „Honk honk!” << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		std::string model = „Mustang”;
};

class KonkretnyModel: public Auto{
	public:
		std::string seria = “GT500”;
}

int main(){
	KonkretnyModel autko1;
	autko1.honk();
	std::cout << autko1.marka + „ „ + autko1.model + “ “ + autko1.seria << std::endl;
	return 0;
}
```

Dzięki takiej modyfikacji w kodzie mam dostęp do klasy Pojazd, Auto *oraz* KonkretnyModel! Niemniej jednak warto uważać, gdyż przy wielopoziomowym dziedziczeniu może nastąpić konflikt nazewnictwa atrybutów oraz metod, dlatego też musimy być ostrożni.
Warto też wspomnieć, że klasa może również dziedziczyć po *wielu* innych klasach:

```c
class Model: public Pojazd, public Auto{ … }
```

Ponownie jednak, należy zachować ostrożność i przemyśleć, gdzie i w jakim stopniu chcemy aby występowało dziedziczenie między klasami :)
Jak do tej pory widzieliście, używaliśmy jedynie modyfikatora “public”, aby ułatwić zrozumienie zasad panujących w dziedziczeniu. Co jednak z innymi modyfikatorami?
- modyfikator public, jak wiecie, pozwala na pełen dostęp do atrybutów oraz metod.
- modyfikator private *nie pozwala* na odczyt lub zapis *klasie podrzędnej.* Oznacza to, że jeśli klasa Auto jest dzieckiem klasy Pojazd, natomiast klasa Pojazd ma pola (lub metody) private, to klasa Auto **nie ma dostępu** do tych atrybutów oraz metod.
- modyfikator *protected.* Tutaj sprawa jest nieco bardziej skomplikowana…
Rozważmy przykład:

```c
#include <iostream>

class Pojazd{
	public:
		std::string marka = „Ford”;
		void honk(){
			std::cout << „Honk honk!” << std::endl;
		}
	private:
		int pojemnosc;
	protected:
		int siedzenia;
		void wypisz(){
			std::cout << “Jestesmy w ‘protected’!” << std::endl;
		}
};

class Auto: public Pojazd{
	public:
		std::string model = „Mustang”;
		int getSiedzenia(){
			return siedzenia;
		}
		void setSiedzenia(int x){
			siedzenia = x;
		}
};

int main(){
	Auto autko1;
	autko1.honk(); //działa
	std::cout << autko1.pojemnosc << std::endl; //nie zadziała: pojemność jest private
	autko1.setSiedzenia(5); //zadziała, siedzenia są protected
	std::cout << autko1.getSiedzenia() << std::endl;	//zadziała, siedzenia są protected
	autko1.wypisz(); //nie zadziała, wypisz() jest protected
	return 0;
}
```

Po przeanalizowaniu powyższego kodu możecie być nieco zdziwieni. „Mamy dostęp do atrybutów protected, ale do metod już nie?”. No cóż… Dokładnie tak! Dlatego też pisząc kod metody powinny być albo publiczne, albo prywatne: metody napisane z modyfikatorem „protected” będą niedostępne dla klas dziedziczących więc nie ma sensu ich tam wstawiać ;)
No ale, na dziś wystarczy tych informacji. Na następnej (i niestety ostatniej już) lekcji zajmiemy się czymś co tajemniczo nazywa się „polimorfizm”. Do zobaczenia ;)
