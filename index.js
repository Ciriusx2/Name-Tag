const name=document.getElementById("name");
const tags=document.querySelector(".tags");

const addname=()=>{
    const tag=document.createElement("div");
    tag.setAttribute("class","tag");
    if(name.value===""){
        return null;
    }
    tag.innerText=`Hey, ${name.value} How are you?`
    tags.append(tag);
}