// Advent of Code - Day 2
// https://adventofcode.com/2019/day/2

const partOne = () => {
  const intcoder = (input) => {
    let output = input;
    for (var i = 0; i < input.length; i+=4) {
      if (input[i] === 99) {
        return output;
      } else if (input[i] === 1) {
        const sum = input[input[i+1]] + input[input[i+2]];
        console.log(`${input[input[i+1]]} + ${input[input[i+2]]} = ${sum}`);
        output[input[i+3]] = sum;
      } else if (input[i] === 2) {
        const product = input[input[i+1]] * input[input[i+2]];
        console.log(`${input[input[i+1]]} * ${input[input[i+2]]} = ${product}`);
        output[input[i+3]] = product;
      }
    }
    return output;
  }

  return intcoder([1,1,1,4,99,5,6,0,99])
}

console.log(partOne())
