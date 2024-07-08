<script setup>
  import { onMounted } from 'vue';
  var board = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

var HUMAN = -1;
var COMP = +1;

var whoStarts=1;

/* Function to heuristic evaluation of state. */
function evalute(state) {
	var score = 0;

	if (gameOver(state, COMP)) {
		score = +1;
	}
	else if (gameOver(state, HUMAN)) {
		score = -1;
	} else {
		score = 0;
	}

	return score;
}

/* This function tests if a specific player wins */
function gameOver(state, player) {
	var win_state = [
		[state[0][0], state[0][1], state[0][2]],
		[state[1][0], state[1][1], state[1][2]],
		[state[2][0], state[2][1], state[2][2]],
		[state[0][0], state[1][0], state[2][0]],
		[state[0][1], state[1][1], state[2][1]],
		[state[0][2], state[1][2], state[2][2]],
		[state[0][0], state[1][1], state[2][2]],
		[state[2][0], state[1][1], state[0][2]],
	];

	for (var i = 0; i < 8; i++) {
		var line = win_state[i];
		var filled = 0;
		for (var j = 0; j < 3; j++) {
			if (line[j] == player)
				filled++;
		}
		if (filled == 3)
			return true;
	}
	return false;
}

/* This function test if the human or computer wins */
function gameOverAll(state) {
	return gameOver(state, HUMAN) || gameOver(state, COMP);
}

function emptyCells(state) {
	var cells = [];
	for (var x = 0; x < 3; x++) {
		for (var y = 0; y < 3; y++) {
			if (state[x][y] == 0)
				cells.push([x, y]);
		}
	}

	return cells;
}

/* A move is valid if the chosen cell is empty */
function validMove(x, y) {
	var empties = emptyCells(board);
	try {
		if (board[x][y] == 0) {
			return true;
		}
		else {
			return false;
		}
	} catch (e) {
		return false;
	}
}

/* Set the move on board, if the coordinates are valid */
function setMove(x, y, player) {
	if (validMove(x, y)) {
		board[x][y] = player;
		return true;
	}
	else {
		return false;
	}
}


function minimax(state, depth, player) {
	var best;

	if (player == COMP) {
		best = [-1, -1, -1000];
	}
	else {
		best = [-1, -1, +1000];
	}

	if (depth == 0 || gameOverAll(state)) {
		var score = evalute(state);
		return [-1, -1, score];
	}

	emptyCells(state).forEach(function (cell) {
		var x = cell[0];
		var y = cell[1];
		state[x][y] = player;
		var score = minimax(state, depth - 1, -player);
		state[x][y] = 0;
		score[0] = x;
		score[1] = y;

		if (player == COMP) {
			if (score[2] > best[2])
				best = score;
		}
		else {
			if (score[2] < best[2])
				best = score;
		}
	});

	return best;
}

/* It calls the minimax function */
function aiTurn() {
	var x, y;
	var move;
	var cell;

	if (emptyCells(board).length == 9) {
		x = parseInt(Math.random() * 3);
		y = parseInt(Math.random() * 3);
	}
	else {
		move = minimax(board, emptyCells(board).length, COMP);
		x = move[0];
		y = move[1];
	}

	if (setMove(x, y, COMP)) {
		cell = document.getElementById(String(x) + String(y));
    if(whoStarts==1){
      cell.innerHTML = "O";
    }
    else{
      cell.innerHTML = "X";
    }
	}
}

/* main */
function clickedCell(cell) {
	var button = document.getElementById("resetBtn");
	var conditionToContinue = gameOverAll(board) == false && emptyCells(board).length > 0;
	if (conditionToContinue == true) {
		var x = cell.id.split("")[0];
		var y = cell.id.split("")[1];
		var move = setMove(x, y, HUMAN);
		if (move == true) {
      if(whoStarts==1){
        cell.innerHTML = "X";
      }
			else{
        cell.innerHTML = "O";
      }
      if (conditionToContinue)
				aiTurn();
        
		}
	}
	if (gameOver(board, COMP)) {
		var lines;
		var cell;
		var msg;

		if (board[0][0] == 1 && board[0][1] == 1 && board[0][2] == 1)
			lines = [[0, 0], [0, 1], [0, 2]];
		else if (board[1][0] == 1 && board[1][1] == 1 && board[1][2] == 1)
			lines = [[1, 0], [1, 1], [1, 2]];
		else if (board[2][0] == 1 && board[2][1] == 1 && board[2][2] == 1)
			lines = [[2, 0], [2, 1], [2, 2]];
		else if (board[0][0] == 1 && board[1][0] == 1 && board[2][0] == 1)
			lines = [[0, 0], [1, 0], [2, 0]];
		else if (board[0][1] == 1 && board[1][1] == 1 && board[2][1] == 1)
			lines = [[0, 1], [1, 1], [2, 1]];
		else if (board[0][2] == 1 && board[1][2] == 1 && board[2][2] == 1)
			lines = [[0, 2], [1, 2], [2, 2]];
		else if (board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1)
			lines = [[0, 0], [1, 1], [2, 2]];
		else if (board[2][0] == 1 && board[1][1] == 1 && board[0][2] == 1)
			lines = [[2, 0], [1, 1], [0, 2]];

		for (var i = 0; i < lines.length; i++) {
			cell = document.getElementById(String(lines[i][0]) + String(lines[i][1]));
			cell.style.color = "red";
		}

		msg = document.getElementById("comment");
		msg.innerHTML = "You lose!";
	}
	if (emptyCells(board).length == 0 && !gameOverAll(board)) {
		var msg = document.getElementById("comment");
		msg.innerHTML = "Draw!";
	}
	if (gameOverAll(board) == true || emptyCells(board).length == 0) {
		button.value = "Restart";
		button.style.display="block";
	}
}

/* Restart the game*/
function restartBnt(button) {
	if (button.value == "Restart") {
		var htmlBoard;
		var msg;
		whoStarts=1;
		for (var x = 0; x < 3; x++) {
			for (var y = 0; y < 3; y++) {
				board[x][y] = 0;
				htmlBoard = document.getElementById(String(x) + String(y));
				htmlBoard.style.color = "black";
				htmlBoard.innerHTML = "";
			}
		}
    button.style.display="none";
		msg = document.getElementById("comment");
		msg.innerHTML = "";
    document.getElementById("mBn").click();
	}
}
    
  onMounted(() => {
    document.getElementById("mBn").click();
  })
</script>

<template>
  <div class="ticapp">
    <RouterLink to="/tictactoe" style="align-self: flex-start;padding:0px;padding-left:.5rem;padding-top:.5rem;margin-left: -30px;margin-top: -30px;"><i class='bx bx-arrow-back'  style="color:black;margin-top: .5rem;align-self: flex-start; font-size: 2rem;cursor:pointer" ></i></RouterLink>
    <div class="tictacmain">
        
        <div class="containery">
            <div class="row" id="topRow">
                <p class="cell" id="00" @click="clickedCell($event.target)"></p>
                <p class="cell" id="01" @click="clickedCell($event.target)"></p>
                <p class="cell" id="02" @click="clickedCell($event.target)"></p>
            </div>
            <div class="row" id="middleRow">
                <p class="cell" id="10" @click="clickedCell($event.target)"></p>
                <p class="cell" id="11" @click="clickedCell($event.target)"></p>
                <p class="cell" id="12" @click="clickedCell($event.target)"></p>
            </div>
            <div class="row" id="bottomRow">
                <p class="cell" id="20" @click="clickedCell($event.target)"></p>
                <p class="cell" id="21" @click="clickedCell($event.target)"></p>
                <p class="cell" id="22" @click="clickedCell($event.target)"></p>
            </div>
        </div>
    
        <div id="comment"></div>
        <div style="display: flex;justify-content: center;align-items: center;">
            <button id="resetBtn" @click="restartBnt($event.target)">Restart</button>
        </div>
        <!-- Button trigger modal -->
        <button type="button" id="mBn"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="display: none;"  >
        Launch modal
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style="text-align: center;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" style="text-align: center; width: 100%;">WHO PLAYS FIRST?</h5>
                        
                    </div>
                    <div class="modal-body" >
                        <button data-bs-dismiss="modal" class="startOptions">
                          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </button>
                        <button data-bs-dismiss="modal" class="startOptions" @click="()=>{whoStarts=5; aiTurn()}"><svg width="50px" height="50px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>ai</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="icon" fill="#000000" transform="translate(64.000000, 64.000000)">
                                    <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape">

                                    </path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <RouterLink to="/tictactoe"><button type="button" style="color: white;" id=clz class="btn btn-secondary" data-bs-dismiss="modal" >Exit</button></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    
    
</template>

<style scoped>

.ticapp{ 
  min-height: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%
}
      .tictacmain{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:100%;
       
      }
      *{
        color:black;
      }
      .row{
        display: flex;
      }
      .cell{
        width:4rem;
        height:4rem;
        border:3px solid black;
        font-size: 2.5rem;
        padding-bottom:1rem;
        text-align: center;
        margin:.3rem;
        font-weight: 700;
        border-radius: .4rem;
      }
      #resetBtn, .startOptions{
        margin: 1rem;
        box-shadow: 2px 2px dimgray;
        padding: .5rem;
        border-radius: 5px;
        margin-top:0px;
      }
      #resetBtn{
        display: none;
      }
      #comment{
        margin: 1rem;
      }
.cell:hover{
  cursor:pointer;
}
button {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }

</style>
