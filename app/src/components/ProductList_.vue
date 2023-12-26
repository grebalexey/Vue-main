<script>
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
    addToCart(product) {
      // Логика добавления в корзину
      if (!this.isInCart(product)) {
        this.cart.push(product)
      } else {
        const index = this.cart.findIndex((item) => item.id === product.id)
        if (index !== -1) {
          this.cart.splice(index, 1)
        }
      }
    },
    isInCart: function (product) {
      // Проверка, есть ли продукт уже в корзине
      return this.cart.some(function (item) {
        return item.id === product.id
      })
    }
  }
}
</script>
<template>
  <div class="catalog">
    <div class="catalog__row">
      <div v-for="product in products" :key="product.id" class="catalog__item-container">
        <div class="catalog-item">
          <div class="catalog-item__image">
            <button class="catalog-item__fav">
              <svg>
                <use href="../assets/sprite.svg#"></use>
              </svg>
            </button>
            <img :src="product.image" alt="" />
          </div>
          <a class="catalog-item__name" href="#"> {{ product.title }} </a>
          <div class="catalog-item__bottom">
            <div class="catalog-item__price">
              <div class="catalog-item__label">Цена:</div>
              <div class="catalog-item__value">{{ product.price }} руб.</div>
            </div>
            <button class="catalog-item__cart" @click="addToCart(product)">
              <svg v-if="!isInCart(product)">
                <use href="../assets/sprite.svg#icon-plus"></use>
              </svg>
              <svg v-else>
                <use href="../assets/sprite.svg#icon-check"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.catalog-item__image img {
  max-width: 100%;
  max-height: 112px;
}
</style>
