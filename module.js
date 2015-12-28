class MyClass{
  constructor(){
  
  }
}

export default MyClass

import MyClass from 'MyClass'

//////////////////////////////////////////////

export const sqrt = Math.sqrt

export function square(x){
  return 
}
export function diag(x, y){
  return
}

import {square, diag} from 'lib'
square(11)
diag(4, 3)

import * as lib from 'lib'
lib.square(11)
lib.diag(4, 3)

// Cyclical dependencies
