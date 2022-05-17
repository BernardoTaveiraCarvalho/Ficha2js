import {Menssage } from "../model/Menssage.js";
    const menssages =[
        new Menssage('Bernardo','Olá'),
        new Menssage('João','Tudo bem?'),
        new Menssage('Bernardo','Sim'),
    ]; 
    const getMenssages= () => menssages;
    const getMenssage=(id,stop=false) =>(stop) ? menssages.slice(id,id+1):menssages.slice(id)
    const addMenssage=(name,text)=>menssages.push(new Menssage(name.value,text.value))


export{getMenssages,getMenssage,addMenssage};

