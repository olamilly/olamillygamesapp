<template>
    <div class="container">
        <div class="row" >
            <div class="scene scene--card">
                <div class="cardy" >
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="00"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="01"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="02"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="03"></div>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="scene scene--card">
                <div class="cardy" >
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="10"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="11"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="12"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="13"></div>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="20"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="21"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="22"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="23"></div>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="scene scene--card">
                <div class="cardy" >
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="30"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="31"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="32"></div>
                </div>
            </div>
            <div class="scene scene--card">
                <div class="cardy">
                  <div class="card__face card__face--front"></div>
                  <div class="card__face card__face--back" id="33"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['complete'])
let state=0
let num_of_c=0
let prev=""
let emojis={"a":"🔥","b":"🔌","c":"💣","d":"🚨","e":"🛸","f":"👽","g":"🚀","h":"🎥"}
let matched=0
let m=[[],[],[],[]];
//initialize the grid
function initializeGrid(){
    let l=[]
    for(let i=0;i<16;i++){
    var f=1;
    while(f){
        let x=Math.floor(Math.random() * 16);
        if (!l.includes(x)){
        l.push(x)
        f=0
        }
    }
    }
    for(let i=0;i<16;i++){
    if(i==0||i==1){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["a"]
    }
    if(i==2||i==3){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["b"]
    }
    if(i==4||i==5){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["c"]
    }
    if(i==6||i==7){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["d"]
    }
    if(i==8||i==9){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["e"]
    }
    if(i==10||i==11){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["f"]
    }
    if(i==12||i==13){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["g"]
    }
    if(i==14||i==15){
        m[Math.floor(l[i]/4)][l[i]%4]=emojis["h"]
    }
    }
    var cards = document.querySelectorAll('.cardy');
    [...cards].forEach((card) => {
        card.addEventListener('click', (e)=>{
            boxOperation(e)
        });
    })
}
function boxOperation(e){
    num_of_c++
    if(num_of_c==2){
        var cards = document.querySelectorAll('.cardy');
        [...cards].forEach((card) => {
            card.style.pointerEvents="none"
        })
        setTimeout(() => {
            [...cards].forEach((card) => {
                card.style.pointerEvents="auto"
            })
        }, 1000);
   
    }
    if(num_of_c==2){
        num_of_c=0
    }
    var id = e.srcElement.nextElementSibling.id
    var x = Number(id[0]);
    var y = Number(id[1]);
    document.getElementById(id).innerHTML=m[x][y];
    e.srcElement.parentElement.style.pointerEvents="none"
    if(state==1){
        if(m[Number(prev[0])][Number(prev[1])]!=m[Number(id[0])][Number(id[1])]){
            setTimeout(() => {
                e.srcElement.parentElement.classList.toggle('is-flipped');
                e.srcElement.parentElement.style.pointerEvents="auto"
                document.getElementById(prev).parentElement.classList.toggle("is-flipped");
                document.getElementById(prev).parentElement.style.pointerEvents="auto"
            }, 800);
        }
        else{
            if (prev!=id){
                document.getElementById(id).style.background="#9FF598";
                document.getElementById(prev).style.background="#9FF598";
                matched++;
                if (matched==8){
                    emit("complete")
                }
            }
        }
        state=0
    }
    else{
        state=1
        prev=id  
    }
}
function restart(){
    state=0
    matched=0
    prev=""
    initializeGrid()
    var cards = document.querySelectorAll('.cardy');
    cards.forEach(box => {
        box.querySelector(".card__face--back").style.background="#F87D75";
        if(box.classList.contains("is-flipped")){
            box.classList.toggle('is-flipped');
        }
        box.style.pointerEvents="auto";
        box.querySelector(".card__face--back").innerHTML="";
    });
}
onMounted(() => {
    restart()
    var cards = document.querySelectorAll('.cardy');
    [...cards].forEach((card)=>{
        card.addEventListener( 'click', function() {
            card.classList.toggle('is-flipped');
        });
    });
    //initializeGrid();
})
</script>
<style scoped>

.row{
        display: flex;
      }
      .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 6.5rem;
      }
      
      
      .cardy {
        position: relative;
        width: 50px;
        height: 50px;
        cursor: pointer;
        text-align: center;
        transform-style: preserve-3d;
        transform-origin: center right;
        transition: transform 1s;
    }

        .cardy.is-flipped {
        transform: translateX(-100%) rotateY(-180deg);
        }

        .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        font-size: 2rem;
        border-radius: .4rem;
        text-align:center;
        backface-visibility: hidden;
        
        }

        .card__face--front {
        background: #004392;
        }

        .card__face--back {
        background: #F87D75;
        transform: rotateY(180deg);
        }
        .scene {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin:2.5px;
        }
        </style>