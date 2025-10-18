
document.addEventListener('DOMContentLoaded', ()=>{
    let boardDiv = document.getElementById("board");
    let squares = boardDiv.querySelectorAll("div");
    
    squares.forEach(div => {
        div.classList.add("square");
    });

})
    