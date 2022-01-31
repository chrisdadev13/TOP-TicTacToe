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

  /*const winningAxes = [
        [0,1,2], //Rows
        [3,4,5],
        [6,7,8],
        [0,3,6], // Columns
        [1,4,7],
        [2,5,8], 
        [0,4,8], // Diagonal
        [2,4,6],
  ];*/
  
  let winner = false;

  let whoWin = [];

  const firstDiagonal = (arr) => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i + 4] && arr[i + 4] == arr[i + 8]){
        winner = true;
        whoWin.push(arr[i], arr[i + 4], arr[i + 8]);
      }
      else{
        continue;
      }
    }
    if(winner == true && whoWin[0] == "X"){
      alert(`We have a winner, congratulations player ${playerOne.name}`);
    }
    else if(winner == true && whoWin[0] == "O"){
      alert(`We have a winner, congratulations player ${playerTwo.name}`);
    }
  }

  const secondDiagonal = (arr) => {
    for(let i = 2; i < arr.length; i++){
      if(arr[i] == arr[i + 2] && arr[i + 2] == arr[i + 4]){
        winner = true;
        whoWin.push(arr[i], arr[i + 2], arr[i + 4]);
      }
      else{
        continue;
      }
    }
    if(winner == true && whoWin[0] == "X"){
      alert(`We have a winner, congratulations player ${playerOne.name}`);
    }
    else if(winner == true && whoWin[0] == "O"){
      alert(`We have a winner, congratulations player ${playerTwo.name}`);
    }
  }

  const rowWinner = (arr) => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2]){
        winner = true;
        whoWin.push(arr[i], arr[i + 1], arr[i + 2]);
      }
      else{
        continue;
      }
     }
    if(winner == true && whoWin[0] == "X"){
      alert(`We have a winner, congratulations player ${playerOne.name}`);
    }
    else if(winner == true && whoWin[0] == "O"){
      alert(`We have a winner, congratulations player ${playerTwo.name}`);
    }
  }

  const columnWinner = (arr) => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i + 3] && arr[i + 3] == arr[i + 6]){
        winner = true;
        whoWin.push(arr[i], arr[i + 3], arr[i + 6]);
      }
      else{
        continue;
      }
    }
    if(winner == true && whoWin[0] == "X"){
      alert(`We have a winner, congratulations player ${playerOne.name}`);
    }
    else if(winner == true && whoWin[0] == "O"){
      alert(`We have a winner`)
    }
  }

  //Before put the respective player mark in the DOM, ask if the tile clicked is the same in the array, change the array and add the mark in DOM
  const displayController = (() => {
    tiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        let div = document.createElement("div");

        for(let i = 0; i < boardArr.length; i++){
          if(tile.getAttribute("id") == boardArr[i] && playerOne.turn == true && winner == false){
            boardArr[i] = playerOne.sign;
            console.log(boardArr)
            
            div.textContent = playerOne.sign;
            tile.appendChild(div);

            playerOne.turn = false;
            playerTwo.turn = true;
          }
          else if(tile.getAttribute("id") == boardArr[i] && playerOne.turn == false && playerTwo.turn == true && winner == false){
            boardArr[i] = playerTwo.sign;
            console.log(boardArr);
  
            div.textContent = playerTwo.sign;
            tile.appendChild(div);

            playerOne.turn = true;
            playerTwo.turn = false;
          }
        }
        rowWinner(boardArr);
        columnWinner(boardArr);
        firstDiagonal(boardArr);
        secondDiagonal(boardArr);

        })
      })
    })();
})();
