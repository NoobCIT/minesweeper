$(document).ready(function() {

  //Variables
  var side = 9;
  var grid;
  var numMines;
  var initValue;
  var initValueIndex = 2;
  var renderedGrid;

  //Create a board by arrays i is row and j is column
  function createBoard() {
    grid = [];
    initValue = "hidden";
    for (var i = 0; i < side; i++) {
      grid.push([]);
      for (var j = 0; j < side; j++) {
        grid[i].push([i, j, initValue]);
      }
    }
  };

  //Only renders hidden, flag, and show squares
  function renderHiddenFlagShow() {
    renderedGrid = "";
    for (var i = 0; i < side; i++) {
      renderedGrid += "<div>";
      for (var j = 0; j < side; j++) {
        if (grid[i][j][initValueIndex] == "hidden") {
          renderedGrid += `<div class='hidden' value='hidden' id=${"id" + i + j }></div>`;
        }
        else if (grid[i][j][initValueIndex] == "flag") {
          renderedGrid += "<div class='flag' value='flag'><img src='images/flag.png'></div>";
        }
        else {
          renderedGrid += "<div class='show' value='show'></div>";
        }
      }
      renderedGrid += "</div>";
    }
    $("#board").html(renderedGrid);
  };

  function updateBoard() {
    for (var i = 0; i < side; i++) {
      for (var j = 0; j < side; j++) {
        var elem = "id" + i + j
        if (document.getElementById(elem).getAttribute("value") == "flag") {
          document.getElementById(elem).innerHTML =
          "<div class='flag' value='flag'><img src='images/flag.png'></div>"
        }
        else if (document.getElementById(elem).getAttribute("value") == "mine") {
          document.getElementById(elem).innerHTML =
          "<div class='mine' value='mine'><img src='images/mine.png'></div>"
        }
        else if (document.getElementById(elem).getAttribute("value") == "show") {
          document.getElementById(elem).innerHTML =
          "<div class='show' value='show'></div>"
        }
      }
    }
  };



  //renders everyting including mines
  function renderMines() {
    renderedGrid = "";
    for (var i = 0; i < side; i++) {
      renderedGrid += "<div>";
      for (var j = 0; j < side; j++) {
        if (grid[i][j][initValueIndex] == "hidden") {
          renderedGrid += "<div class='hidden' value='hidden'></div>";
        }
        else if (grid[i][j][initValueIndex] == "mine") {
          renderedGrid += "<div class='mine' value='mine'><img src='images/mine.png'></div>";
        }
        else if (grid[i][j][initValueIndex] == "flag") {
          renderedGrid += "<div class='flag' value='flag'><img src='images/flag.png'></div>";
        }
        else {
          renderedGrid += "<div class='show' value='show'></div>";
        }
      }
      renderedGrid += "</div>";
    }
    $("#board").html(renderedGrid);
  };

  //Create board and square objects
  function initialize() {
    createBoard();
    renderHiddenFlagShow();
    setMines();
    renderMines();
  };

  //Generate a random number used to set mines
  function randomNumber() {
    var number = Math.floor(Math.random() * side);
    return number;
  };

  //Set mines in random location
  function setMines() {
    numMines = side + 1;
    while (numMines > 0) {
      x = randomNumber();
      y = randomNumber();
      while (mineOnMine(x,y)) {
        x = randomNumber();
        y = randomNumber();
      }
      grid[x][y][initValueIndex] = "mine";
      numMines -= 1;
    }
  };

  //Check for clash in mines, don't put mine on top of mine
  function mineOnMine(x,y) {
    if (grid[x][y][initValueIndex] == "mine") {
      return true;
    }
  };

  //set flag
  function setFlag() {

  };

  //set numbers
  function setNumbers() {
    for (var i = 0; i < side; i++) {
      for (var j = 0; j < side; j++) {
        if (grid[i][j][initValueIndex] == 1 ) {
        }
      }
    }
  };

  function minesPresent() {

  }

  function numMinesTouching(i,j) {
    var x = grid[i][j][1];
    var y = grid[i][j][0];
    var counter = 0;
    var possible_outcomes = [[y-1,x-1],[y-1,x],[y-1,x+1],[y,x-1],[y,x+1],[y+1,x-1],[y+1,x],[y+1,x+1]];
    for (var i = 0; i < possible_outcomes.length; i++) {
      var y_outcome = grid[possible_outcomes[i][0]];
      var x_outcome = grid[possible_outcomes[i][1]];
      if (onGrid(y_outcome, x_outcome)) {
        coordinate = grid[y_outcome][x_outcome][initValueIndex];
        if (coordinate == "mine") {
          counter +=1;
        }
      }
    }
    grid[y][x][initValueIndex] = counter.toString();
  };

  function onGrid(y,x) {
    if (x >= 0 || x <= side || y >= 0 || y >= side) {
      return true;
    }
    else {
      return false;
    }
  };

initialize();

});
