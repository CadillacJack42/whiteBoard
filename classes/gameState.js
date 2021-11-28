import { players } from "../playerCharacter.js"

export class GameState{
    constructor(){
        this.level = 1;
        this.lives = 3;
        this.lastPick = undefined;
        this.htmlTarget = undefined
        this.target = undefined
        this.player = undefined
        this.currentMonsters = undefined
    }
    currentLives(){
        return this.lives
    }
    gainLife(){
        this.lives += 1
    }
    loseLife(){
        this.lives -= 1
    }
    resetLives(){
        this.lives = 3
    }
    currentLevel(){     //Used 1 init line 25
        return this.level
    }
    levelUp(){
        this.level += 1
    }
    resetLossLevel(){
        this.lives = 3
        this.level = 1
        this.currentMonsters = []
        this.target = undefined
    }
    resetWinLevel(){
        this.levelUp()
        this.gainXP()
        this.currentMonsters = []
        this.target = undefined
    }
    chooseChar(val){
        if (this.lastPick) {
            this.lastPick.classList.remove('is-selected')
        }
        val.classList.add('is-selected')
        this.lastPick = val
    }
    chosenChar(){
        return this.lastPick
    }
    chooseTarget(val){
        if (this.htmlTarget) {
            this.htmlTarget.classList.remove('is-selected')
        }
        val.classList.add('is-selected')
        this.htmlTarget = val
    }
    chosenTarget(){
        return this.htmlTarget
    }
    getMonsters(){
        return this.currentMonsters
    }
    XP(){
        let exp = 0
        for (let i = 0; i < this.currentMonsters.length; i++) {
            const element = this.currentMonsters[i];
            if (element.xp === 'NaN') {
                element.xp = 0
            }
            exp += element.xp
        }
        return exp
    }
    setTarget(selectedMonster){
        if (this.targetActual()) {
            this.targetActual().isTarget = false
            selectedMonster.isTarget = true
            this.target = selectedMonster
        } else {
            selectedMonster.isTarget = true
            this.target = selectedMonster
        }
    }
    targetActual(){
        return this.target
    }
}