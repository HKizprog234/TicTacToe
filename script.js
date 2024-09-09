let conta = document.querySelector('container');
let boxa = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgcon = document.querySelector(".msg-con");
let winner = document.querySelector("#win");
let NewGame = document.querySelector(".new-game");

let turn0 = true;
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxa.forEach((box) => {
   box.addEventListener("click" ,() =>{
      console.log("the box is clicked");
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText ="X";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    });
});
let boxdisa = ()=> {
    for(box of boxa){
        box.disabled=true;
    }
}
const checkDraw=()=>{
    let draw = true;
    for(box of boxa) {
        if(box.innerText===""){
            draw=false;
        }   
    }
   
    if(draw){
        showWinner("It's A Draw !");
    }

}
const checkWinner = () => {
    for (const pattern of winPattern) {
      
        let posVal1 = boxa[pattern[0]].innerText;
        let posVal2 =  boxa[pattern[1]].innerText;
        let posVal3 =  boxa[pattern[2]].innerText;
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3) {
                console.log("winner is:", posVal1);
                showWinner(posVal1);
               
            } 
        }
        }
    };
    const showWinner= (winnerr) => {
      winner.innerText= `congralutions the winner is ${winnerr}`;
      if(winnerr==="It's A Draw !"){
        winner.innerText = "The match is Draw";

      }
      msgcon.classList.remove("hide"); 
      boxdisa();
      
    }
    let enablebtn=()=>{
        for(box of boxa){
            box.disabled=false;
          
        }
        
    }
 const resetGame = () =>{
    let turn0 = true;
    enablebtn();
    msgcon.classList.add("hide");
 }
 resetBtn.addEventListener("click",resetGame);
 NewGame.addEventListener("click",resetGame);
