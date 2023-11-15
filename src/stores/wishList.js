import { defineStore } from 'pinia'

export default defineStore('wishListStore', {
  state: () => {
    return {
      wishList: []
    }
  },
  getters: {
    
  },
  actions: {
    wishListUpdate() {
        this.wishList = JSON.parse(window.localStorage.getItem('wishList')) || []
    }
  }
})
