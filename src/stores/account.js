import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
    
  const auth = ref(false)
    const account = ref({
        username: '',
        password: '',
        email: '',
        cart: [],
        favorite: [],

    })

  return { auth }
})
