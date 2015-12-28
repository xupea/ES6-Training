class Monster {
  constructor(name, health){
    this.name = name
    this.health = health
  }
  
  attach(target){
    console.log(target)
  }
}

class Godzilla extends Monster{
  constructor(){
    super("Godzilla", 10000)
  }
  
  attach(target){
    super.attach(target)
  }
}

var monster = new Godzilla()
monster.attach(1212)

