Lekcja 3: Instrukcje warunkowe

Witaj na kolejnej lekcji! Dziś porozmawiamy o instrukcjach warunkowych. Może brzmieć to nieco groźnie, ale nie martw się: jest to prostsze niż może Ci się wydawać!

Instrukcje warunkowe pozwalają nam na wykonywanie czynności *pod pewnym warunkiem.* Idealnym przykładem może być przechodzenie przez jezdnie: możemy przemieścić się na drugą stronę *tylko* jeśli widzimy zielone światło. Innym przykładem jest jazda samochodem: możemy jeździć *tylko* jeśli mamy prawo jazdy. Proste, prawda?
Taki zabieg w programowaniu pozwala nam się dostosować do niemal każdej sytuacji. Weźmy przykład pierwszy, czyli przechodzenie przez ulicę.

```
jeżeli(światło jest zielone){
	możemy przejść przez jezdnię;
}
```

Na przykładzie powyższego pseudokodu możemy zauważyć, że warunek który jest sprawdzany znajduje się w okrągłych nawiasach. Wszystko to, co ma się wykonać znajduje się w nawiasach wąsistych (oczywiście ze średnikiem na końcu każdego wyrażenia). Oznacza to, że możemy robić więcej niż jedną rzecz wewnątrz takiej instrukcji! Spójrz na poniższy przykład:

```
jeżeli(światło jest zielone){
	spoglądamy w lewo;
	spoglądamy w prawo;
	przechodzimy przez jezdnię;
}
```

W tym przykładzie wykonujemy powyższe czynności *tylko* jeśli światło jest zielone. Dla człowieka jest to wystarczająca instrukcja ponieważ potrafimy domyślić się, co dzieje się w przeciwnym przypadku. Niestety, komputer nie jest aż tak domyślny jak byśmy tego chcieli, dlatego trzeba mu to powiedzieć wprost:

```
jeżeli(światło jest zielone){
	spoglądamy w lewo;
	spoglądamy w prawo;
	przechodzimy przez jezdnię;
}
w przeciwnym wypadku{
    czekaj na zielone światło;
}
```

Dopiero teraz nasz program byłby w stanie poradzić sobie z przechodzeniem przez ulicę ;)
Warto tu wspomnieć o jeszcze jednym. Co w przypadku, gdybyśmy w ogóle nie stali na przejściu dla pieszych?
Kolejna oczywista dla człowieka sprawa jest dla programu czymś kompletnie nieznanym, dlatego musimy zadbać też o to i ponownie rozwinąć nasz kod.

```
jeżeli(jesteśmy na przejściu dla pieszych){
jeżeli(światło jest zielone){
	spoglądamy w lewo;
	spoglądamy w prawo;
	przechodzimy przez jezdnię;
}
w przeciwnym wypadku{
    czekaj na zielone światło;
    }
}
w przeciwnym wypadku{
    znajdź przejście dla pieszych;
}
```

Jak zauważyłeś czytelniku, instrukcje warunkowe mogą znajdować się wewnątrz instrukcji warunkowych (zarówno części „jeżeli” jak i „w przeciwnym wypadku”). Te z kolei mogą znajdować się wewnątrz *innych* instrukcji warunkowych etc. 

W przypadku dużej ilości takich instrukcji i warunków można bardzo łatwo się pogubić, dlatego polecę Ci dwa proste sposoby radzenia sobie z takimi sytuacjami.
1. Przemyśl swoje rozwiązanie: czy aby na pewno nie da się tego sprawdzić inaczej?
2. Jeśli nie ma innego sposobu, zastosuj wcięcia w kodzie: nie wpływają one na niego wykonanie a zdecydowanie poprawią jego czytelność!
3. Rozbij kod na mniejsze części: w późniejszej części kursu poznasz funkcje, które mogą pomóc zorganizować Twój i ułatwić jego zrozumienie!

