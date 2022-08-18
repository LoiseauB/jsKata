let number = prompt("Entrez un nombre :")
for (let count = number - 1; count > 0; count --){
  number *= count;
  console.log(count)
};

console.log(`Le résultat est ${number}`);