import { FieldEmpty } from "../../exceptions/FieldEmpty.js"
class FieldRequired{
    static exec(input){
        if(!input.value){
            alert("Erro")
           throw new FieldEmpty(input) 
        }
    }
}
export {FieldRequired}