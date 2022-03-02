var numbers = [3.02, -3.65, 5, -9];
var normalizeNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    normalizeNumbers.push(Math.round(Math.abs(numbers[i])));
}

console.log(numbers);
console.log(normalizeNumbers);