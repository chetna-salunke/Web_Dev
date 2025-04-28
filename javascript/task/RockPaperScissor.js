let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options=["rock", "paper","scissor"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    // console.log("game was draw");  
    msg.innerText="Game Draw ! play again";
    msg.style.backgroundColor=" rgb(64, 64, 112)";
}
const showWinner=(userwin, UserChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win!!");
        msg.innerText=`You win! Your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor=" rgb(179, 65, 103)";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose!");
        msg.innerText=`You loose! ${compChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor=" rgb(169, 169, 21)";
    }
}
const playGame=(UserChoice)=>{
    // console.log("user choice=",UserChoice);
    //generate comp choice
    const compChoice=getCompChoice();
    // console.log("comp choice=",compChoice);

    if(UserChoice===compChoice){
        //Drwa game
        drawGame();
    } else {
        let userwin = true;
        if(UserChoice==="rock"){
            //scissor, paper
            userwin=compChoice==="paper"?false:true;

        }else if(UserChoice==="paper"){
            //scissor, paper
            userwin=compChoice==="scissor"?false:true;
            
        } if(UserChoice==="scissor"){
            //scissor, paper
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin, UserChoice,compChoice);
    }
};



choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
        // console.log("choice was clicked", UserChoice);
        playGame(UserChoice)
        
    })

}) 
