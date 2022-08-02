import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./assets/stylesheets/styles.scss"

gsap.registerPlugin(ScrollTrigger);

createApp(App).mount('#app')
