import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('counter', () => {
    
    const account = ref({
        username: '',
        password: '',
        email: '',
        cart: [],
        favorite: [],

    })

  return {  }
})
