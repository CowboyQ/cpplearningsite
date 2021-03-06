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

Witajcie na kolejnej lekcji! Dzi?? porozmawiamy o instrukcjach warunkowych. Mo??e brzmie?? to nieco gro??nie, ale nie martwcie si??: jest to prostsze ni?? mo??e si?? wydawa??!

Instrukcje warunkowe pozwalaj?? nam na wykonywanie czynno??ci *pod pewnym warunkiem.* Idealnym przyk??adem mo??e by?? przechodzenie przez jezdnie: mo??emy przemie??ci?? si?? na drug?? stron?? *tylko* je??li widzimy zielone ??wiat??o. Innym przyk??adem jest jazda samochodem: mo??emy je??dzi?? *tylko* je??li mamy prawo jazdy. Proste, prawda? :)
Taki zabieg w programowaniu pozwala nam si?? dostosowa?? do niemal ka??dej sytuacji. We??my przyk??ad pierwszy, czyli przechodzenie przez ulic??.

```
je??eli(??wiat??o jest zielone){
	mo??emy przej???? przez jezdni??;
}
```

Na przyk??adzie powy??szego pseudokodu mo??emy zauwa??y??, ??e warunek kt??ry jest sprawdzany znajduje si?? w okr??g??ych nawiasach. Wszystko to, co ma si?? wykona?? znajduje si?? w nawiasach w??sistych (oczywi??cie ze ??rednikiem na ko??cu ka??dego wyra??enia). Oznacza to, ??e mo??emy robi?? wi??cej ni?? jedn?? rzecz wewn??trz takiej instrukcji! Sp??jrz na poni??szy przyk??ad:

```
je??eli(??wiat??o jest zielone){
	spogl??damy w lewo;
	spogl??damy w prawo;
	przechodzimy przez jezdni??;
}
```

W tym przyk??adzie wykonujemy powy??sze czynno??ci *tylko* je??li ??wiat??o jest zielone. Dla cz??owieka jest to wystarczaj??ca instrukcja poniewa?? potrafimy domy??li?? si??, co dzieje si?? w przeciwnym przypadku. Niestety, komputer nie jest a?? tak domy??lny jak by??my tego chcieli, dlatego trzeba mu to powiedzie?? wprost:

```
je??eli(??wiat??o jest zielone){
	spogl??damy w lewo;
	spogl??damy w prawo;
	przechodzimy przez jezdni??;
}
w przeciwnym wypadku{
    czekaj na zielone ??wiat??o;
}
```

Dopiero teraz nasz program by??by w stanie poradzi?? sobie z przechodzeniem przez ulic?? ;)
Warto tu wspomnie?? o jeszcze jednym: co w przypadku, gdyby??my w og??le nie stali na przej??ciu dla pieszych?
Kolejna oczywista dla cz??owieka sprawa jest dla programu czym?? kompletnie nieznanym, dlatego musimy zadba?? te?? o to i ponownie rozwin???? nasz kod.

```
je??eli(jeste??my na przej??ciu dla pieszych){
	je??eli(??wiat??o jest zielone){
		spogl??damy w lewo;
		spogl??damy w prawo;
		przechodzimy przez jezdni??;
	}
	w przeciwnym wypadku{
		czekaj na zielone ??wiat??o;
	}
}
w przeciwnym wypadku{
    znajd?? przej??cie dla pieszych;
}
```

Jak zauwa??yli??cie, instrukcje warunkowe mog?? znajdowa?? si?? wewn??trz instrukcji warunkowych (zar??wno cz????ci ???je??eli??? jak i ???w przeciwnym wypadku???). Te z kolei mog?? znajdowa?? si?? wewn??trz *innych* instrukcji warunkowych etc.

**Co znajduje si?? w okr??g??ych nawiasach instrukcji warunkowej?**
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
		document.getElementById('answer').innerHTML = 'Zgadza si??! :)';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Niestety nie. W nawiasach okr??g??ych zawsze znajduje si?? warunek; w w??sistych znajduj?? si?? instrukcje do wykonania, natomiast to co robimy w przeciwnym przypadku znajduje si?? w bloku z t?? sam?? nazw?? ;)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>


W przypadku du??ej ilo??ci takich instrukcji i warunk??w mo??na bardzo ??atwo si?? pogubi??, dlatego polec?? wam trzy proste sposoby radzenia sobie z takimi sytuacjami.
1. Przemy??lcie swoje rozwi??zanie: czy aby na pewno nie da si?? tego sprawdzi?? inaczej?
2. Je??li nie ma innego sposobu, zastosujcie wci??cia w kodzie: nie wp??ywaj?? one na jego wykonanie, a zdecydowanie poprawi?? czytelno????!
3. Rozbijcie kod na mniejsze cz????ci: w p????niejszej cz????ci kursu poznacie funkcje, kt??re mog?? pom??c zorganizowa?? kod i u??atwi?? jego zrozumienie!

