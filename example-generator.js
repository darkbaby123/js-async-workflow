'use strict'

const co = require('co')
const api = require('./lib/api-with-promise')

co(function *() {
  try {
    const products = yield api.getProducts()
    const categories = yield products.map(p => api.getCategory(p.categoryId))
    const names = categories.map(c => c.name)
    console.log(names)
  } catch (e) {
    // Handle exception here
  }
})
