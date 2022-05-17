import { addMenssage,getMenssage } from "../store/MenssageList.js"
import { addli } from "../view/addLi.js"
function homeAddMensage(name,text){
    const menssageIndex= addMenssage(name,text)
    const [menssageInfo]= getMenssage(menssageIndex-1,true)
    addli(menssageInfo)
    
}
export{homeAddMensage}