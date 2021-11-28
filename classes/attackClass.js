import { Randos } from "./randomClass.js"
import { Views } from "./views.js"
let random = new Randos
let view = new Views
export class Attack{
    constructor(){
        this.report = document.getElementById('combat-text')
    }
    whoAttacks(state, mon){
        this.playerAttackCheck = random.checkDice()
        this.playerDefenseCheck = random.checkDice()
        this.monsterAttackCheck = random.checkDice()
        this.monsterDefenseCheck = random.checkDice()
        for (let i = 0; i < 3; i++) {
            // Check if player Attack successfull
            if (mon[i] === state.targetActual()) {
                if (this.playerAttackCheck[i] > this.monsterDefenseCheck[i]) {
                    let playerDamage = state.player.dealDamage(state.currentLevel())
                    mon[i].takeDamage(playerDamage)
                    view.combatReport('hit', playerDamage, mon[i])
                } else {
                    view.combatReport('miss', null, mon[i])
                }
            }
            
            // Check if monster attack successful
            if (mon[i].getHP() > 0) {
                if (this.playerDefenseCheck[i] < this.monsterAttackCheck[i] ) {
                    let damage = random.monsterDamage(mon[i].getHP())
                    state.player.takeDamage(damage)
                    // console.log(mon[i]);
                    view.combatReport('monsterHit', damage, mon[i])
                } else {
                    view.combatReport('monsterMiss', null, mon[i])
                }
            }    
        }
        view.updateHP(state)
    }
    heal(state, mon){
        state.player.heal()
        view.combatReport('heal', null, null)
        for (let i = 0; i < 3; i++) {
            if (mon[i].getHP() > 0) {
                if (this.playerDefenseCheck[i] < this.monsterAttackCheck[i]) {
                let monsterDamage = random.monsterDamage(mon[i].getHP())
                state.player.takeDamage(monsterDamage)
                view.combatReport('monsterHit', monsterDamage, mon[i])            
                } else {
                    view.combatReport('monsterMiss', null, mon[i])
                }
            }
        }
        view.updateHP(state)
    }
}