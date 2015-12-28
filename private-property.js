var monsterHealth = Symbol()

class Monster{
  constructor(name, health){
    this.name = name
    this[monsterHealth] = health
  }
}

var monster = new Monster("J.A.R.V.I.S", 100)
console.log(monster.monsterHealth)
