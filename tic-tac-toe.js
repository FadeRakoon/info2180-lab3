
document.addEventListener('DOMContentLoaded', ()=>{
    let boardDiv = document.getElementById("board");
    let squares = boardDiv.querySelectorAll("div");
    
    squares.forEach(div => {
        div.classList.add("square");
    });

    let x = 0
    squares.forEach(div=>{
        
        div.addEventListener("click", ()=>{
            console.log(x);
            if (!div.textContent){
                if (x % 2 === 0){
                    div.classList.add("X");
                    div.textContent = "X";
                } else {
                    div.classList.add("O");
                    div.textContent = "O";
                }
                x++;
            }
        });
    })

});
    
