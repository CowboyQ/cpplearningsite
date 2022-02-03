Lekcja 9: Operatory logiczne oraz instrukcje warunkowe

Witajcie ponownie! Na dzisiejszej lekcji dowiemy się co nieco o operatorach logicznych oraz ich zastosowaniu, w szczególności w instrukcjach warunkowych.

Najpierw słowo o operatorach logicznych, na szczęście teorii nie jest zbyt dużo:
- Operatorów jest kilka a część z nich pamiętacie może z matematyki: >, <, >=, <=, != czy ==. Przedostatni oznacza „różny”. Ten ostatni jest szczególnie istotny: zauważyliście jak pojedynczy znak „=” oznacza *przypisanie?* Podwójny znak oznacza sprawdzenie równości między dwoma zmiennymi, dlatego warto poznać różnicę gdyż jest dość spora!
- Istnieją też inne operatory których możecie nie kojarzyć: && („and”), || („or”). Dzięki nim możemy budować bardziej rozbudowane warunki.
- Warto tu też wspomnieć o %, czyli oznaczeniu modulo: reszty z dzielenia.
Instrukcje warunkowe natomiast pomagają nam lepiej kontrolować działanie programu: możemy wtedy sprawić aby nasz program był wielofunkcyjny i odpowiadał na dane wprowadzane przez użytkownika!
A skoro już o tym mowa… Napiszmy jakiś program który (mam nadzieję) lepiej zobrazuje całą tę lekcję ;)

```c
#include <iostream>
int main(){
	int a = 5;
	if(a < 10){
		std::cout << "Liczba jest mniejsza niz 10" << std::endl;
	}
	else if(a < 20){
		std::cout << "Liczba jest mniejsza niz 20" << std::endl;
	}
	else{
		std::cout << "Liczba jest wieksza niz 20" << std::endl;
	}
	return 0;
}
```

Jak wszystko w informatyce, nie jest to zbyt skomplikowane!
Zaczynamy od naszej zmiennej „a” której przypisujemy wartość 5.
Program przechodzi test logiczny w pierwszych okrągłych nawiasach przy słowie „if”: *jeśli* a jest mniejsze niż 10 *to* wykonaj fragment kodu. Kod ten jest oczywiście wykonywany, ale co potem?
No cóż… nic!
Program kończy swoje zadanie, ponieważ żadna z instrukcji „else” nie zostanie już wykonana, gdyż zawiera słowo *else*: *w przeciwnym wypadku.* Pierwszy przypadek został wykonany, więc żaden inny z tym słowem nie będzie.
„Okej, ale… co jeśli dam pod sobą kilka instrukcji ‘if’, bez ‘else’?”
W takim przypadku każdy warunek będzie sprawdzany, a kod wykonywany jeśli warunek zostanie spełniony!
Nauka manipulacją instrukcjami ‘if’ oraz ‘else’ to czysta praktyka i sprawdzanie co działa, a co nie. Dlatego też napiszmy trochę kodu i sprawdźmy, co działa :)

```c
#include <iostream>

int main(){
	int wiek = 19;
	if(wiek > 0 && wiek < 10){
		std::cout << "Jestes jeszcze dzieckiem";
	}
	if(wiek > 10 && wiek < 18){
		std::cout << "Jestes nastolatkiem";
	}
	if(wiek == 18 || wiek > 18){
		std::cout << "Jestes juz dorosly!";
	}
	else{
		std::cout << "Jestes jeszcze bobasem!";
	}
	return 0;
}
```

Jak możecie zauważyć, w warunkach zastosowaliśmy również operatory logiczne: && oraz || aby połączyć operacje logiczne. W pierwszym mamy do czynienia z sytuacją „jeżeli wiek jest większy od zera *oraz* wiek jest mniejszy niż 10” wypisujemy pierwszą opcję etc. :)
Warunki świetnie sprawdzają się również w przypadku pętli o których to opowiem wam na kolejnej lekcji. Do zobaczenia! :)
