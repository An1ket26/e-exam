const hello=document.getElementById("name");
const user=document.getElementById("id")

const fnc=()=>{
    uid=localStorage.getItem("itemKey");
    uid=JSON.parse(uid);
    hello.innerHTML=`Hello, ${uid.name}`;

    user.setAttribute("value",uid.userId);
}
fnc();