import { defineStore } from 'pinia'

export default defineStore('cartStore', {
  state: () => {
    return {
      cartNum: 0
    }
  }
})
