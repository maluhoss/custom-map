// custom map function
// will take 2 arguments: first, an array; second, a callback function

var words = ["ground", "control", "to", "major", "tom"];

function map (array, callback) {
 var result = [];
 for (var i = 0; i < array.length; i++) {
   callback(i);
   result.push(callback(i));
 }
   return result;
}

function upperCase(index) {
 return words[index].toUpperCase();
}


function length(index) {
 return words[index].length;
}

function reverse(index) {
 return words[index].split('').reverse().join('');
}

console.log(map(words, upperCase));
console.log(map(words, length));
console.log(map(words, reverse));