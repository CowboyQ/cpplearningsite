Lekcja 12: Wyjątki

Witajcie! Dzisiejsza lekcja opowie wam o wyjątkach oraz tym, jak bardzo potrafią uratować nasz program.
Wyjątki w C++ pozwalają nam na zachowanie spokoju oraz zapewnianie bezbłędnego działania naszego programu. Dzieje się tak dlatego, gdyż o błędach pomyśleliśmy *zanim* mogły się one wydarzyć!
Zobaczmy jak działają wyjątki:

```c
//dowolny kod
try{
	int wiek;
	std::cin >> wiek;
	if(wiek >= 18){
		std::cout << „Jesteś dorosły, możesz wejść!” << std::endl;
	}
	else{
		throw(wiek)
	}
}
catch(int error){
	std::cout << „Wstęp wzbroniony” << std::endl;
}
```

W tym przypadku mamy do czynienia z najzwyklejszym sprawdzaniem wieku na potrzeby przykładu: zwykły „if else” w pełni by tu wystarczył. Niemniej jednak w przyszłości, gdy będziecie pisać kod który *potencjalnie* może wywołać problem w programie należy opatrzeć go właśnie takim blokiem „try catch” :)
Warto wiedzieć o nich, gdyż często występują w większych programach i dużych projektach, dlatego jeśli kiedykolwiek się z nimi spotkacie: będziecie wiedzieli co robić :)
A póki co wystarczy. Zapraszam na kolejną (i o wiele dłuższą) lekcję o… funkcjach!
