import { hpFormatter } from "../textFormatter.js"
import { Randos } from "./randomClass.js"
const random = new Randos
export class monsterWar{
    constructor(){
        this.allMonsters = undefined
        this.lvl1 = []
        this.lvl2 = []
        this.lvl3 = []
        this.lvl4 = []
        this.lvl5 = []
    }
    async getMonsters(){
        const apiUrl = 'https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json'
        let response = await fetch(apiUrl);
        let data = await response.json();
        this.allMonsters = data
    }
    sortMonsters(){
        for (let i = 0; i < this.allMonsters.length; i++) {
            const element = this.allMonsters[i];
            let hp = Number(hpFormatter(element['Hit Points']))
            if (hp<=50) {
            this.lvl1.push(element)
            } else if (hp<=100) {
            this.lvl2.push(element)
            } else if (hp<=150) {
            this.lvl3.push(element)
            } else if (hp<=200) {
            this.lvl4.push(element)
            } else {
            this.lvl5.push(element)
            }
        }
    }
    getLvlMonsters(lvl){
        let arr = []
        switch (lvl) {
            case 1:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = random.randomNumber(this.lvl1.length)
                    arr.push(this.lvl1[randomSelect])
                }
                this.current = arr
                return arr
            case 2:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = random.randomNumber(this.lvl2.length)
                    arr.push(this.lvl2[randomSelect])
                }
                this.current = arr
                return arr
            case 3:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = random.randomNumber(this.lvl3.length)
                    arr.push(this.lvl3[randomSelect])
                }
                this.current = arr
                return arr
            case 4:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = random.randomNumber(this.lvl4.length)
                    arr.push(this.lvl4[randomSelect])
                }
                this.current = arr
                return arr
            case 5:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = random.randomNumber(this.lvl5.length)
                    arr.push(this.lvl5[randomSelect])
                }
                this.current = arr
                return arr
        }
    }
}