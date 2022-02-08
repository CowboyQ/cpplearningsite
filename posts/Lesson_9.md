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

<h2>Lekcja 9: Operatory logiczne oraz instrukcje warunkowe</h2>

Witajcie ponownie! Na dzisiejszej lekcji dowiemy się co nieco o operatorach logicznych oraz ich zastosowaniu, w szczególności w instrukcjach warunkowych.

Najpierw słowo o operatorach logicznych. Na szczęście teorii nie jest zbyt dużo:
- Operatorów jest kilka a część z nich pamiętacie może z matematyki: ```>, <, >=, <=, != czy ==```. Przedostatni oznacza „różny”. Ten ostatni jest szczególnie istotny: zauważyliście jak pojedynczy znak „=” oznacza *przypisanie?* Podwójny znak oznacza sprawdzenie równości między dwoma zmiennymi, dlatego warto poznać różnicę gdyż jest dość spora!
- Istnieją też inne operatory których możecie nie kojarzyć: ```&&``` („and”), ```||``` („or”). Dzięki nim możemy budować bardziej rozbudowane warunki.
- Warto tu też wspomnieć o ```%```, czyli oznaczeniu modulo: reszty z dzielenia.

Instrukcje warunkowe natomiast pomagają nam lepiej kontrolować działanie programu: możemy wtedy sprawić aby nasz program był wielofunkcyjny i odpowiadał na dane wprowadzane przez użytkownika!
A skoro już o tym mowa… Napiszmy jakiś program który (mam nadzieję) lepiej zobrazuje całą tę lekcję ;)

```c
#include <iostream>
int main(){
	int a = 5;
	if(a < 10){
		std::cout << "Liczba jest mniejsza niz 10" << std::endl;
	}
	else if(a < 20){
		std::cout << "Liczba jest mniejsza niz 20" << std::endl;
	}
	else{
		std::cout << "Liczba jest wieksza niz 20" << std::endl;
	}
	return 0;
}
```

Jak wszystko w informatyce, nie jest to zbyt skomplikowane!<br/>
- Zaczynamy od naszej zmiennej „a” której przypisujemy wartość 5.
- Program przechodzi test logiczny w pierwszych okrągłych nawiasach przy słowie „if”: *jeśli* a jest mniejsze niż 10 *to* wykonaj fragment kodu. Kod ten jest oczywiście wykonywany, ale co potem?

No cóż… nic!<br/>
Program kończy swoje zadanie, ponieważ żadna z instrukcji „else” nie zostanie już wykonana, gdyż zawiera słowo *else*: *w przeciwnym wypadku.* Pierwszy przypadek został wykonany, więc żaden inny z tym słowem nie będzie.<br/>
„Okej, ale… co jeśli dam pod sobą kilka instrukcji ‘if’, bez ‘else’?”<br/>
W takim przypadku każdy warunek będzie sprawdzany, a kod wykonywany jeśli warunek zostanie spełniony!<br/>
Nauka manipulacją instrukcjami ```if``` oraz ```else``` to czysta praktyka i sprawdzanie co działa, a co nie. Dlatego też napiszmy trochę kodu i sprawdźmy, co działa :)

```c
#include <iostream>

int main(){
	int wiek = 19;
	if(wiek > 0 && wiek < 10){
		std::cout << "Jestes jeszcze dzieckiem";
	}
	if(wiek > 10 && wiek < 18){
		std::cout << "Jestes nastolatkiem";
	}
	if(wiek == 18 || wiek > 18){
		std::cout << "Jestes juz dorosly!";
	}
	else{
		std::cout << "Jestes jeszcze bobasem!";
	}
	return 0;
}
```

**Co wypisze powyższy program?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Jestes jeszcze dzieckiem</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Jestes nastolatkiem</div>
</label>

<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">Jestes jeszcze bobasem!</div>
</label>

<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op4">
<div class="rad-design"></div>
<div class="rad-text">Jestes juz dorosly!</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked ||  document.getElementById('op4').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Nie tym razem: sprawdź dokładniej.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie tym razem: sprawdź dokładniej.';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Nie tym razem: sprawdź dokładniej.';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Dokładnie tak! :)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Jak możecie zauważyć, w warunkach zastosowaliśmy również operatory logiczne: && oraz || aby połączyć operacje logiczne. W pierwszym mamy do czynienia z sytuacją „jeżeli wiek jest większy od zera *oraz* wiek jest mniejszy niż 10” wypisujemy pierwszą opcję etc. :)<br/>
Warunki świetnie sprawdzają się również w przypadku pętli o których to opowiem wam na kolejnej lekcji. Do zobaczenia! :)

A dla chętnych: **zadanko ;)**

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanko</button>

<div id="exercises" style="display: none" class="exercise">
  Napiszcie program, który sprawdza godzinę, i:<br/>
  - Przed 10 mówi "Witam o poranku!"<br/>
  - Przed 20 mówi "Dzień dobry!"<br/>
  - Po 20 mówi "Dobry wieczór!"
</div>
