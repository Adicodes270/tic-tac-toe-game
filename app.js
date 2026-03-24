const toggleButton = document.querySelector(".toggle-button");
const body = document.querySelector("body");
const current_value = toggleButton.getAttribute("current-value");
const newGameBtn = document.querySelector("#new-game-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

if (current_value == "light") {
    body.classList.add("light");
}
toggleButton.addEventListener("click", () => {
    body.classList.toggle('light');


    const isLight = body.classList.contains('light');
    toggleButton.setAttribute("current-value", isLight ? "dark" : "light");
});

let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset");

let turn_O = true;

let winning_patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turn_O = true;
    enableBoxes();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn_O) {
            box.innerText = "O"
            box.style.color = "#26408B";
            turn_O = false;
        } else {
            box.innerText = "X"
            box.style.color = "#D64933";
            turn_O = true;
        }
        box.disabled = true;

        checkWinner();
    });
})

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide")
    }
}


const showWinner = (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const draw = () => {
    msg.innerText= `It is a draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    // Individual variables for each box's content
    let pos0Val = boxes[0].innerText;
    let pos1Val = boxes[1].innerText;
    let pos2Val = boxes[2].innerText;
    let pos3Val = boxes[3].innerText;
    let pos4Val = boxes[4].innerText;
    let pos5Val = boxes[5].innerText;
    let pos6Val = boxes[6].innerText;
    let pos7Val = boxes[7].innerText;
    let pos8Val = boxes[8].innerText;
    let isWinner = false;

    // Pattern 1: [0, 1, 2]
    if (pos0Val != "" && pos1Val != "" && pos2Val != "") {
        if (pos0Val === pos1Val && pos1Val === pos2Val) {
            showWinner(pos1Val);
            isWinner = true;
        }
    }

    // Pattern 2: [0, 3, 6]
    if (pos0Val != "" && pos3Val != "" && pos6Val != "") {
        if (pos0Val === pos3Val && pos3Val === pos6Val) {
            showWinner(pos0Val);
            isWinner = true;
        }
    }

    // Pattern 3: [0, 4, 8]
    if (pos0Val != "" && pos4Val != "" && pos8Val != "") {
        if (pos0Val === pos4Val && pos4Val === pos8Val) {
            showWinner(pos0Val);
            isWinner = true;
        }
    }

    // Pattern 4: [1, 4, 7]
    if (pos1Val != "" && pos4Val != "" && pos7Val != "") {
        if (pos1Val === pos4Val && pos4Val === pos7Val) {
            showWinner(pos1Val);
            isWinner = true;
        }
    }

    // Pattern 5: [2, 5, 8]
    if (pos2Val != "" && pos5Val != "" && pos8Val != "") {
        if (pos2Val === pos5Val && pos5Val === pos8Val) {
            showWinner(pos2Val);
            isWinner = true;
        }
    }

    // Pattern 6: [2, 4, 6]
    if (pos2Val != "" && pos4Val != "" && pos6Val != "") {
        if (pos2Val === pos4Val && pos4Val === pos6Val) {
            showWinner(pos2Val);
            isWinner = true;
        }
    }

    // Pattern 7: [3, 4, 5]
    if (pos3Val != "" && pos4Val != "" && pos5Val != "") {
        if (pos3Val === pos4Val && pos4Val === pos5Val) {
            showWinner(pos3Val);
            isWinner = true;
        }
    }

    // Pattern 8: [6, 7, 8]
    if (pos6Val != "" && pos7Val != "" && pos8Val != "") {
        if (pos6Val === pos7Val && pos7Val === pos8Val) {
            showWinner(pos6Val);
            isWinner = true;
        }
    }

    if (!isWinner) {
        
        let allFilled = true;
        for (let box of boxes) {
            if (box.innerText === "") {
                allFilled = false;
                break;
            }
        }
        
        if (allFilled) {
            draw();
        }
    }

    
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



msgContainer.addEventListener("click", (e) => {

    if (e.target === msgContainer) {
        msgContainer.classList.add("hide");
    }
});