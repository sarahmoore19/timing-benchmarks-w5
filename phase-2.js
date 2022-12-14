const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let newArr = [];
  for (let i = increment; i <= increment * 10; i+= increment) {
    newArr.push(addNums(i));
  }
  return newArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let newArr = [];
  for (let i = increment; i <= increment * 10; i+= increment) {
    newArr.push(addManyNums(i));
  }
  return newArr;

}

module.exports = [addNums10, addManyNums10];
