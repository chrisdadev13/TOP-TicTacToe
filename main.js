const start = (() => {
  const startContainer = document.querySelector(".start-container");
  const startButton = document.querySelector(".start-button");
  const boardContainer = document.querySelector(".board-container");
  const playerNameContainer = document.querySelector("#playerName");
  const playButton = document.querySelector("#press-to-play");
  const playerOneInput = document.querySelector("#player-one-input"); 
  const playerTwoInput = document.querySelector("#player-two-input");

  startButton.addEventListener("click", () => {
    startContainer.style.display = "none";
    playerNameContainer.style.display = "";
    playerOneInput.value = "";
    playerTwoInput.value = "";
  });

 playButton.addEventListener("click", () => {
    if(playerOneInput.value != "" && playerTwoInput.value != ""){
      playerNameContainer.style.display = "none";
      boardContainer.style.display = "";
    }
    else{
      playerOneInput.value = "Please introduce a valid name";
    }
  });
})();

class Player{
  constructor(name, mark, turn){
    this.name = name;
    this.mark = mark;
    this.turn = turn;
  }

  setName(name){
    this.name = name;
    return this;
  }

  setMark(mark){
    this.mark = mark;
    return this;
  }

  setTurn(turn){
    this.turn = turn;
    return this;
  }
}

class Main{
  static TicTacToe(){
    Main.game();
  }

  static getPlayerOneName(){
    const input = document.querySelector("#player-one-input");
    const name = input.value;
    return name;
  }

  static getPlayerTwoName(){
    const input = document.querySelector("#player-two-input");
    const name = input.value;
    return name;
  }

  static playerOne(){
    let player = new Player;
    player.setName(Main.getPlayerOneName());
    player.setMark("X");
    player.setTurn(true);


    return player;
  }

  static playerTwo(){
    let player = new Player;
    player.setName(Main.getPlayerTwoName());
    player.setMark("O");
    player.setTurn(false);


    return player;
  }

  static createBoardArr(){
    let arr = [];
    let boardDOM = document.querySelectorAll("div.board > div.play");
    boardDOM.forEach((tile) => {
      arr.push(tile.getAttribute("id"));
    })
    return arr;
  }

  static firstDiagonal(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i + 4] && arr[i + 4] == arr[i + 8]){
        winner = true;
        Main.whoWin(arr[i]);
        Main.declareWinner();
      }
      else{
        continue;
      }
    }
  }

  static secondDiagonal(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[2] == arr[2 + 2] && arr[2 + 2] == arr[2 + 4]){
        winner = true;
        Main.whoWin(arr[2]);
        Main.declareWinner();
      }
      else{
        continue;
      }
    }    
  }

  static rowWinner(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[0] == arr[0 + 1] && arr[0 + 1] == arr[0 + 2]){
        winner = true;
        Main.whoWin(arr[0]);
        Main.declareWinner();
      }
      else if(arr[3] == arr[3 + 1] && arr[3 + 1] == arr[3 + 2]){
        winner = true;
        Main.whoWin(arr[3]);
        Main.declareWinner();
      }
      else if(arr[6] == arr[6 + 1] && arr[6 + 1] == arr[6 + 2]){
        winner = true;
        Main.whoWin(arr[6]);
        Main.declareWinner();
      }
      else{
        continue;
      }
    }
  }

  static columnWinner(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i + 3] && arr[i + 3] == arr[i + 6]){
        winner = true;
        Main.whoWin(arr[i]);
        Main.declareWinner();
      }
      else{
        continue;
      }
    }
  }

  static tie(arr, win){
    if(win == false && (arr.every(elem => elem == "X" || elem == "O"))){
     let modal = document.querySelector(".tie-container");
      modal.style.display = "";
      Main.restartGame();
    }
    else if(win == true && (arr.every(elem => elem == "X" || elem == "O"))){
      console.log("Continue");
    }
  }

  static game(){
    let boardDOM = document.querySelectorAll("div.board > div.play");
    let boardArr = Main.createBoardArr();
    let playerOne = Main.playerOne();
    let playerTwo = Main.playerTwo();
    let winner = false;

    boardDOM.forEach((tile) => {
      tile.addEventListener("click", () => {
        for(let i = 0; i < boardArr.length; i++){
          if(tile.getAttribute("id") == boardArr[i] && playerOne.turn == true){
            boardArr[i] = playerOne.mark;
            console.log(boardArr);
            tile.textContent = playerOne.mark;
            playerOne.setTurn(false);
          }
          else if(tile.getAttribute("id") == boardArr[i] && playerOne.turn == false){
            boardArr[i] = playerTwo.mark;
            console.log(boardArr);
            tile.textContent = playerTwo.mark;
            tile.style.color = "red";
            playerOne.setTurn(true);
          }
          else if(winner == true){
            alert("We have a winner");
          }
          Main.firstDiagonal(boardArr);
          Main.secondDiagonal(boardArr);
          Main.rowWinner(boardArr);
          Main.columnWinner(boardArr);
          Main.tie(boardArr, winner);
        }
      })
    })
    return boardArr;
  }

  static restartGame(){
    let restartBtn = document.querySelector("#press-to-restart");
    restartBtn.addEventListener("click", () => {
      window.location.reload();
    })
  }

  static declareWinner(){
    let modal = document.querySelector(".winner-container");

    modal.style.display = "";
    Main.restartGame();
  }

  static whoWin(mark){
    let winnerDOM = document.querySelector("#winner");
    let playerOne = Main.playerOne();
    let playerTwo = Main.playerTwo();
    if(mark == "X"){
      winnerDOM.textContent = playerOne.name;
    }
    else if(mark == "O"){
      winnerDOM.textContent = playerTwo.name;
    }
  }
}

Main.TicTacToe();
