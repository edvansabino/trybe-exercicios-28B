// Faça uma lista com as suas frutas favoritas
const specialFruit = ["maçã", "banana", "uva"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["melancia", "melão", "morango"];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));
