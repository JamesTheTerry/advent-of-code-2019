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
        // console.log(`${input[input[i+1]]} + ${input[input[i+2]]} = ${sum}`);
        output[input[i+3]] = sum;
      } else if (input[i] === 2) {
        const product = input[input[i+1]] * input[input[i+2]];
        // console.log(`${input[input[i+1]]} * ${input[input[i+2]]} = ${product}`);
        output[input[i+3]] = product;
      }
    }
    return output;
  }

  let input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,10,19,23,2,9,23,27,1,6,27,31,2,31,9,35,1,5,35,39,1,10,39,43,1,10,43,47,2,13,47,51,1,10,51,55,2,55,10,59,1,9,59,63,2,6,63,67,1,5,67,71,1,71,5,75,1,5,75,79,2,79,13,83,1,83,5,87,2,6,87,91,1,5,91,95,1,95,9,99,1,99,6,103,1,103,13,107,1,107,5,111,2,111,13,115,1,115,6,119,1,6,119,123,2,123,13,127,1,10,127,131,1,131,2,135,1,135,5,0,99,2,14,0,0];

  // To do this, before running the program,
  // replace position 1 with the value 12 and replace position 2 with the value 2.
  // What value is left at position 0 after the program halts?
  input[1] = 12;
  input[2] = 2;
  const intcoderOutput = intcoder(input);
  return intcoderOutput[0];
}

console.info('-------------')
console.info('Advent Day 01')
console.info('-------------')
console.info('Part One:', partOne())
