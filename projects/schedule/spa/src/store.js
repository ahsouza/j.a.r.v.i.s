import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    client: null,
    financial: null,
    project: null,
    task: null,
    clients: [],
    financials: [],
    projects: [],
    tasks: []
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getToken: state => {
      return state.user.token
    },

    getClients: state => {
      return state.clients
    },
    countClients: (state, getters) => {
      return getters.getClients.length
    },

    getFinancials: state => {
      return state.fnancials
    },
    countFinancials: (state, getters) => {
      return getters.getFinancials.length
    },

    getProjects: state => {
      return state.projects
    },
    countProjects: (state, getters) => {
      return getters.getProjects.length
    },
    
    getTasks: state => {
      return state.tasks
    },
    countTasks: (state, getters) => {
      return getters.getTasks.length
    },

  },
  mutations: {
    setUser(state, x) {
      state.user = x
    },

    setClients(state, obj) {
      for (let item of obj) {
        state.clients.push(item)
      }
    },
    setClient(state, x) {
      state.client = x
    },

    setFinancials(state, obj) {
      for (let item of obj) {
        state.financials.push(item)
      }
    },
    setFinancial(state, x) {
      state.financial = x
    },

    setProjects(state, obj) {
      for (let item of obj) {
        state.clientes.push(item)
      }
    },
    setProject(state, x) {
      state.project = x
    },

    setTasks(state, obj) {
      for (let item of obj) {
        state.clientes.push(item)
      }
    },
    setTask(state, x) {
      state.task = x
    },
  },
  actions: {

  }
})