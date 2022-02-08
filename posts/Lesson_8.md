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

<h2>Lekcja 8: Tablice</h2>
Witajcie ponownie! Cieszę się, że was widzę :)

Temat dzisiejszej lekcji może wam się kojarzyć ze szkolną ławką oraz niekończącymi się równaniami do przepisania w zeszycie… Ale nic bardziej mylnego! Całe szczęście dzięki tablicom możemy oszczędzić sobie bardzo dużo czasu oraz, przede wszystkim: miejsca w kodzie.<br/>
No ale: mniej ględzenia więcej kodzenia! Spójrzmy na poniższy przykład :)

```c
#include <iostream>
int main(){
	//pierwszy sposób tworzenia tablicy
	int calkowite[] = {1, 2, 3};
	//drugi sposób tworzenia tablicy
	float przecinkowe[3];
	przecinkowe[0] = 3.3;
	przecinkowe[1] = 2.25;
	przecinkowe[2] = 19.45678;
	std::cout << calkowite[1];
	return 0;
}
```

No cóż… tylko tyle i aż tyle!
Aby sprawić żeby zmienna była tablicą wystarczy dodać kwadratowe nawiasy po nazwie. To czy musimy w nawiasach wpisywać liczbę zależy od tego, jak tworzymy tablicę:
- w pierwszym przypadku *nie musimy* z góry podawać, ile elementów ma mieścić tablica. *Musimy* jednak podać wtedy *wszystkie* jej elementy w nawiasach wąsiastych.
- w drugim przykładzie deklarujemy, że chcemy tablicę typu float z trzema wolnymi miejscami, które później konsekwentnie zapełniamy.

**Uwaga!**

To, że dostajemy od programu tablicę z wolnymi miejscami *nie oznacza, że jest tam pusto.* Wręcz przeciwnie: zapewne znajdują się tam jakieś „śmieci” po programie który uprzednio korzystał z tego miejsca w pamięci. <br/>
Dlatego programując *zawsze* musimy zapełniać takie luki własnymi danymi, zanim będziemy pracować z taką tablicą.
Kiedyś było to bardzo istotne gdyż mogliśmy przypadkiem trafić na coś niebezpiecznego, ale przy obecnych zabezpieczeniach systemu najgorsze, co może nas spotkać, to zły wynik albo wypisanie czegoś co ma mało sensu ;) <br/>
Tablice mogą również przechowywać znaki: wpisywanie pojedynczych znaków do tablicy jest mało efektowne (zwłaszcza gdy istnieje typ „string”), ale niech was to nie zmyli! „Pod maską” każdy string może być traktowany jako tablica znaków, co może być wyjątkowo przydatne w połączeniu z instrukcjami warunkowymi oraz pętlami.<br/>
Dla przykładu:<br/>

**Co wypisze poniższy program?**
```c
#include <iostream>
int main(){
	std::string a = "Abecadło";
	std::cout << a[3];
	return 0;
}
```

<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">"e"</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Program wyrzuci błąd</div>
</label>

<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">"c"</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Zgadza się! String to po prostu wygodna tablica znakowa która pozwala nam między innymi na sprawdzanie (oraz podmianę) poszczególnych liter! :)';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie, program jak najbardziej się wykona!';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie do końca. Przypomnijcie sobie, od której cyfry zaczynają liczyć programiści..?';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

To tyle na dziś! Na kolejnej lekcji pomówimy nieco o wspomnianych wcześniej instrukcjach warunkowych, czyli jak sprawić aby nasz kod działał w każdej możliwej sytuacji!<br/>
Do zobaczenia! :)
