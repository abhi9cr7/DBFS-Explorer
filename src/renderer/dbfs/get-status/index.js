'use strict'

const axios = require('axios')
const { GET_STATUS } = require('@/app.config.js').endpoints

function index (authUser) {
  return new Promise((resolve, reject) => {
    if (!authUser) {
      reject(new Error('Invalid credentials'))
    }

    axios({
      method: 'get',
      url: `${authUser.url}/${GET_STATUS}?path=/`,
      headers: {
        'Authorization': `Bearer ${authUser.token}`,
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(data => {
        return resolve(data)
      })
      .catch(err => {
        return reject(err)
      })
  })
}

export default index
