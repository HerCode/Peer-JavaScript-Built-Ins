//*Peer Challenge
//Using the variable provided, produce the following results using JavaScript built in functionality.

var provided = 'Hello World!';

console.log(provided.indexOf('e')); //returns 1//

console.log(provided-1)); //returns NaN//

console.log(provided.substr(0,5).split('')); //returns ['H', 'e', 'l', 'l', 'o']//

console.log(provided.split(' '));//returns "Hello, World!"//

console.log(typeof provided);//returns "string"//

console.log(provided.substr(0, 9).length);//returns 9//

console.log(provided.charAt(1));//returns 'e'//

console.log(provided.toUpperCase());//returns "HELLO WORLD!"//

//Hard Mode//

console.log(provided.replace('!', '?'));//returns "Hello World?"//

console.log(provided.substr(1, 4));//returns "'ello"//

console.log(provided.split(' '));//returns ["Hello", "World!"]//

console.log(provided.replace(provided, '1111'));//returns "1111"//

console.log(provided.replace(provided, '!dlroW olleH'));//returns !dlroW olleH"//
