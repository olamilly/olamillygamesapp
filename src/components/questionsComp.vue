<template>
    <div class="containery">
      <div id="question-container">
        <h3>{{ finalQuestions[question].text }}</h3>
        <div id="answer-buttons" class="btn-grid">
          <button @click="selectAnswer($event)" v-for="(option,index) in finalQuestions[question].options" :id="option" :key="index" class="btn">{{ option }}</button> 
        </div>
      </div>
      <div v-if="answerState!=0">
        <p style="color:rgb(255, 122, 122)" v-if="answerState==1 || answerState==4">Incorrect</p>
        <p style="color:rgb(134, 247, 134)" v-if="answerState==2 || answerState==3">Correct</p>
        
        <button id="next" @click="restartTheGame" v-if="answerState==3 || answerState==4" >Play Again</button>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      finalQuestions: Array,
    },
    emits: ['score'],
    data() {
      return {
        question:0,
        answerState:0,
        score:0
      }
    },
    methods:{
      selectAnswer(e){
        document.querySelectorAll(".btn").forEach(i=>{
          if(i.id == this.finalQuestions[this.question].answer){
            i.style.backgroundColor="rgb(134, 247, 134)"
          }
          else{
            i.style.backgroundColor="rgb(255, 122, 122)"
          }
        })
        if(e.target.id == this.finalQuestions[this.question].answer){
          this.score+=1
          if(this.question==4){
            this.answerState=3
          }
          else{
            this.answerState=2
          }
        }
        else{
          if(this.question==this.finalQuestions.length-1){
            this.answerState=4
          }
          else{
            this.answerState=1
          }
        }
        if(this.answerState==3 || this.answerState==4){
          this.score=(this.score/5)*100
          this.$emit('score', this.score)
        }
        if(this.question!=this.finalQuestions.length-1){
          this.nextQuestion()
        }
      },
      nextQuestion(){
        setTimeout(()=>{
          document.querySelectorAll(".btn").forEach(i=>{i.style.backgroundColor="lightgray"})
          this.question+=1
          this.answerState=0
        },1150)
      },
      restartTheGame(){
        this.$parent.restartGame()
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3{
    color:white;
  }
  .containery {
    width: 600px;
    max-width: 80%;
    text-align: center;
    color: black;
}

.btn-grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin-top: 20px;
}
.btn {
    background-color: lightgray;
    border: none;
    color: black;
    padding-top:.5rem;
    padding-bottom:.5rem;
    padding-left:1.5rem;
    padding-right: 1.5rem;
    border-radius: .5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    width:14rem;
    align-self: center;
    justify-self: center;
    margin:0.3rem;
}
.btn:hover, #next:hover{
  background-color: rgb(160, 158, 158);
}
#next{
  color: black;
  font-weight: 600;
  cursor: pointer;
  padding-top:.3rem;
  padding-bottom:.3rem;
  padding-left:1rem;
  padding-right: 1rem;
  border-radius: .3rem;
  outline: none;
  background-color: lightgrey;
  border: none;
  margin-top: .5rem;
}
p{
  margin-bottom: 0px;
}
@media screen and (max-width: 570px) {
  .btn-grid {
    grid-template-columns: repeat(1, auto);
  }
  h3, .btn{
    font-size: 1rem;
  }
}
  </style>