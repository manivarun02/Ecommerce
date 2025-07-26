import login from "./login.js";
import register from "./register.js";

const root=document.getElementById("root");
// console.log(root);
const Allanchors=document.querySelectorAll("a")
const router={
    "/login":login,
    "/register":register
}
function handleclick(e){
e.preventDefault()
const path=e.target.pathname
// console.log(e.target.pathname)
history.pushState(null,"",`${path}`)

root.innerHTML=router[path]()

}



Allanchors.forEach((anchor)=>{
anchor.addEventListener("click",handleclick)
})

window.addEventListener('popstate',(e)=>{
    let path=location.pathname
    if(path =="/index.html"){
root.innerHTML=""
    }
    else{
        root.innerHTML=router[path]()
    }
})