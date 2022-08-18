let chat = prompt("Que voulez-vous dire ?")
while (chat !== "tg"){
  if(chat.includes("?")){
    console.log("Ouais ouais...");
  } else if(chat === chat.toUpperCase() && chat.length > 0){
    console.log("Pwa, calme-toi...");
  } else if(chat.includes("Fortnite")){
    console.log("on s' fait une partie en de spee?");
  } else if(chat === undefined || chat.length === 0){
    console.log("ok BOOME t'es en pls fdp ?")
  } else{
    console.log("balek");
  };
  chat = prompt("Que voulez-vous dire ?");
}