let step = prompt("Bienvenue dans ma super pyramide ! Combien d'étage veux-tu ?");
console.log(`Bienvenue dans ma super pyramide ! Combien d'étage veux-tu ? ${step}`);
step = Number(step);

let space = " ";

let bric = "#";

let t = step;

for(let i = 1; i <= step; i++ ){
  
  for(let j = 1; j <= (t-1); j++){
    space += " ";
  };

  console.log(space+bric);
  space = " ";
  bric += "#";
  t -= 1;
 };