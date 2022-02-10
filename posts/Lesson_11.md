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

<h2>Lekcja 11: Zasięg dostępu</h2>

Witajcie! Dzisiejsza lekcja: zasięg dostępu, czyli symulator „jak to zmienna jest ‘not defined’??”<br/>
Zasięg dostępu jest niczym innym jak zakresem, w jakim widoczna jest wasza zmienna. W baaaardzo dużym skrócie: zmienną widać jeśli jest na tym samym poziomie albo „wyżej” niż wąsiste nawiasy w których się porusza. Co to oznacza? Zobaczmy na przykładzie:

```c
int a = 5;
if(a > 0){
	std::cout << a;
}
```

W tym przypadku ```a``` jest widoczne z poziomu ```if’a```, gdyż ```a``` jest zadeklarowane *wyżej.*

```c
int a = 10;
for(i = 0; i < 5; i++){
	std::cout << a << std::endl;
	std::cout << i << std::endl;
}
std::cout << i << std::endl;
```

W powyższym przypadku pętla wykona się bez problemu: będzie wypisywała na przemian ```a``` oraz ```i```. Natomiast po wykonaniu pętli zmienna ```i``` *przestaje być dla nas dostępna.* Dzieje się tak dlatego, że zadeklarowaliśmy ją już wewnątrz pętli. Podobnie dzieje się w poniższym przypadku:

```c
int a = 10;
if(a < 200){
	int c = a + 15;
}
std::cout << c << std::endl;
```

Zmiena ```c```została zadeklarowana *wewnątrz* instrukcji warunkowej, dlatego też nie mamy do niej dostępu “z zewnątrz”. Możemy to jednak w bardzo prosty sposób obejść *deklarując* ```c``` wyżej:

```c
int a = 10, c = 15;
if(a < 200){
	c = a + 15;
}
std::cout << c << std::endl;
```

Teraz nasz program nie wyrzuca już błędu, natomiast do ```c``` zostało dopisane 15 :)<br/>

No dobrze, ale...<br/>

```
#include <iostream>

int x = 5;
int main(){
	std::cout << x << std::endl;
	return 0;
}
```
**Czy zmienna x zostanie wyświetlona?**

<form> 
<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op1">
<div class="rad-design"></div>
<div class="rad-text">Tak</div>
</label>

<label class="rad-label">
<input type="radio" class="rad-input" name="fav_language" value="HTML" id="op2">
<div class="rad-design"></div>
<div class="rad-text">Nie</div>
</label>

</form>

<button id="baton" class="btn" onclick = "
if(document.getElementById('op1').checked || document.getElementById('op2').checked){
	if(document.getElementById('op1').checked){
		document.getElementById('answer').innerHTML = 'Zgadza się! x jest zadeklarowane wyżej, więc może zostać wyświetlone!';
		document.getElementById('answer').style='display:block;';
		}
	else if(document.getElementById('op2').checked){
		document.getElementById('answer').innerHTML = 'Dokładnie tak, brawo!';
		document.getElementById('answer').style='display:block;';
	}
	else{
		document.getElementById('answer').innerHTML = 'Nie do końca: zmienne *mogą* być deklarowane ponad funkcjami (co nie oznacza, że powinno się to robić), ale zostanie ona wyświetlona poprawnie.';
		document.getElementById('answer').style='display:block;';
	}
}
"><span class="btnspan">Sprawdź!</span></button>

<p id="answer" class="exercise" style="display:none;"></p>

Zasięg dostępu zmiennych może być problematyczny dla początkujących, dlatego też nie przejmujcie się: przyjdzie wam to naturalnie z praktyką w pisaniu kodu!<br/>

A póki co do zobaczenia na lekcji o wskaźnikach! ;)

