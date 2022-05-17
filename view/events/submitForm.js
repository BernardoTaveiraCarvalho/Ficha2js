import { qs } from "../../helper/dom.js"
import { FieldRequired } from "../../validator/form/fieldRequired.js"
import { cleanInputs } from "../cleanInputs.js"
import { formValues } from "../../helper/dom.js"
import { homeAddMensage } from "../../presenter/homeAddMenssage.js"
function submitForm(e){
    e.preventDefault()
    const inputArray = formValues(e.target)
    const [inputName,inputText]= inputArray
    try{
    inputArray.forEach(input => FieldRequired.exec(input));
    const form = qs('form')
    homeAddMensage(inputName,inputText)
    cleanInputs(form)
   }
catch(e){
    console.error(e)
}

}
export{submitForm}

