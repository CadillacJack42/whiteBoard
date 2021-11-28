export class Randos{
    constructor(){
    }
    monsterDamage(hp){
        return Math.floor(Math.random() * (hp * .2)+ 1)
    }
    lowHpDamage(mod){
        let num = Math.floor(Math.random() * 15) + 1 * mod
        return num
    }
    highHpDamage(mod){
        let num = Math.floor(Math.random() * 8) + 1 * mod
        return num
    }
    dice(num, face){
        let roll =0;
        for (let i = 0; i < num; i++) {
            roll += Math.floor(Math.random()*face)
        }
        return roll
    }
    checkDice(){
        let checks = []
        for (let i = 0; i < 3; i++) {
            checks.push(Math.floor(Math.random()*20))   
        }
        return checks
    }
    randomNumber(arrLength){
        return Math.floor(Math.random()*arrLength)
    }
}