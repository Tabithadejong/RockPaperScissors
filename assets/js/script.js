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
    const randomNumber = Math.floor(Math.random() * 3) +1  
     
    if (randomNumber === 1) { 
        computerChoice = "rock"
    }
    if (randomNumber === 2) { 
        computerChoice = "scissors"
    }
    if (randomNumber === 3) { 
        computerChoice = "paper"
    }

    computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult() { 

    if (computerChoice === userChoice) { 
        result = "Draw"
    }
    else if (computerChoice === "rock" && userChoice === "paper") { 
        result = "You Win!"
    }
    else if (computerChoice === "rock"&&  userChoice === "scissors") { 
        result = "You Lost!"
    }
    else if (computerChoice === "paper"&& userChoice === "rock") { 
        result = "You Lost!"
    }
    else if (computerChoice === "paper"&& userChoice === "scissors") { 
        result = "You Lost!"
    }
    else if (computerChoice === "scissors"&& userChoice === "rock") { 
        result = "You win!"
    }
    else if (computerChoice === "scissors"&& userChoice === "paper") { 
        result = "You Lost!"
    }
    else { 
        alert('its not working')
    }
    resultDisplay.innerHTML = result
}