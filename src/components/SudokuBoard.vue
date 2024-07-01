<template>
  <div class="main" >
    <div class="gridContainer" @touchstart="touchPuzzle($event)">
        <div class="grid" id="grid">
            <div class="cell B1" @click="touchPuzzle($event)" id="00">1</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="01">2</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="02">3</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="10">4</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="11">5</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="12">6</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="20">7</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="21">8</div>
            <div class="cell B1" @click="touchPuzzle($event)" id="22">9</div>
        </div>
        <div class="grid" id="grid">
            <div class="cell B2" @click="touchPuzzle($event)" id="03">1</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="04">2</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="05">3</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="13">4</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="14">5</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="15">6</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="23">7</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="24">8</div>
            <div class="cell B2" @click="touchPuzzle($event)" id="25">9</div>
        </div>
        <div class="grid" id="grid">
            <div class="cell B3" @click="touchPuzzle($event)" id="06">1</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="07">2</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="08">3</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="16">4</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="17">5</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="18">6</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="26">7</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="27">8</div>
            <div class="cell B3" @click="touchPuzzle($event)" id="28">9</div>
        </div>

        <div class="grid" id="grid">
            <div class="cell B4" @click="touchPuzzle($event)" id="30">1</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="31">2</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="32">3</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="40">4</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="41">5</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="42">6</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="50">7</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="51">8</div>
            <div class="cell B4" @click="touchPuzzle($event)" id="52">9</div>
        </div>

        <div class="grid" id="grid">
            <div class="cell B5" @click="touchPuzzle($event)" id="33">1</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="34">2</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="35">3</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="43">4</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="44">5</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="45">6</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="53">7</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="54">8</div>
            <div class="cell B5" @click="touchPuzzle($event)" id="55">9</div>
        </div>

        <div class="grid" id="grid">
            <div class="cell B6" @click="touchPuzzle($event)" id="36">1</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="37">2</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="38">3</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="46">4</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="47">5</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="48">6</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="56">7</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="57">8</div>
            <div class="cell B6" @click="touchPuzzle($event)" id="58">9</div>
        </div>

        <div class="grid" id="grid">
            <div class="cell B7" @click="touchPuzzle($event)" id="60">1</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="61">2</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="62">3</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="70">4</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="71">5</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="72">6</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="80">7</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="81">8</div>
            <div class="cell B7" @click="touchPuzzle($event)" id="82">9</div>
        </div>

        <div class="grid" id="grid">
            <div class="cell B8" @click="touchPuzzle($event)" id="63">1</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="64">2</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="65">3</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="73">4</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="74">5</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="75">6</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="83">7</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="84">8</div>
            <div class="cell B8" @click="touchPuzzle($event)" id="85">9</div>
        </div>

        <div class="grid" id="grid">
            <div class="cell B9" @click="touchPuzzle($event)" id="66">1</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="67">2</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="68">3</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="76">4</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="77">5</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="78">6</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="86">7</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="87">8</div>
            <div class="cell B9" @click="touchPuzzle($event)" id="88">9</div>
        </div>
    </div>
    <div class="btnContainer"  @touchstart="touchPuzzle($event)">
      <p class="btny" @click="touchPuzzle($event)" v-for="index in 9" :key="index">{{ index }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SudokuBoard',
  props: {
    puzzle: Object,
  },
  emits: ['complete'],
  data() {
    return {
      currentCell:"",
      numbers:{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0}
    }
  },
  methods:{
    keyboardInput(e){
      if(this.currentCell && Number(e.key)>=1 && Number(e.key)<=9){
        if(! this.currentCell.classList.contains("solved")){
            this.currentCell.innerText = e.key
            var solutionIndex=Number(this.currentCell.id[0])*9 + Number(this.currentCell.id[1])
        
            if (this.currentCell.innerText!=this.puzzle.solution[solutionIndex]){
              this.currentCell.style.color="red"
              this.currentCell.style.fontWeight="700"
              setTimeout(() => {
                this.currentCell.style.color="black"
                this.currentCell.style.fontWeight="500"
                this.currentCell.innerText=""
              }, 1100);
            }
            else{
              this.currentCell.classList.add("solved")
              document.querySelectorAll(".cell").forEach(i => {
                if(i.innerText == this.currentCell.innerText){
                  i.style.backgroundColor="rgb(0, 163, 0)"
                }
              });
              this.numbers[this.currentCell.innerText]++
              if (this.numbers[this.currentCell.innerText]==9){
                document.querySelectorAll(".btny").forEach(btn=>{
                  if(btn.innerText==this.currentCell.innerText){
                    btn.classList.add("disabled")
                  }
                })
              }
              var counter=0
              for (const key in this.numbers) {
                  if (this.numbers[key]==9){
                  counter++
                }
              }
              if (counter==9){
                this.$emit("complete")
              }
            }
          }
      }
    },
    touchPuzzle(e){
      if (e.target.classList.contains("cell") && !e.target.classList.contains("solved")){
        this.currentCell=e.target
        document.querySelectorAll(".cell").forEach(i=>{
          i.style.backgroundColor="white"
        })
        
        var id = String(this.currentCell.id)
        var nodes = Array.prototype.slice.call( document.querySelector('.gridContainer').children );
        var parent=  this.currentCell.parentElement
        var box = "B"+String( nodes.indexOf( parent )+1 )
        document.querySelectorAll(".cell").forEach(i => {
          if(i.classList.contains(box)){
            i.style.backgroundColor="rgb(155, 255, 155)"
          }
        });
        for(var j=0; j<9; j++){
          var y=String(j)+id[1]
          document.getElementById(y).style.backgroundColor="rgb(155, 255, 155)"
        }
        for(j=0; j<9; j++){
          y=id[0]+String(j)
          document.getElementById(y).style.backgroundColor="rgb(155, 255, 155)"
        }
        this.currentCell.style.backgroundColor="rgb(0, 163, 0)"
      }
      if (e.target.classList.contains("cell") && e.target.classList.contains("solved")){
        this.currentCell=e.target
        document.querySelectorAll(".cell").forEach(i=>{
          i.style.backgroundColor="white"
        })
        
        id = String(this.currentCell.id)
        for(j=0; j<9; j++){
          y=String(j)+id[1]
          document.getElementById(y).style.backgroundColor="rgb(155, 255, 155)"
        }
        for(j=0; j<9; j++){
          y=id[0]+String(j)
          document.getElementById(y).style.backgroundColor="rgb(155, 255, 155)"
        }
        nodes = Array.prototype.slice.call( document.querySelector('.gridContainer').children );
        parent=  this.currentCell.parentElement
        box = "B"+String( nodes.indexOf( parent )+1 )
        document.querySelectorAll(".cell").forEach(i => {
          if(i.classList.contains(box)){
            i.style.backgroundColor="rgb(155, 255, 155)"
          }
        });
        
        document.querySelectorAll(".cell").forEach(i => {
          if(i.innerText == this.currentCell.innerText){
            i.style.backgroundColor="rgb(0, 163, 0)"
          }
        });
        this.currentCell.style.backgroundColor="rgb(0, 163, 0)"
      }
      if (e.target.classList.contains("btny") && !e.target.classList.contains("disabled")){
        if(this.currentCell!=0){
          if(! this.currentCell.classList.contains("solved")){
            this.currentCell.innerText = e.target.innerText
            var solutionIndex=Number(this.currentCell.id[0])*9 + Number(this.currentCell.id[1])
        
            if (this.currentCell.innerText!=this.puzzle.solution[solutionIndex]){
              this.currentCell.style.color="red"
              this.currentCell.style.fontWeight="700"
              setTimeout(() => {
                this.currentCell.style.color="black"
                this.currentCell.style.fontWeight="500"
                this.currentCell.innerText=""
              }, 1100);
            }
            else{
              this.currentCell.classList.add("solved")
              document.querySelectorAll(".cell").forEach(i => {
                if(i.innerText == this.currentCell.innerText){
                  i.style.backgroundColor="rgb(0, 163, 0)"
                }
              });
              this.numbers[this.currentCell.innerText]++
              if (this.numbers[this.currentCell.innerText]==9){
                document.querySelectorAll(".btny").forEach(btn=>{
                  if(btn.innerText==this.currentCell.innerText){
                    btn.classList.add("disabled")
                  }
                })
              }
              var counter=0
              for (const key in this.numbers) {
                  if (this.numbers[key]==9){
                  counter++
                }
              }
              if (counter==9){
                this.$emit("complete")
              }
            }
          }
        }

      }
    }
  },
  mounted(){
    if(this.puzzle){
      document.addEventListener("keydown",this.keyboardInput)
      for(var i=0; i<81; i++){
      var a=String(Math.floor(i/9))+String(i%9)
      if(this.puzzle.puzzle[i]=="-"){
        document.getElementById(a).innerText=""
      }
      else{
        document.getElementById(a).innerText=this.puzzle.puzzle[i]
        document.getElementById(a).classList.add("solved")
        this.numbers[this.puzzle.puzzle[i]]++
        if (this.numbers[this.puzzle.puzzle[i]]==9){
          document.querySelectorAll(".btny").forEach(btn=>{
            if(btn.innerText==this.puzzle.puzzle[i]){
              btn.classList.add("disabled")
            }
          })
        }
      }  
    }
    }  
  },
  unmounted() {
    document.removeEventListener("keydown",this.keyboardInput)
  }
}
</script>
<style scoped>
p.disabled{
  color:rgb(168, 168, 168);
  cursor: not-allowed;
}
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid black;
}
.gridContainer{
    display: grid;
    grid-template-columns: auto auto auto;
    border: 3px solid black;
       
}
.cell {
    border: 1px solid gray;
    text-align: center;
    
    font-size:1.5rem;
    font-weight: 500;
    height:43.5px;
    width:50px;

    user-select: none; /* Prevent default text selection */
}
@media screen and (max-height: 645px){
  .cell,.btny {
    font-size:1.5rem;
  }
}
@media screen and (max-width: 640px) {
  .cell{
    height:34.5px;
    width:37.5px;
  }
  .gridContainer{
      width: 350px;
  }
  .cell {
    font-size:1.4rem;
  }
  .btny{
    font-size:1.5rem;
  }
  .btnContainer>p{
    font-size:1.1rem;
    padding-top:.5rem;
    padding-bottom:.5rem;
    padding-left:.7rem;
    padding-right: .7rem;
  }
  .main>.btnContainer{
    width: 350px;
  }
}
.btnContainer{
    display: flex;
    margin-top:1rem;
    justify-content: space-evenly;
    align-items: center;
    width:505px;
}
.btny{
    margin:0px;
    color:rgb(0, 163, 0);
    padding-top:.5rem;
    padding-bottom:.5rem;
    padding-left:1.2rem;
    padding-right: 1.2rem;
    background-color: lightgrey;
    border-radius: .2rem;
    font-size:1.5rem;
    font-weight: 500;
    border: none;
}
.cell,.btny{
  cursor: pointer;
}
</style>

