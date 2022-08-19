

 function writeCards (names=["Guadalupe", "Ollie", "Aki"], events="surprise") {
let messages = [];
for (let i = 0; i < names.length; i++){
      messages[1]=(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
return messages;
}
console.log(writeCards());
function countDown(positiveNumber){
  while (positiveNumber >= 0){
   console.log (positiveNumber);
positiveNumber--;
}
}
countDown(10)
