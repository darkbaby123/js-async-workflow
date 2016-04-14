const api = require('./api')

module.exports = {
  getProducts() {
    return new Promise((resolve, reject) => {
      api.getProducts(resolve)
    })
  },

  getCategory(id) {
    return new Promise((resolve, reject) => {
      api.getCategory(id, resolve)
    })
  },
}
