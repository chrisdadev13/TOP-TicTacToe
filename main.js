const start = (() => {
  const startContainer = document.querySelector(".start-container");
  const startButton = document.querySelector(".start-button");
  const boardContainer = document.querySelector(".board-container");

  startButton.addEventListener("click", () => {
    startContainer.style.display = "none";
    boardContainer.style.display = ""; 
  });
})();

const gameBoard = (() => {
  const Player = (name, sign, turn) => {
    return {name, sign, turn};
  }
  
  let playerOne = Player("One", "X", true);
  let playerTwo = Player("Two", "O", false);

  let boardArr = [];
  
  //Full the array with HTML tiles value so if player selection == tiles value, array change:
  let tiles = document.querySelectorAll("div.board > div.play");
  tiles.forEach((tile) => {
    boardArr.push(tile.getAttribute("id"));
  })

  //Get a winner based on array structure:

  const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
  ];
  
  const rowCheck = () => {

  }
  
  //Before put the respective player mark in the DOM, ask if the tile clicked is the same in the array, change the array and add the mark in DOM
  const displayController = (() => {
    tiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        let div = document.createElement("div");

        for(let i = 0; i < boardArr.length; i++){
          if(tile.getAttribute("id") == boardArr[i] && playerOne.turn == true){
            boardArr[i] = playerOne.sign;
            console.log(boardArr)
            
            div.textContent = playerOne.sign;
            tile.appendChild(div);

            playerOne.turn = false;
            playerTwo.turn = true;
          }
          else if(tile.getAttribute("id") == boardArr[i] && playerOne.turn == false && playerTwo.turn == true){
            boardArr[i] = playerTwo.sign;
            console.log(boardArr);
  
            div.textContent = playerTwo.sign;
            tile.appendChild(div);

            playerOne.turn = true;
            playerTwo.turn = false;
          }
        }
  
      })
    })
  })();

})();
