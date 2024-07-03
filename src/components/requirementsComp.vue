<template>
    <div class="containery">
      <div id="loader">
        <svg class="inactive" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 50 50" stroke="lightgrey">
          <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                  <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                  </path>
              </g>
          </g>
        </svg>
      </div>
      <div class="form">
        <div class="form-box">
            <label>Pick a category:</label>
            <select v-model="form.category" class="categories">
                <option  :value=category.id v-for="(category,index) in trivia_categories" :key="index">{{ category.name }}</option>
            </select>
        </div>
        
        <div class="form-box">
            <label>Choose preferred difficulty level:</label>
            <select v-model="form.difficulty" class="difficulties">
                <option selected value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <button @click="submit" :disabled="form.difficulty=='' && form.category=='' ">Start</button>
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    emits: ['submit'],
    data() {
      return {
        trivia_categories:[{"id":9,"name":"General Knowledge"},{"id":11,"name":"Entertainment: Film"},{"id":12,"name":"Entertainment: Music"},
        {"id":14,"name":"Entertainment: Television"},
        {"id":18,"name":"Science: Computers"},{"id":20,"name":"Mythology"},{"id":21,"name":"Sports"},{"id":22,"name":"Geography"},
        {"id":23,"name":"History"},{"id":25,"name":"Art"},{"id":26,"name":"Celebrities"},{"id":27,"name":"Animals"},{"id":31,"name":"Entertainment: Japanese Anime & Manga"},
        {"id":32,"name":"Entertainment: Cartoon & Animations"}],
        form:{category:"",difficulty:""}
      }
    },
    methods:{
        submit() {
        document.querySelector(".form").style.display="none";
        document.querySelector("#loader").style.display="flex";
        this.$emit('submit', this.form)
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
  }
  @media screen and (max-width: 570px) {
    .containery{
      margin-top:1rem;
    }
  }
  select{
    color:black;
    padding:1rem;
    outline: none;
    background-color: lightgrey;
    border-radius: .5rem;
    width:100%;
    margin-bottom: 2rem;
  }
  select {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }
  .form-box{
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
  .form{
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
  #loader{
    width:100%;
    height:100%;
    display: none;
    justify-content: center;
    align-items: center;
    margin-top:1.5rem;
  }
  </style>