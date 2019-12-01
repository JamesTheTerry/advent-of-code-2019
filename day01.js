// Advent of Code - Day 1
// https://adventofcode.com/2019/day/1

const moduleMasses = [70219, 93253, 79077, 75104, 142278, 65798, 148578, 136159, 60033, 51629, 57239, 77808, 142016, 92225, 136933, 95933, 109170, 83012, 135771, 59064, 101361, 86997, 79026, 50825, 79671, 143898, 65548, 84651, 53043, 84997, 87226, 65816, 81088, 143976, 109917, 103744, 131433, 81899, 80901, 146112, 65084, 84439, 73939, 102337, 99794, 107113, 62081, 98484, 55246, 131950, 129633, 98380, 118568, 100632, 127493, 90804, 120735, 124932, 115165, 73091, 77960, 67435, 63132, 114453, 104379, 82371, 51259, 104055, 127984, 108215, 53174, 139459, 58530, 86994, 149064, 90062, 139593, 128406, 136288, 140669, 125298, 144444, 80296, 135065, 121641, 108842, 59336, 64720, 121706, 78017, 142674, 89214, 100171, 80836, 110919, 102218, 54834, 104544, 81501, 128610];

const fuelNeedForGivenMass = (mass) => {
  return Math.floor(mass / 3) - 2;
}

const partOne = () => {
  const fuelRequired = moduleMasses.reduce((acc, curr) => {
    return acc + fuelNeedForGivenMass(curr);
  }, 0)

  return fuelRequired;
}

const partTwo = () => {
  const fuelRequired = moduleMasses.reduce((acc, curr) => {
    const fuelForModule = fuelNeedForGivenMass(curr);
    let fuelForFuel = 0;
    let currFuel = fuelForModule;

    while (currFuel > 0) {
      let tempFuel = fuelNeedForGivenMass(currFuel);
      if (tempFuel > 0) {
        fuelForFuel += tempFuel
      }
      currFuel = tempFuel;
    }

    return acc + fuelForModule + fuelForFuel;
  }, 0)

  return fuelRequired;
}

console.log('-------------')
console.log('Advent Day 01')
console.log('-------------')
console.log('Part One:', partOne())
console.log('Part Two:', partTwo())
