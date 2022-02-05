Lekcja 17: Operacje na plikach
Witajcie ponownie! Dziś pomówimy o pracy na plikach: jak odczytać plik oraz zapisać coś do niego. Zobaczmy na czym to polega. Zaczniemy od zapisu *do* pliku:

```c
#include <iostream>
#include <fstream>

int main(){
	ofstream mojPlik(„test.txt”);
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
„Czy to znaczy, że podobnie możemy odczytywać pliki?”
No cóż.. podobnie, ale nie do końca. Przedstawię wam przykład:

```c
#include <iostream>
#include <fstream>

int main(){
	string tekst;
	ifstream mojPlik(„test.txt”);
	while(getline (mojPlik, tekst)){
		std::cout << tekst;
	}
	mojPlik.close();
}
```

Jak widzicie, odczytywanie z pliku jest nieco trudniejsze niż zapis, dlatego też przygotowałem dla was kilka ćwiczeń do przerobienia z tą nowością ;)
A póki co bawcie się dobrze i do zobaczenia na kolejnych zajęciach, tym razem z dziedziczenia! :)
