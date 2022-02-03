Lekcja 8: Tablice
Witajcie ponownie! Cieszę się, że was widzę :)
Temat dzisiejszej lekcji może wam się kojarzyć ze szkolną ławką oraz niekończącymi się równaniami do przepisania w zeszycie… Ale nic bardziej mylnego! Całe szczęście dzięki tablicom możemy oszczędzić sobie bardzo dużo czasu oraz, przede wszystkim: miejsca w kodzie.
No ale: mniej ględzenia więcej kodzenia! Spójrzmy na poniższy przykład :)

```c
#include <iostream>
int main(){
	//pierwszy sposób tworzenia tablicy
	int calkowite[] = {1, 2, 3};
	//drugi sposób tworzenia tablicy
	float przecinkowe[3];
	przecinkowe[0] = 3.3;
	przecinkowe[1] = 2.25;
	przecinkowe[2] = 19.45678;
	std::cout << calkowite[1];
	return 0;
}
```

No cóż… tylko tyle i aż tyle!
Aby sprawić żeby zmienna była tablicą wystarczy dodać kwadratowe nawiasy po nazwie. To czy musimy w nawiasach wpisywać liczbę zależy od tego, jak tworzymy tablicę:
- w pierwszym przypadku *nie musimy* z góry podawać, ile elementów ma mieścić tablica. *Musimy* jednak podać wtedy *wszystkie* jej elementy w nawiasach wąsiastych.
- w drugim przykładzie deklarujemy, że chcemy tablicę typu float z trzema wolnymi miejscami, które później konsekwentnie zapełniamy.
**Uwaga!**
To, że dostajemy od programu tablicę z wolnymi miejscami *nie oznacza, że jest tam pusto.* Wręcz przeciwnie: zapewne znajdują się tam jakieś „śmieci” po programie który uprzednio korzystał z tego miejsca w pamięci. 
Dlatego programując *zawsze* musimy zapełniać takie luki własnymi danymi, zanim będziemy pracować z taką tablicą.
Kiedyś było to bardzo istotne gdyż mogliśmy przypadkiem trafić na coś niebezpiecznego, ale przy obecnych zabezpieczeniach systemu najgorsze, co może nas spotkać, to zły wynik albo wypisanie czegoś co ma mało sensu ;) 
Tablice mogą również przechowywać znaki: wpisywanie pojedynczych znaków do tablicy jest mało efektowne (zwłaszcza gdy istnieje typ „string”), ale niech was to nie zmyli! „Pod maską” każdy string może być traktowany jako tablica znaków, co może być wyjątkowo przydatne w połączeniu z instrukcjami warunkowymi oraz pętlami ;)
Dla przykładu, poniższy program…

```c
#include <iostream>
int main(){
	std::string a = "Abecadło";
	std::cout << a[3];
	return 0;
}
```
…wypisze literę…?
[insert form]
Dokładnie, „c”! String to po prostu wygodna tablica znakowa która pozwala nam między innymi na sprawdzanie (oraz podmianę) poszczególnych liter! 
To tyle na dziś! Na kolejnej lekcji pomówimy nieco o wspomnianych wcześniej instrukcjach warunkowych, czyli jak sprawić aby nasz kod działał w każdej możliwej sytuacji! Do zobaczenia! :)
