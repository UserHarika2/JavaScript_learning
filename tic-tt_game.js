let boxes=document.querySelectorAll(".box");
let turn0=true;
let msgs=document.querySelector("p");
let rstbtn=document.querySelector("#rst-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg");

const winPatt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const showWinner =(evt)=>{
    msgs.innerHTML=`Congratulations, winner is ${evt}`;
    disableBoxes();
    msgContainer.classList.remove("hide");
    
}
const checkWin=()=>{
    for(let patt of winPatt){
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return;
            }
        }
    }
}
const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
        
    }
}
const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
    if(turn0){
        box.innerHTML="O";
        turn0=false;
    }
    else{
        box.innerHTML="X";
        turn0=true;
    }
    box.disabled=true;
    checkWin();
});

});

const resetGame= () =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newbtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);