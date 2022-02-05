Lekcja 16: Przeładowanie funkcji
Witajcie! Dzisiaj porozmawiamy o przeładowaniu funkcji. Po części spotkaliście się z tym zjawiskiem na poprzedniej lekcji o klasach, ale przejdźmy do kodu żeby w pełni zrozumieć o co chodzi  
Oto przykład przeładowanej funkcji:

```c
#include <iostream>

int dodawanie(int a, int b){
	return a + b;
}

double dodawanie(double a, double b){
	return a + b;
}

int main(){
	int suma1 = dodawanie(4,6);
	double suma2 = dodawanie(5.5, 3.2);
	std::cout << suma1 << std::endl; //wypisze 10
	std::cout << suma2 << std::endl; //wypisze 8.7
	return 0;
}
```

„Zaraz… czy to znaczy że możemy mieć tę samą nazwę funkcji ale przyjmującą inne parametry?”
Dooookładnie tak!
„Ale.. skąd komputer będzie wiedział której opcji użyć?”
Bardzo proste: *typ danych.* Dla zmiennej typu int kompilator wybierze funkcję zwracającą typ int, analogicznie zrobi też dla double.
Możemy oczywiście zmieniać te funkcje w zależności od tego, czego potrzebujemy, jednak idea jest taka aby pisać funkcje o tych samych nazwach, różniących się jedynie parametrami i typami: dzięki temu nie musimy zapamiętywać kilkunastu nazw funkcji, każda dla innego typu danych ;)
Poniżej znajdziecie kilka zadanek dotyczących przeładowania funkcji, a póki co życzę wam powodzenia!
No i oczywiście do zobaczenia na następnej lekcji! :)
