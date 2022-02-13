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

<h2>Lekcja 20: Konkluzje i zakończenie</h2>
Witajcie po raz ostatni!<br/>
Niestety, nasza wspólna przygoda dobiega końca, dlatego też chciałem poświęcić chwilę na wskazanie wam dalszej drogi, którą możecie się kierować w waszej edukacji :)

- Pozycje z <a href="https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list">Tej listy.</a> Co prawda książki bardzo szybko tracą na aktualności, lecz rzeczy których się dzięki nim nauczycie pozostaną z wami na zawsze.
    - Osobiście polecam *Opus magnum C++*, obecnie już legendarna pozycja wśród programistów!
- Strony internetowe takie jak:
    - <a href="https://www.learncpp.com">learncpp.com</a> [ang.]
    - <a href="https://www.codecademy.com/learn/learn-c-plus-plus">Codecademy</a> [ang.]
    - <a href="https://www.sololearn.com/learning/1051">SoloLearn</a> [ang.]
    - <a href="https://cpp0x.pl/kursy/">cpp0x.pl</a>
    - <a href="https://miroslawzelent.pl/kurs-c++/">miroslawzelent.pl</a> *który, według mnie, robi fenomenalne filmiki na YouTube, cieplutko polecam!*
- Projekty, projekty, projekty!
    - Wszystko od prostych programów konsolowych które zbierają i przechowują loginy i hasła
    - Przez system do wynajmowania samochodów, symulacja gry w sudoku
    - Aż po rysowanie na ekranie!
    - Załączam wam też <a href="https://www.dunebook.com/c-project-ideas-for-beginners/">listę projektów na start</a>: w razie gdybyście nie wiedzieli gdzie ich szukać. A jeśli nie wiecie, gdzie zacząć... Każdemu polecam zacząć *na początku ;)*

Wasza przygoda z C++ dopiero się zaczęła: na swojej drodze poznacie jeszcze wiele metod, pojęć i rozwiązań o których istnieniu nie wiedzieliście!<br/>
Żeby je poznać, trzeba napotkać nowe problemy i dążyć do ich rozwiązania. Ale gdzie szukać rozwiązań?

- <a href="https://stackoverflow.com">StackOverflow</a> to dla wielu programistów Biblia, pierwsze oraz ostatnie miejsce ratunku. Każdy szuka tu rozwiązań, pomysłów, odpowiedzi na nurtujące pytania. Jeśli napotkacie błąd i w Google wpiszecie "[treść błędu] stackoverflow" to jest **bardzo** duża szansa, że znajdziecie swoją odpowiedź.
    - **UWAGA:** błagam nie sugerujcie się kodem z *pytania,* tylko tym niżej, który jest *w odpowiedzi.*
- <a href="https://www.reddit.com/r/programming/">Reddit r/programming</a> jest równie potężną bazą wiedzy; zawiera pytania, odpowiedzi oraz sugestie dla początkujących programistów, dlatego warto się rozejrzeć!
- <a href="https://github.com">Github.com</a> jest świetny: pozwala wam przechowywać swój kod w chmurze, kontrolować jego wersje, dołączać swoje pomysły i małe cegiełki kodu do większych, publicznych projektów... Jest to wspaniałe miejsce zarówno do pracy, jak i nauki.


Teraz, gdy wskazałem wam dalszą drogę nie pozostaje mi nic innego, jak zadać wam jedno, ostatnie zadanko:

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanka</button>

<div id="exercises" style="display: none" class="exercise">

  Bawcie się dobrze z programowaniem! :)
</div>
<br/>

Dziękuję wam za wspólną podróż! Mam nadzieję, że wam się podobało i że wpadniecie tu kiedyś z news'ami o waszych programistycznych podbojach!

    ~CowboyQ
