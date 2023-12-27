<script>
import productMixin from './productMixin'
export default {
  mixins: [productMixin],
  methods: {
    closeBasket() {
      document.body.classList.remove('is-hidden')
    }
  }
}
</script>

<template>
  <div class="flybasket">
    <div @click="closeBasket()" class="flybasket__shadow"></div>
    <div class="flybasket__wrapper">
      <div class="flybasket__header">Корзина</div>
      <div class="flybasket__body">
        <div v-for="cartItem in cart" :key="cartItem.id" class="flybasket-item">
          <div class="flybasket-item__row">
            <div class="flybasket-item__image">
              <img :src="cartItem.image" alt="" />
            </div>
            <div class="flybasket-item__content">
              <div class="flybasket-item__title">{{ cartItem.name }}</div>
              <div class="flybasket-item__value">{{ cartItem.title }}</div>
            </div>
            <button>
              <svg>
                <use href="../assets/sprite.svg#icon-remove"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flybasket__footer">
        <ul class="flybasket__list">
          <li class="flybasket__option">
            <div class="flybasket__option-label">Итого:</div>
            <div class="flybasket__option-value">21 498 руб.</div>
          </li>
          <li class="flybasket__option">
            <div class="flybasket__option-label">Налог 5%:</div>
            <div class="flybasket__option-value">1074 руб.</div>
          </li>
        </ul>
        <button class="flybasket__button flybasket__button--full-width">
          Оформить заказ
          <svg>
            <use href="../assets/sprite.svg#icon-arrowright"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flybasket {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 500;
}
.flybasket__shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  background: #000;
  cursor: pointer;
}
.flybasket__wrapper {
  position: relative;
  z-index: 50;

  display: flex;
  flex-direction: column;

  width: 385px;
  background: #fff;

  box-shadow: -10px 4px 24px 0px rgba(0, 0, 0, 0.1);
  height: 100%;
  margin-left: auto;
  padding: 32px 0 32px 32px;
  box-sizing: border-box;
}
.flybasket__header,
.flybasket__footer,
.flybasket__body {
  padding-right: 32px;
}

.flybasket__header {
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
}
.flybasket__footer {
  margin-top: auto;
}
.flybasket__list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.flybasket__option {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.flybasket__option + .flybasket__option {
  margin-top: 20px;
}

.flybasket__option:before {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 3px;
  border: 1px dashed #dfdfdf;
}
.flybasket__option-label,
.flybasket__option-value {
  position: relative;
  background-color: #fff;
}

.flybasket__button {
  position: relative;
  border-radius: 18px;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: #9dd458;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 22px 32px;
  margin-top: 24px;
}

.flybasket__button--full-width svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 32px;
  stroke: #fff;
  height: 12px;
  width: 13px;
}
.flybasket__button--full-width {
  width: 100%;
}

body:not(.is-hidden) .flybasket {
  display: none;
}
</style>
