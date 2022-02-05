Lekcja 19: Polimorfizm
Witajcie ponownie! :) Dziś pomówimy nieco o polimorfizmie, ponieważ samo jego założenie nie jest zbyt skomplikowane.
Polimorfizm, podobnie jak dziedziczenie, pozwala nam na ponowne użycie i modyfikację wcześniej napisanego kodu. Spójrzmy na poniższy przykład:

```c
#include <iostream>
class Figura{
	protected:
		float szerokosc, wysokosc;
	public:
		void setWartosci(float a, float b){
			szerokosc = a;
			wysokosc = b;
		}
};

class Prostokat: public Figura{
	public:
		float pole(){
			return szerokosc*wysokosc;
		}
};

class Trojkat: public Figura{
	public:
		float pole(){
			return (szerokosc * wysokosc)/2;
		}
};
int main(){
	Prostokat prostokat;
	Trojkat trojkat;
	prostokat.setWartosci(5,10);
	trojkat.setWartosci(5,10);
	std::cout << prostokat.pole() << std::endl; //wypisze “50”
	std::cout << trojkat.pole() << std::endl; //wypisze „25”
	return 0;
}
```

Jak widzicie, pomimo tego że obie klasy dziedziczą z klasy “Figura” oraz mają tę samą metodę “pole”, obie te metody działają odmiennie. Dzięki takiemu rozwiązaniu możemy korzystać z tej samej nazwy dla wszystkich metod bez potrzeby nazywania ich odmiennie (a co się za tym wiąże: konieczności zapamiętywania odmiennych nazw metod dla każdej klasy). Wynik będzie wciąż zależał od obiektu dla którego wywołamy metodę, ale oszczędza nam to nieco skołowania ;)

