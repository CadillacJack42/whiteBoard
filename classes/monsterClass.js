import { hpFormatter, acFormatter, xpFormatter } from "../textFormatter.js";
import { Randos } from "./randomClass.js";

export class Monsters {
    constructor(monster){
        this.hp = Number(hpFormatter(monster['Hit Points']));
        this.monsterName = monster.name;
        this.img = monster.img_url;
        this.attack = this.dealDamage
        this.armor = Number(acFormatter(monster['Armor Class']));
        this.strength = Number(monster.STR)
        this.xp = Number(xpFormatter(monster.Challenge))
        this.isTarget = false
    }
    takeDamage(damage){
        this.hp -= damage
        if (this.hp<0) {
            this.hp = 0
        }
    }
    dealDamage(){
        let random = new Randos
        return random.monsterDamage()
    }
    getName(){
        return this.monsterName
    }
    getHP(){
        return this.hp
    }
    getImg(){
        return this.img
    }
    
}