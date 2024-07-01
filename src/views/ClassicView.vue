<script setup>
import NavBar from '../components/navbar.vue'
import grid from '../components/grid.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import { ref, onMounted } from 'vue';
const componentKey = ref(0);
const forceRerender = () => {
  componentKey.value += 1;
};

function openCN() {
document.getElementById("CNav").style.height = "100%";
}
function closeCN(e) {
    document.querySelector(".overlay1").style.height = "0%";
    document.getElementById("CNav").style.height = "0%";
    if(e.srcElement.classList.contains("small")){
        forceRerender()
        router.push('/memory')
    }
    else{
        forceRerender()
    }
}
function showCongratulations(){
    openCN()
}
onMounted(() => {
  document.getElementById("loadupnav").style.height = "100%";
})
</script>

<template>
  <div class="classic">
    <!--Loadup Overlay-->
    <div id="loadupnav" class="overlay1">
        <div class="overlay-content1">
            <div style="margin-top:1.5rem">
                <h1 style="margin-bottom: 2rem;">CLASSIC MODE</h1>
                <p>Your goal is to match pairs of cards with identical emojis. </p>
                <p>Simply click to flip a card, then click another to find its match.</p>
                <p>Matched pairs remain face-up, while non-matches flip back down.</p>
                <p> Win by matching all card pairs!</p>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 3rem;">
                <button @click="closeCN($event)" class="large" style="border-color:#9FF598; background-color: #086000;">START</button>
            </div>
        </div>
    </div>
    <!--Congratulations Overlay-->
    <div id="CNav" class="overlay1">
        <div class="overlay-content1">
            <div>
                <h1>YOU WON!</h1>
                <p>Well Done 🎉</p>
            </div>
            
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                <button @click="closeCN($event)" class="large"> PLAY AGAIN </button>
                <button @click="closeCN($event)" class="small">HOME</button>
            </div>
            <div>
                <button class="large" style="border-color:#9FF598; background-color: #086000;">SHARE</button>
            </div>
        </div>
    </div>
    <NavBar/>
    <div class="classicBody">
      <h2>Match the tiles!</h2>
      <grid @complete="showCongratulations" :key="componentKey"/>
      <!--<button @click="showCongratulations">mannn</button>-->
    </div>
  </div>
</template>

<style scoped>
.classic{
  overflow: hidden;
}
.classicBody{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    height: 100%;
    margin-top: 5rem;
    font-weight: 700;
}
*{
    color: white;
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
  flex-direction: column;
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
  justify-content: space-evenly;
  align-items: center;
  width:20rem; 
  height: 100%;
  text-align: center; /* Centered text/links */
  
}
h1{
    font-size:48px;
    font-weight: 700;
  }
  button{
    margin:10px;
  }
button{
    width:60%;
    text-align: center;
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
/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
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

</style>
