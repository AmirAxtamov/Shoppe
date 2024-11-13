<script setup>
import router from '@/router';
import { ref } from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
    // показываем что берем 1.options это наш массив и передаем какой тип
    products_item: Array,
})
</script>


<template>
    <div v-for="item of props.products_item" :key="item.id" @click="$router.push(`/catalog/${item.id}`)"
        class="h-[392px] cursor-pointer border-b-[1px] border-solid border-[#707070] w-[300px] flex flex-col items-start relative">
        <img class="rounded-[8px] h-[300px] w-[100%] bg-[gray]" :src="item.img[0]" :alt="item.title">
        <!-- discount -->
        <div v-show="item.discount > 1"
            class="absolute mt-[16px] text-center ml-[12px] h-[24px] w-[46px] bg-[#A18A68] rounded-[4px] py-[3px] text-[12px] text-[#fff]">
            -{{ item.discount }}%</div>
        <!-- sold out - quantity -->
        <div v-show="item.quantity < 1"
            class="absolute mt-[16px] text-center ml-[12px] h-[24px] w-[64px] bg-[#A18A68] rounded-[4px] py-[3px] text-[12px] text-[#fff]">
            Sold out</div>

        <h3 class="mt-[12px] text-[20px]">{{ item.title }}</h3>
        <p class="mt-[7px] text-[20px] text-[#A18A68]">$ {{ item.price }}</p>
    </div>
</template>

<style></style>