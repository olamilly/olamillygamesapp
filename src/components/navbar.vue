<template>
    <div id="main">
      <nav style="display: flex;"><button @click="openNav()" class="small">EXIT</button></nav>
      <div id="myNav" class="overlay">

        <!-- Overlay content -->
        <div class="overlay-content">
        <h1 style="margin-bottom: 2rem;">Are you sure you want to exit?</h1>
        <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
            <button @click="closeNav($event)" class="large"> CONTINUE </button>
            <button @click="closeNav($event)" class="small">EXIT</button>
        </div>
        </div>

      </div>
    </div>
  </template>
  <script>
  
  export default {
    methods:{
        openNav() {
        document.getElementById("myNav").style.height = "100%";
        },

        closeNav(e) {
            document.getElementById("myNav").style.height = "0%";
            if(e.srcElement.classList.contains("small")){
                this.$router.push("/memory")
            }
        }
    }
  }
  </script>

  <style scoped>
  button{
    margin:10px;
  }
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 0%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: linear-gradient(to top, #002A5B, #004392);
  opacity:0.8;
  overflow-y: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
h1{
    font-size:48px;
    font-weight: 700;
  }
/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 20%; 
  width:20rem; 
  text-align: center; /* Centered text/links */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
button{
    width:60%;
    text-align: center;
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
*{
  color:white;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}</style>