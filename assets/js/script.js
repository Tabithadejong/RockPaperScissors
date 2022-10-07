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
        result = "You Lost!"
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
        result = "You win!"
    }
    
    resultDisplay.innerHTML = result
}