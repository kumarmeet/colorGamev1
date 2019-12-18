numSquares = 10;
var colors = [];
var picked;
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

inti();

function inti() {

    setupModeButtons();
    setupSquares();
    resetNew();
}

function setupModeButtons() {
    //for mode buttons even listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3
            } else if (this.textContent === "Hard") {
                numSquares = 6;
            } else {
                numSquares = 10;
            }
            resetNew();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === picked) {
                message.textContent = "Correct";
                reset.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            } else {
                message.textContent = "Try Again!";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

reset.addEventListener("click", function () {
    resetNew();
});

function resetNew() {
    colors = generateRandomColors(numSquares);
    picked = pickColors();
    colorDisplay.textContent = picked;
    reset.textContent = "New Color";
    message.textContent = "";
    for (var j = 0; j < square.length; j++) {
        if (colors[j]) {
            square[j].style.display = "block";
            square[j].style.backgroundColor = colors[j];
        } else {
            square[j].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
    for (var j = 0; j < square.length; j++) {
        square[j].style.backgroundColor = color;
    }
}

function pickColors() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColorPick());
    }
    return arr;
}

function randomColorPick() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}