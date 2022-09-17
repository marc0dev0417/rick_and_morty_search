import { makeAutoObservable, action, computed, observable, toJS, configure } from 'mobx'
import { Human } from '../Types/Human'

class ServiceStore {
    static serviceStore: ServiceStore

    characters: Human[] = []
    count: number = 1

    static getServiceStore() {
        if (this.serviceStore === undefined) {
            this.serviceStore = new ServiceStore()
        }
        return this.serviceStore
    }

    get getCharacter() {
        return toJS(this.characters)
    }

    cleanCharacters(){
        this.characters = []
    }

    get getCountPage(){
        return this.count
    }

    incrementCountPage(){
        if(this.count < 42){
        this.count++
        }
    }

    decrementCountPage(){
        if(this.count > 1){
            this.count--
        }   
    }

    setCharacters(characters: Human[]) {
        this.characters = characters
    }


    async requestCharacter(name: string) {
        if (name === '') {
          await this.allCharacters()
          document.getElementById('container_pagination')!!.style.display = 'block'
          document.getElementById('container_pagination')!!.style.visibility = 'visible'
        } else {  
           await this.getCharacterByName(name)
            document.getElementById('container_pagination')!!.style.display = 'hidden'
            document.getElementById('container_pagination')!!.style.visibility = 'hidden'
        }
    }

    async getCharacterByName(name: string) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, {
            method: 'GET'
        })
        if (response.ok) {
            const resultResponse = await response.json()
            this.cleanCharacters()
            this.setCharacters(resultResponse.results)
        }
    }

    async allCharacters(){
        const response = await fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET'
        })
        if (response.ok) {
            const resultResponse = await response.json()
            this.cleanCharacters()
            this.setCharacters(resultResponse.results)
            console.log(this.getCharacter[1].image)
        }
    }
    async allCharactersByPage(page: number){
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
            method: 'GET'
        })
        if (response.ok) {
            const resultResponse = await response.json()
            this.cleanCharacters()
            this.setCharacters(resultResponse.results)
        }
    }

    constructor() {
        makeAutoObservable(this, {
            characters: observable,
            count: observable,
            requestCharacter: action,
            allCharacters: action,
            getCharacterByName: action,
            allCharactersByPage: action,
            incrementCountPage: action,
            decrementCountPage: action,
            cleanCharacters: action,
            getCountPage: computed,
            getCharacter: computed
        })
    }

}
export default ServiceStore