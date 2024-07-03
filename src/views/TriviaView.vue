<template>
    <div class="tbody">
        <div class="main">
          <i class='bx bx-arrow-back'  style="color:white;margin-top: .5rem;align-self: flex-start; font-size: 2rem;cursor:pointer" @click="backHome" v-if="componentView==2"></i>
          <RouterLink to="/" style="align-self: flex-start;"><i class='bx bx-arrow-back'  style="color:white;margin-top: .5rem;align-self: flex-start; font-size: 2rem;cursor:pointer" @click="backHome" v-if="componentView==1"></i></RouterLink>
          
        
      
      <h1 style="font-size: 5rem; font-weight: 700; overflow-wrap: break-word;" class="header">Trivia Game</h1>
      <requirementsComp @submit="(formData)=>getQuestions(formData)" :key="componentKey" v-if="componentView==1" />
      <questionsComp  @score="(finalScore)=>showResult(finalScore)" :key="componentKey2" :final-questions="questions" v-if="componentView==2" />
      
      <div id="CNav" class="overlay1" @touchend="closeNav($event)">
        <a  class="closebtn"  @click="closeNav()">&times;</a>
        <div class="overlay-content1">
            <div style="margin-bottom:1.5rem">
              <h1 style="font-size: 3.5rem;" v-if="score>0">Well Done 🎉</h1>
              <h1 style="font-size: 3.5rem;" v-else >😔</h1>
              <p style="font-size: 1.5rem;">Score:</p>
              <h1 style="font-size: 6rem; font-weight: bold; margin-top:1.5rem"><span> {{ score }}%</span></h1>
              <p>Better than <span style="color: #F5DFB8;">{{ Math.round((Math.random() * (90 - 100) + 100) * 100) / 100}}%</span> of previous quiz takers!</p>
            </div>
            
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                <button @touchstart="restartGame()" @click="restartGame()" class="large"> PLAY AGAIN </button>
                <RouterLink to="/"><button class="small">Home</button></RouterLink>
            </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import questionsComp from '../components/questionsComp.vue'
  import requirementsComp from '../components/requirementsComp.vue'
  
  export default {
    name: 'App',
    components: {
      questionsComp,
      requirementsComp
    },
    data() {
      return {
        componentKey:0,
        componentKey2:0,
        componentView:1,
        questions:[],
        score:0
      }
    },
    methods:{
      backHome(){
        this.questions=[]
        this.forceRerender2()
        this.componentView= 1;
      },
      closeNav(){
        document.getElementById("CNav").style.height="0%";
      },
      restartGame(){
        this.questions=[]
        this.closeNav()
        this.forceRerender2()
        this.componentView= 1;
      },
      async getQuestions(formData) {
      if(formData.categories!="" && formData.difficulty!=""){
        try{
          const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`);
          const data = await response.json();
          data.results.forEach(i=>{
            var question = new Object()
            question.text=this.decodeHTML(i.question)
            question.options=i.incorrect_answers
            question.options.push(i.correct_answer)
            question.options=question.options.map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value); 
            question.answer=i.correct_answer
            this.questions.push(question)
          })
          var new_x=[]
          this.questions.forEach(i=>{
            i.options.forEach(j=>{
              new_x.push(this.decodeHTML(j))
            })
            i.options=new_x
            new_x=[]
          })
          if (this.questions.length>0){
            document.querySelector("#loader").style.display="none";
            this.forceRerender()
            this.componentView= 2;
          }
        }catch(error){
          alert("Network Error. Check Internet connection and refresh the page.")
          console.log(error)
        }
      }
      },
      decodeHTML(html) {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
      },
      forceRerender(){
        this.componentKey+= 1;
      },
      forceRerender2(){
        this.componentKey2+= 1;
      },
      showResult(finalScore){
        this.score=finalScore
        document.getElementById("CNav").style.height="100%";
      }
    }
  }
  </script>
  
  <style scoped>
  .tbody {
    text-align: center;
    margin-top: 0px;
    width:100%;
  }
  
  .tbody{
    background-color:#2c2b2b;
    height: 100%;
    width:100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .tbody{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media screen and (max-width: 570px) {
    .tbody{
      overflow-y: auto;
      overflow-x: hidden;
    }
    .header{
      margin-bottom: 5px;
    }
    .closebtn{
      display: none;
    }
  }
  *{
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    color: #cfcfcf;
  }
  .main{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
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
    justify-content: center;
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
  .large{
    outline: none;
    border: 3px solid yellow;
    background-color: rgb(179, 185, 18);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    color:black;
    padding:.7rem;
  }
 .small{
  outline: none;
    border: 3px solid yellow;
    background-color: rgb(179, 185, 18);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    color:black;
    padding:.3rem;
 }
  </style>