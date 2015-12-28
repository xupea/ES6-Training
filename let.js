// block scoping
var foo = 1
let foo = 2

// temporal dead zone

function doSomething(){
  console.log(a)
  
  let a = 1
  
  console.log(a)
}

doSomething()

// looping
for(var i = 0; i < 10; i++){
  console.log(i)
}

for(let j = 0; j < 10; j++){
  console.log(j)
}
console.log(i)
console.log(j)
