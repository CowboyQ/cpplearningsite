Lekcja 14: Klasy
Witajcie! Dzisiejsza lekcja jest jedyna w swoim rodzaju, gdyż będzie ona podzielona na dwie części. Mamy bardzo dużo materiału do przerobienia, ale nie martwcie się: będzie to równie proste jak wszystko co do tej pory robiliśmy :)
Klasy można w skrócie opisać jako *nasz własny typ danych.* Możemy go używać do przechowywania danych oraz wykonywania na nich operacji, tak jak robiliśmy to w przypadku typów int, char czy string.
Zacznijmy jednak od najprostszych rzeczy, czyli jak napisać własną klasę:

```c
class Osoba{
	public:
		int wiek;
		std::string imie;
}
```

Brawo, właśnie napisaliście swoją pierwszą klasę, możecie być z siebie dumni! :)
Teraz musimy jednak zrozumieć, co *dokładnie* napisaliśmy, a następnie przejdziemy do tego, jak możemy użyć naszej klasy.
Każdą klasę definiujemy przez słowo kluczowe „class”, a następnie przez nazwę klasy. Przy wyborze nazwy pamiętajcie, aby kierować się prostotą: każdy zrozumie co będzie robiła klasa „Car”, ale „simpleAnimatronicsBuilderClassForWheelsAndChasis” może być nieco bardziej skomplikowane do zrozumienia ;)
Następnie mamy do czynienia z *modyfikatorem dostępu* „public”, o których więcej dowiecie się na następnej lekcji. Na razie wiedzcie, że deklarując zmienne jako „public” pozwalacie całemu programowi na dostęp do nich, co *na razie* chcemy.
Pod modyfikatorem dostępu (zauważcie dwukropek zamiast średnika) mamy dostępne zmienne *dostępne w naszej klasie.* Bardzo istotnym jest to, że *nie możemy im przypisywać wartości wewnątrz klasy:* możemy jedynie je tam deklarować, co zostanie wyjaśnione za chwilkę.
Klasa, będąc złożonym typem danych (gdyż sama składa się z kilku komponentów), sama w sobie nie daje nam zbyt wiele. Nie możemy pracować *bezpośrednio* na niej, tak samo jak nie mogliśmy pracować *bezpośrednio* na **typie** int, double etc.
Potrzebujemy zatem *zmiennej* **typu** Osoba.
Spójrzcie na poniższy przykład:

```c
class Osoba{
	public:
		int wiek;
		std::string imie;
}

int main(){
	Osoba pierwszyObiekt;
	pierwszyObiekt.wiek = 25;
	pierwszyObiekt = „Andrzej”;
	std::cout << pierwszyObiekt.wiek << std::endl;
	return 0;
}
```

Żeby pracować na klasach potrzebujemy *zmiennych typu Osoba.* Takie zmienne nazywamy **obiektami.** Rozumiem, że jest to dość abstrakcyjna koncepcja, dlatego przejdźmy przez to jeszcze raz:
- tworzymy *klasę* która posiada w sobie *zmienne*
- klasa jest *nowym*, stworzonym przez nas *typem danych*
- jeśli klasa jest tylko *typem* danych, to potrzebujemy *zmiennych* tego typu aby na nich pracować
- zmienne które odnoszą się do klasy nazywamy **obiektami**
Podobnie jak „int” reprezentuje liczbę całkowitą, „float” liczbę zmiennoprzecinkową, „Osoba” reprezentuje (w bardzo uproszczony sposób) pewną osobę. Każdy z nas ma wiek oraz imię, które możemy przedstawić jako uproszczony typ danych (kolejno int oraz string).
Analogicznie możemy stworzyć klasę „Pies”:

```c
class Pies{
	public:
		int wiek;
		std::string imie;
		std::string rasa;
		std::string kolor;
}

int main(){
	Pies burek;
	burek.wiek = 3;
	burek.imie = „Burek”;
	burek.rasa = „Jamnik”;
	burek.kolor = „Brązowy”;
	std::cout << burek.kolor << std::endl;
	return 0;
}
```

Jak widzicie, klasy pomagają nam opisywać otaczający nas świat w bardziej złożonej formie niż same liczby i nazwy.
„Ale… przecież ta klasa składa się z samych liczb i nazw!”
Zgadza się, tak właśnie jest.
Ale co jeśli powiem wam, że… *Wcale nie musi tak być? ;)*

```c
class Opona{
	public:
		int rozmiar;
		std::string kolor;
}

class Silnik{
	public:
		double pojemnosc;
		std::string marka;
}

class Samochod{
	public:
		Opona opony[4];
		Silnik silnik;
		std::string kolor;
}
```

Zobaczcie sami: obiekty klasy mogą służyć za *zmienne wewnątrz innej klasy.* Dzięki takiemu rozwiązaniu możemy szczegółowo opisywać świat, dodając tak wiele parametrów jak tylko to potrzebne!
Oczywiście, koniec końców każdy z nich rozłożony jest na najbardziej elementarne z czynników: opisujemy je liczbami oraz napisami. To, czego nie możemy w ten sposób opisać rozbijamy na kolejne klasy i ich atrybuty.
Pamiętajcie jednak: jest to jedynie *możliwość.* Nie musicie rozkładać klasy „Silnik” do każdej pojedynczej śrubki ;)
Wszystko zależy od tego jakiej dokładności potrzebujecie; na potrzeby tego kursu opisanie silnika za pomocą pojemności i marki w zupełności wystarczy. Niemniej jednak w dużych projektach złożoność może być o wiele bardziej skomplikowana.
Na razie wystarczy tych informacji. Przejrzyjcie tę lekcję ponownie jeśli potrzebujecie i przygotujcie się na więcej, gdyż na kolejnej lekcji również zajmiemy się klasami (oraz ich modyfikatorami dostępu i metodami). Powodzenia i do zobaczenia! :)
