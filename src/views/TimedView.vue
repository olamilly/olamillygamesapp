<script >
import NavBar from '../components/navbar.vue'
import grid from '../components/grid.vue'

export default {
  components: {
    NavBar: NavBar,
    grid: grid
  },

  data() {
    return {
      level:1,
      times:[0,70,65,60],
      componentKey:0,
      score:0
    }
  },
  methods: {
    forceRerender(){
      this.componentKey+= 1;
    },
    openCN() {
      document.getElementById("congratsnav").style.height = "100%";
    },
    timer(){
      var t=this.times[this.level]
     
      document.querySelector("#p1").style.transitionDuration=String(t)+"s";
      document.querySelector("#c1").style.transitionDuration=String(t)+"s";
      document.querySelector("#c1").style.width="0%";
      document.querySelector("#c1").style.backgroundColor="#F87D75";
      document.querySelector("#p1").style.backgroundColor="#F5DFB8";
      document.querySelector("#p1").style.borderColor="#F5DFB8";
      window.myInterval = setInterval( function(){
        t=t-1;
        if (t <= 0) {
          clearInterval(window.myInterval);
          document.getElementById("timeupnav").style.height = "100%";
        }
      }, 1000);
      
    },  
    showCongratulations(){
      window.clearInterval(window.myInterval);
      this.score= Math.round(Math.random() * (99 - 38) + 38);
      this.openCN()
    },
    closeCN(e) {
      document.querySelector(".overlay1").style.height = "0%";
      document.getElementById("timeupnav").style.height = "0%";
      document.getElementById("congratsnav").style.height = "0%";
      if(e.srcElement.classList.contains("lup")){
        this.timer()
      }
      if(e.srcElement.classList.contains("small")){
          this.forceRerender()
          this.$router.push('/memory')
      }
      if(e.srcElement.classList.contains("large") && !e.srcElement.classList.contains("lup")){
          this.forceRerender()
          if(e.srcElement.classList.contains("tup") || e.srcElement.classList.contains("end")){
            this.level=1
            document.querySelector(".progress").style.transitionProperty=""
            document.querySelector(".progress").style.transitionDuration="0s";
            document.querySelector(".progress").querySelector(".color").style.transitionDuration="0s";
            document.querySelector(".progress").querySelector(".color").style.width="100%";
            document.querySelector(".progress").querySelector(".color").style.backgroundColor="#004392";
            document.querySelector(".progress").style.backgroundColor="#76C1EB";
            document.querySelector(".progress").style.borderColor="#76C1EB";
          
            setTimeout(() => {this.timer()}, 20);
          }
          if(e.srcElement.classList.contains("mid")){
            this.level+=1
           
            document.querySelector(".progress").style.transitionProperty=""
            document.querySelector(".progress").style.transitionDuration="0s";
            document.querySelector(".progress").querySelector(".color").style.transitionDuration="0s";
            document.querySelector(".progress").querySelector(".color").style.width="100%";
            document.querySelector(".progress").querySelector(".color").style.backgroundColor="#004392";
            document.querySelector(".progress").style.backgroundColor="#76C1EB";
            document.querySelector(".progress").style.borderColor="#76C1EB";
            
            setTimeout(() => {this.timer()}, 20);
          }  
      }
    }
  },
  mounted(){
    document.getElementById("loadupnav").style.height = "100%";
    document.querySelectorAll(".progress").forEach((i)=>{
      i.style.transitionDuration="0s";
      i.querySelector(".color").style.transitionDuration="0s";
      i.querySelector(".color").style.width="100%";
      i.querySelector(".color").style.backgroundColor="#004392";
      i.style.backgroundColor="#76C1EB";
      i.style.borderColor="#76C1EB";
    })
  }
}

</script>
<template>
  <div class="timed">
    <!--Loadup Overlay-->
    <div id="loadupnav" class="overlay1">
        <div class="overlay-content1">
            <div style="margin-top:1.5rem">
                <h1 style="margin-bottom: 2rem;">TIME ATTACK</h1>
                <p>Your goal is to match pairs of cards with identical emojis before the timer runs out. </p>
                <p> Win by matching all card pairs!</p>
                <p>There are three Levels with progressively shorter times.</p>
                <p>Goodluck!</p>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 3rem;">
              <button @click="closeCN($event)" class="large lup" style="border-color:#9FF598; background-color: #086000;">START</button>
            </div>
        </div>
    </div>

    <!--Time Up Overlay-->
    <div id="timeupnav" class="overlay1">
        <div class="overlay-content1">
            <div style="margin-top:1.5rem">
                <h1 style="font-size: 3.5rem;">Time's Up</h1>
                <p>Score:</p>
                <h1 style="font-size: 6rem; font-weight: bold">34</h1>
                <p style="color: #F5DFB8;">Highest Score: 124</p>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 3rem;">
                <button @click="closeCN($event)" class="large tup"> RESTART </button>
                <button @click="closeCN($event)" class="small tup">HOME</button>
            </div>
        </div>
    </div>

    <!--Congratulations Overlay-->
    <div id="congratsnav" class="overlay1">
        <div class="overlay-content1">
            <div style="margin-top:1.5rem">
                <h1>YOU WON!</h1>
                <p style="font-size: 1.5rem;">Well Done 🎉</p>
                <p style="font-size: 1.5rem;">Score:</p>
                <h1 style="font-size: 6rem; font-weight: bold">{{ score }}</h1>
                <p style="color: #F5DFB8;">Highest Score: 124</p>
            </div>
            
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center; margin-top: 3rem;">
                <button @click="closeCN($event)" class="large mid" v-if="this.level!=3"> NEXT ROUND </button>
                <!--if its the end of the last round-->
                <button @click="closeCN($event)" class="large end" v-if="this.level==3"> RESTART </button>
                <button @click="closeCN($event)" class="small">HOME</button>
            </div>
            <!--if its the end of the last round-->
            <div v-if="this.level==3" style="margin: 3rem;">
                <button class="large" style="border-color:#9FF598; background-color: #086000;">SHARE</button>
            </div>
        </div>
    </div>

    <NavBar/>
    <div class="timedBody">
      <h1>LEVEL <span style="font-weight: 700;" id="lvl">{{ level }}</span></h1>
      <grid @complete="showCongratulations" :key="componentKey"/>
        <div class="progress" id="p1" >
          <div class="color" id="c1"></div>
        </div>
      
      <!--<button @click="showCongratulations">mannn</button>-->
    </div>
  </div>
</template>
<style scoped>
.timed{
  overflow:hidden;
}
*{
    color: white;
  }
.timedBody{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    height: 100%;
    margin-top: 5rem;
    font-weight: 700;
    overflow: hidden;
}
/* The Overlay (background) */
.overlay1 {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 0%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #002A5B, #004392);
  opacity:0.9;
  overflow-y: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content1 {
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:20rem; 
  text-align: center;
  
}

button{
    width:60%;
    text-align: center;
}

div.progress{
  margin-top:3rem;
    position: relative;
    height: 20px;
    width: 250px;
    border: 5px solid #76C1EB;
    background-color:#76C1EB;
    border-radius: 10px;
    transition-property: background-color, border-color;
    transition-timing-function: ease-in;
    /*transition-duration: 5s;*/
}
.progress .color{
    position: absolute;
    background-color: #004392;
    width: 100%;
    height: 10px;
    border-radius: 10px;
    transition-property: width,background-color;
    transition-timing-function: ease-in;
    /*transition-duration: 6s;
    animation: progres 10s infinite linear;    */
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
.small{
  font-size: 1rem;
  font-weight: 700;
  margin: 0px;
  width:105px;
  height:40px;
}
.large{
  width:197px;
  height:55px;
  padding:0;
}
.medium{
  padding: .7rem;
}
p{
  font-size: 1.2rem;
  font-weight: 500;
}
button{
  outline: none;
  border: 3px solid #76C1EB;
  background-color: #004392;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  
}
body{
  background:#002A5B;
}
h1{
    font-size:48px;
    font-weight: 700;
  }
</style>
