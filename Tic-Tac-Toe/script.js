let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");
let resetBtn = document.querySelector("#reset-btn");
let nweGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    body.style.backgroundColor = "#548687";
;}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "<p style = 'color: green;'>O</p>";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.innerHTML = "<p style = 'color: #b0413e;'>X</p>";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations! Our winner is ${winner}`;
    msgContainer.classList.remove("hide");
    if (winner === "O") {
        body.style.backgroundColor = "green";
    }
    else {
        body.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    }

    disableBoxes();
}


const checkWinner =  () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};


nweGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);