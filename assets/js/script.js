const computerChoiceDisplay = document.getElementById("computer-choice")
const yourChoice = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let userChoice 
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => { 
 userChoice= e.target.id 
 yourChoice.innerHTML = userChoice
 generateComputerChoice()
 getResult()
 keepingScore()
})
    
)

function generateComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * 5) +1  
     
    if (randomNumber === 1) { 
        computerChoice = "rock"
    }
    else if (randomNumber === 2) { 
        computerChoice = "scissors"
    }
    else if (randomNumber === 3) { 
        computerChoice = "paper"
    }
    else if (randomNumber === 4) {
        computerChoice = "lizard"
    } 
    else if (randomNumber === 5 ) { 
        computerChoice = "spok"
    }

    computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult() { 

    if (computerChoice === userChoice) { 
        result = "Tie"
    }
    else if (computerChoice === "rock" && userChoice === "paper") { 
        result = "You Win!"
    }
    else if (computerChoice === "rock"&&  userChoice === "scissors") { 
        result = "You Lost!"
    }
    else if (computerChoice === "rock"&&  userChoice === "lizard") { 
        result = "You Lost!"
    }
    else if (computerChoice === "rock"&&  userChoice === "spok") { 
        result = "You Win!"
    }
    else if (computerChoice === "paper"&& userChoice === "rock") { 
        result = "You Lost!"
    }
    else if (computerChoice === "paper"&& userChoice === "scissors") { 
        result = "You Win!"
    }
    else if (computerChoice === "paper"&& userChoice === "lizard") { 
        result = "You Win!"
    }
    else if (computerChoice === "paper"&& userChoice === "spok") { 
        result = "You Lost!"
    }
    else if (computerChoice === "scissors"&& userChoice === "rock") { 
        result = "You win!"
    }
    else if (computerChoice === "scissors"&& userChoice === "paper") { 
        result = "You Lost!"
    }
    else if (computerChoice === "scissors"&& userChoice === "lizard") { 
        result = "You Lost!"
    }
    else if (computerChoice === "scissors"&& userChoice === "spok") { 
        result = "You Win!"
    }
    else if (computerChoice === "spok" && userChoice === "lizard") { 
        result = "You Win!"
    }
    else if (computerChoice === "spok" && userChoice === "scissors") { 
        result = "You Lost!"
    }
    else if (computerChoice === "spok" && userChoice === "rock") { 
        result = "You Lost!"
    }
    else if (computerChoice === "spok" && userChoice === "paper") { 
        result = "You Win!"
    }
    else if (computerChoice === "lizard" && userChoice === "paper") { 
        result = "You Lost!"
    }
    else if (computerChoice === "lizard" && userChoice === "rock") { 
        result = "You Win!"
    }
    else if (computerChoice === "lizard" && userChoice === "scissors") { 
        result = "You Win!"
    }
    else if (computerChoice === "lizard" && userChoice === "spok") { 
        result = "You Win!"
    }
    


    
    resultDisplay.innerHTML = result
}

function keepingScore() { 
    let yourScore= []
    let computerScore = []

    for (i=0; i<5; i++){
        if (result == "You Win!") { 
            yourScore[i] + 1 
        }
        if (result == "You Lost!") { 
            computerScore[i] +1 
        }

    }
    
    

    console.log(yourScore)
    console.log(computerScore)
    
}


function gameEnd() { 
    if ( yourScore === 5 ){ 
        alert("You beat the machine!")
    }
    else if ( computerScore === 5 ) { 
        alert("Try again..")
        return 
    }
}