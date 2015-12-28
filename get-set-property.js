
class Monster{
  constructor(name, health){
    this.name = name
    this.health = health
  }
  
  get isAlive(){
    return this.health > 0
  }
  
  set isAlive(alive){
    this.health = alive
  }
}

var monster = new Monster("J.A.R.V.I.S", 100)
console.log(monster.isAlive)
monster.isAlive = 200
