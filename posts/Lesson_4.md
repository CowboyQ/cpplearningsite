Lekcja 4: Pętle

Witaj na kolejnej lekcji! Dzisiejszy temat: pętle, czyli jak program potrafi robić w kółko to samo i dlaczego to takie ważne.

W programowaniu wyróżniamy kilka rodzajów pętli, niemniej jednak każda ma ze sobą coś wspólnego: powtarzają pewne czynności. Dlaczego chcielibyśmy mieć taką funkcjonalność?
Chcemy program który dodaje nam do zmiennej „suma” kolejne cyfry 5 dopóki suma nie osiągnie setki. Możemy to zrobić na dwa sposoby:

```
Całkowita suma = 0;
suma = suma + 5;
suma = suma + 5;
suma = suma + 5;
…
```

Wymieniony powyżej sposób zajmuje bardzo dużo miejsca, bardzo dużo kodu i bardzo dużo pisania (albo kopiowania i wklejania). Jest to idealny przykład czegoś, czego **nie** robimy.
Rzućmy teraz okiem na inny sposób rozwiązania naszego problemu:

```
Całkowita suma = 0;
dopóki(suma jest mniejsza od 100){
    suma = suma + 5;
}
```

Taki sposób z wykorzystaniem pętli jest nie tylko bardziej przejrzysty i mniej wyczerpujący do napisania. Daje nam to pełną kontrolę nad tym co dzieje się w naszym programie: co jeśli zamiast liczyć do 100 będziemy musieli liczyć do 200, 500 czy 10 000? W pierwszym przypadku byłby to co najmniej koszmar.
Dzięki pętli wystarczy zmienić tylko liczbę w okrągłym nawiasie i *bam,* mamy działający program.
