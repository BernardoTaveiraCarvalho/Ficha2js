import { getMenssages } from "../store/MenssageList.js"
import { renderUI } from "../view/renderUi.js"
const homeRender =function(){
     renderUI(getMenssages())
}
export {homeRender}