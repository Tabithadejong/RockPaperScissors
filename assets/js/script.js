let resultDisplay = document.getElementById("result"); 
let yourChoice = document.getElementById("your-choice");
let computerChoiceDisplay = document.getElementById("computer-choice");
let possibleChoices = document.querySelectorAll("button"); 
let userChoice; 
let computerChoice; 
let result; 

/* Fires event when buttons are clicked, activate functions to run the game. */ 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => { 
 userChoice = e.target.id;
 yourChoice.innerHTML = userChoice; 
 generateComputerChoice(); 
 getResult(); 
 gameControl(); 
 endGame(); 
})
    
); 
/* Make random selection out of option for the computer to play */ 


function generateComputerChoice() { 
    let randomNumber = Math.floor(Math.random() * 5) +1; 
     
    if (randomNumber === 1) { 
        computerChoice = "rock"; 
    }
    else if (randomNumber === 2) { 
        computerChoice = "scissors"; 
    }
    else if (randomNumber === 3) { 
        computerChoice = "paper"; 
    }
    else if (randomNumber === 4) {
        computerChoice = "lizard"; 
    } 
    else if (randomNumber === 5 ) { 
        computerChoice = "spock"; 
    }

    computerChoiceDisplay.innerHTML = computerChoice; 
}

/* Decides who wins between computer and user */ 

function getResult() { 

    if (computerChoice === userChoice) { 
        result = "Tie"; 
    }
    else if (computerChoice === "rock" && userChoice === "paper") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "rock" &&  userChoice === "scissors") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "rock" &&  userChoice === "lizard") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "rock" &&  userChoice === "spock") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "paper" && userChoice === "rock") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "paper" && userChoice === "scissors") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "paper" && userChoice === "lizard") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "paper" && userChoice === "spock") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "scissors" && userChoice === "rock") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "scissors" && userChoice === "paper") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "scissors" && userChoice === "lizard") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "scissors" && userChoice === "spock") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "spock" && userChoice === "lizard") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "spock" && userChoice === "scissors") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "spock" && userChoice === "rock") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "spock" && userChoice === "paper") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "lizard" && userChoice === "paper") { 
        result = "You Lost!"; 
    }
    else if (computerChoice === "lizard" && userChoice === "rock") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "lizard" && userChoice === "scissors") { 
        result = "You Win!"; 
    }
    else if (computerChoice === "lizard" && userChoice === "spock") { 
        result = "You Lost!"; 
    }
    


    
    resultDisplay.innerHTML = result; 
}


/* Increments users score */ 

function keepingYourScore() { 
    let oldScore = parseInt(document.getElementById('your-score').innerText); 
    document.getElementById('your-score').innerText = ++oldScore; 
    
    }

/* Increments computer score */ 

function keepingComputerScore() { 
    let oldScore = parseInt(document.getElementById('computer-score').innerText); 
    document.getElementById('computer-score').innerText = ++oldScore; 

}
    
/* Decides when to increment computer score or user score */ 

function gameControl() { 
    if ( result === "You Win!" ){ 
        keepingYourScore(); 
    }
    if ( result === "You Lost!" ) { 
        keepingComputerScore();  
    }

}

/* Ends game when one of the parties win and resets the game section */ 

function endGame() { 
    let yourScore = document.getElementById("your-score").innerHTML; 
    let computerScore = document.getElementById("computer-score").innerHTML; 

     if (yourScore == 5 ) { 
        alert(`You beat the machine! \nWinning move = Your Choice: ${userChoice} , Computer Choice: ${computerChoice}`); 
        document.location.reload(true); 
        
     }
     if (computerScore == 5) { 
        alert(`Game over, try again.. \nKilling strike = Your Choice: ${userChoice},  Computer Choice: ${computerChoice} `); 
        document.location.reload(true); 
        
     }

}

