//win patterns from: https://www.geeksforgeeks.org/javascript/simple-tic-tac-toe-game-using-javascript/
//(bit faster than manually typing it out)
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

document.addEventListener('DOMContentLoaded', ()=>{
    let boardDiv = document.getElementById("board");
    let squares = boardDiv.querySelectorAll("div");
    let status = document.getElementById("status");

    
    squares.forEach(div => {
        div.classList.add("square");
    });

    let x = 0
    let symbol;
    squares.forEach(div=>{
        div.addEventListener('mouseover', ()=>{
            div.classList.add("hover");
        });


        div.addEventListener('mouseout', ()=>{
            div.classList.remove("hover");
        });


        div.addEventListener("click", ()=>{
            console.log(x);
            if (!div.textContent){
                if (x % 2 === 0){
                    div.classList.add("X");
                    div.textContent = "X";
                    symbol = "X";
                    
                } else {
                    div.classList.add("O");
                    div.textContent = "O";
                    symbol = "O";
                }
                x++;

                winner = winPatterns.some(([a, b, c]) => (
                    squares[a].textContent === symbol && 
                    squares[b].textContent === symbol && 
                    squares[c].textContent === symbol
                ))

                if (winner){
                    status.classList.add("you-won");
                    status.textContent = `Congratulations! ${symbol} is the Winner!`;
                    return;
                }

            }
            
            

        });
    })

    let button = document.querySelector(".btn")
    button.addEventListener('click', ()=>{
        status.classList.remove("you-won");
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        squares.forEach(div=>{
            div.classList.remove("X");
            div.classList.remove("O");
            div.textContent ="";
        })
    })
});
    