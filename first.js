
let userscore=0;
let computerscore=0;
let userchoice=" ";
let itm=document.querySelectorAll(".item");
itm.forEach(item=>{
    item.addEventListener(
        "click",()=>{
            let selection=item.getAttribute("id");
           userchoice=selection;
           console.log("userchoice is:"+userchoice)
           let game1=document.querySelector("#game1")
           game1.innerText=userchoice;
           let comp=computerchoice(userchoice);
           console.log("computerchoice is:"+comp)
            let game2=document.querySelector("#game2")
           game2.innerText=comp;
           console.log("winner is:"+decidewinner(userchoice,comp));
           if(decidewinner(userchoice,comp)==="user"){
            userscore++;
            
           }if(decidewinner(userchoice,comp)==="computer"){
            computerscore++;
           
           }
            if(decidewinner(userchoice,comp)==="user"){
    let wish=document.querySelector("#wish")
    wish.style.visibility="visible"
 }if(decidewinner(userchoice,comp)==="computer"||decidewinner(userchoice,comp)==="draw"){
    let wish=document.querySelector("#wish")
    wish.style.visibility="hidden"
 }
 let res=document.querySelector("#reset")
res.addEventListener(
    "click",()=>{
    userscore=0;
 computerscore=0;
  btn1=document.querySelector("#my");
           btn1.innerText=0;
             btn2=document.querySelector("#machine");
           btn2.innerText=0;
    }
)
           let w=document.querySelector("#won")
           w.innerText=decidewinner(userchoice,comp);
           
           let btn1=document.querySelector("#my");
           btn1.innerText=userscore;
            let btn2=document.querySelector("#machine");
           btn2.innerText=computerscore;
        }
    )
}

)
function computerchoice(){
    const choices=["rock","paper","scissor"];
    let randomindex=Math.floor(Math.random()*3);
    return choices[randomindex];
}
function decidewinner(userchoice,computerchoice){
    if(userchoice===computerchoice)return "draw";
    if((userchoice==="rock" && computerchoice==="scissor")
    ||(userchoice==="paper" && computerchoice==="rock")||
(userchoice==="scissor" && computerchoice==="paper"))
{
    return "user"
}
else{
    return "computer"
}
}




