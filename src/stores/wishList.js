import { defineStore } from 'pinia'

export default defineStore('wishListStore', {
  state: () => {
    return {
      wishList: []
    }
  }
})
