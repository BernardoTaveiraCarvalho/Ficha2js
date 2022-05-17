function getStorage(name,text){
    const name= localStorage.getItem("Name",name)
    const text = localStorage.setItem("Text",text)
   return []
}
export {setStorage}