Lekcja 11: Zasięg dostępu

Witajcie! Dzisiejsza lekcja: zasięg dostępu, czyli symulator „jak to zmienna jest ‘not defined’??”
Zasięg dostępu jest niczym innym jak zakresem, w jakim widoczna jest wasza zmienna. W baaaardzo dużym skrócie: zmienną widać jeśli jest na tym samym poziomie albo „wyżej” niż wąsiste nawiasy w których się porusza. Co to oznacza? Zobaczmy na przykładzie:

```c
int a = 5;
if(a > 0){
	std::cout << a;
}
```

W tym przypadku a jest widoczne z poziomu if’a, gdyż a jest zadeklarowane *wyżej.*

```c
int a = 10;
for(i = 0; i < 5; i++){
	std::cout << a << std::endl;
	std::cout << i << std::endl;
}
std::cout << i << std::endl;
```

W powyższym przypadku pętla wykona się bez problemu: będzie wypisywała na przemian „a” oraz „i”. Natomiast po wykonaniu pętli zmienna „i” *przestaje być dla nas dostępna.* Dzieje się tak dlatego, że zadeklarowaliśmy ją już wewnątrz pętli. Podobnie dzieje się w poniższym przypadku:

```c
int a = 10;
if(a < 200){
	int c = a + 15;
}
std::cout << c << std::endl;
```

Zmiena “c” została zadeklarowana *wewnątrz* instrukcji warunkowej, dlatego też nie mamy do niej dostępu “z zewnątrz”. Możemy to jednak w bardzo prosty sposób obejść *deklarując* „c” wyżej:

```c
int a = 10, c = 15;
if(a < 200){
	c = a + 15;
}
std::cout << c << std::endl;
```

Teraz nasz program nie wyrzuca już błędu, natomiast do “c” zostało dopisane 15 :)
Zasięg dostępu zmiennych może być problematyczny dla początkujących, dlatego też postarajcie się przećwiczyć te zagadnienie na poniższych ćwiczeniach!
A póki co do zobaczenia na lekcji o wyjątkach! ;)
