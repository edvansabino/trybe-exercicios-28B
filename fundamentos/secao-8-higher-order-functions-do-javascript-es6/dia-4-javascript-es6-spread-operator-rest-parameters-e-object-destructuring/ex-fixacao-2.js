const user = {
  name: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

//* Concatenando todas as chaves em um único objeto utilizando rest parameters.

const userJobInfos = { ...user, ...jobInfos };

//* Resolução com a desestruturação primeiro.

// const { name, age, nationality, profession, squadInitials, squad } =
//   userJobInfos;

// console.log(
//   `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`,
// );

//* Resolução em forma de função.

const personInfos = ({
  name,
  age,
  nationality,
  profession,
  squadInitials,
  squad,
}) => {
  console.log(
    `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`,
  );
};

personInfos(userJobInfos);
