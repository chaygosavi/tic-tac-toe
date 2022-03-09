const boxes = document.querySelectorAll(".box");
const info = document.querySelector(".info");
const gameOver = new Audio("gameover.mp3");

let ting = new Audio("ting.mp3");

let turn = "X";

const changeTurn = () => {
  return turn == "X" ? "O" : "X";
};

const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((ele) => {
    if (
      boxes[ele[0]].textContent === boxes[ele[1]].textContent &&
      boxes[ele[1]].textContent === boxes[ele[2]].textContent &&
      boxes[ele[0]].textContent !== ""
    ) {
      info.style.display = "none";
      document.querySelector(".start").innerText = `${
        boxes[ele[0]].textContent
      } WON !!`;
      gameOver.play();
      document.querySelector(".img-box > img").style.width = "90px";
      restart();
    }
  });
};

let count = 0;

boxes.forEach((ele) => {
  ele.addEventListener("click", () => {
    document.querySelector(".start").innerText = "May the best win !!";
    if (ele.innerText === "") {
      ting.play();
      ele.innerText = turn;
      turn = changeTurn();
      info.innerText = `Turn for ${turn}`;
      checkWin();
      count++;
    }
    if (count === 9) {
      restart();
    }
  });
});

function restart() {
  setTimeout(function () {
    location.reload();
  }, 900);
}
