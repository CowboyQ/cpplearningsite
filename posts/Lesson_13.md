Lekcja 13: Funkcje

Witajcie ponownie! Dziś przejdziemy do funkcji oraz tego, jak niesamowicie przydatne są one w programowaniu!
Zacznijmy jednak od początku. Weźmy przykładową funkcję:

```c
int dodawanie(int a, int b);
```

To, moi drodzy, jest *deklaracja* funkcji. Mówimy komputerowi, że napiszemy funkcję typu *int*, nazwaliśmy ją „dodawanie” oraz *przyjmuje dwa parametry typu int.* Co to te parametry? No cóż… Pamiętacie lekcję o zasięgu dostępu?
Jeśli chcemy aby nasza funkcja pracowała na zmiennych z innej części programu, musimy je *przekazać.* Robimy to właśnie dzięki parametrom!
No ale, zobaczmy jaka jest *definicja* funkcji.
Pamiętajcie: *deklaracja* mówi komputerowi tylko o *istnieniu* funkcji. Naszym zadaniem jest teraz ich *zaimplementowanie.* Robimy to następująco:

```c
int dodawanie(int a, int b){
	int suma = a + b;
	return suma;
}
```

Teraz wiemy dokładnie jak działa funkcja „dodawanie”: bierze dwie liczby podane jako argumenty, a następnie zwraca ich sumę!
Jeśli jednak troszczymy się o miejsce w pamięci możemy dodatkowo zoptymalizować nasz kod:

```c
int dodawanie(int a, int b){
	return (a + b);
}
```
Dzięki temu obchodzimy operację tworzenia zmiennej oraz przypisania jej wartości, oszczędzając zarówno czas jak i miejsce :)
„Dobrze, rozumiem, ale… jak mogę użyć takiej funkcji?” – możecie spytać. Spieszę z odpowiedzią: *bardzo prosto.*
Spójrzmy na całokształt programu:

```c
#include<iostream>
int dodawanie(int a, int b){
	return (a + b);
}

int main(){
	int pierwsza, druga;
	std::cout << „Podaj pierwszą liczbę:” << std::endl;
	std::cin >> pierwsza;
	std::cout << „Podaj drugą liczbę:” << std::endl;
	std::cin >> druga;
	int suma = dodawanie(pierwsza, druga);
	std::cout << „Suma wynosi:” << suma << std::endl;
	return 0;
}
```

Teraz mając pełny obraz programu możemy pomówić o tym, jak działa.
Najpierw deklarujemy dwie zmienne w naszym *głównym* programie: „pierwsza” oraz „druga”. Użytkownik wpisuje je, po czym następuje wywołanie funkcji dodawanie. Warto zatrzymać się w tym miejscu i zauważyć kilka rzeczy:
- funkcja „dodawanie” jest typu *int*. Oznacza to, że *zwraca* ona wartość typu int. Zwracana wartość jest następnie zapisywana do zmiennej „suma” w funkcji main.
- każda funkcja posiadająca typ inny niż „void” (o nich za chwilkę) coś zwraca, a tę zwracaną wartość można zapisać. Jest to dość przydatna informacja zwłaszcza gdy zastanawiamy się, jakiego typu powinniśmy napisać funkcję.
- w funkcji main podaliśmy do funkcji „dodawanie” dwa parametry: „pierwsza” oraz „druga”; nie podawaliśmy ich typów jak w przypadku deklaracji (czy definicji; obie muszą być takie same). Deklaracja i definicja wymaga *typu* oraz *nazwy* zmiennych, którymi będzie operować
- nazwy zmiennych przy wywołaniu funkcji oraz przy jej deklaracji *nie muszą być takie same!* W funkcji main nazywają się „pierwsza” i „druga”, natomiast w funkcji dodawanie nazywają się „a” i „b”, ale chodzi o te same liczby. Liczy się jedynie kolejność ich wpisywania.
Mam nadzieję, że to rozwiało nieco waszych wątpliwości na temat funkcji. Jutro napiszę do nich kilka zadań jak tylko mózg przestanie mi parować. Powodzenia! :D
