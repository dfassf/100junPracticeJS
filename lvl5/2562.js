let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let maxNum = Math.max(...input)

console.log(maxNum)
console.log(input.indexOf(maxNum)+1)
