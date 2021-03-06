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

<h2>Lekcja 6: Podstawy j??zyka C++</h2>

Witaj na pierwszej lekcji z j??zyka C++! Po ma??ym wprowadzeniu do programowania jeste??cie ju?? gotowi aby poszerzy?? swoje programistyczne horyzonty i w pe??ni nauczy?? si?? tego wspania??ego j??zyka!

Zanim zaczniemy, musimy mie?? na czym pracowa??.

Zalecam wam pobranie programu <b><u><a href="https://sourceforge.net/projects/orwelldevcpp/">Dev-C++</a></u></b>. Instalacja jest bardzo szybka, a sam program nie "wa??y" wiele. Ponadto pozwala nam na jednoczesne pisanie kodu, jego kompilacj?? oraz wy??wietlanie ewentualnych b????d??w kt??re mo??emy napotka?? w kodzie.<br/>
Je??li jednak nie mo??ecie go zainstalowa??, nie martwcie si??: mo??ecie korzysta?? ze strony internetowej <b><u><a href="https://www.onlinegdb.com/online_c++_compiler">OnlineGDB</a></u></b>, gdzie edytor jest dost??pny w stu procentach online :)

W przypadku u??ywania Dev-C++ musicie otworzy?? nowy *plik ??r??d??owy,* a nast??pnie zapisa?? go w wybranej przez siebie lokacji.
Przed ka??dym uruchomieniem (oraz po wprowadzeniu zmian) napisany program nale??y *skompilowa?? oraz uruchomi??.* Ca??e szcz????cie w przypadku Dev-C++ wystarczy po prostu nacisn???? klawisz **F11**.

No ale, jak to mam w zwyczaju: mniej gadania, wi??cej przyk??ad??w.
Przeanalizujmy poni??szy program:	

```
#include <iostream>

int main(){
	std::cout << ???Hello, world!??? << std::endl;
	return 0;
	//taktyczny komentarz
}
```

Wygl??da o wiele inaczej ni?? pseudokod, prawda? Mimo to nie ma czego si?? ba??: wyt??umacz?? wam zaraz powy??szy przyk??ad krok po kroku.
Zacznijmy jednak od tego, co w??a??ciwie robi ten program? Na pierwszy rzut oka do???? niewiele bior??c pod uwag?? ilo???? linijek kodu.
No c??????? Macie racj??. Wynik uruchomienia takiego programu jest nast??puj??cy:

<img src="https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/img%2F01.png?alt=media" alt="screenshot_konsoli" style="display: block; margin: 0 auto; width: 50%;"/>

Zwyk??e czarne okienko z napisem ???Hello, world!???, z angielskiego ???Witaj, ??wiecie!???. To ju?? programistyczna tradycja ??eby ka??dy, kto zaczyna swoj?? przygod?? z kodem, napisa?? ten najbardziej podstawowy programik. Spr??bujcie sami przepisa?? ten kod do ??rodowiska, a nast??pnie wci??nijcie F11, aby sprawi??, ??eby magia dzia??a si?? na waszych oczach ;)
Wracaj??c jednak do kodu, przejd??my po kolei:
- ```#include <iostream>``` jest tzw. ???dyrektyw?? preprocesora???. Je??li to brzmi strasznie, to??? powinno; ich u??ywanie powinno by?? zawsze odpowiedzialne oraz przemy??lane. P??ki co pami??tajcie, ??e ta linijka pozwala nam na u??ycie ```cout <<``` nieco ni??ej i w og??lnym znaczeniu pozwala na komunikacj?? programu z u??ytkownikiem (iostream, czyli I/O Stream, to nic innego jak biblioteka Input/Output).

- ```int main(){}``` to nasza g????wna funkcja, nasz program i g????wne stanowisko dowodzenia. Ka??dy nasz program b??dzie startowa?? w??a??nie z tego miejsca i to tutaj b??dzie si?? dzia??o wszystko co najistotniejsze. ```main()``` to funkcja (kt??re pewnie pami??tacie z wprowadzenia), w kt??rej wykonuje si?? kod naszego programu. Jest ona typu ```int```, a wi??c liczby ca??kowitej. Wiem ??e to du??o informacji jak na pocz??tek, ale wystarczy, ??e zapami??tacie, ??e jest to g????wny komponent naszego programu i wszystko co b??dziemy wykonywa??, b??dzie si?? wykonywa?? w??a??nie tam.

- ```std::cout << ???Hello, world!??? << std::endl;``` jest bardzo d??ug?? linijk??, dlatego rozbijemy j?? na kilka cz????ci
	- ```std::cout``` oznacza powiedzenie komputerowi ???S??uchaj, chc?? ??eby?? wy??wietli?? wiadomo???? w konsoli???
	- ```<<``` oznacza przekazanie wiadomo??ci po prawej stronie
	- ```???Hello, world!???``` to nasza wiadomo????, kt??r?? chcemy przekaza??
	- ```<< std::endl;``` oznacza zako??czenie linijki i przej??cie do nowej: co?? jak wstawienie znaku Enter.
- ```return 0;``` jest bardzo istotn?? cz????ci?? programu pomimo tego, ??e nie robi w naszym przypadku nic. Dlaczego jest taka wa??na? Poniewa?? je??li spr??bujecie skompilowa?? program bez niej otrzymacie b????d, a to znak, ??e to do???? wa??na linijka ;)
Dlaczego jest taka wa??na? Jest to powi??zane z faktem, ??e nasz program jest funkcj??. Nie tylko to: jest funkcj?? typu *int*. Funkcje maj?? to do siebie, ??e *zwracaj?? pewn?? warto????.* Jest to strasznie istotne, wi??c postarajcie si?? to zapami??ta??.<br/>

Nasza funkcja main te?? zwraca warto????, i jest ni?? 0. Nie jest to przypadek: po pierwsze, zwracamy 0 poniewa?? *musimy* zwr??ci?? liczb?? ca??kowit?? (main jest typu *int*, czyli typu liczby ca??kowitej). Natomiast 0 informuje nas, ??e program zosta?? wykonany poprawnie i bez b????d??w.<br/>
Postarajcie si?? nie zmienia?? tej liczby: o ile mo??ecie zmieni?? j?? na dowoln?? liczb?? ca??kowit??, o tyle zwr??cenie liczby innej od 0 zazwyczaj oznacza b????d w wykonaniu programu, dlatego warto pozosta?? przy standardowej opcji ;)<br/>

"Okej, ale... jak mo??emy *wprowadzi??* jakie?? informacje do programu?". Bardzo prosto: korzystaj??c z ```std::cin >> x;```, gdzie ```x``` to nasza zmienna (dowolnego typu)!<br/>

Och, a na sam koniec co??, co chyba pomin????em... ```//taktyczny komentarz``` jest w??a??nie tym: komentarzem. Wszystko, co znajduje si?? za ```//``` jest **ca??kowicie ignorowane** przez program: pozwala to na wstawianie kr??tkich komentarzy do kodu, dzi??ki czemu mo??emy szybko wyja??ni?? co robi dany fragment.<br/>
Warto r??wnie?? wspomnie??, ??e istnieje komentarz blokowy: ```/* [...] */``` kt??rym mo??emy zakomentowa?? *dowoln?? ilo???? linijek kodu.*<br/>
Wiem ??e to bardzo du??o informacji, dlatego spr??bujcie ???przyj??????? to wszystko na spokojnie; przy herbatce albo kubku gor??cego kakao. Wiedza b??dzie nap??ywa?? z ka??d?? kolejn?? lekcj?? i zaczniecie rozumie?? coraz to wi??cej :)

**Jak?? liczb?? powinna zwraca?? funkcja ```main()```?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">1</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">2.5</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">0</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Zgadza si??! :)';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Niestety nie. Nasza funkcja jest typu int, dlatego te?? musimy zwr??ci?? liczb?? *ca??kowit??.*';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie do ko??ca. O ile *mo??emy* zwr??ci?? 1, o tyle zazwyczaj jest to informacja o b????dzie programu, dlatego starajmy si?? nie u??ywa?? liczby innej ni?? *ta poprawna* ;)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

A na deser: proste zadanko domowe. Sprawd??cie sami!

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanko</button>

<div id="exercises" style="display: none" class="exercise">
  Spr??bujcie tak zmodyfikowa?? program tak, aby wy??wietli?? w osobnych linijkach wasze imi??, nazwisko oraz szko???? :)
</div>
<br/>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materia??y:</h3>

- <a href="https://www.w3schools.com/cpp/default.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-1/Uruchamiamy-pierwszy-program/6">Strona cpp0x</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-1/Podstawy-programowania-w-C++/7">Inna strona cpp0x</a>

</div>