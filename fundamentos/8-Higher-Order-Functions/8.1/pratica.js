// const newEmployees = (employeeGenerator) => {
//     const employees = {
//       id1: employeeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: employeeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: employeeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const employeeGenerator = (fullName) => {
//       const email = fullName.toLowerCase().split(' ').join('_')
//       return { fullName, email: `${email}@trybe.com` };
//   };

//   console.log(newEmployees(employeeGenerator));

//   const numberChecker = (myNumber, sortedNumber) => myNumber === sortedNumber 

//   const lottery = (myNumber, callback) => {
//       const sortedNumber = Math.floor(Math.random() * 5 )+ 1;
//       return callback(myNumber, sortedNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
//   };
//   console.log(lottery(3, numberChecker));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = () => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
        return 1
    }
    if (STUDENT_ANSWERS === 'N.A') {
        return 0
    }
    return -0,5
}

const points = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
    counter = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
        const callbackReturn = callback(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
        counter += callbackReturn;
    }
    return `Nota ${counter}`;
}

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));