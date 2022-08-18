
const serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
const proline = ["CCU", "CCC", "CCA", "CCG"];
const leucine = ["UUA", "UUG"];
const phénylalanine = ["UUU", "UUC"];
const arginine = ["CGU","CGC","CGA","CGG","AGA","AGG"];
const tyrosine = ["UAU", "UAC"];

let string1 = "CCGUCGUUGCGCUACAGC";

let newStr=string1.replace(/(.{3})(?=.)/g,"$1 ");


newStr = newStr.split(' ');
console.log(newStr);

newStr.forEach(arn =>{
  if(serine.includes(arn)){
    newStr.push("Sérine");
  } else if(proline.includes(arn)){
    newStr.push("Proline");
  } else if(leucine.includes(arn)){
    newStr.push("Leucine");
  } else if(phénylalanine.includes(arn)){
    newStr.push("Phénylalanine");
  } else if(arginine.includes(arn)){
    newStr.push("Arginine");
  } else if(tyrosine.includes(arn)){
    newStr.push("Tyrosine");
  } else{
    console.log("No match");
  }
});
newStr.splice(0, newStr.length/2)
console.log(newStr.join('-'));