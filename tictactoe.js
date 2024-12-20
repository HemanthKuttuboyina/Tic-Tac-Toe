const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector("#reset-btn");
const msgcontainer = document.querySelector(".msg-container")
const win = document.querySelector("#msg");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnX = true;

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnX)
            {
                box.innerText = "X";
                turnX = false;
            }
            else{
                box.innerText = "O";
                turnX = true;
            }
            box.Disabled = true;
            checkWinner();
    });
    
});

const checkWinner = () =>{
    for(let pattern of winPatterns)
    {
        let a = boxes[pattern[0]].innerText;
        
        let b =  boxes[pattern[1]].innerText;
        
        let c =  boxes[pattern[2]].innerText;

        if(a != "" && a === b && b === c)
        {
            msgcontainer.classList.remove("hide");
            win.innerText = `Winner is ${a}`;
        }
    
    }
}