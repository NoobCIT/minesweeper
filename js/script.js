$(document).ready(function() {

  //Variables
  var side = 9;
  var grid;
  var numMines;
  var value;

  //Create a board by arrays i is row and j is column
  function createBoard() {
    grid = [];
    for (var i = 0; i < side; i++) {
      grid.push([]);
      for (var j = 0; j < side; j++) {
        grid[i].push([i,j]);
      }
    }
  };

  //Create a class Square with property value, //value can be hidden, show, flag, mine
  function Square() {
    this.value = "hidden";
  };

  //Create square objects
  function createSquares() {
    for(var i = 0; i < side; i++) {
      for(var j = 0; j < side; j++) {
        grid[i][j] = new Square();
      }
    }
  };

  //Only renders hidden, flag, and show squares
  function renderHiddenFlagShow() {
    var renderedGrid = "";
    for (var i = 0; i < side; i++) {
      renderedGrid += "<div>";
      for (var j = 0; j < side; j++) {
        if (grid[i][j].value == "hidden") {
          renderedGrid += "<div class='hidden'></div>";
        }
        else if (grid[i][j].value == "flag") {
          renderedGrid += "<div class='flag'><img src='images/flag.png'></div>";
        }
        else {
          renderedGrid += "<div class='show'></div>";
        }
      }
      renderedGrid += "</div>";
    }
    $("#board").html(renderedGrid);
  };

  //renders everyting including mines
  function renderMines() {
    var renderedGrid = "";
    for (var i = 0; i < side; i++) {
      renderedGrid += "<div>";
      for (var j = 0; j < side; j++) {
        if (grid[i][j].value == "hidden") {
          renderedGrid += "<div class='hidden'></div>";
        }
        else if (grid[i][j].value == "mine") {
          renderedGrid += "<div class='mine'><img src='images/mine.png'></div>";
        }
        else if (grid[i][j].value == "flag") {
          renderedGrid += "<div class='flag'><img src='images/flag.png'></div>";
        }
        else {
          renderedGrid += "<div class='show'></div>";
        }
      }
      renderedGrid += "</div>";
    }
    $("#board").html(renderedGrid);
  };

  //Create board and square objects
  function intialize() {
    createBoard();
    createSquares();
    renderHiddenFlagShow();
    setMines();
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
      grid[x][y].value = "mine";
      numMines -= 1;
    }
  };

  //Check for clash in mines, don't put mine on top of mine
  function mineOnMine(x,y) {
    if (grid[x][y].value == "mine") {
      return true;
    }
  };

  //set flag
  function setFlag() {
    $('.hidden').on('click', function() {
      var element = grid[$(this).data('index')];

    })
    $('.hidden').on("click", function() {
    $('.hidden').mousedown(function(event) {
      switch (event.which) {
        case 2:
          if
      }
    })
    })
  }

intialize();

});
