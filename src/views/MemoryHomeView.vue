<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function home(){
  router.push('/')
}
</script>
<template>
    <main>
      <i class='bx bx-arrow-back' style="color:white;margin-top: .5rem;align-self: flex-start; font-size: 2.5rem;cursor:pointer"@click="home()"></i>
      <div class="title">
        <h1>MEMORY</h1>
        <h1>
          <span style="color: #76C1EB">M</span>
          <span style="color: #F5DFB8;">A</span>
          <span style="color: #F87D75">T</span>
          <span style="color: #9FF598">C</span>
          <span style="color: #76C1EB">H</span>
        </h1>
      </div>
      <div class="homebody">
        <RouterLink to="/memory/classic"><button id="classic" class="medium" >CLASSIC</button></RouterLink>
        <RouterLink to="timed"><button id="time" class="large">TIME ATTACK</button></RouterLink>
      </div>
    </main>
  </template>
  
  <style scoped>
  *{
    color: white;
  }
  #classic{
    padding-left:.5rem;
    padding-right: .5rem;
  }
  main{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    
    overflow:hidden;
    height: 100dvh;
  }
  a{
    text-align: center;
  }
  h1{
    text-align: center;
  }
  button{
    margin:10px;
  }
  .homebody{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height:55%;
  }
  h1{
    font-size:48px;
    font-weight: 700;
  }
  .title{
    margin-top:6.5rem;
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
  padding-top: .3rem;
  padding-bottom: .3rem;
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


  </style>
  