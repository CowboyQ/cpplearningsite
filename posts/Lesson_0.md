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

Przedstawiony przed wami kurs ma za zadanie pomóc wam w rozpoczęciu przygody z programowaniem. Jeśli jesteście nowicjuszami i nigdy nie mieliście styczności z pisaniem kodu, nie ma problemu! Pierwsze 6 lekcji zostały poświęcone właśnie wam, abyście mogli zrozumieć zasady panujące w programowaniu **bez znajomości kodu!** 

Poniższy kurs został opracowany z myślą o osobach nie mających żadnego pojęcia o programowaniu, dlatego nie przejmujcie się i oddajcie się lekturze we własnym tempie :)

Jeśli jednak mieliście styczność z programowaniem i takie pojęcia jak „instrukcja warunkowa” czy „pętla” nie są dla was obce, możecie przewinąć kurs do lekcji 7: "Podstawy C++" – to tam rozpoczynamy zabawę z kodem.<br/>
Po kursie możecie się przemieszczać w dowolnym kierunku klikając nazwę lekcji :)

W trakcie kursu możecie spotkać się z drobnymi pytaniami dotyczącymi lekcji, którą czytacie. Możecie dzięki nim sprawdzić swoją wiedzę, oraz (jeśli nie uda wam się odpowiedzieć)
uzyskać dodatkowe wyjaśnienia odnośnie omawianej kwestii :)<br/>
Pytania te będą wyglądały następująco:

**Jaki język programowania będzie omawiany w tym kursie?**
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

<button id="baton" class="btn" onclick = "if(document.getElementById('op3').checked){
			document.getElementById('answer').innerHTML = 'Dokładnie tak! :)';
			document.getElementById('answer').style='display:block;';
			}
		else{
			document.getElementById('answer').innerHTML = 'Niestety, nie tym razem! Omawianym kursem będzie C++ :)';
			document.getElementById('answer').style='display:block;';
		}"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

<p>Ponadto, po każdej lekcji do waszej dyspozycji będą zadania do wykonania. Są one oczywiście nieobowiązkowe, ale pamiętajcie: nauka programowania składa się głównie z pisania programów, więc ćwicząc poznane umiejętności staniecie się świetnymi programistami w mgnieniu oka! :)<br/>
Zadania te będą dostępne po kliknięciu takiego przycisku:</p>

<button onclick="console.log('ConsoleLogTestExample03');if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadania</button>

<div id="exercises" style="display: none" class="exercise">
  Tutaj będą dostępne zadania do zrobienia :)
</div>

Bez względu na drogę którą wybierzecie: cieszę się, że zdecydowaliście się skorzystać z mojego kursu. Mam nadzieję, że czytanie go sprawi wam taką samą przyjemność, jaką mnie sprawiło jego pisanie. Liczę też, że obudzi to w was tę samą pasję do programowania, jaką poczuło już miliony ludzi na całym świecie :)


Powodzenia!

	~CowboyQ
