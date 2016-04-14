const categories = [
  { id: 1, name: 'Drink' },
  { id: 2, name: 'Food' },
]

const products = [
  { id: 1, name: 'Latte', categoryId: 1 },
  { id: 2, name: 'Cake', categoryId: 2 },
]

const api = {
  getProducts(cb) {
    setTimeout(() => {
      cb(products)
    }, 500)
  },

  getCategory(id, cb) {
    setTimeout(() => {
      const category = categories.find(c => c.id === id)
      cb(category)
    }, 500)
  },
}

module.exports = api
