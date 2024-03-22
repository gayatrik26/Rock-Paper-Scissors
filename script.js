let compscore = 0;
let userscore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.getElementById("Msg");
const userscorepara = document.querySelector("#Userscore");
const compscorepara = document.querySelector("#compscore");

const gencompchoice = () => {
    const compchoice = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return compchoice[randomidx];
}

const drawgame = () => {
    console.log("game was draw!");
    msg.innerText = "game draw.play again!";
    msg.style.backgroundColor = "#111131";
}

const showwiner = (userwin,compchoice,userchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose!");
        msg.innerText = `you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) =>{
    console.log("userchoice is ",userchoice);
    //generate comp choice
    const compchoice = gencompchoice();
    console.log("computer choice is ",compchoice);

    if(compchoice === userchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //comp-> paper or scissors
            userwin = compchoice === "paper"? false : true;
        }else if(userchoice === "paper"){
            //comp -> rock or scissors
            userwin = compchoice === "scissors"? false : true;
        }else{
            //comp -> rock or paper
            userwin = compchoice === "rock"? false : true;
        }
        showwiner(userwin,compchoice,userchoice);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".choice img").forEach((img) => {
        img.addEventListener("click", () => {
            let userchoice = img.getAttribute("id");
            // console.log(userchoice);
            playgame(userchoice);
        });
    });
});





// choices.forEach((choice) =>{
//     console.log(choice);//works
//     choice.addEventListener("click", () =>{
//         let userchoice = choice.getAttribute("id");
//         // console.log(userchoice);
//         playgame(userchoice);
//     });
// });
