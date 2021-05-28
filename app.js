// scores
let userScore = 0;
let computerScore = 0;
// current user selection
let currentSelection = null;
let compSelection = null;
// winners

const winner = {
  scissors: {
    paper: "cuts paper",
    lizard: "decapitates lizard"
  },
  paper:{
    rock: "covers rock",
    spock: "disproves spock"
  },
  rock:{
    lizard: "crushes lizard",
    scissors: "crushes scissors"
  }, 
  lizard:{
    spock: "poisons spock",
    paper: "eats paper"
  },
  spock:{
    scissors: "smashes scissors",
    rock: "vaporizes rock"
  } 
}

//SELECTORS
// score displays
let userDisplay = document.querySelector('#user-score');
let computerDisplay = document.querySelector('#computer-score');
// user choices
const selects = document.querySelectorAll(".choice");
let userImageSelection = document.querySelector("#user-image-selection");

// comp choices
let compImageSelection = document.querySelector("#comp-image-selection");

// action button
const actionButton = document.querySelector("#action-message");

// result
const result = document.querySelector(".result > p");

// event listener that changes user selection
for (let x of selects) {
  x.addEventListener('click', function () {
    currentSelection = x.id;
    userImageSelection.src = `images/${currentSelection}.png`;
  });
};

//action button event listener
actionButton.addEventListener('click', function () {
  //random value between 1 and 5
  if (currentSelection === null) {
    result.innerHTML = "Please select an option!!!";
  } else {
    let computerChoice = Math.floor(Math.random() * 5);
    let x = selects[computerChoice];
    compSelection = x.id;
    compImageSelection.src = `images/${compSelection}.png`;
    getWinner(currentSelection, compSelection);
  }

});

const getWinner = (user, computer) => {
  if (user === computer) {
    result.innerHTML = "Tie! Try again!";
  } else {
    // if (console.log(Object.keys(winner[user]))
    if (Object.keys(winner[user]).includes(computer)){
      let msg = winner[user][computer];
      // console.log(msg);
      result.innerHTML = `Winner! ${user} ${msg}`; 
    }
  }

}




function reset() {
  let userScore = 0;
  let computerScore = 0;
  let userDisplay = userDisplay;
  let computerDisplay = computerScore;
}


