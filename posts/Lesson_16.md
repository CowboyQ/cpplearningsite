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

<h2>Lekcja 16: Prze??adowanie funkcji</h2>

Witajcie! Dzisiaj porozmawiamy o prze??adowaniu funkcji. Po cz????ci spotkali??cie si?? z tym zjawiskiem na poprzedniej lekcji o klasach, ale przejd??my do kodu ??eby w pe??ni zrozumie?? o co chodzi :)<br/>
Oto przyk??ad prze??adowanej funkcji:

```c
#include <iostream>

int dodawanie(int a, int b){
	return a + b;
}

double dodawanie(double a, double b){
	return a + b;
}

int main(){
	int suma1 = dodawanie(4,6);
	double suma2 = dodawanie(5.5, 3.2);
	std::cout << suma1 << std::endl; //wypisze 10
	std::cout << suma2 << std::endl; //wypisze 8.7
	return 0;
}
```

???Zaraz??? czy to znaczy ??e mo??emy mie?? t?? sam?? nazw?? funkcji ale przyjmuj??c?? inne parametry????<br/>
Dooook??adnie tak!<br/>

???Ale.. sk??d komputer b??dzie wiedzia?? kt??rej opcji u??y??????<br/>

Bardzo proste: *typ danych.*<br/>
Dla zmiennej typu int kompilator wybierze funkcj?? zwracaj??c?? typ int, analogicznie zrobi te?? dla double.<br/>
Mo??emy oczywi??cie zmienia?? te funkcje w zale??no??ci od tego, czego potrzebujemy, jednak idea jest taka aby pisa?? funkcje o tych samych nazwach, r????ni??cych si?? jedynie parametrami i typami: dzi??ki temu nie musimy zapami??tywa?? kilkunastu nazw funkcji, ka??da dla innego typu danych ;)<br/>

Warto jednak wiedzie??, jak *nie* mo??na korzysta?? z prze??adowania:
```
int dodawanie(int a);

double dodawanie(int b);
```

Powy??szy kod wyrzuci b????d kompilatora: co prawda funkcje r????ni?? si?? *typem* danych, ale nie r????ni?? si?? *parametrami:* co?? co jest wymogiem przy prze??adowaniu funkcji.<br/>
No ale: do??wiadczenia i wiedzy nabiera si?? g????wnie z praktyki, dlatego te?? poni??ej znajdziecie kilka zadanek dotycz??cych prze??adowania funkcji :)<br/>

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Napiszcie funkcj?? obliczaj??c?? warto???? absolutn?? danej liczby. U??yjcie prze??adowania aby m??c oblicza?? warto??ci dla typu int, float oraz double.<br/>
2.<br/>
  Napiszcie prosty kalkulator z funkcjami dodawania, odejmowania, mno??enia oraz dzielenia: u??yjcie prze??adowania funkcji.<br/>
</div>

Do zobaczenia na nast??pnej lekcji!

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://edu.pjwstk.edu.pl/wyklady/pro/scb/PRG2CPP_files/node68.html">Strona Polsko-Japo??skiej Akademii Technik Komputerowych</a>
- <a href="https://docs.microsoft.com/pl-pl/cpp/cpp/function-overloading?view=msvc-170">Strona Microsoft</a>

</div>