let myFavoriteHero = "Hulk";
console.log (myFavoriteHero);
let edad=50;
console.log(edad);
console.log(edad + 10);
let h=5;
let y=10;
let texto="h"+"y";
console.log(texto);
const character = { name: 'Jack Sparrow', age: 10 };
character.age = 25;

console.log(character);
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);
const toy1 ={ name: 'Buzz myYear', price: 19};
const toy2={ name: 'Rallo mcKing', price: 29};
let total=toy1.price+toy2.price;
console.log(`el precio total es: ${total}€`);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000,};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000,};
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrcice = car2.basePrice + globalBasePrice
console.log(car1);
console.log(car2);
console.log(car1.finalPrice); 
console.log(car2.finalPrice); 

console.log(10*5);
console.log(10/2);
console.log(15%9);
let p = 10;
let j = 5;
let o = p;
o += j; 
console.log(o);
let c = 10;
let m = 5;
let i = c;
i *= m;
console.log(i);

const avangers = ["Hulk", "Spiderman", "Black Panther",];
console.log(avangers[0]);
console.log(avangers[2]);
avangers[0]="Ironman";
console.log (avangers);
console.log (avangers.length);
avangers.push("Morty","Sumer");
console.log(avangers[avangers.length-1]);
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);

const number1 = 10;
const number2 = 20;
const number3 = 2;
if (number2 / number1 === 2){console.log("number2 dividido entre number1 es igual a 2");}
if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}
if (number3 != number1) {
  console.log("number3 es distinto number1");
}
if (number1 !== number2)("number1 es estrictamente distinto a number2");


for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}

function getMaxNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
}
console.log (getMaxNumber (10, 20));
console.log (getMaxNumber (50,5));
function getMaxNumber(numberOne, numberTwo) {
    return numberOne > numberTwo ? numberOne : numberTwo;}

function sumAll (param){
    let suma = 0;
    for (let i = 0; i < param.length; i++){
        suma += param[i];}
        return suma;
}
const numbers = [1,2,3,5,45,37,58];
console.log(sumAll(numbers));

function average(param) {
    let suma = 0;
    for (let i = 0; i < param.length; i++) {
        suma += param[i];
    }
    return suma / param.length;}

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
console.log(average(numbers));  

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let suma = 0;

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      suma += param[i];
    } else if (typeof param[i] === 'string') {
      suma += param[i].length;
    }
  }

  return suma / param.length;
}

console.log(averageWord(mixedElements));

const duplicates = [
  'sushi', 'pizza', 'burger', 'potatoe', 'pasta', 
  'ice-cream', 'pizza', 'chicken', 'onion rings', 
  'pasta', 'soda'
];

const nameFinder = [
  'Peter', 'Steve', 'Tony', 'Natasha', 'Clint',
  'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'

];

//finderName(nameFinder, 'Bruce');   // ✅ Debería mostrar: true 7
//finderName(nameFinder, 'Juan');    // ❌ Debería mostrar: false

function removeDuplicates(param) {
  return [...new Set(param)];
}
//finderName (nameFinder, 'bruce');
console.log(removeDuplicates(duplicates));

function finderName(arr,name){
    for (let i = 0; i <arr.length; i++){
        if (arr [i] === name) {
            console.log (false);
        }
    }
}
//finderName( 'juan');


function repeatCounter(param) {
  let counter = {}; 

  for (let i = 0; i < param.length; i++) {
    let word = param[i]; 
    if (counter[word]) {
      counter[word]++; 
    } else {
      counter[word] = 1; 
    }
  }

  return counter; 
}


//const counterWords = [
  'code', 'repeat', 'eat', 'sleep', 'code',
  'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code'
;

//console.log(repeatCounter(counterWords))

function finderName(array, name) {
  const index = array.indexOf(name);
  if (index !== -1) {
    return `true, posición: ${index}`;
  } else {
    return false;
  }
}


const nameList = [
  'Peter', 'Steve', 'Tony', 'Natasha', 'Clint',
  'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'
];


console.log(finderName(nameList, 'Xabier'));  
console.log(finderName(nameList, 'Juan'));    
console.log(finderName(nameList,'bruce'));
console.log(finderName(nameList,'Manolo'));


const counterWords =[
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code',
];
function repeatCounter(param){
    count = {};
    for (let word of param){
        count[word]=(count[word]||0)+1;
    }
    return count;
}
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta']

function findCamisetas(array) {
  for (let item of array) {
    if (item.includes('Camiseta')) {
      console.log(item);
    }
  }
}

//findCamisetas(products);


const placesToTravel = ['Japon','Venecia','Murcia','Santander','Filipinas','Madagascar'];
for(const place of placesToTravel){
  console.log(place);
}

const PI = 3.1416;
console.log ("valor inicial PI:",PI);

const frutas = ["manzana","pera"];
frutas.push ( "platano","melocoton");
console.log("frutas",frutas);
let miEdad = 30;
console.log("edad inicial",miEdad);
miEdad =31;
console.log("edad despues del cumpleaños:",miEdad);

const alien= {
  name: 'Wormuck',
  rece: 'cucusumusu',
  planet: 'eden',
  weigh: '259kg',
};
for (let propiedad in alien){
  console.log(propiedad, ":",alien [propiedad]);
}

const destinos = [
  {id: 5, name: 'Japan'},
  {id: 11, name: 'Venecia'},
  {id: 23, name: 'Murcia'},
  {id: 40, name: 'Santander'},
  {id:44, name: 'Filipinas'},
  {id: 59, name: 'Madagascar'},
];
for (let i = 0; i < destinos.length; i++) {
  if (destinos [i].id === 11 || destinos [i].id === 40){
    destinos.splice (i, 1);
  }
}
console.log (destinos);

const toys = [
  {id: 5, name: 'Buzz MyYear'},
  {id: 11, name: 'Action Woman'},
  {id: 23, name: 'Barbie Man'},
  {id: 40, name: 'El Gato con guantes'},
  {id: 40, name: 'El Gato Felix'}
];
for (let i = toys.length - 1; i >= 0; i--){
  if (toys [i].name.includes('Buzz')){
    toys.splice (i, 1);
  }
}
console.log (toys);

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
console.log("usuarios menores de edad:");
for (const u of users){
  if (u.years<18)
    console.log(u.name);

}
console.log("ususarios mayores de edad:");
for (const u of users){
  if (u.years>=18)
    console.log(u.name);
}

const movies =[
  { name:"Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before christmas", durationInMinutes: 225 },
  { name: "The lord of de Rings", durationInMinutes: 967 },
  { name: "Inception", durationInMinutes: 165},
  { name: "Star Wars: A New Hope", durationInMinutes: 214},
  {name: "Terminator", durationInMinutes: 140},
];
const smallMovies = [];
const mediumMovies = [];
const bigMovies = [];
for (const movie of movies){
  if (movie.durationInMinutes < 100){
 smallMovies.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.duratioInMinutes <200) mediumMovies.push(movie);
else{
  bigMovies.push(movie);
}
   
  }
  console.log ("Peliculas pequeñas (<100min):", smallMovies);
  console.log ("Peliculas medianas (100-199min):", mediumMovies);
  console.log ("Peliculas grandes (>=200min):", bigMovies);

  const allProducts = [
    {name: "Funko Dr Strange", sellCount: 10 },
    {name: "Mochila de protones: Ghostbusters", sellCount: 302},
    {name: "Sable laser FX", sellCount: 23 },
    {name: "Varita de Voldemor", sellCount: 6 },
];
let totalSales = 0;
for (const product of allProducts){
  totalSales += product.sellCount;
}
let averableSales = totalSales / allProducts.length;
console.log ("Total de ventas:", totalSales);
console.log("Media de ventas:", averableSales);

const allProducts2 = [
  {name: "Funko Dr Strange", sellCount: 10},
  {name: "Mochila de protones: Ghostbusters", sellCount: 302},
  {name: "Sable laser FX", sellcount: 23},
  {name: "Varita de Voldemor", sellCount: 6},
]
let totaSales = 0;
for (const product of allProducts2){
  totalSales += product.sellCount;
}
let averageSales = totaSales / allProducts2.length;
console.log ("Total de ventas:", totaSales);
console.log("Media de ventas", averageSales);

{
  const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
for (const product of products){
  if (product.sellCount > 20){
    goodProducts.push(product);
  }
}

console.log("Buenos productos (mas de 20 ventas):", goodProducts);
console.log("Malos Productos ( 20 o menos ventas):",badProducts);
}