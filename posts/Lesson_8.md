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

<h2>Lekcja 8: Tablice</h2>
Witajcie ponownie! Ciesz?? si??, ??e was widz?? :)

Temat dzisiejszej lekcji mo??e wam si?? kojarzy?? ze szkoln?? ??awk?? oraz nieko??cz??cymi si?? r??wnaniami do przepisania w zeszycie??? Ale nic bardziej mylnego! Ca??e szcz????cie dzi??ki tablicom mo??emy oszcz??dzi?? sobie bardzo du??o czasu oraz, przede wszystkim: miejsca w kodzie.<br/>
No ale: mniej gl??dzenia wi??cej kodzenia! Sp??jrzmy na poni??szy przyk??ad :)

```c
#include <iostream>
int main(){
	//pierwszy spos??b tworzenia tablicy
	int calkowite[] = {1, 2, 3};
	//drugi spos??b tworzenia tablicy
	float przecinkowe[3];
	przecinkowe[0] = 3.3;
	przecinkowe[1] = 2.25;
	przecinkowe[2] = 19.45678;
	std::cout << calkowite[1];
	return 0;
}
```

No c??????? tylko tyle i a?? tyle!
Aby sprawi?? ??eby zmienna by??a tablic?? wystarczy doda?? kwadratowe nawiasy po nazwie. To czy musimy w nawiasach wpisywa?? liczb?? zale??y od tego, jak tworzymy tablic??:
- w pierwszym przypadku *nie musimy* z g??ry podawa??, ile element??w ma mie??ci?? tablica. *Musimy* jednak poda?? wtedy *wszystkie* jej elementy w nawiasach w??siastych.
- w drugim przyk??adzie deklarujemy, ??e chcemy tablic?? typu float z trzema wolnymi miejscami, kt??re p????niej konsekwentnie zape??niamy.

**Uwaga!**

To, ??e dostajemy od programu tablic?? z wolnymi miejscami *nie oznacza, ??e jest tam pusto.* Wr??cz przeciwnie: zapewne znajduj?? si?? tam jakie?? ?????mieci??? po programie kt??ry uprzednio korzysta?? z tego miejsca w pami??ci. <br/>
Dlatego programuj??c *zawsze* musimy zape??nia?? takie luki w??asnymi danymi, zanim b??dziemy pracowa?? z tak?? tablic??.
Kiedy?? by??o to bardzo istotne gdy?? mogli??my przypadkiem trafi?? na co?? niebezpiecznego, ale przy obecnych zabezpieczeniach systemu najgorsze, co mo??e nas spotka??, to z??y wynik albo wypisanie czego?? co ma ma??o sensu ;) <br/>
Tablice mog?? r??wnie?? przechowywa?? znaki: wpisywanie pojedynczych znak??w do tablicy jest ma??o efektowne (zw??aszcza gdy istnieje typ ???string???), ale niech was to nie zmyli! ???Pod mask????? ka??dy string mo??e by?? traktowany jako tablica znak??w, co mo??e by?? wyj??tkowo przydatne w po????czeniu z instrukcjami warunkowymi oraz p??tlami.<br/>
Dla przyk??adu:<br/>

**Co wypisze poni??szy program?**
```c
#include <iostream>
int main(){
	std::string a = "Abecad??o";
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
<div class="rad-text">Program wyrzuci b????d</div>
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
		document.getElementById('answer').innerHTML = 'Zgadza si??! String to po prostu wygodna tablica znakowa kt??ra pozwala nam mi??dzy innymi na sprawdzanie (oraz podmian??) poszczeg??lnych liter! :)';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Nie, program jak najbardziej si?? wykona!';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie do ko??ca. Przypomnijcie sobie, od kt??rej cyfry zaczynaj?? liczy?? programi??ci..?';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

To tyle na dzi??! Na kolejnej lekcji pom??wimy nieco o wspomnianych wcze??niej instrukcjach warunkowych, czyli jak sprawi?? aby nasz kod dzia??a?? w ka??dej mo??liwej sytuacji!<br/>

Oh, by??bym zapomnia??: wasza dzienna dawka zadanek z lekcji:

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
  1. Zefiniujcie tablice ka??dego znanego wam typu z co najmniej dwoma elementami, a nast??pnie wy??wietlcie elementy tej samej tablicy obok siebie.<br/>
  2. Spr??bujcie wy??wietli?? element kt??ry nie nale??y do tablicy, np., dla int liczby[3]; wy??wietlcie element nr. 5 oraz 6. Co pokazuje konsola? :)<br/>
</div>

Do zobaczenia! :)

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_arrays.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-2/Tablice-jednowymiarowe/292">Strona cpp0x</a>

</div>
