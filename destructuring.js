function getAddress(){
  return {
    city: "",
    state: "",
    zip: ""
  }
}

let {city, state, zip} = getAddress()

var person = {
  name : "Aaron",
  age: 35
}

displayPerson(person)

function displayPerson({name, age}){
  
}

// nested

let person = {
  
  name: "Cool",
  address: {
    city: "LA",
    state: "NY",
    zip: "234"
  }
}

let {name, address:{city, state, zip}} = person
