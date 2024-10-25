<script setup>
import { useProductsStore } from '@/stores/products';
import { ref } from 'vue';

const productStore = useProductsStore()

let dataFunc = () => {




}


</script>

<template>
    <div class="h-[1170px] w-[100%] pt-[64px]">
        <div class="h-[100%] w-[1248px] m-auto flex flex-col">

            <div class="texts w-[100%] flex justify-between items-center">
                <h2 class="text-[33px] font-[550]">Shoppe The Latest</h2>
                <button class="text-[#A18A68] text-[20px] font-[500]">View All</button>
            </div>

            <!-- blocks -->
            <div v-if="productStore.products.length > 0"
                class="cursor-pointer h-[100%] w-[100%] mt-[40px] flex flex-wrap gap-[57px]">
                <!-- block -->
                <div @click="dataFunc()" v-for="item of productStore.products.slice(0, 6)" :key="item.id"
                    class="h-[472px] border-b-[1px] border-solid border-[#707070] w-[377px] flex flex-col items-start">
                    <!-- v-for="product in productStore.products.slice(0, 6)": Эта строка означает, что из массива products мы берем только первые 6 объектов с помощью метода slice(0, 6) -->
                    <img class="rounded-[8px] h-[380px] w-[100%] bg-[gray]" :src="item.img[0]" :alt="item.title">
                    <h3 class="mt-[12px] text-[20px]">{{ item.title }}</h3>
                    <p class="mt-[7px] text-[20px] text-[#A18A68]">$ {{ item.price }}</p>
                </div>

            </div>
            <!-- skeleton -->
            <div v-if="productStore.products.length == 0"
                class="cursor-pointer h-[100%] w-[100%] mt-[40px] flex flex-wrap gap-[57px]">
                <div v-for="i of 6" :key="i.id" class="flex h-[472px] w-[377px] flex-col gap-4">
                    <div class="skeleton h-[380px] w-full"></div>
                    <div class="skeleton h-4 w-28"></div>
                    <div class="skeleton h-4 w-full"></div>
                    <div class="skeleton h-4 w-full"></div>
                </div>
            </div>


        </div>
    </div>
</template>


<style scoped></style>