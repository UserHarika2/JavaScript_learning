// These are practise codes
console.log("Hello World");
alert("This is Harika and says you welcome to my website");
window.alert("Hello world");
let har=document.getELementById="new_di";
console.dir(har);
let heads=document.getElementsByClassName("headinsd");
console.log(heads);
console.dir(heads);

let divi=document.querySelector("div");
console.log(divi);

let attri=divi.getAttribute("id");
console.log(attri);

let newat=divi.setAttribute("class","newClass");
console.log(newat);

divi.innerHTML="i am harika.T";

// This is toggle button code

let btn1=document.querySelector("#btn1");
let currMode="light";
let body=document.querySelector("body");
btn1.addEventListener("click",(evt)=>{
    if(currMode==="light"){
        console.log("light-mode");
        currMode="dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else{
        currMode="light";
        body.classList.remove("dark");
        body.classList.add("light");
    }

});

// this is a mouseover event code (Did on own)

let divi=document.querySelector("#divi");
let body=document.querySelector("body");
let curr="light";
divi.addEventListener("mouseover",()=>{
    if(curr==="light"){
        alert("I am gonna change to dark mode");
        curr="dark";
        body.classList.remove("light");
        body.classList.add("dark");
        divi.style.backgroundColor="red";
    }
    else{
        alert("I am gonna change to light mode");
        curr="light";
        body.classList.remove("dark");
        body.classList.add("light");
        divi.style.backgroundColor="pink";
    }

});
