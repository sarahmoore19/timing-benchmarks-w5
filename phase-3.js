const [addNums, addManyNums] = require("./phase-1");

let startTime;
let endTime;

function addNums10Timing(increment) {
  console.time("1");
  startTime = Date.now();
  let newArr = [];
  for (let i = increment; i <= increment * 10; i+= increment) {
    newArr.push(addNums(i));
   console.timeLog("1");
  }
  endTime = Date.now();
  console.timeEnd("1")
  return newArr;
}

function addManyNums10Timing(increment) {
 console.time("3");
 startTime = Date.now();
  let newArr = [];
  for (let i = increment; i <= increment * 10; i+= increment) {
    newArr.push(addManyNums(i));
    console.timeLog("3");

  }
  endTime = Date.now();
    console.timeEnd("3")
  return newArr;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);
console.log(startTime);  // 1608078573750
console.log(endTime);    // 1608078573765
console.log(`Runtime: ${endTime - startTime}ms`);  // Runtime: 15ms
console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
console.log(startTime);  // 1608078573750
console.log(endTime);    // 1608078573765
console.log(`Runtime: ${endTime - startTime}ms`);  // Runtime: 15ms
