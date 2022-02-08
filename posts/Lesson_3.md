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
  left: 0;
  top: 0;
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

<h2>Lekcja 3: Instrukcje warunkowe</h2>

Witajcie na kolejnej lekcji! Dziś porozmawiamy o instrukcjach warunkowych. Może brzmieć to nieco groźnie, ale nie martwcie się: jest to prostsze niż może się wydawać!

Instrukcje warunkowe pozwalają nam na wykonywanie czynności *pod pewnym warunkiem.* Idealnym przykładem może być przechodzenie przez jezdnie: możemy przemieścić się na drugą stronę *tylko* jeśli widzimy zielone światło. Innym przykładem jest jazda samochodem: możemy jeździć *tylko* jeśli mamy prawo jazdy. Proste, prawda? :)
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
Warto tu wspomnieć o jeszcze jednym: co w przypadku, gdybyśmy w ogóle nie stali na przejściu dla pieszych?
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

Jak zauważyliście, instrukcje warunkowe mogą znajdować się wewnątrz instrukcji warunkowych (zarówno części „jeżeli” jak i „w przeciwnym wypadku”). Te z kolei mogą znajdować się wewnątrz *innych* instrukcji warunkowych etc.

**Co znajduje się w okrągłych nawiasach instrukcji warunkowej?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Warunek</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Instrukcje do wykonania</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">To, co robimy w przeciwnym przypadku</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Zgadza się! :)';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Niestety nie. W nawiasach okrągłych zawsze znajduje się warunek; w wąsistych znajdują się instrukcje do wykonania, natomiast to co robimy w przeciwnym przypadku znajduje się w bloku z tą samą nazwą ;)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>


W przypadku dużej ilości takich instrukcji i warunków można bardzo łatwo się pogubić, dlatego polecę wam trzy proste sposoby radzenia sobie z takimi sytuacjami.
1. Przemyślcie swoje rozwiązanie: czy aby na pewno nie da się tego sprawdzić inaczej?
2. Jeśli nie ma innego sposobu, zastosujcie wcięcia w kodzie: nie wpływają one na jego wykonanie, a zdecydowanie poprawią czytelność!
3. Rozbijcie kod na mniejsze części: w późniejszej części kursu poznacie funkcje, które mogą pomóc zorganizować kod i ułatwić jego zrozumienie!

