export default {
  data() {
    return {
      products: [],
      cart: []
    }
  },
  mounted() {
    this.fetchProduct()
  },

  methods: {
    async fetchProduct() {
      try {
        const response = await this.$axios.get('https://fakestoreapi.com/products')
        this.products = response.data
      } catch (error) {}
    },
    // Добавление товара в корзину
    addToCart(product) {
      if (!this.isInCart(product)) {
        this.cart.push(product)
      } else {
        const index = this.cart.findIndex((item) => item.id === product.id)
        if (index !== -1) {
          this.cart.splice(index, 1)
        }
      }
      console.log(this.cart)
    },
    isInCart(product) {
      return this.cart.some(function (item) {
        return item.id === product.id
      })
    }
  }
}
