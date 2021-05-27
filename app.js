let userScore = 0;
let computerScore = 0;
let userDisplay = document.querySelector('#user-score');
let computerDisplay = document.querySelector('#computer-score');
const selects = document.querySelectorAll(".choice");
let currentSelection = null;

function reset(){
  let userScore = 0;
  let computerScore = 0;  
  let userDisplay = userDisplay;
  let computerDisplay = computerScore;
}

for (let x of selects){
    x.addEventListener('click', function(){
        // console.log(x.id);
        currentSelection = x.id
    });
};

