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

<h2>Lekcja 10: Pętle</h2>

Witajcie ponownie! Dzisiejszy temat: pętle. Dziś mamy dość sporo do omówienia, dlatego też przejdźmy do rzeczy.<br/>
Pętle wykorzystujemy gdy musimy wykonać jakąś konkretną czynność wiele razy: dodawanie do siebie liczb dopóki nie przekroczymy pewnego progu, modyfikowanie tekstu dopóki nie uzyskamy odpowiedniego efektu… Przykładów może być wiele, dlatego też po prostu przez nie przejdźmy aby dowiedzieć się, na czym polega dzisiejszy temat<br/>
Zanim jednak do tego przejdziemy, szczypta teorii. Wyróżniamy *trzy* pętle:
- while
- do… while
- for

Pętla ```while``` wygląda następująco:

```c
while(warunek){
	//kod;
}
```

Komputer sprawdza warunek, następnie wykonuje kod znajdujący się w pętli. Po zakończeniu znów sprawdza warunek, jeśli jest spełniony to znowu wykonuje kod.. i tak do momentu w którym warunek nie zostanie spełniony.
Dla nas jako programistów oznacza to dwie rzeczy:
- Pętla może nigdy się nie skończyć. Jeśli użyjemy jako warunku ```true``` pętla będzie się wykonywała w nieskończoność.
- Pętla może nie wykonać się w ogóle. Jeśli warunek nie spełni się nawet za pierwszym razem to kod w pętli nie wykona się ani razu.

Pierwsza kwestia może być dla nas paradoksalnie przydatna. Wyobraźcie sobie program w którym rysujecie i pomyślcie o pętli ```while(true)``` w kontekście odświeżania ekranu: musi to być robione ciągle, od uruchomienia aż do zakończenia programu. Takie rozwiązanie ma sens, prawda?
Druga kwestia natomiast może być dla nas problematyczna. Co jeśli musimy wykonać jakiś kod ale nie możemy zmienić warunku? Cóż, z pomocą przychodzi nam bliźniacza pętla: ```do while.```
Pętla ```do while``` ma jedną zasadniczą różnicę: mamy pewność, że wykona się *co najmniej jeden raz.* Spójrzmy na kod:

```c
do{
	//kod;
}while(warunek);
```

Widzicie różnicę? *Najpierw* wykonujemy kod, *później* sprawdzamy warunek: stąd pewność, że kod wykona się co najmniej raz!<br/> 
Na końcu przedstawię wam nieco bardziej skomplikowaną, lecz niesamowicie funkcjonalną pętlę: ```for```.<br/>
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

Program ten tworzy tablicę 10 elementów a następnie, wewnątrz pętli, wypełnia ją cyfrą 5. Zauważcie: ```i``` jest wpisane w kwadratowych nawiasach. Oznacza to, że po każdym przejściu pętli *bierzemy kolejny element tablicy!* Dzięki takiemu rozwiązaniu możemy operować na całej tablicy i wypełniać ją dowolnymi wartościami!<br/>

Zanim skończymy na dziś, lekka przypominajka:<br/>
**Która pętla wykona się co najmniej raz?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">for</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">do...while</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">while z dodatkowym warunkiem</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Niestety nie: dla przykładu dla ustawienia warunku na false pętla nie wykona się ani razu.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Dokładnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie do końca; przy while warunek na samym początku może nie przejść testu logicznego i pętla nie zostanie wykonana';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Dziś kolejna duża dawka informacji, dlatego zostawię wam kilka zadanek do przećwiczenia całego tego materiału ;)

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Napiszcie program, który wypisuje sumę 10 pierwszych liczb naturalnych.<br/>
2.<br/>
  Napiszcie program, który wypisuje wszystkie cyfry naturalne *aż do wybranej liczby,* a następnie podaje sumę tych liczb.<br/>
*3.<br/>
  Napiszcie program, który oblicza silnię podanej liczby.<br/>
4.<br/>
  Napiszcie program, który przyjmuje do tablicy wybraną przez was ilość liczb, a następnie szuka zarówno najmniejszej, jak i największej z nich.<br/>
*5.<br/>
  Napiszcie program, który sprawdza, czy wpisane słowo jest palindromem.

</div>

A na następnych zajęciach: zasięg dostępu! Do zobaczenia! :)
