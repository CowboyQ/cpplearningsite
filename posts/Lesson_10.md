Lekcja 10: Pętle

Witajcie ponownie! Dzisiejszy temat: pętle. Dziś mamy dość sporo do omówienia, dlatego też przejdźmy do rzeczy.
Pętle wykorzystujemy gdy musimy wykonać jakąś konkretną czynność wiele razy: dodawanie do siebie liczb dopóki nie przekroczymy pewnego progu, modyfikowanie tekstu dopóki nie uzyskamy odpowiedniego efektu… Przykładów może być wiele, dlatego też po prostu przez nie przejdźmy aby dowiedzieć się, na czym polegają pętle 
Zanim jednak do tego przejdziemy, szczypta teorii. Wyróżniamy *trzy* pętle:
- while
- do… while
- for
Pętla while wygląda następująco:

```c
while(warunek){
	//kod;
}
```

Komputer sprawdza warunek, następnie wykonuje kod znajdujący się w pętli. Po zakończeniu znów sprawdza warunek, jeśli jest spełniony to znowu wykonuje kod.. i tak do momentu w którym warunek nie zostanie spełniony.
Dla nas jako programistów oznacza to dwie rzeczy:
- Pętla może nigdy się nie skończyć. Jeśli użyjemy jako warunku „true” pętla będzie się wykonywała w nieskończoność.
- Pętla może nie wykonać się w ogóle. Jeśli warunek nie spełni się nawet za pierwszym razem to kod w pętli nie wykona się ani razu.
Pierwsza kwestia może być dla nas paradoksalnie przydatna. Wyobraźcie sobie program w którym rysujecie i pomyślcie o pętli „while(true)” w kontekście odświeżania ekranu: musi to być robione ciągle, od uruchomienia aż do zakończenia programu. Takie rozwiązanie ma sens, prawda?
Druga kwestia natomiast może być dla nas problematyczna. Co jeśli musimy wykonać jakiś kod ale nie możemy zmienić warunku? Cóż, z pomocą  przychodzi nam bliźniacza pętla: „do while”.
Pętla „do while” ma jedną zasadniczą różnicę: mamy pewność, że wykona się *co najmniej jeden raz.* Spójrzmy na kod:

```c
do{
	//kod;
}while(warunek);
```
Widzicie różnicę? *Najpierw* wykonujemy kod, *później* sprawdzamy warunek: stąd pewność, że kod wykona się co najmniej raz  
Na końcu przedstawię wam nieco bardziej skomplikowaną, lecz niesamowicie funkcjonalną pętlę: „for”.
Spójrzmy na nią w akcji:

```c
for(int i = 0; i < 10; i++){
	//kod;
}
```
Teraz gdy wiemy już z czym mamy do czynienia, czas zrozumieć co, jak i dlaczego:
- pętla dzieli się na trzy „segmenty” oddzielone od siebie *średnikiem*
- pierwszy segment wykonuje się *tylko jeden raz.* Jeśli chcemy używać jakichś zmiennych wewnątrz pętli: to dobry znak aby je zainicjalizować.
- drugi segment to warunek dla którego powinien wykonać się program
- trzeci segment wykonuje się *po każdym* przejściu pętli.
Możliwości jakie to przedstawia są wielkie, ale skupmy się na najczęstszym, podstawowym użytkowaniu:
- w pierwszym segmencie inicjujemy zmienną którą będziemy wykorzystywać *tylko* w tej pętli. Będzie ona istniała *tylko* w niej i nie będziemy mogli jej użyć *poza* nią.
- w drugim segmencie wstawiamy warunek pętli: „pętla ma się wykonywać *dopóki* i jest mniejsze od 10” w naszym przypadku. W momencie kiedy i będzie równe 10 pętla przestanie się wykonywać.
- w trzecim segmencie mówimy pętli, co ma się wydarzyć po *pojedynczym przejściu* pętli: jest to dobre miejsce aby zwiększyć zmienną której używamy w pętli.
Żeby lepiej zobrazować wam tę pętlę, rozważmy poniższy przykład:

```c
int liczby[10];
for(int i = 0; i < 10; i++){
	liczby[i] = 5;
}
```

Program ten tworzy tablicę 10 elementów a następnie, wewnątrz pętli, wypełnia ją cyfrą 5. Zauważcie: i jest wpisane w kwadratowych nawiasach. Co to oznacza?

[insert form here]

Dokładnie! Po każdym przejściu pętli *bierzemy kolejny element tablicy!* Dzięki takiemu rozwiązaniu możemy operować na całej tablicy i wypełniać ją dowolnymi wartościami!
Dziś kolejna duża dawka informacji, dlatego zostawię wam kilka zadanek do przećwiczenia całego tego materiału ;) 
A na następnych zajęciach: zasięg dostępu!
