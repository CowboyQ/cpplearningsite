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

Witajcie ponownie! Dziś przejdziemy do funkcji oraz tego, jak niesamowicie przydatne są one w programowaniu!<br/>
Zacznijmy jednak od początku. Weźmy przykładową funkcję:

```c
int dodawanie(int a, int b);
```

To, moi drodzy, jest *deklaracja* funkcji. Mówimy komputerowi, że napiszemy funkcję typu *int*, nazwaliśmy ją „dodawanie” oraz *przyjmuje dwa parametry typu int.* Co to te parametry? No cóż… Pamiętacie lekcję o zasięgu dostępu?<br/>
Jeśli chcemy aby nasza funkcja pracowała na zmiennych z innej części programu, musimy je *przekazać.* Robimy to właśnie dzięki parametrom!<br/>
No ale, zobaczmy jaka jest *definicja* funkcji.<br/>
Pamiętajcie: *deklaracja* mówi komputerowi tylko o *istnieniu* funkcji. Naszym zadaniem jest teraz ich *zaimplementowanie.* Robimy to następująco:

```c
int dodawanie(int a, int b){
	int suma = a + b;
	return suma;
}
```

Teraz wiemy dokładnie jak działa funkcja „dodawanie”: bierze dwie liczby podane jako argumenty, a następnie zwraca ich sumę!<br/>
Jeśli jednak troszczymy się o miejsce w pamięci, możemy dodatkowo zoptymalizować nasz kod:

```c
int dodawanie(int a, int b){
	return (a + b);
}
```
Dzięki temu obchodzimy operację tworzenia zmiennej oraz przypisania jej wartości, oszczędzając zarówno czas jak i miejsce :)<br/>
„Dobrze, rozumiem, ale… jak mogę użyć takiej funkcji?” – możecie spytać. Spieszę z odpowiedzią: *bardzo prosto.*<br/>
Spójrzmy na całokształt programu:

```c
#include<iostream>
int dodawanie(int a, int b){
	return (a + b);
}

int main(){
	int pierwsza, druga;
	std::cout << „Podaj pierwszą liczbę:” << std::endl;
	std::cin >> pierwsza;
	std::cout << „Podaj drugą liczbę:” << std::endl;
	std::cin >> druga;
	int suma = dodawanie(pierwsza, druga);
	std::cout << „Suma wynosi:” << suma << std::endl;
	return 0;
}
```

Teraz mając pełny obraz programu możemy pomówić o tym, jak działa.<br/>
Najpierw deklarujemy dwie zmienne w naszym *głównym* programie: „pierwsza” oraz „druga”. Użytkownik wpisuje je, po czym następuje wywołanie funkcji dodawanie. Warto zatrzymać się w tym miejscu i zauważyć kilka rzeczy:
- funkcja „dodawanie” jest typu *int*. Oznacza to, że *zwraca* ona wartość typu int. Zwracana wartość jest następnie zapisywana do zmiennej „suma” w funkcji main.
- każda funkcja posiadająca typ inny niż „void” (o nich za chwilkę) coś zwraca, a tę zwracaną wartość można zapisać. Jest to dość przydatna informacja zwłaszcza gdy zastanawiamy się, jakiego typu powinniśmy napisać funkcję.
- w funkcji main podaliśmy do funkcji „dodawanie” dwa parametry: „pierwsza” oraz „druga”; nie podawaliśmy ich typów jak w przypadku deklaracji (czy definicji; obie muszą być takie same). Deklaracja i definicja wymaga *typu* oraz *nazwy* zmiennych, którymi będzie operować
- nazwy zmiennych przy wywołaniu funkcji oraz przy jej deklaracji *nie muszą być takie same!* W funkcji main nazywają się „pierwsza” i „druga”, natomiast w funkcji dodawanie nazywają się „a” i „b”, ale chodzi o te same liczby. Liczy się jedynie kolejność ich wpisywania.

"Okej, rozumiem. Ale... Po co nam deklaracje funkcji, skoro nawet jej nie użyliśmy?"<br/>
Ponieważ... No cóż, może po prostu wam pokażę zmieniając nieco kod z przykładu powyżej:

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

Jak widzicie, na górze *zadeklarowaliśmy* naszą funkcję ```dodawanie()```, natomiast niżej ją *zdefiniowaliśmy.* Co daje nam takie rozwiazanie?<br/>
*Przejrzystość kodu.* Wszystkie deklaracje możemy umieścić na górze, zaraz po nich jest funkcja ```main()```, natomiast później umieszczamy definicje funkcji. Dzięki temu funkcja ```main()``` jest zawsze w tym samym miejscu, zamiast bycia schowaną między innymi funkcjami (zwłaszcza, gdy mamy ich wiele).

**Które z tych pojęć określa 'ciało' funkcji?**
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
		document.getElementById('answer').innerHTML = 'Niestety nie: deklaracja to sam nagłówek funkcji mówiący o jej typie oraz przyjmowanych parametrach.';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Dokładnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Mam nadzieję, że to rozwiało nieco waszych wątpliwości na temat funkcji. Zanim przejdziemy do następnej lekcji proponuję wam kilka zadanek, spodobają wam się :)

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Napiszcie program, który przyjmuje na wejściu imię użytkownika i przesyła je do funkcji, która wyświetla to imię.<br/>
2.<br/>
  Napiszcie program, który przyjmuje dowolną liczbę naturalną i (wewnątrz funkcji) oblicza sumę wszystkich liczb naturalnych aż do podanej.
</div>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materiały:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_functions.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-2/Funkcje-pierwsze-starcie/291">Strona cpp0x</a>
- <a href="https://docs.microsoft.com/pl-pl/cpp/cpp/functions-cpp?view=msvc-170">Strona Microsoft</a>
- <a href="https://www.youtube.com/watch?v=HHplT1A4_A4">Filmik autorstwa "Pasja Informatyki"</a>

</div>