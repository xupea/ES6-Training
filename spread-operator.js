var nums = [1, 2, 3]
console.log(...nums)

var nums = [1, 2, 3];
console.log.apply(console, nums);


//
functio getNums(){
  return [1, 2, 3]
}

var b = [0, ...getNums()]
