// Exercícios do dia 2 HOF's
const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// Adicione seu código aqui
people.sort((person1, person2) => person1.age - person2.age);
people.sort((person1, person2) => person2.age - person1.age);
console.log(people);
