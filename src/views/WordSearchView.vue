<template>
    <div class="wordbody">
        <RouterLink to="/" style="align-self: flex-start;"><i class='bx bx-arrow-back'  style="margin-left: 0px;color:white;margin-top: .5rem;align-self: flex-start; font-size: 1.5rem;cursor:pointer" ></i></RouterLink>
        <searchBox />
    </div>
  </template>
  
  <script>
  import searchBox from '../components/searchBox.vue'
  
  export default {
    name: 'WordSearch',
    components: {
        searchBox
    }
  }
  </script>
  
  <style scoped>
  .wordbody{
    background-color:#2c2b2b;
    height: 100%;
    width:100%
  }
  .wordbody{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    text-align: center;
    /*margin-top: 60px;*/
  }
 
  /*@media screen and (max-height: 640px) {
    .wordbody{
      margin-top: 85px;
    }
  }*/
  </style>
  