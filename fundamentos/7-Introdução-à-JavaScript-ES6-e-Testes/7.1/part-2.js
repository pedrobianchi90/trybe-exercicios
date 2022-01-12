const factorial = number => {
   let result = 1

   for (let i = 2; i <= number; i += 1) {
       result *= i
   }
   return result;
}

console.log(factorial(4));

const longestWord = phrase => {
    let wordArray = phrase.split(' ');
    let maxLength = 0;
    let result = '';

    for (word of wordArray) {
        if(word.lenght > maxLength) {
            maxLength = word.lenght;
            result = word;
        }
    }
    return result;
}

let 