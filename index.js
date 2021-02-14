
let whoNumber = Math.floor(Math.random() * 4); 
console.log(whoNumber)
let whatNumber = Math.floor(Math.random() * 4); 
console.log(whatNumber)
let whenNumber = Math.floor(Math.random() * 5); 
console.log(whenNumber)

let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

document.getElementById("excuse").innerHTML = who[whoNumber]+' '+what[whatNumber]+' '+when[whenNumber];
