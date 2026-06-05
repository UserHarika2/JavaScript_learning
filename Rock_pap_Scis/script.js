let choices=document.querySelectorAll(".choice");
// let scores=document.querySelector
let msg=document.querySelector("#msg");
let userScorepara=document.getElementById("user-pts");
let compScorepara=document.getElementById("comp-pts");
let userScore=0;
let compScore=0;

const genCompChoice=()=>{
    let ans=["rock","paper","scissor"];
    let compCho=Math.floor(Math.random(ans)*3);
    return ans[compCho];
}
const showWinner = (userWin,userCh,compCh) => {
    if(userWin){
        msg.innerHTML=`You won! ${userCh} beat ${compCh}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorepara.innerHTML=userScore;
    }
    else{
        msg.innerHTML=`You lost! ${compCh} beat ${userCh}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorepara.innerHTML=compScore;
    }

}
const playGame=(usercho)=>{
    const userChoice=usercho;
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        msg.innerHTML="Draw match";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="scissor"?true:false;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else if(userChoice==="scissor"){
            userwin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})