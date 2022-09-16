import { makeAutoObservable, action, computed, observable, toJS, configure } from 'mobx'
import { Human } from '../Types/Human'

class ServiceStore {
    static serviceStore: ServiceStore

    characters: Human[] = []

    static getServiceStore() {
        if (this.serviceStore === undefined) {
            this.serviceStore = new ServiceStore()
        }
        return this.serviceStore
    }

    get getCharacter() {
        return toJS(this.characters)
    }


    setCharacters(characters: Human[]) {
        this.characters = characters
    }

    async requestCharacter(name: string) {
        if (name === '') {
           this.allCharacters()
        } else {
            this.getCharacterByName(name)
        }
    }

    async getCharacterByName(name: string) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, {
            method: 'GET'
        })
        if (response.ok) {
            const resultResponse = await response.json()
            this.setCharacters(resultResponse.results)
        }
    }
    async allCharacters(){
        const response = await fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET'
        })
        if (response.ok) {
            const resultResponse = await response.json()
            this.setCharacters(resultResponse.results)
            console.log(this.getCharacter[1].image)
        }
    }

    constructor() {
        makeAutoObservable(this, {
            characters: observable,
            requestCharacter: action,
            getCharacter: computed
        })
    }

}
export default ServiceStore