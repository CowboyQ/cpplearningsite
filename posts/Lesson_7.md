Lekcja 7: Typy danych w C++
Witajcie ponownie! Dziś pomówimy o typach danych w C++!
Niektórzy z was mogą spytać „Zaraz… czy nie mieliśmy już takiego tematu?”
Jeszcze jak! Teraz jednak gdy wiecie *jakie* mamy typy danych czas nauczyć się, jak je *zaimplementować* w programie.
Przechodząc jednak do kodu, zadeklarujmy kilka zmiennych żeby zobaczyć, o co w tym wszystkim chodzi :)

```c
#include <iostream>
#include <string>

int main(){
	//int, czyli liczby całkowite
	int a = 5;
	int b = -20;
	//float, czyli liczby zmiennoprzecinkowe
	float c = -3.15;
	float d = 21.37;
	//double, czyli *rowniez* liczby zmiennoprzecinkowe
	double e = 4.2;
	double f = -92.3241;
	//char, czyli znaki
	char g = 'M';
	char h = 'q';
	//string, czyli napisy
	std::string l = "witajcie!";
	std::string m = "Wiedzieliscie, ze monza wpisywac tu cale zdania?";
	//boolean (zapisywane "bool"), czyli wartosci prawda/falsz
	bool n = true;
	bool o = false;
	return 0;
}
```

Okej, wszystko wygląda bardzo ładnie, fajnie, ale możecie mieć kilka pytań:
- Skoro float i double robią to samo to po co dwa osobne typy?
Jak się okazuje, float i double *nie* są takie same… chociaż są bardzo, bardzo podobne. Oba typy przechowują liczby zmiennoprzecinkowe, ale różnią się między sobą rozmiarem. *Float* zajmuje 32 bity, natomiast *double* zajmuje ich 64. 
- Dlaczego przy *char* używamy apostrofu, natomiast przy string widnieje cudzysłów?
*Teoretycznie* możemy w oby przypadkach wykorzystać apostrof. Albo w obu cudzysłów. Niemniej jednak oznaczenie char apostrofem jest czysto estetyczne i pokazuje w naszym programie że chcemy znak zamiast napisu.
Koniec końców nie chcemy aby nasz kod *tylko* działał: nie zaszkodzi też aby wyglądał dobrze ;)
- Przy „string” jest dopisane „std::”, a przy innych typach danych już nie… dlaczego?
Bardzo proste: string nie jest *prymitywnym* typem danych jak reszta (tak, te typy naprawdę są nazywane prymitywami). Typ ten znajduje się w przestrzeni nazw *std* (co jest skrótem od „standard”, o przestrzeni nazw powiemy później), nie jest on „domyślnie” dla nas dostępny, dlatego też musimy go przywołać dopisując „std::”.
Dużo pytań, jeszcze więcej odpowiedzi, ale… jak to wszystko działa w praktyce? Jest tylko jeden sposób żeby się dowiedzieć i chyba wszyscy wiemy, jaki to sposób ;)
Spróbujmy napisać program dodający do siebie dwie liczby typu całkowitego.

```c
#include <iostream>
int main(){
	//deklarujemy zmienne
	int a, b, suma;
	//definiujemy zmienne
	a = 5;
	b = 7;
	//obliczamy sume
	suma = a + b;
	//wypisujemy sume
	std::cout << suma;
	return 0;
}
```

Nie jest to zbyt skomplikowane. Nie jest to również zbyt odkrywcze: okienko konsoli wypisze nam „12” i tyle.
A co jeśli dodamy int oraz float? Albo na odwrót? I gdzie umieścimy wynik? Czy w ogóle trzeba go gdzieś umieszczać?

```c
#include <iostream>
int main(){
	int a, suma;
	float b;
	a = 3;
	b = 5.5;
	suma = a + b;
	std::cout << suma;
	return 0;
}
```

Jak myślicie, co wypisze taki program?
[insert form]
Tak, zgadliście! Odpowiedzią jest 8.
„Ale… dlaczego nie 8.5?” – może zapytać któreś z was.
Żeby odpowiedzieć na to pytanie należy sprawdzić, jakiego typu zmienną jest *suma,* gdyż to tam przechowujemy wynik. Jest to *int*, co oznacza liczbę całkowitą, *co z kolei* oznacza że nie może przechowywać części „po przecinku”, więc zostaje ona po prostu ucięta  
A jak działa to w drugą stronę?

```c
#include <iostream>
int main(){
	int a;
	float b, suma;
	a = 3;
	b = 5.5;
	suma = a + b;
	std::cout << suma;
	return 0;
}
```

Jaki uzyskamy wynik tym razem?
[insert form]
Dokładnie! Wynik to już solidne 8.5, ponieważ zmienna przechowująca sumę jest typu *float,* więc może przechować część dziesiętną :)
„Okej, ale powiedział Pan że możemy równie dobrze nie potrzebować zmiennej ‘suma’… czy to prawda?”
Jeszcze jak!
Na dobrą sprawę możemy skrócić nasz program i wypisać wynik od razu na wyjście:

```c
#include <iostream>
int main(){
	int a;
	float b;
	a = 3;
	b = 5.5;
	std::cout << a + b;
	return 0;
}
```
Jako że nie przypisujemy teraz wyniku do żadnej zmiennej, to… wyświetli się 8 czy 8.5?
[insert form]
Dokładnie, brawo!
Program wyświetli 8.5 ponieważ „pod maską” nastąpiła konwersja wyniku do typu *float* aby nie stracić części dziesiętnej. Gdybyśmy mieli do czynienia z dwoma liczbami typu *int* nie byłoby potrzeby takiej konwersji, ale tutaj jest ona bardzo przydatna :)
„Brzmi logicznie, ale… co ze znakami?”
To akurat bardzo dobre pytanie. Napiszcie program który dodaje do siebie dwa znaki, zobaczcie co się stanie. Spróbujcie napisać go zarówno podstawiając wynik pod zmienną i wypisując ją jak i wypisując wynik bezpośrednio na wyjście ;)


Gotowi? W takim razie sprawdźmy to: najpierw z podstawieniem

```c
#include <iostream>
int main(){
	char a, b, c;
	a = ‘a’;
	b = ‘b’;
	c = a + b;
	std::cout << c;
	return 0;
}
```

Takiej odpowiedzi nie spodziewał się chyba nikt (no, może poza mną). Wygląda to na jakiś dziwny znaczek, prawda? Coś tu musi być nie tak… Może sumę znaków trzeba wypisywać bezpośrednio na wyjście..?
Sprawdźmy!

```c
#include <iostream>
int main(){
	char a, b;
	a = ‘a’;
	b = ‘b’;
	std::cout << a + b;
	return 0;
}
```

Mam nadzieję, że ponownie was zaskoczyłem :)
Tak, to liczba. Nie przecierajcie oczu ani ekranu monitora, to powinna być liczba.
Zdradzę wam nawet pewien sekret.
*Wszystko w programowaniu jest liczbą jeśli tylko zejdziemy wystarczająco nisko ;)*
Nie jest to jednak ani przypadek, ani błąd: jest to oznaczenie tzw. *kodu ASCII.*
Tablica kodów ASCII jest w każdym komputerze i dekoduje ona litery oraz inne znaki specjalne.
Praca na znakach byłaby niesamowicie ciężka zarówno dla komputerów, jak i dla ludzi pracujących z komputerami. Dlatego też każdy znak jest zakodowany jako jakaś konkretna liczba: komputer przetwarza ją i dopiero na samym końcu podmienia na litery które możemy swobodnie czytać :)
Może się to wydawać dziwne, ale wierzcie mi: takie rozwiązanie ma bardzo wiele plusów o których przekonacie się na przyszłych zajęciach :)
A póki co kończymy, wystarczająco was wymęczyłem tymi informacjami… Do zobaczenia na kolejnej lekcji, gdzie opowiemy sobie o tablicach!

