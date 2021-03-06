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

<h2>Lekcja 10: P??tle</h2>

Witajcie ponownie! Dzisiejszy temat: p??tle. Dzi?? mamy do???? sporo do om??wienia, dlatego te?? przejd??my do rzeczy.<br/>
P??tle wykorzystujemy gdy musimy wykona?? jak???? konkretn?? czynno???? wiele razy: dodawanie do siebie liczb dop??ki nie przekroczymy pewnego progu, modyfikowanie tekstu dop??ki nie uzyskamy odpowiedniego efektu??? Przyk??ad??w mo??e by?? wiele, dlatego te?? po prostu przez nie przejd??my, aby dowiedzie?? si??, na czym polega dzisiejszy temat<br/>
Zanim jednak do tego przejdziemy, szczypta teorii. Wyr????niamy *trzy* p??tle:
- while
- do??? while
- for

P??tla ```while``` wygl??da nast??puj??co:

```c
while(warunek){
	//kod;
}
```

Komputer sprawdza warunek, nast??pnie wykonuje kod znajduj??cy si?? w p??tli. Po zako??czeniu zn??w sprawdza warunek, je??li jest spe??niony to znowu wykonuje kod.. i tak do momentu w kt??rym warunek nie zostanie spe??niony.
Dla nas jako programist??w oznacza to dwie rzeczy:
- P??tla mo??e nigdy si?? nie sko??czy??. Je??li u??yjemy jako warunku ```true``` p??tla b??dzie si?? wykonywa??a w niesko??czono????.
- P??tla mo??e nie wykona?? si?? w og??le. Je??li warunek nie spe??ni si?? nawet za pierwszym razem to kod w p??tli nie wykona si?? ani razu.

Pierwsza kwestia mo??e by?? dla nas paradoksalnie przydatna. Wyobra??cie sobie program w kt??rym rysujecie i pomy??lcie o p??tli ```while(true)``` w kontek??cie od??wie??ania ekranu: musi to by?? robione ci??gle, od uruchomienia a?? do zako??czenia programu. Takie rozwi??zanie ma sens, prawda?
Druga kwestia natomiast mo??e by?? dla nas problematyczna. Co je??li musimy wykona?? jaki?? kod ale nie mo??emy zmieni?? warunku? C????, z pomoc?? przychodzi nam bli??niacza p??tla: ```do while.```
P??tla ```do while``` ma jedn?? zasadnicz?? r????nic??: mamy pewno????, ??e wykona si?? *co najmniej jeden raz.* Sp??jrzmy na kod:

```c
do{
	//kod;
}while(warunek);
```

Widzicie r????nic??? *Najpierw* wykonujemy kod, *p????niej* sprawdzamy warunek: st??d pewno????, ??e kod wykona si?? co najmniej raz!<br/> 
Na ko??cu przedstawi?? wam nieco bardziej skomplikowan??, lecz niesamowicie funkcjonaln?? p??tl??: ```for```.<br/>
Sp??jrzmy na ni?? w akcji:

```c
for(int i = 0; i < 10; i++){
	//kod;
}
```
Teraz gdy wiemy ju?? z czym mamy do czynienia, czas zrozumie?? co, jak i dlaczego:
- P??tla dzieli si?? na trzy ???segmenty??? oddzielone od siebie *??rednikiem.*
- Pierwszy segment wykonuje si?? *tylko jeden raz.* Je??li chcemy u??ywa?? jakich?? zmiennych wewn??trz p??tli: to dobry znak aby je zainicjalizowa??.
- Drugi segment to warunek dla kt??rego powinien wykona?? si?? program.
- Trzeci segment wykonuje si?? *po ka??dym* przej??ciu p??tli.

Mo??liwo??ci jakie to przedstawia s?? wielkie, ale skupmy si?? na najcz??stszym, podstawowym u??ytkowaniu:

- W pierwszym segmencie inicjujemy zmienn??, kt??r?? b??dziemy wykorzystywa?? *tylko* w tej p??tli. B??dzie ona istnia??a *tylko* w niej i nie b??dziemy mogli jej u??y?? *poza* ni??.
- W drugim segmencie wstawiamy warunek p??tli: ???p??tla ma si?? wykonywa?? *dop??ki* i jest mniejsze od 10??? w naszym przypadku. W momencie kiedy i b??dzie r??wne 10, p??tla przestanie si?? wykonywa??.
- W trzecim segmencie m??wimy p??tli, co ma si?? wydarzy?? po *pojedynczym przej??ciu* p??tli: jest to dobre miejsce aby zwi??kszy?? zmienn??, kt??rej u??ywamy w p??tli.

??eby lepiej zobrazowa?? wam t?? p??tl??, rozwa??my poni??szy przyk??ad:

```c
int liczby[10];
for(int i = 0; i < 10; i++){
	liczby[i] = 5;
}
```

Program ten tworzy tablic?? 10 element??w a nast??pnie, wewn??trz p??tli, wype??nia j?? cyfr?? 5. Zauwa??cie: ```i``` jest wpisane w kwadratowych nawiasach. Oznacza to, ??e po ka??dym przej??ciu p??tli *bierzemy kolejny element tablicy!* Dzi??ki takiemu rozwi??zaniu mo??emy operowa?? na ca??ej tablicy i wype??nia?? j?? dowolnymi warto??ciami!<br/>

Zanim sko??czymy na dzi??, lekka przypominajka:<br/>
**Kt??ra p??tla wykona si?? co najmniej raz?**
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
		document.getElementById('answer').innerHTML = 'Niestety nie: dla przyk??adu dla ustawienia warunku na false p??tla nie wykona si?? ani razu.';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Dok??adnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie do ko??ca; przy while warunek na samym pocz??tku mo??e nie przej???? testu logicznego i p??tla nie zostanie wykonana';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Dzi?? kolejna du??a dawka informacji, dlatego zostawi?? wam kilka zadanek do prze??wiczenia ca??ego tego materia??u ;)

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">
1.<br/>
  Napiszcie program, kt??ry wypisuje sum?? 10 pierwszych liczb naturalnych.<br/>
2.<br/>
  Napiszcie program, kt??ry wypisuje wszystkie cyfry naturalne *a?? do wybranej liczby,* a nast??pnie podaje sum?? tych liczb.<br/>
*3.<br/>
  Napiszcie program, kt??ry oblicza silni?? podanej liczby.<br/>
4.<br/>
  Napiszcie program, kt??ry przyjmuje do tablicy wybran?? przez was ilo???? liczb, a nast??pnie szuka zar??wno najmniejszej, jak i najwi??kszej z nich.<br/>
*5.<br/>
  Napiszcie program, kt??ry sprawdza, czy wpisane s??owo jest palindromem.

</div>

A na nast??pnych zaj??ciach: zasi??g dost??pu! Do zobaczenia! :)

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/cpp_for_loop.asp">Strona W3Schools [ang.]</a>
- <a href="https://miroslawzelent.pl/kurs-c++/rodzaje-petli-for-while-do/">Strona miroslawzelent.pl</a>

</div>