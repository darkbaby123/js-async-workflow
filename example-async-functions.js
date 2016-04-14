'use strict'

const api = require('./lib/api-with-promise')

async function getCategoryNamesForProducts() {
  try {
    const products = await api.getProducts()
    const categories = await Promise.all(products.map(p => api.getCategory(p.categoryId)))
    return categories.map(c => c.name)
  } catch (e) {
    // Handle exception here
  }
}

getCategoryNamesForProducts().then(names => console.log(names))
