import { setStorage } from "../infra/setStorage.js";
class Menssage {
    #fullName;
    #text;
    

    get fullName(){
        return this.#fullName;
    }
    get text(){
        return this.#text;
    }
    set fullName(fullName){
        this.#fullName = fullName;
    }
    set text(text){
        this.#text = text;
    }
    constructor(fullName,text){
        this.#fullName = fullName
        this.#text = text
        setStorage(fullName,text)
    }
}
export{Menssage}