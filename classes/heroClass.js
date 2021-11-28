import { Randos } from "./randomClass.js";
const userName = document.getElementById('user-name')

export class Heroes {
    constructor(character){
        this.heroName = userName.value;
        this.class = character.name;
        this.staticHP = character.hp
        this.hp = character.hp;
        this.attack = this.dealDamage
        this.img = character.img_url;
        this.xp = 0;
    }
    getName(){
        return this.heroName
    }
    getHP(){
        return this.hp
    }
    resetHP(){
        this.hp = this.staticHP
    }
    getImg(){
        return this.img
    }
    dealDamage(lvl){
        let random = new Randos
        switch (this.class) {
            case 'archer':
            case 'warlock': 
            case 'cleric': 
                return random.lowHpDamage(lvl)
        
            case 'barbarian':
            case 'valkyrie':
                return random.highHpDamage(lvl)
        }
    }
    takeDamage(damage){
        this.hp -= damage
        if (this.hp<0) {
            this.hp = 0
        }
    }
    gainXP(xp){
        this.xp = Number(xp) + Number(this.xp)
    }
    getXP(){
        return this.xp
    }
    heal(){
        this.hp += 10
    }
}