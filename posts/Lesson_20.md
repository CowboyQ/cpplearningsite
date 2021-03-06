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

<h2>Lekcja 20: Konkluzje i zako??czenie</h2>
Witajcie po raz ostatni!<br/>
Niestety, nasza wsp??lna przygoda dobiega ko??ca, dlatego te?? chcia??em po??wi??ci?? chwil?? na wskazanie wam dalszej drogi, kt??r?? mo??ecie si?? kierowa?? w waszej edukacji :)

- Pozycje z <a href="https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list">Tej listy.</a> Co prawda ksi????ki bardzo szybko trac?? na aktualno??ci, lecz rzeczy kt??rych si?? dzi??ki nim nauczycie pozostan?? z wami na zawsze.
    - Osobi??cie polecam *Opus magnum C++*, obecnie ju?? legendarna pozycja w??r??d programist??w!
- Strony internetowe takie jak:
    - <a href="https://www.learncpp.com">learncpp.com</a> [ang.]
    - <a href="https://www.codecademy.com/learn/learn-c-plus-plus">Codecademy</a> [ang.]
    - <a href="https://www.sololearn.com/learning/1051">SoloLearn</a> [ang.]
    - <a href="https://cpp0x.pl/kursy/">cpp0x.pl</a>
    - <a href="https://miroslawzelent.pl/kurs-c++/">miroslawzelent.pl</a> *kt??ry, wed??ug mnie, robi fenomenalne filmiki na YouTube, cieplutko polecam!*
- Projekty, projekty, projekty!
    - Wszystko od prostych program??w konsolowych kt??re zbieraj?? i przechowuj?? loginy i has??a
    - Przez system do wynajmowania samochod??w, symulacja gry w sudoku
    - A?? po rysowanie na ekranie!
    - Za????czam wam te?? <a href="https://www.dunebook.com/c-project-ideas-for-beginners/">list?? projekt??w na start</a>: w razie gdyby??cie nie wiedzieli gdzie ich szuka??. A je??li nie wiecie, gdzie zacz????... Ka??demu polecam zacz???? *na pocz??tku ;)*

Wasza przygoda z C++ dopiero si?? zacz????a: na swojej drodze poznacie jeszcze wiele metod, poj???? i rozwi??za?? o kt??rych istnieniu nie wiedzieli??cie!<br/>
??eby je pozna??, trzeba napotka?? nowe problemy i d????y?? do ich rozwi??zania. Ale gdzie szuka?? rozwi??za???

- <a href="https://stackoverflow.com">StackOverflow</a> to dla wielu programist??w Biblia, pierwsze oraz ostatnie miejsce ratunku. Ka??dy szuka tu rozwi??za??, pomys????w, odpowiedzi na nurtuj??ce pytania. Je??li napotkacie b????d i w Google wpiszecie "[tre???? b????du] stackoverflow" to jest **bardzo** du??a szansa, ??e znajdziecie swoj?? odpowied??.
    - **UWAGA:** b??agam nie sugerujcie si?? kodem z *pytania,* tylko tym ni??ej, kt??ry jest *w odpowiedzi.*
- <a href="https://www.reddit.com/r/programming/">Reddit r/programming</a> jest r??wnie pot????n?? baz?? wiedzy; zawiera pytania, odpowiedzi oraz sugestie dla pocz??tkuj??cych programist??w, dlatego warto si?? rozejrze??!
- <a href="https://github.com">Github.com</a> jest ??wietny: pozwala wam przechowywa?? sw??j kod w chmurze, kontrolowa?? jego wersje, do????cza?? swoje pomys??y i ma??e cegie??ki kodu do wi??kszych, publicznych projekt??w... Jest to wspania??e miejsce zar??wno do pracy, jak i nauki.


Teraz, gdy wskaza??em wam dalsz?? drog?? nie pozostaje mi nic innego, jak zada?? wam jedno, ostatnie zadanko:

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">

  Bawcie si?? dobrze z programowaniem! :)
</div>
<br/>

Dzi??kuj?? wam za wsp??ln?? podr????! Mam nadziej??, ??e wam si?? podoba??o i ??e wpadniecie tu kiedy?? z news'ami o waszych programistycznych podbojach!

    ~CowboyQ
