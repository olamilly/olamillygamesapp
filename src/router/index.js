import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anagrams',
      name: 'anagrams',
      component: () => import('../views/AnagramsView.vue'),
    },
    {
      path: '/wordle',
      name: 'wordle',
      component: () => import('../views/WordleView.vue'),
      meta: {
        padding: '0px',
      },
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: () => import('../views/TictactoeView.vue'),
      meta: {
        overflow: "hidden",
      },
    },
    {
      path: '/sudoku',
      name: 'sudoku',
      component: () => import('../views/SudokuView.vue'),
      meta: {
        padding: '0px',
      },
    },
    {
      path: '/trivia',
      name: 'trivia',
      component: () => import('../views/TriviaView.vue'),
      meta: {
        backgroundColor:"#2c2b2b",
      },
    },
    {
      path: '/wordsearch',
      name: 'wordsearch',
      component: () => import('../views/WordSearchView.vue'),
      meta: {
        overflow: "hidden",
        backgroundColor:"#2c2b2b",
      },
    },
    {
      path: '/classic',
      name: 'classic',
      component: () => import('../views/ClassicView.vue'),
      meta: {
        backgroundColor: '#002A5B',
        overflow: "hidden"
      },
    },
    {
      path: '/timed',
      name: 'timed',
      component: () => import('../views/TimedView.vue'),
      meta: {
        backgroundColor: '#002A5B',
        overflow: "hidden"
      }
    },
    {
      path: '/memory',
      name:"MemoryHome",
      component: () => import('../views/MemoryHomeView.vue'),
      meta: {
        backgroundColor: '#002A5B',
        overflow: "hidden"
      },
    }
  ]
})

export default router
