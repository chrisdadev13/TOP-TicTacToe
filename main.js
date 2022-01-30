const startContainer = document.querySelector(".start-container");
const startButton = document.querySelector(".start-button");
const playOption = document.querySelector(".play-option");
const boardContainer = document.querySelector(".board-container");

startButton.addEventListener("click", () => {
  startContainer.style.display = "none";
  boardContainer.style.display = ""; 
});

let boardArr = [];

const gameBoard = (() => {
  
  let tiles = document.querySelectorAll("div.board > div.play");

  const createBoard = () => {
    tiles.forEach((tile) => {
      boardArr.push(tile.getAttribute("id"));
    })
    return boardArr;
  }
  
  createBoard();
  
  return { tiles }
})();

const Player = (name, mark) => {
  let getName = () => name;
  let getMark = () => mark;

  const display = () => {
    let value = "";
    gameBoard.tiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        value = tile.getAttribute("id");
      })
    })
    return value;
  }

  return { getName, getMark, display };
}

let pedro = Player("Pedro", "X");
pedro.modifyArr();
