// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x){
   if(typeof x === "string") {
       return "Hello, " + x + "!";
   } else {
       return "Hello, World!"
   }
}

function isFive(x) {
    return x === 5;
}

function isEven(x) {
    return parseFloat(x) % 2 === 0;
}

function isVowel(vow) {
    return vow === "a" || vow === "e" || vow === "i" || vow === "o" || vow === "u" || vow === "A" || vow === "E" || vow === "I" || vow === "O" || vow === "U";
}
