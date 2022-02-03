Lekcja 6: Podstawy języka C++
Witaj na pierwszej lekcji z języka C++! Po małym wprowadzeniu do programowania jesteście już gotowi aby poszerzyć swoje programistyczne horyzonty i w pełni nauczyć się tego wspaniałego języka!
No ale, jak to mam w zwyczaju: mniej gadania, więcej przykładów.
Przeanalizujcie poniższy program:	
```
#include <iostream>

int main(){
	std::cout << „Hello, world!” << std::endl;
	return 0;
}
```
Wygląda o wiele inaczej niż pseudokod, prawda? Mimo to nie ma czego się bać: wytłumaczę wam zaraz poniższy przykład krok po kroku.
Zacznijmy jednak od tego, co właściwie robi ten program? Na pierwszy rzut oka dość niewiele biorąc pod uwagę ilość linijek kodu.
No cóż… Macie rację  Wynik uruchomienia takiego programu jest następujący:

[insert obrazek]

Zwykłe czarne okienko z napisem „Hello, world!”, z angielskiego „Witaj, świecie!”. To już programistyczna tradycja żeby każdy, kto zaczyna swoją przygodę z kodem napisał ten najbardziej podstawowy programik. Spróbujcie sami przepisać ten kod do środowiska, a następnie wciśnijcie F11 aby sprawić, żeby magia działa się na waszych oczach ;)
Wracając jednak do kodu, przejdźmy po kolei:
- #include <iostream> jest tzw. „dyrektywą preprocesora”. Jeśli to brzmi strasznie, to… powinno; używanie ich oraz dokładne wytłumaczenie będzie dopiero w zaawansowanej części kursu. Póki co pamiętajcie, że ta linijka pozwala nam na użycie „cout <<” nieco niżej i w ogólnym znaczeniu pozwala na komunikację programu z użytkownikiem (iostream, czyli I/O Stream to nic innego jak biblioteka Input/Output)

- int main(){} to nasza główna funkcja, nasz program i główne stanowisko dowodzenia. Każdy nasz program będzie startował właśnie z tego miejsca i to tutaj będzie się działo wszystko co najistotniejsze. main() to funkcja (o których nieco później) w której wykonuje się kod naszego programu. Jest ona typu „int”, a więc liczby całkowitej. Wiem że to dużo informacji jak na początek, ale wystarczy, że zapamiętacie, że jest to główny komponent naszego programu i wszystko co będziemy wykonywać, będzie się wykonywać właśnie tam.

- std::cout << „Hello, world!” << std::endl; jest bardzo długą linijką, dlatego rozbijemy ją na kilka części
- - std::cout oznacza powiedzenie komputerowi „Słuchaj, chcę żebyś wyświetlił wiadomość w konsoli”
- - << oznacza przekazanie wiadomości po prawej stronie
- - „Hello, world!” to nasza wiadomość, którą chcemy przekazać
- - << std::endl; oznacza zakończenie linijki i przejście do nowej: coś jak wstawienie znaku Enter.
- return 0; jest bardzo istotną częścią programu pomimo tego, że nie robi w naszym przypadku nic. Dlaczego jest taka ważna? Ponieważ jeśli spróbujecie skompilować program bez niej otrzymacie błąd, a to znak, że to dość ważna linijka ;)
Dlaczego jest taka ważna? Jest to powiązane z faktem, że nasz program jest funkcją. Nie tylko to: jest funkcją typu *int*. Funkcje mają to do siebie, że *zwracają pewną wartość.* Jest to strasznie istotne, więc postarajcie się to zapamiętać.
Nasza funkcja main też zwraca wartość, i jest nią 0. Nie jest to przypadek: po pierwsze, zwracamy 0 ponieważ *musimy* zwrócić liczbę całkowitą (main jest typu *int*, czyli typu liczby całkowitej). Natomiast 0 informuje nas, że program został wykonany poprawnie i bez błędów.
Postarajcie się nie zmieniać tej liczby: o ile możecie zmienić ją na dowolną liczbę całkowitą, o tyle zwrócenie liczby innej od 0 zazwyczaj oznacza błąd w wykonaniu programu, dlatego warto pozostać przy standardowej opcji ;)
Wiem że to bardzo dużo informacji, dlatego spróbujcie „przyjąć” to wszystko na spokojnie; przy herbatce albo kubku gorącego kakao. Wiedza będzie napływać z każdą kolejną lekcją i zaczniecie rozumieć coraz to więcej  
