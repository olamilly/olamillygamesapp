<script setup>
  import { onMounted } from 'vue';
  let count=0;
  let currentPlayer="X";
  let m=[[0,0,0],[0,0,0],[0,0,0]];
  var boxList = document.querySelectorAll(".cell");
  //What the script does when each cell is clicked
  function boxOperation(){
    count=count+1;
    document.getElementById(this.id).innerHTML= currentPlayer;
    document.getElementById(this.id).removeEventListener("click", boxOperation);
    var x = Math.floor(this.id/10);
    var y = this.id%10;
    matrix(x,y);
    currentPlayer = (currentPlayer=="X")?"O":"X";
  }

  //function to update the matrix and check 
  function matrix(x,y){
    var winningRow=99;
    var arr = {"vertical":false, "horizontal":false, "diagonal":false} ;
    m[x][y] = (currentPlayer=="X")?1:2;
    //horizontal check
    for(var i=0; i<3; i++){
      if (m[i][0]!=0 && m[i][0]==m[i][1] && m[i][1]==m[i][2]){
          arr["horizontal"]=true;
          winningRow=i;
      }
    }
    //vertical check
    for(var i=0; i<3; i++){
      if (m[0][i]!=0 && m[0][i]==m[1][i] && m[1][i]==m[2][i]){
          arr["vertical"]=true;
          winningRow=i;
      }
    }
    //diagonal check
    if(m[0][0]!=0 && m[1][1]==m[0][0] && m[0][0]==m[2][2]){
      arr["diagonal"]=true;
      winningRow=4;
    }
    if (m[0][2]!=0 && m[1][1]==m[0][2] && m[2][0]==m[0][2]){
      arr["diagonal"]=true;;
      winningRow=5;
    }

    //if one of the checks is successful
    if(winningRow!=99){
      for (var key in arr){
        if (arr[key]==true){
          boxList.forEach(box => {
            box.removeEventListener('click', boxOperation);
          });
          selectBoxes(winningRow, key)
          break;
        }
      }
    }
    if (count==9 && winningRow==99){
      document.getElementById("comment").innerHTML="It's a tie";
      document.getElementById("resetBtn").style.display="block";
    }
  }

  //function to shade the boxes when the player wins
  function selectBoxes(winningRow, key){
    document.getElementById("comment").innerHTML=currentPlayer+" wins";
    document.getElementById("resetBtn").style.display="block";
    document.getElementById("homeBtn").style.display="block";
    
    if (key == "vertical"){
      for(var i=0; i<3; i++){
        var s = String(i)+String(winningRow);
        document.getElementById(s).style.color="red";
      }
    }
    if (key == "horizontal"){
      for(var i=0; i<3; i++){
        var s = String(winningRow)+String(i);
        document.getElementById(s).style.color="red";
      }
    }
    if (key == "diagonal"){
      if (winningRow == 4){
        document.getElementById("00").style.color="red";
        document.getElementById("11").style.color="red";
        document.getElementById("22").style.color="red";
      }
      if (winningRow == 5){
        document.getElementById("02").style.color="red";
        document.getElementById("11").style.color="red";
        document.getElementById("20").style.color="red";
      }
    }
  }

  //Restart Button Function
  
  function reset(){
    var boxList = document.querySelectorAll(".cell");
    boxList.forEach(box => {
      box.addEventListener('click', boxOperation);
      box.style.color="black";
      box.innerHTML="";
    });
    m=[[0,0,0],[0,0,0],[0,0,0]];
    currentPlayer="X";
    document.getElementById("comment").innerHTML="";
    document.getElementById("resetBtn").style.display="none";
    count=0;
    //or reload the document in the browser
    //location.reload();
  }
  onMounted(() => {
    //Listen for a click on each cell
    var boxList = document.querySelectorAll(".cell");
    boxList.forEach(box => {
      box.addEventListener('click', boxOperation);
    });
    document.getElementById("resetBtn").addEventListener("click", reset);
  })
</script>

<template>
  <div class="ticapp">
    <div class="tictacmain">
        <h1 style="font-size:3rem; font-weight:700;margin-bottom:1.5rem;"><span style="color: red;">X</span> & <span style="color:blue">O</span></h1>
        <div class="containery">
            <div class="row" id="topRow">
                <p class="cell" id="00"></p>
                <p class="cell" id="01"></p>
                <p class="cell" id="02"></p>
            </div>
            <div class="row" id="middleRow">
                <p class="cell" id="10"></p>
                <p class="cell" id="11"></p>
                <p class="cell" id="12"></p>
            </div>
            <div class="row" id="bottomRow">
                <p class="cell" id="20"></p>
                <p class="cell" id="21"></p>
                <p class="cell" id="22"></p>
            </div>
        </div>
    
        <div id="comment"></div>
        <div style="display: flex;justify-content: center;align-items: center;">
            <button id="resetBtn">Restart</button>
            <RouterLink to="/"><button  id="homeBtn">Home</button></RouterLink>
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
      #resetBtn, #homeBtn{
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
