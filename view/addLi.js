import { liElemMenssage } from "./components/liElementMenssage.js";
import { qs } from "../helper/dom.js";

function addli (contact){
   qs('ul').append(liElemMenssage(contact));
}
export {addli}