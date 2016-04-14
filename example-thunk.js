'use strict'

const api = require('./lib/api')

const Thunk = {
  all(thunks) {
    return function(cb) {
      const re = []
      let counter = thunks.length

      thunks.forEach((thunk, idx) => {
        thunk(data => {
          re[idx] = data
          counter--
          if (counter === 0) cb(re)
        })
      })
    }
  },
}

const getProducts = () => api.getProducts.bind(api)
const getCategory = (id) => api.getCategory.bind(api, id)

function getCategoryNamesForProducts(productThunks) {
  return function(cb) {
    productThunks(products => {
      // Pass a list of thunks,
      // returns a new thunk which contains the array of thunks' results.
      Thunk.all(
        products.map(product => getCategory(product.categoryId))
      )(categories => {
        const names = categories.map(i => i.name)
        cb(names)
      })
    })
  }
}

const products = getProducts()
const names = getCategoryNamesForProducts(products)
names(data => {
  console.log(data) // ['Drink', 'Food']
})
