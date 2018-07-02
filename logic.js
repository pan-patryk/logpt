const nts = (number, includes) => number.toString().includes(includes);
const logic = data => {
  let newData = [];
  data.forEach(number => {
    if (nts(number, 5) && number % 3 === 0 && number % 5 === 0) {
      number = "lucky";
    } else if (number % 3 === 0 && number % 5 === 0) {
      number = "fizz buzz";
    } else if (nts(number, 3) && number % 3 === 0) {
      number = "fizz fizz";
    } else if (nts(number, 5) && number % 5 === 0) {
      number = "buzz buzz";
    } else if (nts(number, 3) || number % 3 === 0) {
      number = "fizz";
    } else if (nts(number, 5) || number % 5 === 0) {
      number = "buzz";
    }
    newData.push(number)
  });
  return newData;
};

export default logic;
