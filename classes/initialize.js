import { players } from "../playerCharacter.js"
import { hpFormatter, acFormatter, xpFormatter } from "../textFormatter.js"
import { Views } from "./views.js"
import { Randos } from "./randomClass.js"
import { monsterWar } from "./monsterWar.js"
import { Monsters } from "./monsterClass.js"
import { Heroes } from "./heroClass.js"
import { GameState } from "./gameState.js"
import { Attack } from "./attackClass.js"


export class Initialize{
    constructor(){
        this.playerChoices = players;
        this.format = [hpFormatter, acFormatter, xpFormatter];
        this.state = new GameState;
        this.monsterCall = new monsterWar;
        this.view = new Views;
        this.random = new Randos;
        this.monsters = [];
        this.hero = undefined;
        this.attack = new Attack;
    }
    async loadMonsters(){
        await this.monsterCall.getMonsters()
        this.monsterCall.sortMonsters()
        this.refreshMonsters()
    }
    returnMonsters(){
        return this.monsters
    }
    refreshMonsters(){
        console.log(this.monsters);
        this.monsters = []
        let enemies = this.monsterCall.getLvlMonsters(this.state.currentLevel())
        for (let i = 0; i < enemies.length; i++) {
            const element = enemies[i];
            let enemy = new Monsters(element)
            this.monsters.push(enemy)
        }
        console.log(this.monsters);
        return this.monsters
    }
}