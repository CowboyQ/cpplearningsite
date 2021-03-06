<style>
.rad-label {
  display: flex;
  align-items: center;

  border-radius: 100px;
  padding: 10px 16px;
  margin: 10px 0;

  cursor: pointer;
  transition: .3s;
}

.rad-label:hover,
.rad-label:focus-within {
  background: hsla(0, 0%, 80%, .14);
}

.rad-input {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
}

.rad-design {
  width: 18px;
  height: 18px;
  border-radius: 80px;

  background: linear-gradient(to right bottom, hsl(154, 97%, 62%), hsl(225, 97%, 62%));
  position: relative;
}

.rad-design::before {
  content: '';

  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;

  background: hsl(0, 0%, 90%);
  transform: scale(1.1);
  transition: .3s;
}

.rad-input:checked+.rad-design::before {
  transform: scale(0);
}

.rad-text {
  color: hsl(0, 0%, 60%);
  margin-left: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 900;

  transition: .3s;
}

.rad-input:checked~.rad-text {
  color: hsl(0, 0%, 40%);
}

.btn {
  background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
}

.btn:hover {
  color: #fff;
}

.btn .btnspan {
  align-items: center;
  background: #0e0e10;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.btn:hover .btnspan {
  background: transparent;
}

.exercise {
	position: relative;
	max-width: 30em;
	
	background-color: #fff;
	padding: 1.125em 1.5em;
	font-size: 1.25em;
	border-radius: 1rem;
  box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
}

.exercise::before {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	bottom: 100%;
	left: 1.5em; 
	border: .75rem solid transparent;
	border-top: none;

	border-bottom-color: #fff;
	filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
}

.exerciseButton {
  border: 0;
  text-align: center;
  display: inline-block;
  padding: 14px;
  width: 150px;
  margin: 7px;
  color: #ffffff;
  background-color: #36a2eb;
  border-radius: 8px;
  font-family: "proxima-nova-soft", sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 200ms ease-out;
}
</style>

<h2>Lekcja 7: Typy danych w C++</h2>

Witajcie ponownie! Dzi?? pom??wimy o typach danych w C++!
Niekt??rzy z was mog?? spyta?? ???Zaraz??? czy nie mieli??my ju?? takiego tematu????.
Jeszcze jak! Teraz jednak gdy wiecie *jakie* mamy typy danych czas nauczy?? si??, jak je *zaimplementowa??* w programie.
Przechodz??c jednak do kodu, zadeklarujmy kilka zmiennych ??eby zobaczy??, o co w tym wszystkim chodzi :)

```c
#include <iostream>
#include <string>

int main(){
	//int, czyli liczby ca??kowite
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

Okej, wszystko wygl??da bardzo ??adnie, fajnie, ale mo??ecie mie?? kilka pyta??:
- Skoro float i double robi?? to samo to po co dwa osobne typy?
	- Jak si?? okazuje, float i double *nie* s?? takie same??? chocia?? s?? bardzo, bardzo podobne. Oba typy przechowuj?? liczby zmiennoprzecinkowe, ale r????ni?? si?? mi??dzy sob?? rozmiarem. *Float* zajmuje 32 bity, natomiast *double* zajmuje ich 64. 
- Dlaczego przy *char* u??ywamy apostrofu, natomiast przy string widnieje cudzys????w?
	- *Teoretycznie* mo??emy w oby przypadkach wykorzysta?? apostrof. Albo w obu cudzys????w. Niemniej jednak oznaczenie char apostrofem jest czysto estetyczne i pokazuje w naszym programie ??e chcemy znak zamiast napisu. Koniec ko??c??w nie chcemy aby nasz kod *tylko* dzia??a??: nie zaszkodzi te?? aby wygl??da?? dobrze ;)
- Przy ???string??? jest dopisane ???std::???, a przy innych typach danych ju?? nie??? dlaczego?
	- Bardzo proste: string nie jest *prymitywnym* typem danych jak reszta (tak, te typy naprawd?? s?? nazywane prymitywami). Typ ten znajduje si?? w przestrzeni nazw *std* (co jest skr??tem od ???standard???, o przestrzeni nazw powiemy p????niej), nie jest on ???domy??lnie??? dla nas dost??pny, dlatego te?? musimy go przywo??a?? dopisuj??c ???std::???.

Du??o pyta??, jeszcze wi??cej odpowiedzi, ale??? jak to wszystko dzia??a w praktyce? Jest tylko jeden spos??b ??eby si?? dowiedzie?? i chyba wszyscy wiemy, jaki to spos??b ;)
Spr??bujmy napisa?? program dodaj??cy do siebie dwie liczby typu ca??kowitego.

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

Nie jest to zbyt skomplikowane. Nie jest to r??wnie?? zbyt odkrywcze: okienko konsoli wypisze nam ???12??? i tyle.
A co je??li dodamy int oraz float? Albo na odwr??t? I gdzie umie??cimy wynik? Czy w og??le trzeba go gdzie?? umieszcza???

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

Jak my??licie, co wypisze taki program?
[insert form]
Tak, zgadli??cie! Odpowiedzi?? jest 8.
???Ale??? dlaczego nie 8.5???? ??? mo??e zapyta?? kt??re?? z was.
??eby odpowiedzie?? na to pytanie nale??y sprawdzi??, jakiego typu zmienn?? jest *suma,* gdy?? to tam przechowujemy wynik. Jest to *int*, co oznacza liczb?? ca??kowit??, *co z kolei* oznacza ??e nie mo??e przechowywa?? cz????ci ???po przecinku???, wi??c zostaje ona po prostu uci??ta ??? 
A jak dzia??a to w drug?? stron???

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
Dok??adnie! Wynik to ju?? solidne 8.5, poniewa?? zmienna przechowuj??ca sum?? jest typu *float,* wi??c mo??e przechowa?? cz?????? dziesi??tn?? :)
???Okej, ale powiedzia?? Pan ??e mo??emy r??wnie dobrze nie potrzebowa?? zmiennej ???suma?????? czy to prawda????.
Jeszcze jak!
Na dobr?? spraw?? mo??emy skr??ci?? nasz program i wypisa?? wynik od razu na wyj??cie:

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

Jako ??e nie przypisujemy teraz wyniku do ??adnej zmiennej, to??? **wy??wietli si?? 8 czy 8.5?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">8</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">8.5</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Niestety, nie tym razem! Program wy??wietli 8.5 poniewa?? pod mask?? nast??pi??a konwersja wyniku do typu *float* aby nie straci?? cz????ci dziesi??tnej. Gdyby??my mieli do czynienia z dwoma liczbami typu *int* nie by??oby potrzeby takiej konwersji, ale tutaj jest ona bardzo przydatna :)';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Dok??adnie tak! :)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

???Brzmi logicznie, ale??? co ze znakami????<br/>
To akurat bardzo dobre pytanie. Napiszcie program kt??ry dodaje do siebie dwa znaki, zobaczcie co si?? stanie. Spr??bujcie napisa?? go zar??wno podstawiaj??c wynik pod zmienn?? i wypisuj??c j??, jak i wypisuj??c wynik bezpo??rednio na wyj??cie ;)

Gotowi? W takim razie sprawd??my to: najpierw z podstawieniem

```c
#include <iostream>
int main(){
	char a, b, c;
	a = ???a???;
	b = ???b???;
	c = a + b;
	std::cout << c;
	return 0;
}
```

<img src="https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/img%2F02.png?alt=media" atl="screenshot01" style="display: block; margin: 0 auto; width: 50%;"/>

Takiej odpowiedzi nie spodziewa?? si?? chyba nikt (no, mo??e poza mn??). Wygl??da to na jaki?? dziwny znaczek, prawda? Co?? tu musi by?? nie tak??? Mo??e sum?? znak??w trzeba wypisywa?? bezpo??rednio na wyj??cie..?
Sprawd??my!

```c
#include <iostream>
int main(){
	char a, b;
	a = ???a???;
	b = ???b???;
	std::cout << a + b;
	return 0;
}
```

<img src="https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/img%2F03.png?alt=media" alt="screenshot02" style="display: block; margin: 0 auto; width: 50%;"/>

Mam nadziej??, ??e ponownie was zaskoczy??em :)<br/>
Tak, to liczba. Nie przecierajcie oczu ani ekranu monitora, to *powinna* by?? liczba.
Zdradz?? wam nawet pewien sekret.<br/>
*Wszystko w programowaniu jest liczb?? je??li tylko zejdziemy wystarczaj??co nisko ;)*<br/>
Nie jest to jednak ani przypadek, ani b????d: jest to oznaczenie tzw. *kodu ASCII.*<br/>
Tablica kod??w ASCII jest w ka??dym komputerze i dekoduje ona litery oraz inne znaki specjalne.
Praca na znakach by??aby niesamowicie ci????ka zar??wno dla komputer??w, jak i dla ludzi pracuj??cych z komputerami. Dlatego te?? ka??dy znak jest zakodowany jako jaka?? konkretna liczba: komputer przetwarza j?? i dopiero na samym ko??cu podmienia na litery kt??re mo??emy swobodnie czyta??.
Mo??e si?? to wydawa?? dziwne, ale wierzcie mi: takie rozwi??zanie ma bardzo wiele plus??w o kt??rych przekonacie si?? na przysz??ych zaj??ciach!<br/>
A na razie zostawiam was z zadankami oraz dodatkowymi informacjami do przejrzenia (je??li, oczywi??cie, chcecie) :)

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
  1. Opiszcie (przy pomocy co najmniej 5 zmiennych) trzy przedmioty. Mog?? to by?? samoch??d, wazon, zeszyt, monitor, dom, ro??linka... wyb??r nale??y do was!<br/>
  2. Za pomoc?? polecenia sizeof(typ_danych) sprawd??cie, ile bajt??w zajmuj?? poszczeg??lne typy danych.<br/>
</div>
<br/>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.geeksforgeeks.org/c-data-types/">Strona G4G [ang.]</a>
- <a href="https://www.w3schools.com/cpp/cpp_data_types.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-1/Pojecie-zmiennej-i-podstawowe-typy-danych/11">Strona cpp0x</a>

</div>

P??ki co ko??czymy, wystarczaj??co was wym??czy??em tymi informacjami??? Do zobaczenia na kolejnej lekcji, gdzie opowiemy sobie o tablicach!


