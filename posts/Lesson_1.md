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

Jeśli widzicie tę stronę: gratulacje! Wykonaliście właśnie pierwszy krok na drodze do zostania programistą :)

Przechodząc jednak do lekcji, zacznijmy od podstaw. Jak w szkole: żeby móc od czegoś zacząć, musisz coś zrozumieć, oraz zapamiętać. Dlatego też dziś zajmiemy się typami danych. Nie przejmujcie się, jeśli nazwa wydaje się obca i mało zrozumiała: bardzo niedługo przestanie taka być :)

Żeby zrozumieć czym są typy danych, cofnijmy się na chwilę do pierwszych klas podstawówki. Pamiętacie jak poznawaliście pierwsze liczby, takie jak 3, 6 czy 10…? Okazuje się, że jest to właśnie typ danych: liczba całkowita!

Podobną historię mają liczby zmiennoprzecinkowe: 5.3, 1.2 czy też 21.37: każda z nich jest typem danych!

Czy to oznacza że 5 oraz 5.15 są tym samym typem danych?

*Niestety nie.*

Programowanie rozróżnia te dwa typy i należy o tym pamiętać. Pocieszę was jednak: oba są typem liczbowym i można wykonywać na nich wspólne działania, ale o tym nieco później.

Z matematyki przenieśmy się teraz na język polski: pamiętacie alfabet? Świetnie, w takim razie znacie już kolejny typ danych: pojedyncza litera! Idąc tym samym tropem, co z liczbami całkowitymi… Zdania składające się z liter również są *osobnym* typem danych! I podobnie jak w przypadku liczb, litery oraz zdania są ze sobą powiązane pomimo bycia różnymi typami danych!

Pamiętacie, jak będąc w szkole nauczyciel podchodził do ławki i pytał, czy macie zadanie domowe? Oczywistymi odpowiedziami byłyby „tak”, „nie” oraz „…jakie zadanie?” (chociaż autor nie poleca takiej odpowiedzi ;) ). Skupmy się jednak na dwóch pierwszych opcjach: „tak” oraz „nie”. Taki podział - prawda oraz fałsz – również znajduje się na naszej liście typów danych!

Podsumowując, mamy kilka typów danych:<br/>

**Liczbowe:**
- Całkowite
- Zmiennoprzecinkowe

**Znakowe:**
- Pojedynczy znak
- Słowa i zdania

**Logiczne:**
- Prawda i fałsz

Typów danych jest oczywiście więcej, jednak jeśli zrozumiesz powyższe to każde kolejne przyjdą Ci z łatwością w dalszej części kursu.


**Czy liczba całkowita i zmiennoprzecinkowa są tym samym typem danych?**
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
		document.getElementById('answer').innerHTML = 'Zgadza się! :)';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Niestety, nie tym razem! Liczby całkowite i liczby zmiennoprzecinkowe to różne typy danych (ale oba te typy są typami liczbowymi!)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

W dalszej części kursu dowiesz się nawet jak tworzyć *własne* typy danych! Do tych tematów jeszcze trochę nam zostało, dlatego wróćmy tutaj i przejdźmy do następnej lekcji: „instrukcje warunkowe” :)
