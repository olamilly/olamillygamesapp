<template>
    <div class="wordlebody">
        
        
    <div style="height: 100%; width:100%;display: flex;flex-direction: column;justify-content: flex-start;align-items: center;">
        <RouterLink to="/" style="align-self: flex-start;padding:0px;padding-left:.5rem;padding-top:.5rem;"><i class='bx bx-arrow-back'  style="color:black;margin-top: .5rem;align-self: flex-start; font-size: 2rem;cursor:pointer" ></i></RouterLink>
        <h1>W<span style="color: #DABC45;">o</span>rdl<span style="color: #7BB677;">e</span></h1>
        <div class="table">
        <div class="row" id="0">
          <p class="column" id="00"></p>
          <p class="column" id="01"></p>
          <p class="column" id="02"></p>
          <p class="column" id="03"></p>
          <p class="column" id="04"></p>
        </div>
        <div class="row" id="1">
          <p class="column" id="10"></p>
          <p class="column" id="11"></p>
          <p class="column" id="12"></p>
          <p class="column" id="13"></p>
          <p class="column" id="14"></p>
        </div>
        <div class="row" id="2">
          <p class="column" id="20"></p>
          <p class="column" id="21"></p>
          <p class="column" id="22"></p>
          <p class="column" id="23"></p>
          <p class="column" id="24"></p>
        </div>
        <div class="row" id="3">
          <p class="column" id="30"></p>
          <p class="column" id="31"></p>
          <p class="column" id="32"></p>
          <p class="column" id="33"></p>
          <p class="column" id="34"></p>
        </div>
        <div class="row" id="4">
          <p class="column" id="40"></p>
          <p class="column" id="41"></p>
          <p class="column" id="42"></p>
          <p class="column" id="43"></p>
          <p class="column" id="44"></p>
        </div>
        <div class="row" id="5">
          <p class="column" id="50"></p>
          <p class="column" id="51"></p>
          <p class="column" id="52"></p>
          <p class="column" id="53"></p>
          <p class="column" id="54"></p>
        </div>
      </div>
      <div class="keyboard">
        <div class="keyRow"><p class="key" id="Q">Q</p><p class="key" id="W">W</p><p class="key" id="E">E</p>
          <p class="key" id="R">R</p><p class="key" id="T">T</p><p class="key" id="Y">Y</p><p class="key" id="U">U</p><p class="key" id="I">I</p><p class="key" id="O">O</p><p class="key" id="P">P</p>
        </div>
        <div class="keyRow"><p class="key" id="A">A</p><p class="key" id="S">S</p><p class="key" id="D">D</p><p class="key" id="F">F</p><p class="key" id="G">G</p><p class="key" id="H">H</p><p class="key" id="J">J</p><p class="key" id="K">K</p><p class="key" id="L">L</p>
        </div>
        <div class="keyRow"><p class="key" id="Enter">Enter</p><p class="key" id="Z">Z</p><p class="key" id="X">X</p><p class="key" id="C">C</p><p class="key" id="V">V</p><p class="key" id="B">B</p><p class="key" id="N">N</p><p class="key" id="M">M</p><p class="key" id="Delete"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
<g>
  <g>
    <g>
      <path d="M490.667,64H133.077c-7.196,0-13.906,3.627-17.848,9.647L3.485,244.314c-4.647,7.098-4.647,16.274,0,23.372     l111.744,170.667c3.942,6.02,10.652,9.647,17.848,9.647h357.589c11.782,0,21.333-9.551,21.333-21.333V85.333     C512,73.551,502.449,64,490.667,64z M469.333,405.333H144.609L46.833,256l97.776-149.333h324.725V405.333z"/>
      <path d="M198.246,356.418c8.331,8.331,21.839,8.331,30.17,0l70.248-70.248l70.248,70.248c8.331,8.331,21.839,8.331,30.17,0     s8.331-21.839,0-30.17L328.834,256l70.248-70.248c8.331-8.331,8.331-21.839,0-30.17s-21.839-8.331-30.17,0l-70.248,70.248     l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L268.495,256l-70.248,70.248     C189.915,334.58,189.915,348.087,198.246,356.418z"/>
    </g>
  </g>
</g>
</svg></p>
        </div>
      </div>
    </div>
      
<!-- Button trigger modal -->
<button type="button" id="mBn"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="display: none;"  >
  Launch demo modal
</button>

<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="text-align: center;">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="text-align: center; width: 100%;">CONGRATULATIONS</h5>
            
          </div>
          <div class="modal-body" >
            <p id="wol"> YOU WON </p>
            <p id="tdw">THE WORDLE WAS <span></span>.</p>
          </div>
          <div class="modal-footer">
            <button type="button" style="color: white;" id=clz class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" id=restart @click="initializeGame()" class="btn" style="color:white; background-color: #7BB677;">Play Again</button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<style scoped>
*{
        color:black;
        
        box-sizing: border-box;
      }
      .wordlebody{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        height: 100%;
      }
      .row{
        display: flex;
        justify-content: space-around;
        margin:.15rem;
        width:85%;
      }
      .keyRow{
        display: flex;
        justify-content: center;
      }
      h1{
        font-size: 60px;
        margin: 0;
      }
      .keyRow>p{
        background-color: lightgrey;
        padding:.5rem;
        margin:.15rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 700;
      }
      .column{
        border:2px solid lightgrey;
        height:53px;
        width:55px;
       
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
        font-size: 30px;
      }
      .table{
        max-width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      


</style>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
var currentRow=0;
var currentColumn=0;
var currentString=""
var todaysWordle
var g=0
const keyList = document.querySelectorAll(".key");


async function getRandomWord() {
const response = await fetch(`https://api.datamuse.com/words?sp=?????`);
const data = await response.json();
  if (data.length > 0) {
    // Filter words without spaces or special characters using regular expression
  const validWords = data.filter(word => /^[a-zA-Z]+$/.test(word.word));

  // Return a random valid word (adjust as needed)
  return validWords[Math.floor(Math.random() * validWords.length)].word;
  } else {
    throw new Error("Unable to get wordle.");
  }
}


const API_URL2 = "https://api.dictionaryapi.dev/api/v2/entries/en/"
async function isValidWord(word) {
  const response = await fetch(`${API_URL2}${word}`);
  const data = await response.json();
  //return Array.isArray(data) && data.length!=20;
  return Array.isArray(data);
}
function enterOperation(a){
  if(a){
    var temp=todaysWordle;
    for(var i=0; i<5; i++){
      if (temp.includes(currentString[i])){
        if(temp[i]==currentString[i]){
          document.getElementById(currentString[i]).style.backgroundColor="#7BB677";
          document.getElementById(currentString[i]).classList.add('inactive');
          var pos = String(currentRow)+String(i);
          document.getElementById(pos).style.backgroundColor="#7BB677";
          g=g+1;
        }
        else{
          if(document.getElementById(currentString[i]).classList.length ==1){
            document.getElementById(currentString[i]).style.backgroundColor="#DABC45";
            document.getElementById(currentString[i]).classList.add('inactive');
          }
          var pos = String(currentRow)+String(i);
          document.getElementById(pos).style.backgroundColor="#DABC45";
        }
        temp= temp.replace(currentString[i], "-");
      }
      else{
        if(document.getElementById(currentString[i]).classList.length ==1){
          document.getElementById(currentString[i]).style.backgroundColor="grey";
        }
        var pos = String(currentRow)+String(i);
        document.getElementById(pos).style.backgroundColor="grey";
      }
    }

  }
  else{
    for(var j=0; j<5; j++){
      var b=String(currentRow)+String(j);
      document.getElementById(b).innerHTML="";
    }
    alert(currentString+" is not a Valid word in the English Dictionary");
    currentString="";
    currentColumn=0;
    currentRow=currentRow-1;
  }
  if(g==5){
    document.querySelector("h5").innerHTML="CONGRATULATIONS";
    document.querySelector("#wol").innerHTML="YOU WON 🎉";
    document.querySelector("#tdw").innerHTML="THE WORDLE WAS "+todaysWordle;
    document.getElementById("mBn").click();
    const keyList = document.querySelectorAll(".key");
    for(var i=0; i<28; i++) {
      keyList[i].style.pointerEvents="none";
    }
  }
  currentString="";
  currentRow=currentRow+1;
  if(currentRow>5 && g!=5){
    document.querySelector("h5").innerHTML="GAME OVER";
    document.querySelector("#wol").innerHTML="YOU LOST 😢";
    document.querySelector("#tdw").innerHTML="Sorry, today's wordle was "+todaysWordle;
    document.getElementById("mBn").click();
  }
  currentColumn=0;
  g=0;
}
//What the script does when each key cell is clicked
function type(a){
    
    if(currentRow<=5){
        if (a!="Enter" && a!="Delete"){
      if (currentColumn<=4){
        var c=String(currentRow)+String(currentColumn);
        document.getElementById(c).innerHTML=a;
        currentString=currentString+a;
        currentColumn=currentColumn+1;
      }
    }
    if(a=="Enter"){
        
      if (currentColumn==5){
        document.getElementById(a).style.pointerEvents="none";
        isValidWord(currentString)
          .then((isValid) => { 
              enterOperation(isValid);
              document.getElementById(a).style.pointerEvents="auto"; 
          })
          .catch((error) => alert("Network Error"));
      }   
    }
    if (a=="Delete"){
      if (currentColumn>0){
        currentColumn=currentColumn-1;
        var c=String(currentRow)+String(currentColumn);
        var v=document.getElementById(c).innerHTML;
        currentString=currentString.slice(0,currentColumn);
        document.getElementById(c).innerHTML="";
      }  
    }
    }
    
}
function initializeGame(){
    currentRow=0;
  currentColumn=0;
  currentString="";
  g=0;
  getRandomWord()
    .then((word) => todaysWordle = word.toUpperCase())
    .catch((error) => alert(error));

    const keyList = document.querySelectorAll(".key");
  for(var i=0; i<28; i++) {
      keyList[i].style.pointerEvents="auto";
      keyList[i].classList.remove("inactive");
      keyList[i].style.backgroundColor="lightgray";
    }
  var bl=document.querySelectorAll('.column');
  bl.forEach(box => {
        box.innerHTML="";
        box.style.backgroundColor="white";
  });
  document.getElementById("clz").click()
  
}

onMounted(() => {
    getRandomWord()
  .then((word) => {
    todaysWordle = word.toUpperCase()
    
  })
  .catch((error) => alert("Network Error"));
  const keyList = document.querySelectorAll(".key");
  for(var i=0; i<28; i++) {
        keyList[i].addEventListener("click", function b(){type(this.id)});
    }
})

onBeforeUnmount(()=>{
    initializeGame()
})
</script>