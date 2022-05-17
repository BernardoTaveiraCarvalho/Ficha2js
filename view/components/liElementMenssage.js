import { ce } from "../../helper/dom.js"
import { textli } from "./textLi.js"
function liElemMenssage(menssage){
    const liElem=ce("li",textli(menssage))
    return liElem
}
export {liElemMenssage}