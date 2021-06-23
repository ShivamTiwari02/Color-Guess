var difficulty = 6;
var colors = generateRandomColor(difficulty);
var squares=document.querySelectorAll(".square");
var goal = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var head = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


colorDisplay.textContent = goal;

easy.addEventListener("click", function(){
    difficulty = 3;
    resetColors();
    for(var i=3;i<6;i++){
        // squares[i].style.backgroundColor = "#232323";
        squares[i].classList.add("visible");
    }
    easy.classList.add("selected");
    hard.classList.remove("selected");
})
hard.addEventListener("click", function(){
    difficulty = 6;
    resetColors();
    hard.classList.add("selected");
    easy.classList.remove("selected");
    for(var i=3;i<6;i++){
        // squares[i].style.backgroundColor = "#232323";
        squares[i].classList.remove("visible");
    }

})
reset.addEventListener("click", function(){
    resetColors();
})

for(var i = 0; i<squares.length ;i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor === goal){           
            messageDisplay.textContent = "correct";
            changeColors(goal);
            head.style.backgroundColor = goal;
            reset.textContent = "Play Again";
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "try again"
    }
    })
}

function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];

    for(var i=0; i<num; i++){
        var col = [];
        col = randomColors();
        arr[i] = "rgb"+"("+ col[0]+", " + col[1]+ ", "+col[2] + ")";
    }

    return arr;
}

function randomColors(){
    
    var var1 = Math.floor(Math.random()*256);    
    var var2 = Math.floor(Math.random()*256);    
    var var3 = Math.floor(Math.random()*256);    
    var col = [var1, var2, var3];
    console.log(col);
    return col;
}

function resetColors(){
    colors = generateRandomColor(difficulty);
    goal = pickColor();
    for(var i = 0; i<squares.length ;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    colorDisplay.textContent = goal;
    head.style.backgroundColor = "steelblue";
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
}