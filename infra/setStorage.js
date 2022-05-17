function setStorage(name,text){
    localStorage.setItem("Name",name)
    localStorage.setItem("Text",text)
    localStorage.setItem()
    console.log(localStorage.getItem("Name"))
}
export {setStorage}