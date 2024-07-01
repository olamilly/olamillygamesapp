<template>
    <div class="main">
      <h1>Word Hunt</h1>
      <h3 style="margin-top: 0; margin-bottom: 1rem;">Computer Terminology Word Search</h3>
      <div class="grid" id="grid" 
      @mousedown="startSelect($event)"
      @touchstart="startTouchSelect($event)"
      @mouseup="endSelect()"
      @touchend="endTouchSelect()"
      @mousemove="duringSelect($event)"
      @touchmove="duringTouchSelect($event)">
        <div class="cell" v-for="(character, index) in wordGrid" :id="String(index)" :key="index" >{{ character }}</div>
      </div>
      <div id="wordBox">
        <h3 v-if="boxWords.length>0" style="margin-top: .7rem;">Remaining Words: <span style="color: yellow;">{{ boxWords.length }}</span></h3>
        <h3 v-if="boxWords.length==0" >Congratulations!</h3>
        <h3 v-if="boxWords.length==0" >You Won</h3>
        <button v-if="boxWords.length==0" @touchstart="initializeGame()" @click="initializeGame()" class="small"> PLAY AGAIN </button>
        <div style="display: flex;justify-content: space-evenly;flex-wrap: wrap;"><p v-for="(word, index) in boxWords" :key="index">{{ word }}</p></div>
      </div>
      <div id="CNav" class="overlay1" @touchend="closeNav()">
        <a  class="closebtn"  @click="closeNav()">&times;</a>
        <div class="overlay-content1">
            <div>
                <h1 style="font-size: 3.5rem;">YOU WON!</h1>
                <p>Well Done 🎉</p>
            </div>
            
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                <button @touchstart="initializeGame()" @click="initializeGame()" class="large"> PLAY AGAIN </button>
                <RouterLink to="/"><button  class="small s9"> Home </button></RouterLink>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import WordSearch from "@blex41/word-search"
  export default {
    data() {
      return {
        arr : [],
        wordGrid:"",
        boxWords:[],
        cells : [],
        isSelecting : false,
        startCellIndex : null,
        selectedCells : []
      }
    },
    methods:{
      initializeGame(){
        this.closeNav()
        this.arr = []
        this.wordGrid=""
        this.boxWords=[]
        this.cells=[]
        this.isSelecting=false
        this.startCellIndex=null
        this.selectedCells = []
        //get 10 random numbers between 1 and 100
        do {
        let num = Math.floor(Math.random() * 70 + 1);
        this.arr.push(num);
        this.arr = this.arr.filter((item, index) => {
            return this.arr.indexOf(item) === index
        });
        } while (this.arr.length < 10);
  
        //use the 10 numbers to get 10 random words from the api
        //feed the 10 words from the API into the word search generator function to create the grid
        this.getRandomWords().then((wordsFromAPI)=>{
          //const WordSearch = require("@blex41/word-search");
          
          const options = {
            dictionary: wordsFromAPI,
            disabledDirections: ["N", "W", "NW", "SW","NE","SE"],
            maxWords: 10,
            backwardsProbability: 0,
            upperCase: true
          };
          //word search generator function call
          const ws = new WordSearch(options);
          this.wordGrid=ws.toString();
          var tempwg="" //temporary word grid
          for (var i =0; i<this.wordGrid.length; i++){
            if(this.wordGrid.charCodeAt(i)>=65 && this.wordGrid.charCodeAt(i)<=90){
              tempwg=tempwg+this.wordGrid[i]
            }
          }
          this.wordGrid=tempwg
          ws.words.forEach(i=>{
            this.boxWords.push(i.clean)
          })
          //console.log(this.wordGrid, this.boxWords)
          this.cells=Array.from(document.querySelectorAll('.cell'))
        })
        document.querySelector("#wordBox").style.display="block"
      },
      closeNav(){
        document.getElementById("CNav").style.height="0%";
      },
      async getRandomWords(){
        var finalWords=[]
        const response = await fetch("https://api.datamuse.com/words?rel_trg=computer");
        const data = await response.json();
        if (data.length > 0) {
            for (var i=0; i<10; i++){
                finalWords.push(data[this.arr[i]].word.toUpperCase())
            }
            return finalWords;
        } else {
            throw new Error("Network Error");
        }
      },
      startSelect(e){
        this.isSelecting = true;
        this.startCellIndex = this.getCellIndex(e.target);
        this.highlightCell(e.target);
        this.selectedCells = [e.target];
      },
      endSelect(){
        this.stopSelect()
      },
      duringSelect(e){
        if (this.isSelecting) {
          this.handleSelection(e.target);
        }
      },
      startTouchSelect(e){
        document.documentElement.style.overflow = 'hidden';
        this.isSelecting = true;
        const touch = e.touches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        this.startCellIndex = this.getCellIndex(targetElement);
        this.highlightCell(targetElement);
        this.selectedCells = [targetElement];
      },
      endTouchSelect(){
        this.stopSelect()
        document.documentElement.style.overflow = 'auto';
      },
      duringTouchSelect(e){
        if (this.isSelecting) {
            const touch = e.touches[0];
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
            this.handleSelection(targetElement);
        }
      },
      stopSelect(){
        this.isSelecting = false;
        if (this.selectedCells.length > 1) {
            const selectedWord = this.selectedCells.map(cell => cell.textContent).join('');
            //console.log('Selected word:', selectedWord);
            if(this.boxWords.includes(selectedWord)){
              this.selectedCells.forEach(i=>{
                document.getElementById(String(i.id)).classList.add("found")
              })
              this.boxWords.splice(this.boxWords.indexOf(selectedWord), 1);
            }
        }
        if(this.boxWords.length==0){
          document.getElementById("CNav").style.height="100%"
        }
        this.clearHighlights();
        this.startCellIndex = null;
        this.selectedCells = [];
      },
      handleSelection(e){
        if (this.isSelecting && this.startCellIndex !== null) {
            const currentCellIndex = this.getCellIndex(e);
            if (currentCellIndex !== null) {
                const startRow = Math.floor(this.startCellIndex / 10);
                const currentRow = Math.floor(currentCellIndex / 10);
                const startColumn = this.startCellIndex % 10;
                const currentColumn = currentCellIndex % 10;
  
                if (startColumn === currentColumn) {
                    // Vertical selection
                    this.selectedCells = this.highlightColumn(startColumn, startRow, currentRow);
                } else if (startRow === currentRow) {
                    // Horizontal selection
                    this.selectedCells = this.highlightRow(startRow, startColumn, currentColumn);
                }
            }
        }
      },
      getCellIndex(cell){
        var cellsArray=Array.from(document.querySelectorAll('.cell'))
        return cellsArray.indexOf(cell);
      },
      highlightCell(cell){
        cell.style.color="yellow";
      },
      clearHighlights(){
        Array.from(document.querySelectorAll('.cell')).forEach(cell => {
          if (!cell.classList.contains("found")){
            cell.style.color = 'white'
          }
          else{
            cell.style.color="green"
          }
        });
      },
      highlightColumn(column, startRow, currentRow){
        this.clearHighlights();
        const selected = [];
        const minRow = Math.min(startRow, currentRow);
        const maxRow = Math.max(startRow, currentRow);
        for (let row = minRow; row <= maxRow; row++) {
            const cell = Array.from(document.querySelectorAll('.cell'))[row * 10 + column];
            this.highlightCell(cell);
            selected.push(cell);
        }
        return selected;
      },
      highlightRow(row, startColumn, currentColumn){
        this.clearHighlights();
        const selected = [];
        const minColumn = Math.min(startColumn, currentColumn);
        const maxColumn = Math.max(startColumn, currentColumn);
        for (let column = minColumn; column <= maxColumn; column++) {
            const cell = Array.from(document.querySelectorAll('.cell'))[row * 10 + column];
            this.highlightCell(cell);
            selected.push(cell);
        }
        return selected;
      }
    },
    
    mounted(){
      this.initializeGame()
      document.querySelector(".main").style.display="flex"
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #wordBox{
    display: none;
  }
  *{
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    color: #cfcfcf;
  }
  .main{
    display: none;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    border:2px solid white;
    border-radius:2rem;
    width:60%;
    padding:.5rem;
  }
  h1{
    margin-top:0px;
  }
  h3{
    margin-top: 1.5rem;
    margin-bottom: 0px;
  }
  p{
    padding-left: .5rem;
    padding-right: .5rem;
    
  }
  .cell{
    font-weight: 700px;
    font-size: 1rem;
    user-select: none;
    text-align: center;
    padding: .25rem;
    cursor: pointer;
    border-radius: .4rem;
  }
  .cell:hover{
    background-color: rgb(168, 168, 168);
  }
  .overlay1 {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */   
    height: 0%;
    width: 100%;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2c2b2b;
    opacity:0.9;
    overflow-y: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  }
  
  /* Position the content inside the overlay */
  .overlay-content1 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width:20rem; 
    height: 100%;
    text-align: center; /* Centered text/links */
    
  }
  .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
    cursor: pointer;
  }
  
  button{
      width:60%;
      text-align: center;
  }
  
  /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
  @media screen and (max-height: 450px) {
    .overlay1 a {font-size: 20px}
    .overlay1 .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
  @media screen and (min-width: 600px) {
    .grid{
      min-width:450px;
    }
  }
  @media screen and (max-width: 592px) {
    .grid{
      width:80%;
    }
  }
  @media screen and (max-width: 432px) {
    .grid{
      width:100%;
    }
  }
  @media screen and (max-width: 336px) {
    .cell{
      font-size:0.65rem;
    }
  }
  button{
    outline: none;
    border: 3px solid yellow;
    background-color: rgb(179, 185, 18);
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    color:black;
  }
  .small{
    font-size:.5rem;
    font-weight: 700;
    margin: 0px;
    width:105px;
    height:40px;
    margin-top: 1rem;
  }
  .s9{
    font-size:1rem;
  }
  .large{
    width:197px;
    height:55px;
    padding:0;
  }
  </style>