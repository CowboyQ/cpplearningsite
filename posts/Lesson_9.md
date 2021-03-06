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

<h2>Lekcja 9: Operatory logiczne oraz instrukcje warunkowe</h2>

Witajcie ponownie! Na dzisiejszej lekcji dowiemy si?? co nieco o operatorach logicznych oraz ich zastosowaniu, w szczeg??lno??ci w instrukcjach warunkowych.

Najpierw s??owo o operatorach logicznych. Na szcz????cie teorii nie jest zbyt du??o:
- Operator??w jest kilka, a cz?????? z nich pami??tacie mo??e z matematyki: ```>, <, >=, <=, != czy ==```. Przedostatni oznacza ???r????ny???. Ten ostatni jest szczeg??lnie istotny: zauwa??yli??cie jak pojedynczy znak ???=??? oznacza *przypisanie?* Podw??jny znak oznacza sprawdzenie r??wno??ci mi??dzy dwoma zmiennymi, dlatego warto pozna?? r????nic?? gdy?? jest do???? spora!
- Istniej?? te?? inne operatory kt??rych mo??ecie nie kojarzy??: ```&&``` (???and???), ```||``` (???or???). Dzi??ki nim mo??emy budowa?? bardziej rozbudowane warunki.
- Warto tu te?? wspomnie?? o ```%```, czyli oznaczeniu modulo: reszty z dzielenia.

Instrukcje warunkowe natomiast pomagaj?? nam lepiej kontrolowa?? dzia??anie programu: mo??emy wtedy sprawi?? aby nasz program by?? wielofunkcyjny i odpowiada?? na dane wprowadzane przez u??ytkownika!
A skoro ju?? o tym mowa??? Napiszmy jaki?? program kt??ry (mam nadziej??) lepiej zobrazuje ca???? t?? lekcj?? ;)

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
- Zaczynamy od naszej zmiennej ???a??? kt??rej przypisujemy warto???? 5.
- Program przechodzi test logiczny w pierwszych okr??g??ych nawiasach przy s??owie ???if???: *je??li* a jest mniejsze ni?? 10 *to* wykonaj fragment kodu. Kod ten jest oczywi??cie wykonywany, ale co potem?

No c??????? nic!<br/>
Program ko??czy swoje zadanie, poniewa?? ??adna z instrukcji ???else??? nie zostanie ju?? wykonana, gdy?? zawiera s??owo *else*: *w przeciwnym wypadku.* Pierwszy przypadek zosta?? wykonany, wi??c ??aden inny z tym s??owem nie b??dzie.<br/>
???Okej, ale??? co je??li dam pod sob?? kilka instrukcji ???if???, bez ???else???????.<br/>
W takim przypadku ka??dy warunek b??dzie sprawdzany, a kod wykonywany je??li warunek zostanie spe??niony!<br/>
Nauka manipulacj?? instrukcjami ```if``` oraz ```else``` to czysta praktyka i sprawdzanie co dzia??a, a co nie. Dlatego te?? napiszmy troch?? kodu i sprawd??my, co dzia??a :)

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

**Co wypisze powy??szy program?**
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
		document.getElementById('answer').innerHTML = 'Nie tym razem: sprawd?? dok??adniej.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie tym razem: sprawd?? dok??adniej.';
		document.getElementById('answer').style='display:block;';
	}
	else if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Nie tym razem: sprawd?? dok??adniej.';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Dok??adnie tak! :)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Jak mo??ecie zauwa??y??, w warunkach zastosowali??my r??wnie?? operatory logiczne: && oraz || aby po????czy?? operacje logiczne. W pierwszym mamy do czynienia z sytuacj?? ???je??eli wiek jest wi??kszy od zera *oraz* wiek jest mniejszy ni?? 10??? wypisujemy pierwsz?? opcj?? etc. :)<br/>
Warunki ??wietnie sprawdzaj?? si?? r??wnie?? w przypadku p??tli, o kt??rych to opowiem wam na kolejnej lekcji. Do zobaczenia! :)

A dla ch??tnych: **zadanko ;)**

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanko</button>

<div id="exercises" style="display: none" class="exercise">
  1. Napiszcie program, kt??ry sprawdza godzin??, i:<br/>
  - Przed 10 m??wi "Witam o poranku!"<br/>
  - Przed 20 m??wi "Dzie?? dobry!"<br/>
  - Po 20 m??wi "Dobry wiecz??r!"<br/>
  2. Napiszcie program, kt??ry znajduje najwi??ksz?? liczb?? z trzech podanych przez u??ytkownika.</br>
</div>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_conditions.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-1/Instrukcja-warunkowa-if-else/16">Strona cpp0x</a>

</div>