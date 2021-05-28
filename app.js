// scores
let userScore = 0;
let computerScore = 0;
// score displays
let userDisplay = document.querySelector('#user-score');
let computerDisplay = document.querySelector('#computer-score');
// user choices
const selects = document.querySelectorAll(".choice");
let userSelection = document.querySelector("#user-selection");

for (let x of selects){
  x.addEventListener('click', function(){
      currentSelection = x.id;
      let imgSource = userSelection.firstElementChild.src;
      console.log(imgSource);
  });
};

// current selection
let currentSelection = null;

function reset(){
  let userScore = 0;
  let computerScore = 0;  
  let userDisplay = userDisplay;
  let computerDisplay = computerScore;
}


