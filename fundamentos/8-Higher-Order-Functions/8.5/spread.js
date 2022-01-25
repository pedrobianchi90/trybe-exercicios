// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'leita'];

const fruitSalad = (fruit, additional) => {
    const perfectFruitSalad = [...specialFruit, ...additionalItens];
    return perfectFruitSalad;
  // Esreva sua função aqui
};

console.log(fruitSalad(specialFruit, additionalItens));