import { Initialize } from "./classes/initialize.js";
import { players } from "../playerCharacter.js"

const quest = new Initialize
quest.loadMonsters()

//  Get Rules Pane
const rules = document.getElementById('rules')

//  Get Character Selection Pane 
const characterselection = document.getElementById('chooser-id')

// Hide Rules Pane, Display Character Selection Pane
rules.addEventListener('click', () => {
    rules.classList.add('visibility')
    characterselection.classList.remove('visibility')
})

//  Get All Character Class Choices
const playerChoices = document.getElementsByClassName('char')

// Character Select Archer Event Listener
playerChoices[0].addEventListener('click', () => {
    quest.state.chooseChar(playerChoices[0])
})
// Character Select Barbarian Event Listener
playerChoices[1].addEventListener('click', () => {
    quest.state.chooseChar(playerChoices[1])
})
// Character Select Warlock Event Listener
playerChoices[2].addEventListener('click', () => {
    quest.state.chooseChar(playerChoices[2])
})
// Character Select Cleric Event Listener
playerChoices[3].addEventListener('click', () => {
    quest.state.chooseChar(playerChoices[3])
})
// Character Select Valkyrie Event Listener
playerChoices[4].addEventListener('click', () => {
    quest.state.chooseChar(playerChoices[4])
})

//  Get "Choose Your Hero" Button From Character Selection Pane
const characterChoice = document.getElementById('pick-char-button')

//  Choose Character, Hide Character Selection Pane,
//  Populate Player and Monster Tiles In Game
characterChoice.addEventListener('click', () => {
    let player = quest.state.chosenChar().children[0].textContent
    quest.view.playerPop(quest.state, player)
    quest.view.monsterPop(quest.state, quest.returnMonsters())
    characterselection.classList.add('visibility')
})

//  Get Monster Tiles
const monster1 = document.getElementById('monster-01')
const monster2 = document.getElementById('monster-02')
const monster3 = document.getElementById('monster-03')
//  Listener To Target Monster1 For Attack
monster1.addEventListener('click', () => {
    quest.state.chooseTarget(monster1)
    quest.state.setTarget(quest.monsters[0])
})
//  Listener To Target Monster2 For Attack
monster2.addEventListener('click', () => {
    quest.state.chooseTarget(monster2)
    quest.state.setTarget(quest.monsters[1])
})
//  Listener To Target Monster3 For Attack
monster3.addEventListener('click', () => {
    quest.state.chooseTarget(monster3)
    quest.state.setTarget(quest.monsters[2])
})

//  Get Attack And Heal Buttons
const attackBtn = document.getElementById('attack')
const healBtn = document.getElementById('heal')

//  Listener For Attack Button
attackBtn.addEventListener('click', () => {
    let attack = quest.attack
    attack.whoAttacks(quest.state, quest.monsters)
})
//  Listener For Heal Button
healBtn.addEventListener('click', () => {
    let attack = quest.attack
    attack.heal(quest.state, quest.monsters)
})

//  Get Reset Buttons
const reset = document.getElementsByClassName('play-again')
//  Listeners For Win And Loss Pane Reset Buttons
reset[0].addEventListener('click', () => {
    quest.refreshMonsters()
    characterselection.classList.remove('visibility')
    quest.view.win.classList.add('visibility')
    quest.view.report.innerHTML = '<div class="combat-text" id="combat-text"></div>'
}) 
reset[1].addEventListener('click', () => {
    quest.refreshMonsters()
    characterselection.classList.remove('visibility')
    quest.view.loss.classList.add('visibility')
    quest.view.report.innerHTML = '<div class="combat-text" id="combat-text"></div>'
}) 