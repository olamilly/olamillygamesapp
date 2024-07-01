<template>
    <div class="sbody">
        <RouterLink to="/" style="align-self: flex-start;"><box-icon name='arrow-back' style="align-self: flex-start; height:2.5rem; width:2rem;" v-if="componentView==1"></box-icon></RouterLink>
        <box-icon name='arrow-back' style="align-self: flex-start; height:2.5rem; width:2rem;"  @click="backHome" v-if="componentView==2"></box-icon>
    <h1 style="font-size: 5rem; font-weight: 700;" class="header">Sud<span style="color:rgb(0, 163, 0)">o</span>ku</h1>
    <SudokuBoard v-if="componentView==2" :key="componentKey2" :puzzle="sudoku" @complete="()=>showModal()" />
    <DifficultyForm @submit="(difficulty)=>startGame(difficulty)" :key="componentKey" v-if="componentView==1" style="margin-top:2rem;" />
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="text-align: center;">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="text-align: center; width: 100%;">CONGRATULATIONS</h5>
            
          </div>
          <div class="modal-body" >
            <p id="wol"> YOU WON 🎉</p>
  
          </div>
          <div class="modal-footer">
            <button type="button" id=clz class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="backHome" class="btn btn-primary">Play Again</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->
    <button type="button" id="mBn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >ffds</button>
    </div>
  </template>
  
  <script>
  import SudokuBoard from '../components/SudokuBoard.vue';
  import DifficultyForm from '../components/DifficultyForm.vue';
  //color: #2c3e50;
  import { getSudoku } from 'sudoku-gen';
  export default {
    name: 'App',
    components: {
      SudokuBoard,
      DifficultyForm
    },
    data() {
      return {
        componentKey:0,
        componentKey2:0,
        componentView:1,
        sudoku:{}
      }
    },
    methods:{
      showModal(){
        document.getElementById("mBn").click();
      },
      backHome(){
        this.questions=[]
        this.componentKey2+=1
        this.componentView=1;
        document.querySelector("h1").style.margin="5rem"
        document.getElementById("clz").click()
      },
      closeModal(){
      },
      startGame(difficulty){
        this.sudoku = getSudoku(difficulty);
        document.querySelector("h1").style.margin=".5rem"
        this.componentKey+=1
        this.componentView=2
      }
    }
  }
  </script>
  
  <style scoped>
  box-icon{
    margin-left: 1rem;
  }
  #mBn{
    display: none;
  }
  body{
    margin-top:0px;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .sbody{
    margin-top:0px;
      height: 100%;
      width:100%;
      overflow-x: hidden;
  }
  .sbody,.main{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
  }
  box-icon{
    color: black;
    margin-top: .5rem;
    cursor: pointer;
  }
  *{
    color:black;
  }
  .header{
    margin-top:5rem
  }
  select {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }
  @media screen and (min-height: 800px){
    .sbody{
      height: 100%;
      margin-top:1.9rem;
    }
    .main{
      height: 100%;
      margin-top: 5rem;
    }
  }
  </style>