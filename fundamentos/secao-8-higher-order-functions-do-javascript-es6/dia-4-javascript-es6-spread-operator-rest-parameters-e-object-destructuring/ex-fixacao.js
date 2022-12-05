// Faça uma lista com as suas frutas favoritas
const specialFruit = ["maçã", "banana", "uva"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["melancia", "melão", "morango"];

//* resolução sem declaração de variável para armazenar o array.
// const fruitSalad = (fruit, additional) => {
//   return [...specialFruit, ...additionalItens];
// };

//* resolução com declaração de variável para armazenar o array.
const fruitSalad = (fruit, additional) => {
  const newFruitSalad = [...specialFruit, ...additionalItens];
  return newFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));
