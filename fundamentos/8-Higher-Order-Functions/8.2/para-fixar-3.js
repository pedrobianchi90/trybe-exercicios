const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return names.some((verifyName) => verifyName === name);
}
console.log(hasName(names, 'Ana'))

// Gabarito

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   return arr.some((currentName) => currentName === name);
// }

// console.log(hasName(names, 'Ana'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
      return people.every((person) => person.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));