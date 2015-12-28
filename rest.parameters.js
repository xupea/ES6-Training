function foo(...bar){
  cosole.log(bar.join(' '))
}

foo("I", "Moved")

//

function foo(){// leave the signature empty
  
  // var output = Array.prototype.join.call(arguments, " ")

  for(let i = 0; i < arguments.length; i++){
    console.log(arguments[i])
  }
}

//diff between ...bar and arguments
[object Arguments] --> arguments
[object Array] --> ...bar

//cant use arguments
function doSomething(...bar){
  console.log(arguments.length) // SyntaxError
}

//...params = [1,2,3] Error
