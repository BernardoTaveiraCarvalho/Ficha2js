import { qs } from "../helper/dom.js"
import { liElemMenssage } from "./components/liElementMenssage.js"
import { addE } from "../helper/dom.js"
import { submitForm } from "./events/submitForm.js"
const renderUI = function(mensages){
    addE(qs("form"),"submit",submitForm)
    const ulElem= qs("ul")
    mensages.forEach((mensage,index) => ulElem.append(liElemMenssage(mensage,index)))

}

export {renderUI}