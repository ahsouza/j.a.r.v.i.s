import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Financial from './components/financials/Financial.vue'
import Project from './components/projects/Project.vue'
import Task from './components/tasks/Task.vue'
import Register from './components/registers/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'Clients',
      component: () => import('./components/clients/Client.vue')
    },
    {
      path: '/financias',
      name: 'Financial',
      component: Financial
    },
    {
      path: '/projetos',
      name: 'PRoject',
      component: Project
    },
    {
      path: '/tarefas',
      name: 'Task',
      component: Task
    },
    {
      path: '/users',
      name: 'User',
      component: Register
    },
  ]
})