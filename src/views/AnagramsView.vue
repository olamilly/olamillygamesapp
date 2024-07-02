<template>
<div class="abody">
    <div class="main">
        <div class="gameBox">
            <p>Time: {{ timeLeft }}</p>
            <div class="scoreBox">
                <h5>Words: {{ number_of_words }}</h5>
                <h2>Score: {{ score }}</h2>
            </div>
            <p style="color:red;margin:.2rem;display:none" id="invalid">Invalid Word</p>
            <p style="color:red;margin:.2rem;display:none" id="used">Word Already Used</p>
            <div class="keyboard">
                <div class="boxes">
                    <p v-for="index in 6" :id="index" :key="index"></p>
                </div>
                <div class="letters">
                    <p v-for="(character, index) in myWord" :key="index" :id="index" @click="type($event)">{{ character }}</p>
                    <p id="delete" @click="type($event)">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path d="M490.667,64H133.077c-7.196,0-13.906,3.627-17.848,9.647L3.485,244.314c-4.647,7.098-4.647,16.274,0,23.372     l111.744,170.667c3.942,6.02,10.652,9.647,17.848,9.647h357.589c11.782,0,21.333-9.551,21.333-21.333V85.333     C512,73.551,502.449,64,490.667,64z M469.333,405.333H144.609L46.833,256l97.776-149.333h324.725V405.333z"/>
                                        <path d="M198.246,356.418c8.331,8.331,21.839,8.331,30.17,0l70.248-70.248l70.248,70.248c8.331,8.331,21.839,8.331,30.17,0     s8.331-21.839,0-30.17L328.834,256l70.248-70.248c8.331-8.331,8.331-21.839,0-30.17s-21.839-8.331-30.17,0l-70.248,70.248     l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L268.495,256l-70.248,70.248     C189.915,334.58,189.915,348.087,198.246,356.418z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </p>
                </div>
                <button :disabled="currentWord.length<3" @click="checkWord" id="enter">Enter</button>
            </div>
        </div>
        <!-- Button trigger modal -->
        <button type="button" id="mBn"class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="display: none;"  >
        Launch demo modal
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style="text-align: center;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" style="text-align: center; width: 100%;" v-if="modalState==1" >HOW TO PLAY</h5>
                        <h5 class="modal-title" id="exampleModalLabel" style="text-align: center; width: 100%;" v-if="modalState==2" >TIME UP!</h5>
                    </div>
                    <div class="modal-body" >
                        <p id="description" v-if="modalState==1" > Combine letters to make words. Make as many words as you can in 60 seconds. </p>
                        <div v-if="modalState==2">
                            <p>Score:</p>
                            <h2>{{ score }}</h2>
                            <div style="display:flex;justify-content: space-evenly;"><p style="font-size: 1rem;font-weight: 700;">WORD</p><p style="font-size: 1rem;font-weight: 700;">SCORE</p></div>
                            <div v-for="w in userWords" style="display:flex;justify-content: space-evenly;"><p>{{ w.toUpperCase() }}</p><p>{{ w.length*100 }}</p></div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <RouterLink to="/"><button type="button" v-if="modalState==2" style="color: white;" id=clz class="btn btn-secondary" data-bs-dismiss="modal" >Home</button></RouterLink>
                        <button type="button" v-if="modalState==2" id=restart  class="btn btn-primary" style="color:white;" data-bs-dismiss="modal" @click="reinitGame" >Restart</button>
                        <button type="button" v-if="modalState==1" id=start  class="btn btn-primary" data-bs-dismiss="modal" style="color:white;" @click="startTimer" >Start</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script >
import { findPartialAnagrams } from 'find-partial-anagrams';

export default {
  data() {
    return {
        number_of_words:0,
        score:0,
        myWord:"",
        allWords:[],
        currentWord:"",
        userWords:[],
        timeLeft:5,
        modalState:1
    }
  },
  methods: {
    mainInit(){
        this.getRandomWord()
        .then((word) => {
            var a = word.toUpperCase()
            const letters = a.split("");

            // Use the Fisher-Yates shuffle algorithm to randomize the order
            for (let i = letters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letters[i], letters[j]] = [letters[j], letters[i]];
            }
            // Join the scrambled letters back into a string
            this.myWord=letters.join("");
            
            this.getAllWords()
        })
        .catch((error) =>{
            console.log(error)
            alert("Network Error")})
    },
    reinitGame(){
        this.number_of_words=0
        this.score=0
        this.myWord=""
        this.allWords=[]
        this.currentWord=""
        this.userWords=[]
        this.timeLeft=10
        this.modalState=1
        document.querySelectorAll(".letters>p").forEach(i=>{
            if(i.classList.contains("clicked")){
                i.classList.remove("clicked")
            }
        })
        document.querySelectorAll(".boxes>p").forEach(i=>{
            i.innerText=""
        })
        this.mainInit()
        this.startTimer()
    },
    startTimer(){
        var m = setInterval( ()=>{
            this.timeLeft = this.timeLeft - 1
            if(this.timeLeft==0){
                clearInterval(m);
                this.modalState=2
                document.getElementById("mBn").click();
            }
        }, 1000);
    },
    async getRandomWord() {
        const response = await fetch(`https://api.datamuse.com/words?sp=??????`);
        const data = await response.json();
        if (data.length > 0) {
            // Filter words without spaces or special characters using regular expression
            const validWords = data.filter(word => /^[a-zA-Z]+$/.test(word.word));
            return validWords[Math.floor(Math.random() * validWords.length)].word;
        } 
        else {
            throw new Error("Unable to get word.");
        }
    },
    async getAllWords(){
        const dictionary = [];

        async function loadDictionary() {
            const response = await fetch('words.txt'); // Fetch the text file
            const text = await response.text(); // Read the file content as text
            const lines = text.split('\n'); // Split the text into lines (words)

            for (const line of lines) {
            dictionary.push(line.trim()); // Add each word (trimmed) to the dictionary
            }
        }
        await loadDictionary();
        const partialAnagrams = findPartialAnagrams(this.myWord, dictionary);
        partialAnagrams.forEach(i=>{
            if(i.length>=3){
                this.allWords.push(i)
            }
        })
        
    },
    type(e){
        if (e.target.id=="delete"||e.target.id=="Layer_1"){
            if(this.currentWord.length>0){
                document.querySelectorAll(".letters>p").forEach(i=>{
                    if(i.innerText==document.getElementById(String(this.currentWord.length)).innerText){
                        i.classList.remove("clicked")
                    }
                })
                document.getElementById(String(this.currentWord.length)).innerText=""
                this.currentWord = this.currentWord.slice(0, -1); 
            }
        }
        else{
            if (this.currentWord.length<=6){
                this.currentWord+=e.target.innerText
                e.target.classList.add("clicked")
                document.getElementById(String(this.currentWord.length)).innerText=e.target.innerText
            }
        }
        
    },
    checkWord(){
        if(this.allWords.includes(this.currentWord.toLowerCase()) && !this.userWords.includes(this.currentWord.toLowerCase())){
            this.number_of_words++
            this.score+=(this.currentWord.length * 100)
            this.userWords.push(this.currentWord.toLowerCase())
            var index = this.allWords.indexOf(this.currentWord.toLowerCase());
            if (index > -1) {
                this.allWords.splice(index, 1);
            }
        }
        else{
            if(this.userWords.includes(this.currentWord.toLowerCase())){
                document.getElementById("used").style.display="block"
                setTimeout(() => {
                    document.getElementById("used").style.display="none"
                }, 2500);
            }
            else{
                document.getElementById("invalid").style.display="block"
                setTimeout(() => {
                    document.getElementById("invalid").style.display="none"
                }, 2500);   
            }
        }
        this.currentWord=""
        document.querySelectorAll(".boxes>p").forEach(i=>{
            i.innerText=""
        })
        document.querySelectorAll(".letters>p").forEach(i=>{
            if (i.classList.contains("clicked")){
                i.classList.remove("clicked")
            }
        })
        document.getElementById("enter").disabled=true
    }
  },
  mounted(){
    document.getElementById("mBn").click();
    this.mainInit()
  }, 
  beforeUnmount(){
    console.log("unmount")
  }
}
</script>

<style scoped>
.abody{
text-align: center;
margin-top: 0px;
width:100%;
height: 100%;
width:100%;
overflow-x: hidden;
overflow-y: hidden;
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
}
#description{
    margin-bottom: 0px;
}
@media screen and (max-width: 570px) {

}
*{
font-family: 'Montserrat', sans-serif;
box-sizing: border-box;
color: black;
}
.main{
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 1rem;
}
.letters,.boxes{
display:flex;
}
.letters>p{
    border:2px solid black;
    border-radius: .5rem;
    padding:.3rem;
    height:50px;
    width:50px;
    cursor:pointer;
    font-size:1.6rem;
}
.boxes>p{
    border:2px solid black;
    border-radius: .5rem;
    padding:.3rem;
    background-color: lightgrey;
    height:50px;
    width:50px;
    font-size:1.6rem;
}
.keyboard{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.clicked{
    pointer-events: none;
    cursor: not-allowed;
    color:gray;
}
</style>