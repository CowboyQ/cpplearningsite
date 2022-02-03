Lekcja 5: Funkcje

Witaj na kolejnej lekcji! Dziś pomówimy o funkcjach, ich działaniu oraz tym dlaczego to słowo (nie)mile kojarzy się z matematyką.

Dla tych którzy są za pan brat z królową nauk, funkcja może kojarzyć się z wykresami bądź wzorami (zazwyczaj oznaczonymi „y = …” bądź „f(x) = …”). Dla innych słowo to może oznaczać jakiś magiczny czar który sprawi że zamienią się w kamień. W programowaniu natomiast oznacza to *obie* te rzeczy, co może wprowadzić was w słuszne zdziwienie.

„A więc funkcja to coś, co może jednocześnie obliczyć jakąś wartość i zamienić nas w kamień?” – możecie spytać.
Ja natomiast odpowiem: „Jeśli tylko chcesz to czemu nie ;)”
Funkcje w programowaniu służą aby wypełniać zlecone przez nas zadania. Czy tym zadaniem będzie obliczenie sumy kilku liczb, stworzenie modelu samochodu czy też rzucenie na kogoś zaklęcia: to zależy tylko od nas, czyli programistów. Na razie zapamiętaj, że funkcje „robią rzeczy za nas”.
A więc jak działają funkcje?
Wyobraźmy sobie program do składania samochodu: mamy za zadanie zdefiniować jego części, opisać je a następnie złożyć w całość. W teorii wyglądałoby to mniej więcej następująco:

```
Koło koło_1;
koło_1.kolor = czarny;
Koło koło_2;
koło_2.kolor = czarny;
…
Karoseria karoseria_1;
karoseria_1.kolor = niebieski;
Szyba szyba_1;
szyba_1.przeźroczystość = 20%;
…
Samochód samochód;
samochód = połącz: koło_1, koło_2, …
```

W zależności od ilości części (i poziomu skomplikowania naszego programu) może się on stać bardzo, **bardzo** długi, a przez to mało czytelny. Dlatego też żeby nie zaśmiecać naszego „głównego” programu delegujemy wszystkie te zadania funkcji zostawiając tylko gotowy samochód w naszym głównym programie. Spójrz na poniższy przykład z wykorzystaniem funkcji:

```
Program:
	Samochód samochód;
	samochód = Funkcja();

Funkcja:
	Koło koło_1;
	koło_1.kolor = czarny;
	Koło koło_2;
	koło_2.kolor = czarny;
	…
	Karoseria karoseria_1;
	karoseria_1.kolor = niebieski;
	…
	Siedzenie siedzenie_1;
	siedzenie_1.materiał = skóra;
	Szyba szyba_1;
	szyba_1.przyciemnienie = 20%;
	…
	samochód = połącz: koło_1, koło_2, …
```

Dzięki takiemu zabiegowi nasz główny program wygląda o wiele, *wiele* ładniej. Niestety, nasza Funkcja bardzo na tym ucierpiała. Możemy jednak usprawnić jej wygląd: czemu by nie zastosować pomysłów z poprzednich lekcji: tablic oraz pętli? Wszystkie koła (tak jak i szyby, siedzenia) można trzymać w tablicach, dzięki czemu odnosimy się do ich elementów zamiast do pojedynczych zmiennych. Podobnie pętle mogą nam pomóc w montażu: zamiast pisać to samo przypisanie 4 razy możemy napisać je *raz* wewnątrz pętli!  
Zastosujmy te pomysły i zobaczmy nasz nowy program:

```
Program:
	Samochód samochód;
	samochód = Funkcja();
Funkcja:
	Koło koła[4];
	Siedzenie siedzenia[4];
	Szyba szyby[4];
	Karoseria karoseria_1;
	Dla każdego elementu w „koła”:
		koła.kolor = czarny;
	Dla każdego elementu w „siedzenia”:
		siedzenia.materiał = skóra;
	Dla każdego elementu w „szyby”:
		szyby.przyciemnienie = 20%;
	karoseria.przymocuj(koła, siedzenia, szyby);
```

Teraz wygląda to o wiele lepiej, prawda?
Nasz program wygląda schludnie, Funkcja robi tu praktycznie całą robotę, jest pięknie!
Na początku wspominałem, że funkcje istnieją, żeby „robić rzeczy za nas” i jest to jak najbardziej prawda. Niestety, zapomniałem wspomnieć, że czasami musimy te „rzeczy” napisać sami ;)
Niektórym z was może się wydawać, że właśnie zmarnowaliśmy całą lekcję. „Przecież przenieśliśmy tylko kawałek kodu z jednego miejsca do drugiego, co za różnica?”
I w powyższych przypadkach różnicy faktycznie nie ma. Ot, kod wykona się gdzieś indziej: równie dobrze można było zostawić go w Programie.
**Ale**
Nie zrobiliśmy tego z dwóch powodów:
- Po pierwsze, to dobra praktyka aby Program był jak najprostszy i jak najbardziej czytelny.
- Po drugie… Rozważcie poniższy kod:

```
Program:
	Samochód samochody[100];
	Dla każdego elementu w „samochody”:
		samochód = Funkcja();
Funkcja:
	Koło koła[4];
	Siedzenie siedzenia[4];
	Szyba szyby[4];
	Karoseria karoseria_1;
	Dla każdego elementu w „koła”:
		koła.kolor = czarny;
	Dla każdego elementu w „siedzenia”:
		siedzenia.materiał = skóra;
	Dla każdego elementu w „szyby”:
		szyby.przyciemnienie = 20%;
	karoseria.przymocuj(koła, siedzenia, szyby);
```

Voila. Właśnie stworzyliśmy całą fabrykę samochodów dodając raptem dwie linijki kodu. Pomyślcie teraz, jak mozolne i niepraktyczne byłoby pisanie tego samego kodu w kółko.
Drugim powodem dla którego potrzebujemy funkcji jest możliwość ponownego użycia *tego samego kodu* bez potrzeby przepisywania go. Jeśli planujemy wykorzystać jakiś fragment kodu więcej niż raz to czasami warto oddelegować go do funkcji, gdzie będzie możliwe korzystanie z niego kiedy tylko trzeba 
Niektórzy mogą pomyśleć „Okej, fajnie, ale… Każdy z naszych samochodów jest dokładnie taki sam. Co jeśli chcemy samochody o różnych kolorach? Albo o siedzeniach z innych materiałów?”
Jest to bardzo dobre pytanie, a odpowiedź na nie jest jeszcze prostsza: *parametry.*
Parametrami funkcji zajmiemy się później: na razie zapamiętajcie, że są to dodatkowe informacje dla naszej funkcji, aby pracowała tak jak tego chcemy. Dzięki parametrom możemy dostarczyć funkcji informacji typu „Potrzebuję 15 żółtych samochodów, 40 zielonych i 200 czarnych. Z tych żółtych 5 z nich ma mieć skórzane siedzenia, chromowane koła…” etc. Możemy składać pełne zamówienia, ale musimy pamiętać: jeśli chcemy takich funkcjonalności to musimy najpierw przystosować do tego naszą funkcję. Ale o tym opowiem już innym razem ;)
Póki co natomiast musze wam złożyć moje gratulacje: właśnie skończyliście wstęp do kursu programowania!! Jestem z was wszystkich dumny i obiecuję, że na następnej lekcji zajmiemy się już kodem w C++ 
Idąc jednak do przodu nie zapominajcie, że rozpisywanie pseudokodu czy też schematy blokowe są wykorzystywane nie tylko przez początkujących, ale przez specjalistów i wielkie korporacje. Dlaczego? Ponieważ o wiele łatwiej zrozumieć działanie programu za pomocą kolorowego rysunku ze strzałkami zamiast zagłębiać się w setki tysięcy linijek kodu na przestrzeni kilkudziesięciu różnych plików rozsianych po całym projekcie ;)
Schematy blokowe i pseudokod pomogą wam również w szukaniu problemów w programie: jeśli robi on coś czego nie chcecie to może błąd tkwi w logice programu zamiast w samym kodzie? Schemat blokowy może wam w prosty sposób pomóc w znalezieniu takich błędów 
No, ale nie przedłużam: dziękuję wam za dotychczasowy czas i życzę wam powodzenia w dalszej części kursu, do zobaczenia na następnej stronie!
