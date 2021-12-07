const a = 11;
const b = 7;
const c = 30

console.log('Soma:' + (a + b));
console.log('Subtração:'+ (a - b));
console.log('Multiplicação:'+ (a * b));
console.log('Divisã0:' + (a / b));
console.log('Módulo:'+ (a % b));

if (a > b) {
    console.log('a é maior que b');
} else {
    console.log('a é menor que b');
}

if (a > b && a > c) {
    console.log('a é o maior');
} else if (b > a && b > c) {
    console.log ('b é o maior');
} else {
    console.log ('c é o maior');
}

if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

const a1 = 45;
const a2 = 60; 
const a3 = 75;

if (a1 + a2 + a3 === 180 && a1 > 0 && a2 > 0 && a3 >> 0) {
    console.log(true);
} else { 
    console.log(false);
}