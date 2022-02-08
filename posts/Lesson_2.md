<h2>Lekcja 2: Wyrażenia</h2>

Witajcie na kolejnej lekcji! Tym razem porozmawiamy o zmiennych. Jeśli ta nazwa przypomina wam coś związanego z matematyką, to nie mylicie się: te tematy są dość blisko powiązane ;)

Zmienne są istotną częścią programu: pozwalają nam one zapisywać potrzebne dane oraz operować nimi w potrzebny dla nas sposób.

Dużo gadania, mało pokazywania, więc przejdźmy do sedna.

Chcemy zapisać nasz wiek w zmiennej. Jak to zrobić?

Najpierw musimy *zadeklarować* programowi, że w ogóle potrzebujemy taką zmienną. Kolejnym krokiem jest przypisanie naszego wieku do tej zmiennej. Wygląda to następująco.

```c
Całkowita wiek;
wiek = 20;
```

Z tych dwóch linijek (pseudo) kodu możemy wyciągnąć wiele przydatnych informacji, dlatego rozłóżmy je na czynniki pierwsze.

„Całkowita” odnosi się do *typu* danych z poprzedniej lekcji, natomiast „wiek” to nazwa naszej zmiennej. Ponownie: najpierw podajemy *typ*, później podajemy *nazwę* zmiennej. Proste, prawda? :)

Jeśli jesteście spostrzegawczy, to możecie zauważyć również średnik na końcu. O dziwo nie jest to niedopatrzenie autora.

Programowanie jest językiem nie tylko z nazwy. Każde zdanie w „normalnym” języku kończymy kropką, natomiast każde zdanie w programowaniu kończymy średnikiem. Jeśli nie do końca wiecie kiedy dokładnie go używać, nie martwcie się: będzie to omówione w kolejnych lekcjach :)

Na razie wróćmy do naszego pseudokodu i spójrzmy na drugą linijkę: do zmiennej „wiek” przypisujemy cyfrę 20. Tylko tyle i aż tyle: od teraz za każdym razem gdy wypiszemy „wiek” pojawi się 20.

Możemy wykorzystywać różne typy danych w zależności, czego aktualnie potrzebujemy. Pojemność baku?

```
Zmiennoprzecinkowa pojemnosc;
pojemnosc = 12.5;
```

Czyjeś dane osobowe?

```
Słowo imie, nazwisko;
imie = "Jan";
nazwisko = "Kowalski";
```

Obecność na zajęciach?

```
Logiczny obecnoscJasKowalski;
obecnoscJasKowalski = false;
```

Typu danych służą nam w każdym miejscu i za ich pomocą możemy opisywać otaczajacy nas świat. Warto jednak wspomnieć, że pojedyncze zmienne mogą nam czasem nie wystarczyć, dlatego też powstały *tablice.* Są one w stanie przechowywać kila(naście/dziesiąt/set/tysięcy) zmiennych **tego samego typu**, jedna za drugą.<br/>
Więc zamiast tego:
```
Logiczny obecnoscJasKowalski;
obecnoscJasKowalski = false;
Logiczny obecnoscAniaKowalska;
obecnoscAniaKowalska = true;
...
```

Możemy użyć takiego rozwiązania:
```
Logiczny obecnosc5B[30];
obecnosc5B[0] = true;
obecnosc5B[1] = false;
obecnosc5B[2] = true;
```

...gdzie 0, 1, 2 itd. to numerki w dzienniku. Jeśi was to dziwi, spieszę z pomocą: programiści wszystko numerują od **zera**, *nie* od jedynki. Jest to coś co naprawdę warto zapamiętać :)

"Okej, bardzo oszczędzamy na deklarowaniu tych zmiennych... ale czy to wciąż najlepsze rozwiązanie?" możecie spytać.
Teraz może się tak nie wydawać, ale wierzcie mi: używanie tablic niesamowicie nam pomoże w przyszłości :)
