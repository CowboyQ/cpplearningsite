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

<h2>Lekcja 1: typy danych</h2>

Je??li widzicie t?? stron??: gratulacje! Wykonali??cie w??a??nie pierwszy krok na drodze do zostania programist?? :)

Przechodz??c jednak do lekcji, zacznijmy od podstaw. Jak w szkole: ??eby m??c od czego?? zacz????, musisz co?? zrozumie??, oraz zapami??ta??. Dlatego te?? dzi?? zajmiemy si?? typami danych. Nie przejmujcie si??, je??li nazwa wydaje si?? obca i ma??o zrozumia??a: bardzo nied??ugo przestanie taka by?? :)

??eby zrozumie?? czym s?? typy danych, cofnijmy si?? na chwil?? do pierwszych klas podstaw??wki. Pami??tacie jak poznawali??cie pierwsze liczby, takie jak 3, 6 czy 10???? Okazuje si??, ??e jest to w??a??nie typ danych: liczba ca??kowita!

Podobn?? histori?? maj?? liczby zmiennoprzecinkowe: 5.3, 1.2 czy te?? 21.37: ka??da z nich jest typem danych!

Czy to oznacza ??e 5 oraz 5.15 s?? tym samym typem danych?

*Niestety nie.*

Programowanie rozr????nia te dwa typy i nale??y o tym pami??ta??. Pociesz?? was jednak: oba s?? typem liczbowym i mo??na wykonywa?? na nich wsp??lne dzia??ania, ale o tym nieco p????niej.

Z matematyki przenie??my si?? teraz na j??zyk polski: pami??tacie alfabet? ??wietnie, w takim razie znacie ju?? kolejny typ danych: pojedyncza litera! Id??c tym samym tropem, co z liczbami ca??kowitymi??? Zdania sk??adaj??ce si?? z liter r??wnie?? s?? *osobnym* typem danych! I podobnie jak w przypadku liczb, litery oraz zdania s?? ze sob?? powi??zane pomimo bycia r????nymi typami danych!

Pami??tacie, jak b??d??c w szkole nauczyciel podchodzi?? do ??awki i pyta??, czy macie zadanie domowe? Oczywistymi odpowiedziami by??yby ???tak???, ???nie??? oraz ??????jakie zadanie???? (chocia?? autor nie poleca takiej odpowiedzi ;) ). Skupmy si?? jednak na dw??ch pierwszych opcjach: ???tak??? oraz ???nie???. Taki podzia?? - prawda oraz fa??sz ??? r??wnie?? znajduje si?? na naszej li??cie typ??w danych!

Podsumowuj??c, mamy kilka typ??w danych:<br/>

**Liczbowe:**
- Ca??kowite
- Zmiennoprzecinkowe

**Znakowe:**
- Pojedynczy znak
- S??owa i zdania

**Logiczne:**
- Prawda i fa??sz

Typ??w danych jest oczywi??cie wi??cej, jednak je??li zrozumiesz powy??sze to ka??de kolejne przyjd?? Ci z ??atwo??ci?? w dalszej cz????ci kursu.


**Czy liczba ca??kowita i zmiennoprzecinkowa s?? tym samym typem danych?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Tak</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Nie</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked){
	if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Zgadza si??! :)';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Niestety, nie tym razem! Liczby ca??kowite i liczby zmiennoprzecinkowe to r????ne typy danych (ale oba te typy s?? typami liczbowymi!)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

W dalszej cz????ci kursu dowiesz si?? nawet jak tworzy?? *w??asne* typy danych! Do tych temat??w jeszcze troch?? nam zosta??o, dlatego wr????my tutaj i przejd??my do nast??pnej lekcji: ???instrukcje warunkowe??? :)
