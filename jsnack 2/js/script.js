//crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numberInt = [];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 30; i++) {
    numberInt.push(randomNumber(1, 50));
}

let sum = 0;
for (let i = 0; i < numberInt.length; i++) {
//sommo i numeri dispari

    if (i % 2 != 0) {
        sum += numberInt[i];
    }
}
console.log(sum);
