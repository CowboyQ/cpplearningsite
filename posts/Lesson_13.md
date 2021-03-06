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

<h2>Lekcja 13: Funkcje</h2>

Witajcie ponownie! Dzi?? przejdziemy do funkcji oraz tego, jak niesamowicie przydatne s?? one w programowaniu!<br/>
Zacznijmy jednak od pocz??tku. We??my przyk??adow?? funkcj??:

```c
int dodawanie(int a, int b);
```

To, moi drodzy, jest *deklaracja* funkcji. M??wimy komputerowi, ??e napiszemy funkcj?? typu *int*, nazwali??my j?? ???dodawanie??? oraz *przyjmuje dwa parametry typu int.* Co to te parametry? No c??????? Pami??tacie lekcj?? o zasi??gu dost??pu?<br/>
Je??li chcemy, aby nasza funkcja pracowa??a na zmiennych z innej cz????ci programu, musimy je *przekaza??.* Robimy to w??a??nie dzi??ki parametrom!<br/>
No ale, zobaczmy jaka jest *definicja* funkcji.<br/>
Pami??tajcie: *deklaracja* m??wi komputerowi tylko o *istnieniu* funkcji. Naszym zadaniem jest teraz ich *zaimplementowanie.* Robimy to nast??puj??co:

```c
int dodawanie(int a, int b){
	int suma = a + b;
	return suma;
}
```

Teraz wiemy dok??adnie jak dzia??a funkcja ???dodawanie???: bierze dwie liczby podane jako argumenty, a nast??pnie zwraca ich sum??!<br/>
Je??li jednak troszczymy si?? o miejsce w pami??ci, mo??emy dodatkowo zoptymalizowa?? nasz kod:

```c
int dodawanie(int a, int b){
	return (a + b);
}
```
Dzi??ki temu obchodzimy operacj?? tworzenia zmiennej oraz przypisania jej warto??ci, oszcz??dzaj??c zar??wno czas jak i miejsce :)<br/>
???Dobrze, rozumiem, ale??? jak mog?? u??y?? takiej funkcji???? ??? mo??ecie spyta??. Spiesz?? z odpowiedzi??: *bardzo prosto.*<br/>
Sp??jrzmy na ca??okszta??t programu:

```c
#include<iostream>
int dodawanie(int a, int b){
	return (a + b);
}

int main(){
	int pierwsza, druga;
	std::cout << ???Podaj pierwsz?? liczb??:??? << std::endl;
	std::cin >> pierwsza;
	std::cout << ???Podaj drug?? liczb??:??? << std::endl;
	std::cin >> druga;
	int suma = dodawanie(pierwsza, druga);
	std::cout << ???Suma wynosi:??? << suma << std::endl;
	return 0;
}
```

Teraz maj??c pe??ny obraz programu mo??emy pom??wi?? o tym, jak dzia??a.<br/>
Najpierw deklarujemy dwie zmienne w naszym *g????wnym* programie: ???pierwsza??? oraz ???druga???. U??ytkownik wpisuje je, po czym nast??puje wywo??anie funkcji dodawanie. Warto zatrzyma?? si?? w tym miejscu i zauwa??y?? kilka rzeczy:
- funkcja ???dodawanie??? jest typu *int*. Oznacza to, ??e *zwraca* ona warto???? typu int. Zwracana warto???? jest nast??pnie zapisywana do zmiennej ???suma??? w funkcji main.
- ka??da funkcja posiadaj??ca typ inny ni?? ???void??? (o nich za chwilk??) co?? zwraca, a t?? zwracan?? warto???? mo??na zapisa??. Jest to do???? przydatna informacja zw??aszcza gdy zastanawiamy si??, jakiego typu powinni??my napisa?? funkcj??.
- w funkcji main podali??my do funkcji ???dodawanie??? dwa parametry: ???pierwsza??? oraz ???druga???; nie podawali??my ich typ??w, jak w przypadku deklaracji (czy definicji; obie musz?? by?? takie same). Deklaracja i definicja wymaga *typu* oraz *nazwy* zmiennych, kt??rymi b??dzie operowa??
- nazwy zmiennych przy wywo??aniu funkcji oraz przy jej deklaracji *nie musz?? by?? takie same!* W funkcji main nazywaj?? si?? ???pierwsza??? i ???druga???, natomiast w funkcji dodawanie nazywaj?? si?? ???a??? i ???b???, ale chodzi o te same liczby. Liczy si?? jedynie kolejno???? ich wpisywania.

"Okej, rozumiem. Ale... Po co nam deklaracje funkcji, skoro nawet jej nie u??yli??my?"<br/>
Poniewa??... No c????, mo??e po prostu wam poka???? zmieniaj??c nieco kod z przyk??adu powy??ej:

```c
#include<iostream>
int dodawanie(int a, int b);

int main(){
	int pierwsza, druga;
	std::cout << "Podaj pierwsza liczbe:" << std::endl;
	std::cin >> pierwsza;
	std::cout << "Podaj druga liczbe:" << std::endl;
	std::cin >> druga;
	int suma = dodawanie(pierwsza, druga);
	std::cout << "Suma wynosi: " << suma << std::endl;
	return 0;
}

int dodawanie(int a, int b){
	return (a + b);
}
```

Jak widzicie, na g??rze *zadeklarowali??my* nasz?? funkcj?? ```dodawanie()```, natomiast ni??ej j?? *zdefiniowali??my.* Co daje nam takie rozwi??zanie?<br/>
*Przejrzysto???? kodu.* Wszystkie deklaracje mo??emy umie??ci?? na g??rze, zaraz po nich jest funkcja ```main()```, natomiast p????niej umieszczamy definicje funkcji. Dzi??ki temu funkcja ```main()``` jest zawsze w tym samym miejscu, zamiast bycia schowan?? mi??dzy innymi funkcjami (zw??aszcza, gdy mamy ich wiele).

**Kt??re z tych poj???? okre??la 'cia??o' funkcji?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Deklaracja</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Definicja</div>
</label>


</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Niestety nie: deklaracja to sam nag????wek funkcji m??wi??cy o jej typie oraz przyjmowanych parametrach.';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Dok??adnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Mam nadziej??, ??e to rozwia??o nieco waszych w??tpliwo??ci na temat funkcji. Zanim przejdziemy do nast??pnej lekcji proponuj?? wam kilka zadanek, spodobaj?? wam si?? :)

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Napiszcie program, kt??ry przyjmuje na wej??ciu imi?? u??ytkownika i przesy??a je do funkcji, kt??ra wy??wietla to imi??.<br/>
2.<br/>
  Napiszcie program, kt??ry przyjmuje dowoln?? liczb?? naturaln?? i (wewn??trz funkcji) oblicza sum?? wszystkich liczb naturalnych a?? do podanej.
</div>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_functions.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-2/Funkcje-pierwsze-starcie/291">Strona cpp0x</a>
- <a href="https://docs.microsoft.com/pl-pl/cpp/cpp/functions-cpp?view=msvc-170">Strona Microsoft</a>
- <a href="https://www.youtube.com/watch?v=HHplT1A4_A4">Filmik autorstwa "Pasja Informatyki"</a>

</div>