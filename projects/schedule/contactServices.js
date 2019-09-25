const moment = require('moment')
const axios = require('axios')

const baseUrl = 'http://localhost:3001/tarefas'

const getContact = async date => {
  const url = `${baseUrl}?_sort=dt_prevista,descricao&_order=asc`	
  const res = await axios.get(url)

  const pending = item => item.dt_conclusao === null && moment(item.dt_prevista).isSameOrBefore(date)

  return res.data.filter(pending)
}

const getTask = async id => {
  const resp = await axios.get(`${baseUrl}/${id}`)
  return resp.data
}

module.exports = {
  getContact,
  getTask
}