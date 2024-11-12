// Select elements
const ball = document.querySelector(".ball");
const ball1 = document.querySelector(".ball1");
const ball2 = document.querySelector(".ball2");
const ball3 = document.querySelector(".ball3");
const text = document.querySelector(".text");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const lgn =   document.querySelector("#lbl-lgn") 
const lgn1 =   document.querySelector("#login") 
const sgn =   document.querySelector("#lbl-sgn") 
const sgn1 =   document.querySelector("#sign-up") 
const lgn_sgn_ctn =   document.querySelector(".all-ctn") 



//Making the login and sign up container display none
lgn_sgn_ctn.style.display = 'none';


ball.style.animation = "moveBall 2s linear forwards";
text.style.animation = "typeText 2s steps(40) forwards";
ball1.style.display = 'none';
ball2.style.display = 'none';
ball3.style.display = 'none';


function ln1(){
    ball1.style.animation = "moveBall1 2s linear forwards";
    text1.style.animation = "typeText1 2s steps(40) forwards";
    ball1.style.display = 'block';
    ball2.style.display = 'none';
    ball3.style.display = 'none';
    ball.style.display = 'none';
} // Delay by 3 seconds, starting when the previous animation ends

function ln2(){
    ball2.style.animation = "moveBall2 2s linear forwards";
    text2.style.animation = "typeText2 2s steps(40) forwards";
    ball1.style.display = 'none';
    ball2.style.display = 'block';
    ball3.style.display = 'none';
    ball.style.display = 'none';
    setTimeout(()=>{
        lgn_sgn_ctn.style.display = 'block';
    },2000)
     

} // Delay by 6 seconds, starting when the previous animation ends


function ln3(){
    ball3.style.animation = "moveBall3 2s linear forwards";
    text3.style.animation = "typeText3 2s steps(40) forwards";
    ball1.style.display = 'none';
    ball2.style.display = 'none';
    ball3.style.display = 'block';
    ball.style.display = 'none';
} // Delay by 9 seconds, starting when the previous animation ends


//Finally add the event listner 

ball.addEventListener("animationend", () => {
    ln1();
})

ball1.addEventListener("animationend", () => {
    ln3();
})


ball3.addEventListener("animationend", () => {
    ln2();
})





//Making the part in  which the ball that write the whole thing will pop-up after writting 
function blnk1() {
    setTimeout(() => {
        ball2.style.opacity = 0;
        setTimeout(() => {
            blnk2();
        }, 100); // Delay before calling blnk2 after ball2 becomes invisible
    }, 100); // Delay before hiding ball2
}

function blnk2() {
    setTimeout(() => {
        ball2.style.opacity = 1;
        setTimeout(() => {
            blnk1();
        }, 100); // Delay before calling blnk1 after ball2 becomes visible again
    }, 100); // Delay before showing ball2
}

setTimeout(() => {
    blnk1();
}, 8000); // Initial delay before starting the blinking animation


lgn.addEventListener("mouseover",()=>{
   lgn1.style.opacity = 0.5;
})

lgn.addEventListener("mouseout",()=>{
    lgn1.style.opacity = 1;
})

lgn1.addEventListener("mouseover",()=>{
    lgn1.style.opacity = 0.5;
})


lgn1.addEventListener("mouseout",()=>{
    lgn1.style.opacity = 1;
})



sgn.addEventListener("mouseover",()=>{
    sgn1.style.opacity = 0.5;
 })
 
 sgn.addEventListener("mouseout",()=>{
     sgn1.style.opacity = 1;
 })
 
 sgn1.addEventListener("mouseover",()=>{
     sgn1.style.opacity = 0.5;
 })
 
 
 sgn1.addEventListener("mouseout",()=>{
     sgn1.style.opacity = 1;
 })



 