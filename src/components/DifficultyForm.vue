<template>
    <div class="containery">
      <div class="formy">
        <div class="form-boxy">
            <label>Choose difficulty level:</label>
            <select v-model="difficulty" class="difficulties">
                <option selected value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="expert">Expert</option>
            </select>
        </div>
        <div>
          
          <button @click="submit" :disabled="difficulty=='' ">Start</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    emits: ['submit'],
    data() {
      return {
        difficulty:""
      }
    },
    methods:{
        submit() {
        this.$emit('submit', this.difficulty)
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .containery{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top:3rem;
  }
  /*@media screen and (max-width: 570px) {
    .container{
      margin-top:2rem;
    }
  }*/
  select{
    color:black;
    padding:1rem;
    outline: none;
    border-radius: .5rem;
    width:100%;
    margin-bottom: 2rem;
  }
  select {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }
  .form-boxy{
    width: 100%;
    max-width: 570px;
  }
  button{
    padding-top:.5rem;
    padding-bottom:.5rem;
    padding-left:1.5rem;
    padding-right: 1.5rem;
    border-radius: .5rem;
    outline: none;
    background-color: lightgrey;
    border: none;
    margin: 1rem;
    box-shadow: 2px 2px dimgray;
  }
  button:disabled{
    color: rgb(168, 168, 168);
    cursor:not-allowed
  }
  option, button, select{
    color: black;
    font-weight: 600;
    cursor: pointer;
  }
  .formy{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: start;
  }
  label{
    align-self: flex-start;
  }

  </style>