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

<h2>Lekcja 6: Podstawy języka C++</h2>

Witaj na pierwszej lekcji z języka C++! Po małym wprowadzeniu do programowania jesteście już gotowi aby poszerzyć swoje programistyczne horyzonty i w pełni nauczyć się tego wspaniałego języka!

Zanim zaczniemy, musimy mieć na czym pracować.

Zalecam wam pobranie programu <b><u><a href="https://sourceforge.net/projects/orwelldevcpp/">Dev-C++</a></u></b>. Instalacja jest bardzo szybka, a sam program nie "waży" wiele. Ponadto pozwala nam na jednoczesne pisanie kodu, jego kompilację oraz wyświetlanie ewentualnych błędów które możemy napotkać w kodzie.<br/>
Jeśli jednak nie możecie go zainstalować, nie martwcie się: możecie korzystać ze strony internetowej <b><u><a href="https://www.onlinegdb.com/online_c++_compiler">OnlineGDB</a></u></b>, gdzie edytor jest dostępny w stu procentach online :)

W przypadku używania Dev-C++ musicie otworzyć nowy *plik źródłowy,* a następnie zapisać go w wybranej przez siebie lokacji.
Przed każdym uruchomieniem (oraz po wprowadzeniu zmian) napisany program należy *skompilować oraz uruchomić.* Całe szczęście w przypadku Dev-C++ wystarczy po prostu nacisnąć klawisz **F11**.

No ale, jak to mam w zwyczaju: mniej gadania, więcej przykładów.
Przeanalizujmy poniższy program:	

```
#include <iostream>

int main(){
	std::cout << „Hello, world!” << std::endl;
	return 0;
	//taktyczny komentarz
}
```

Wygląda o wiele inaczej niż pseudokod, prawda? Mimo to nie ma czego się bać: wytłumaczę wam zaraz powyższy przykład krok po kroku.
Zacznijmy jednak od tego, co właściwie robi ten program? Na pierwszy rzut oka dość niewiele biorąc pod uwagę ilość linijek kodu.
No cóż… Macie rację. Wynik uruchomienia takiego programu jest następujący:

<img src="https://firebasestorage.googleapis.com/v0/b/cpplearningsite01.appspot.com/o/img%2F01.png?alt=media" alt="screenshot_konsoli" style="display: block; margin: 0 auto; width: 50%;"/>

Zwykłe czarne okienko z napisem „Hello, world!”, z angielskiego „Witaj, świecie!”. To już programistyczna tradycja żeby każdy, kto zaczyna swoją przygodę z kodem, napisał ten najbardziej podstawowy programik. Spróbujcie sami przepisać ten kod do środowiska, a następnie wciśnijcie F11, aby sprawić, żeby magia działa się na waszych oczach ;)
Wracając jednak do kodu, przejdźmy po kolei:
- ```#include <iostream>``` jest tzw. „dyrektywą preprocesora”. Jeśli to brzmi strasznie, to… powinno; ich używanie powinno być zawsze odpowiedzialne oraz przemyślane. Póki co pamiętajcie, że ta linijka pozwala nam na użycie ```cout <<``` nieco niżej i w ogólnym znaczeniu pozwala na komunikację programu z użytkownikiem (iostream, czyli I/O Stream, to nic innego jak biblioteka Input/Output)

- ```int main(){}``` to nasza główna funkcja, nasz program i główne stanowisko dowodzenia. Każdy nasz program będzie startował właśnie z tego miejsca i to tutaj będzie się działo wszystko co najistotniejsze. ```main()``` to funkcja (które pewnie pamiętacie z wprowadzenia), w której wykonuje się kod naszego programu. Jest ona typu ```int```, a więc liczby całkowitej. Wiem że to dużo informacji jak na początek, ale wystarczy, że zapamiętacie, że jest to główny komponent naszego programu i wszystko co będziemy wykonywać, będzie się wykonywać właśnie tam.

- ```std::cout << „Hello, world!” << std::endl;``` jest bardzo długą linijką, dlatego rozbijemy ją na kilka części
	- ```std::cout``` oznacza powiedzenie komputerowi „Słuchaj, chcę żebyś wyświetlił wiadomość w konsoli”
	- ```<<``` oznacza przekazanie wiadomości po prawej stronie
	- ```„Hello, world!”``` to nasza wiadomość, którą chcemy przekazać
	- ```<< std::endl;``` oznacza zakończenie linijki i przejście do nowej: coś jak wstawienie znaku Enter.
- ```return 0;``` jest bardzo istotną częścią programu pomimo tego, że nie robi w naszym przypadku nic. Dlaczego jest taka ważna? Ponieważ jeśli spróbujecie skompilować program bez niej otrzymacie błąd, a to znak, że to dość ważna linijka ;)
Dlaczego jest taka ważna? Jest to powiązane z faktem, że nasz program jest funkcją. Nie tylko to: jest funkcją typu *int*. Funkcje mają to do siebie, że *zwracają pewną wartość.* Jest to strasznie istotne, więc postarajcie się to zapamiętać.<br/>

Nasza funkcja main też zwraca wartość, i jest nią 0. Nie jest to przypadek: po pierwsze, zwracamy 0 ponieważ *musimy* zwrócić liczbę całkowitą (main jest typu *int*, czyli typu liczby całkowitej). Natomiast 0 informuje nas, że program został wykonany poprawnie i bez błędów.<br/>
Postarajcie się nie zmieniać tej liczby: o ile możecie zmienić ją na dowolną liczbę całkowitą, o tyle zwrócenie liczby innej od 0 zazwyczaj oznacza błąd w wykonaniu programu, dlatego warto pozostać przy standardowej opcji ;)<br/>

"Okej, ale... jak możemy *wprowadzić* jakieś informacje do programu?". Bardzo prosto: korzystając z ```std::cin >> x;```, gdzie ```x``` to nasza zmienna (dowolnego typu)!<br/>

Oh, a na sam koniec coś, co chyba pominąłem... ```//taktyczny komentarz``` jest właśnie tym: komentarzem. Wszystko, co znajduje się za ```//``` jest **całkowicie ignorowane** przez program: pozwala to na wstawianie krótkich komentarzy do kodu, dzięki czemu możemy szybko wyjaśnić co robi dany fragment.<br/>
Warto również wspomnieć, że istnieje komentarz blokowy: ```/* [...] */``` którym możemy zakomentować *dowolną ilość linijek kodu.*<br/>
Wiem że to bardzo dużo informacji, dlatego spróbujcie „przyjąć” to wszystko na spokojnie; przy herbatce albo kubku gorącego kakao. Wiedza będzie napływać z każdą kolejną lekcją i zaczniecie rozumieć coraz to więcej :)

**Jaką liczbę powinna zwracać funkcja ```main()```?**
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
		document.getElementById('answer').innerHTML = 'Zgadza się! :)';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Niestety nie. Nasza funkcja jest typu int, dlatego też musimy zwrócić liczbę *całkowitą.*';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie do końca. O ile *możemy* zwrócić 1, o tyle zazwyczaj jest to informacja o błędzie programu, dlatego starajmy się nie używać liczby innej niż *ta poprawna* ;)';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

A na deser: proste zadanko domowe. Sprawdźcie sami!

<button onclick="if (document.getElementById('exercises').style.display === 'none') {document.getElementById('exercises').style.display = 'block';} else {document.getElementById('exercises').style.display = 'none';}" class="exerciseButton">Zadanko</button>

<div id="exercises" style="display: none" class="exercise">
  Spróbujcie tak zmodyfikować program tak, aby wyświetlił w osobnych linijkach wasze imię, nazwisko oraz szkołę :)
</div>
<br/>

<div style="background-color: #17eb50;border-radius: 10px;padding: 5px;padding-left: 20px;border: 5px #0f6124 dashed;">
<h3>Dodatkowe materiały:</h3>

- <a href="https://www.w3schools.com/cpp/default.asp">Strona W3Schools [ang.]</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-1/Uruchamiamy-pierwszy-program/6">Strona cpp0x</a>
- <a href="https://cpp0x.pl/kursy/Kurs-C++/Poziom-1/Podstawy-programowania-w-C++/7">Inna strona cpp0x</a>

</div>