# Przedmiot fakultatywny

## Wykład 1

### Typy danych, typy zmiennych

_typ zmiennej_ _nazwa zmiennej_ = _typ danych_ np.:

 ```js
 var tekst = 'teskt';
 let liczba = 12;
 const tablica = [];
 ```

#### Typy zmiennych:
* `var` - _"zaszłość, o której trzeba zapomnieć"_
> ~ _**Prowadzący**_
* `let` - można redeklarować np.:

```js
let teskt = 'tekst';
tekst = 'tekst2';
tekst = 'tekst3';
```

* `const` - nie można zredeklarować

`var` vs `let` & `const` - różnią się zasięgiem(?)

#### Typy danych:
##### string 

```js

//Po dodaniu kropki pokazują się funkcje wbudowane

tekst.charAt(2);      // Co jest na drugiem miejscu w zmiennej
tekst.includes('st'); // Czy podany string zawiera sie w zmiennej

let zmienna = 'hello world';

zmienna.split(' '); // podział po znaku z wycięciem go

zmienna.trim(); // wycina wszystkie białe znaki

zmienna.toUpperCase(); //podniesienie czcionki.

zmienna = 'kota';
'Ala ma ' + zmienna
console.log('Ala ma ' + zmienna);

`Ala ma ${zmienna}`;

`Ala ma

${zmienna}`;
```

##### liczby

```js
let number = 2.5;
number

number = 1;

number = 9999999999999999; // limit liczby, istnieją problemy z licbzami w JavaScripcie

const x = new Number(10);

const y = 10;

x === y 		// wynik: false | Porówannie typów

x == y 			// wynik: true  | Porówananie zawartości zamienionej na string(?)

// funkcje do liczb:

Number.isFinite(120);
Number.isFinite(-12.23);
Number.isFinite(1/3);
Number.isFinite(Math.PI);
Number.isFinite(0/0);
Number.isFinite(Infinity)

let liczba = 1.123456;
liczba.toFixed(2);	    // wynik: 1.12
liczba.toFixed(4)	      // wynik: 1.1235	Zaokraglanie do góry?

Math.E
Math.PI
Math.floor(3.16);     // zaokrągalnie w dół

Math.pow(2,4);

Math.random();    // zakres od 0 do 1
```

##### bool

```js

let boolean = true;

boolean

boolean = flase;

Boolean(50); 		True
Boolean('teskt'); 	True
Boolean('');		False
Boolean({}); 		True
Boolean(0);		Flase
Boolean(1);		True
Boolean(-1);		True
```

##### tablice

```js

let tab = [1, 2, 3, 4, 5, 'six', true, false];
tab.lenght

if(true){console.log('test')}		
if(1){console.log('test')}
if(0){console.log('test')}

if(tab.lenght){console.log('test')}

tab.join()	// jeden ciąg stringa

let tablica = [1, 2, 3, 4, 5];

const tab2 = tablica.map((wartosc,index)=>{return wartosc+index});		// Zmiana i przypisanie

tablica.forEach((wartosc)=>{concole.log(wartosc)})

tablica[0] = 10;
tablica[1] = 'milion';
```

##### obiekty

```js

let obiekt = {};
obiekt

obiekt = {autor: 'jak kowalski'}

obiekt = {
autor: 'jan',
tytul: 'ksiazka jana',};

```

### Funkcje

```js

function test(paramter){return xyx}		// funkcja nazwana
const test function(parametr){}			  // funckaja anonimowa, przez referencję

(parametr)=>{return xyx}              // Zapis skrótowy

const hello = (parametr)=>{return parametr}

hello('test')					                // Zwróci 'test'

const funkcja2 = (parametr)=> parametr;		

let funkcja3 = (parametr) => (parametr);
funkcja3 = (parametr)=>({obiekt: parametr})
funkcja3('tekst')

let zmienna = 10;

switch(zmienna){
	case 0:
	//kod
	breake;
	case 1:
	//kod
	break;
	default:
	//kod
}
```

### Pętle

Są 3 rodzaje pętli for.

```js

const tablica = ['jeden', 'dwa', 'trzy'];
const tablica_1 = ['jeden', 'dwa', 'trzy'];

for (let index = 0; index < tablica_1.length; index++){console.log(tablica[index]);}
for (let index = 0; index < tablica_1.length; index++){console.log(tablica_1[index]);} //	ZAPOMNIEĆ, NIE UŻYWAĆ - skorzystać z .forEach()

for (let index in obiekt){console.log(index); console.log(obiekt[index]);}	//	Ta pętla do obiektów

const strin = 'test';

for(let znak of string){console.log(znak);}		//	Ta pętla do tablic

```
