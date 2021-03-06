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

Drodzy uczniowie!

Przedstawiony przed wami kurs ma za zadanie pom??c wam w rozpocz??ciu przygody z programowaniem. Je??li jeste??cie nowicjuszami i nigdy nie mieli??cie styczno??ci z pisaniem kodu, nie ma problemu! Pierwsze 6 lekcji zosta??y po??wi??cone w??a??nie wam, aby??cie mogli zrozumie?? zasady panuj??ce w programowaniu **bez znajomo??ci kodu!** 

Poni??szy kurs zosta?? opracowany z my??l?? o osobach nie maj??cych ??adnego poj??cia o programowaniu, dlatego nie przejmujcie si?? i oddajcie si?? lekturze we w??asnym tempie :)

Je??li jednak mieli??cie styczno???? z programowaniem i takie poj??cia jak ???instrukcja warunkowa??? czy ???p??tla??? nie s?? dla was obce, mo??ecie przewin???? kurs do lekcji 7: "Podstawy C++" ??? to tam rozpoczynamy zabaw?? z kodem.<br/>
Po kursie mo??ecie si?? przemieszcza?? w dowolnym kierunku klikaj??c nazw?? lekcji :)

W trakcie kursu mo??ecie spotka?? si?? z drobnymi pytaniami dotycz??cymi lekcji, kt??r?? czytacie. Mo??ecie dzi??ki nim sprawdzi?? swoj?? wiedz??, oraz (je??li nie uda wam si?? odpowiedzie??)
uzyska?? dodatkowe wyja??nienia odno??nie omawianej kwestii :)<br/>
Pytania te b??d?? wygl??da??y nast??puj??co:

**Jaki j??zyk programowania b??dzie omawiany w tym kursie?**
<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">HTML</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Python</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op3">
<div class="rad-design"></div>
<div class="rad-text">C++</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked || document.getElementById('op3').checked){
	if(document.getElementById('op3').checked){
		document.getElementById('answer').innerHTML = 'Dok??adnie tak! :)';
		document.getElementById('answer').style='display:block;';
		}
	else{
		document.getElementById('answer').innerHTML = 'Niestety, nie tym razem! Omawianym kursem b??dzie C++ :)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawd??!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

<p>Ponadto, po ka??dej lekcji do waszej dyspozycji b??d?? zadania do wykonania. S?? one oczywi??cie nieobowi??zkowe, ale pami??tajcie: nauka programowania sk??ada si?? g????wnie z pisania program??w, wi??c ??wicz??c poznane umiej??tno??ci staniecie si?? ??wietnymi programistami w mgnieniu oka! :)<br/>
Zadania te b??d?? dost??pne po klikni??ciu takiego przycisku:</p>

<button onclick="console.log('ConsoleLogTestExample03');if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadania</button>

<div id="exercises" style="display: none" class="exercise">
  Tutaj b??d?? dost??pne zadania do zrobienia :)
</div>

Oh, jeszcze jedno!<br/>
Je??li wcia?? b??dziecie mieli jakie?? pytania albo nie b??dziecie czego?? pewni: <br/>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>W tym miejscu b??d?? zamieszcza?? wam dodatkowe materia??y</h3>

- B??d?? to linki do stron kt??re uwa??am za dobre ??r??d??a wiedzy
- Wszystkie linki do stron angloj??zycznych b??d?? oczywi??cie oznaczone
- Jednak je??li nawet to nie zaspokoi waszego ??aknienia wiedzy... No c????, nie pozostaje mi nic innego jak...
- ...odes??a?? was do Wujka Google! Wierzcie mi, nawet do??wiadczeni programi??ci musz?? czasami co?? sprawdzi??, wi??c nie czujcie si?? ??le z tego powodu :)
- Pragn?? r??wnie?? zaznaczy??, ??e **??adne** z wymienianych w tych miejscach materia????w nie nale???? do autora tego kursu, ani nie s?? z nim powiazane. S?? to materia??y dost??pne w sieci Internet, kt??re autor uzna?? za warte uwagi.

</div>

Bez wzgl??du na drog?? kt??r?? wybierzecie: ciesz?? si??, ??e zdecydowali??cie si?? skorzysta?? z mojego kursu. Mam nadziej??, ??e czytanie go sprawi wam tak?? sam?? przyjemno????, jak?? mnie sprawi??o jego pisanie. Licz?? te??, ??e obudzi to w was t?? sam?? pasj?? do programowania, jak?? poczu??o ju?? miliony ludzi na ca??ym ??wiecie :)


Powodzenia!

	~CowboyQ
