'use strict'

const api = require('./lib/api')

function getCategoryNamesForProducts(cb) {
  api.getProducts(products => {
    let counter = products.length
    let categoryNames = []

    products.forEach(product => {
      api.getCategory(product.categoryId, category => {
        categoryNames.push(category.name)
        counter--
        if (counter === 0) cb(categoryNames)
      })
    })
  })
}

getCategoryNamesForProducts(names => {
  console.log(names)
})
