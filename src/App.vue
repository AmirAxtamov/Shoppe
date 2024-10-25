<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue'


// вызывается так import.meta.env.VITE_API

</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>

*{
  font-family: "DM Sans", sans-serif;
}

</style>
