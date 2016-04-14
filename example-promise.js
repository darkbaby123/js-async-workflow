'use strict'

const api = require('./lib/api-with-promise')

api.getProducts().then(products =>
  Promise.all(products.map(p => api.getCategory(p.categoryId)))
).then(categories =>
  categories.map(c => c.name)
).then(names =>
  console.log(names)
)
