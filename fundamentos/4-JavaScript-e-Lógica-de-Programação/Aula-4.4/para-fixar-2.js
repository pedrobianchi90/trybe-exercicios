let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let value in names) {
      console.log('Olá, ' + names[value]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let value2 in car) {
      console.log(value2, car[value2]);
  }