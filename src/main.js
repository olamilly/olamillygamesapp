import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(router)


app.mount('#app')
router.afterEach((to, from) => {
const backgroundColor = to.meta.backgroundColor || '#fff'; // Default white
document.body.style.backgroundColor = backgroundColor;
if(to.meta.padding){
    document.querySelector("#app").style.padding=to.meta.padding;
}
else{
    document.querySelector("#app").style.padding="2rem";
}
if(to.meta.overflow){
    document.body.style.overflow= "hidden"
    let height = screen.availHeight;
    if (height<=800 && to.name=="wordsearch"){
        document.body.style.overflow= "auto"
    }
}
else{
    document.body.style.overflow="auto";
}
});