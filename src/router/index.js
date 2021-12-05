import Vue from 'vue'
import VueRouter from 'vue-router'
import Taekwondo from '@/views/Taekwondo.vue'
import Faixas from '@/views/Faixas.vue'
import Poomsae from '@/views/Poomsae.vue'
import Aulas from '@/views/Aulas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Taekwondo',
    component: Taekwondo
  },
  {
    path: '/faixas',
    name: 'Faixas',
    component: Faixas
  },
  {
    path: '/poomsae',
    name: 'Poomsae',
    component: Poomsae
  },
  {
    path: '/aulas',
    name: 'Aulas',
    component: Aulas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router