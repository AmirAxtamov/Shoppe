<script setup>
import SelectItem from '@/components/SelectItem.vue';
import Controller from '@/components/Controller.vue';
import { useProductsStore } from '@/stores/products';
import ProductsComp from '@/components/ProductsComp.vue';
import { computed, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

// store products
const { fetch_product, sortByParams } = useProductsStore()
const { products, fallback, filterBy } = storeToRefs(useProductsStore())

fetch_product()



// console.log(productStore.fetch_product());


// filter by colors
const color_option = ref(['Any colors', 'Gold', 'White', 'Silver', 'Rose Gold', 'Black', 'Multicolor', 'Pink', 'Red'])
// filter by materials
const materials_option = ref(['Any materials', 'Gold', 'Platinum', 'Titanium', 'Silver', 'brass', 'glass'])

const filterByConstructor = (type, item) => {
    switch (type) {
        case "color":
            filterBy.value[0] = event.target.value
            break;
        case 'material':
            filterBy.value[1] = event.target.value
            break;
        case 'material':
            // filterBy.value[2] = event.target.value
            break;
        case 'material':
            // filterBy.value[3] = event.target.value
            break;
        default:
    }
    sortByParams(filterBy.value)
    // console.log(filterBy.value);
    
}

 

</script>

<template>
    <main class="catalog w-[100%]">
        <div class="catalog__wrapper h-[100%] w-[1248px] mt-[96px] m-auto flex relative">
            <!-- left filter -->
            <div class="catalog__wrapper__left h-[500px] flex flex-col w-[262px] sticky top-0">
                <h3 class="text-[33px] font-[500]">Shop The Latest</h3>
                <!-- input -->
                <div class="w-[261px] h-[35px] mt-[20px] flex items-center justify-between relative">
                    <input placeholder="Search..." type="text"
                        class="outline-none w-[261px] h-[35px] py-[11px] text-[14px] border-b-[1px] border-solid border-[#D8D8D8] bg-[transparent]"
                        name="" id="">
                    <button class="absolute right-[0]">
                        <svg fill="none" height="19px" width="19px" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="black" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </button>
                </div>
                <!-- filter, sale, options -->
                <div class="mt-[39px]">

                    <div class="flex flex-col gap-[16px]">
                        <!-- we also use here props :options - это название и передаем color_option это массив с цветами -->
                        <p class="text-[22px]">Filter by Colors</p>
                        <!-- !!!!!!!!!!!!!!!!!! -->
                        <SelectItem @changed="filterByConstructor('color')" :options="color_option" />
                        <p class="text-[22px] mt-[30px]">Filter by Materials</p>
                        <SelectItem @changed="filterByConstructor('material')" :options="materials_option" />
                    </div>
                    <!-- controllers -->
                    <Controller />


                </div>

            </div>
            <!-- right goods -->
            <div v-if="fallback.length > 0"
                class="catalog__wrapper__right h-[100%] ml-[35px] flex flex-wrap gap-[24px] pt-[70px]">
                <!-- all blocks -->
                <ProductsComp :products_item="fallback" />
            </div>

            <!-- skeleton -->
            <div v-if="fallback == 0" class="flex flex-wrap gap-[24px] ml-[35px] pt-[70px]">
                <div v-for="i of 6" :key="i.id" class="flex h-[392px] flex-col gap-[16px] w-[300px] ">
                    <div class="skeleton h-[300px] w-[100%] w-full"></div>
                    <div class="skeleton h-4 w-28"></div>
                    <div class="skeleton h-4 w-full"></div>
                    <div class="skeleton h-4 w-full"></div>
                </div>
            </div>

        </div>
    </main>
</template>

<style scoped>

</style>
