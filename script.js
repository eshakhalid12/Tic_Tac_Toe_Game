let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn_O = true;
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Function to reset the game
const resetGame = () => {
    turn_O = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// Function to disable all boxes
let disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
 
// Function to enable all boxes
let enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

// Function to display the winner message
const showWinner = (winner) => {
    msg.innerText = `Congratulations 🎉, Winner is player ${winner} 🏆`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// Function to check if there is a winner
const checkWinner = () => {
    for (let pattern of winPattern) {
        let position_1 = boxes[pattern[0]].innerText;
        let position_2 = boxes[pattern[1]].innerText;
        let position_3 = boxes[pattern[2]].innerText;

        if (position_1 !== "" && position_2 !== "" && position_3 !== "") {
            if (position_1 === position_2 && position_2 === position_3) {
                showWinner(position_1);
            }
        }
    }
}

// Add event listener for reset button
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "O";
            turn_O = false;
        } else {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
