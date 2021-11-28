import { players } from "../playerCharacter.js"
import { Heroes } from "./heroClass.js"
// import { Monsters } from "./monsterClass.js"

export class Views {
    constructor(){
        this.playerName = document.getElementById('player-name')
        this.playerImg = document.getElementById('player-image')
        this.playerHp = document.getElementById('player-hp')
        this.playerXp = document.getElementById('player-xp')
        this.playerLevel = document.getElementById('player-level')
        this.playerLives = document.getElementById('player-lives')
        this.monsterName = document.getElementsByClassName('monster-name')
        this.monsterIMG = document.getElementsByClassName('monster-image')
        this.monsterHP = document.getElementsByClassName('monster-hp')
        this.loss = document.getElementById('you-lose')
        this.win = document.getElementById('you-win')
        this.winSound = new Audio('./assets/backgrounds/you-win.mp3')
        this.loseSound = new Audio('./assets/backgrounds/you-lose.mp3')
        this.characterselection = document.getElementById('chooser-id')
        this.report = document.getElementById('combat-text')

        this.player = undefined
    }
    playerPop(state, player){
        let hero;
        switch (player) {
            case 'Archer':
                hero = players[0]
                break;
            case 'Barbarian':
                hero = players[1]
                break;
            case 'Warlock':
                hero = players[2]
                break;
            case 'Cleric':
                hero = players[3]
                break;
            case 'Valkyrie':
                hero = players[4]
                break;
        }
        player = new Heroes(hero)
        state.player = player
        this.playerName.textContent = player.getName()
        this.playerName.classList.add('player-name')
        this.playerImg.src = player.getImg()
        this.playerHp.textContent = player.getHP()
        this.playerLevel.textContent = state.currentLevel()
        this.playerLives.textContent = state.currentLives()
    }
    monsterPop(state, monsters){
        let arr = []
        for (let i = 0; i < monsters.length; i++) {
            const element = monsters[i];
            this.monsterName[i].textContent = element.getName()
            this.monsterHP[i].textContent = element.getHP()
            this.monsterIMG[i].src = element.getImg()
            arr.push(element)
        }
        state.currentMonsters = arr
    }
    updateHP(state){
        let checkArr = []
        if (this.isPlayerDead(state)) {
            if (this.playerHasLives(state)) {
                state.player.resetHP()
                this.playerHp.textContent = state.player.getHP()
                state.loseLife()
                this.playerLives.textContent = state.currentLives()
                this.resetReport()
            } else {
                this.loss.classList.remove('visibility')
                this.loseSound.play()
                state.resetLossLevel()
                this.characterselection.classList.remove('visibility')
            }
        } else {
            this.playerHp.textContent = state.player.getHP()
        }
        for (let i = 0; i < state.currentMonsters.length; i++) {
            const element = state.currentMonsters[i];
            this.monsterHP[i].textContent = element.getHP()
            checkArr.push(element.getHP())
        }
        if (checkArr[0] === 0 && checkArr[1] === 0 && checkArr[2] === 0) {
            this.resetReport()
            state.player.resetHP()
            state.player.xp = state.XP()
            this.playerXp.textContent = state.player.getXP()
            state.levelUp()
            this.playerLevel.textContent = state.currentLevel()
            // console.log(this.refreshMonsters);
            // this.monsterPop(state, state.currentMonsters)
            this.winSound.play()
            this.win.classList.remove('visibility')
        }
    }
    isPlayerDead(state){
        return state.player.getHP() <= 0
    }
    playerHasLives(state){
        return state.currentLives() > 1
    }
    combatReport(string, damage, mon){
        // console.log(mon);        
        switch (string) {
            case 'hit':
                let hit = `<p class="player-attack">:>> Your <span class="bold">${this.playerName.textContent}s</span> attack dealt <span class="bold">${damage}</span> damage to enemy <span class="bold">${mon.getName()}</span></p>`
                this.report.insertAdjacentHTML('beforeend', hit)
                
                break;
            case 'miss':
                let miss = `<p class="player-attack">:>> Your attack against <span class="bold">${mon.getName()}</span> failed</p>`
                this.report.insertAdjacentHTML('beforeend', miss)
                
                break;
            case 'monsterHit':
                let monsterHit = `<p class="monster-attack">:>><span class="bold">${mon.getName()}</span> attack dealt <span class="bold">${damage}</span> damage</p>`
                this.report.insertAdjacentHTML('beforeend', monsterHit)
                
                break;
            case 'monsterMiss':
                let monsterMiss = `<p class="monster-attack">:>><span class="bold">${mon.getName()}</span> attack failed</p>`
                this.report.insertAdjacentHTML('beforeend', monsterMiss)
                
                break;
            case 'heal':
                let heal = `<p class="player-attack">:>> Your <span class="bold">${this.playerName.textContent}</span> successfully healed for <span class="bold">10</span> HP`
                this.report.insertAdjacentHTML('beforeend', heal)
                
                break;
        }
    }
    resetReport(){
        this.report.innerHTML = '<div class="combat-text" id="combat-text"></div>'
    }
}
