<script setup>
import EmailIcon from '@/components/icons/EmailIcon.vue';
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import StarsIcon from '@/components/icons/StarsIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import router from '@/router';
import { useProductsStore } from '@/stores/products';
// import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

// const { eventPr } = storeToRefs(useProductsStore()) // massiv

// 1 способ как получить getEventProduct и все остальное которое ты хочешь
// const productStore = useProductsStore() // так массивы
// productStore.products - or fallback doen't matter



// 2 способ
// const { getEventProduct } = useProductsStore() // a так мы функции принимаем
// getEventProduct(router.currentRoute.value.params.id)

const params = router.currentRoute.value.params.id
const productStore = useProductsStore()
const eventPr = ref([])

const stars = ref(0)
const selectedCount = ref(1)

const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
})

async function fetchProduct() {
    await productStore.fetch_product()
    eventPr.value = productStore.products.find(product => product.id == params)
    eventPr.value.reviews.forEach(item => stars.value += item.rating)

}


fetchProduct()

</script>

<template>
    <main class="mt-[128px]">
        {{ stars }}
        <div class="product__main h-[1526px] w-[100%]">
            <div class=" h-[100%] w-[1248px] m-auto flex flex-col">
                <!-- product main -->
                <div class="h-[625px] w-[100%] flex justify-between">

                    <div class="left h-[100%] w-[700px] flex">

                        <div class="images h-[100%] flex flex-col w-[120px] gap-[40px]">
                            <img v-for="i of eventPr.img" :key="i.id" class="h-[120px] w-[120px]" :src="i" alt="">
                            <!-- <img class="h-[120px] w-[120px]" src="../assets/images/Img 2.png" alt="">
                            <img class="h-[120px] w-[120px]" src="../assets/images/Img 2.png" alt="">
                            <img class="h-[120px] w-[120px]" src="../assets/images/Img 2.png" alt=""> -->
                        </div>

                        <div class="flex flex-col ml-[40px]">
                            <div class="mainImg h-[600px] w-[540px] flex flex-col">
                            </div>
                            <div class="border-[1px] mt-[24px] border-solid border-[#D8D8D8]"></div>
                        </div>

                    </div>
                    <div class="right h-[100%] w-[486px] flex flex-col">
                        <h2 v-if="eventPr.id" class="text-[26px] font-[500] mb-[23px]">{{ eventPr.title }}</h2>
                        <h2 v-else class="skeleton h-[26px] w-[80%] mb-[23px] "></h2>
                        <p v-if="eventPr.id" class="text-[#A18A68] text-[20px] font-[600]">{{formattedPrice.format(eventPr.price)}}</p>
                        <p v-else class="skeleton text-[#A18A68] w-[40%] h-[26px]"></p>
                        <div class="mt-[64px] mb-[19px] flex items-center">
                            <div v-if="eventPr.id" class="flex">
                                <StarsIcon v-for="s of stars / eventPr.reviews.length" :key="s.id" />
                            </div>
                            <span v-if="eventPr.id" class="ml-[24px] text-[#707070]">{{ eventPr.reviews.length }}
                                customer<span v-if="eventPr.reviews.length > 1">'s</span> review</span>

                        </div>

                        <p v-if="eventPr.id" class="text-[#707070]">
                            {{ eventPr.desc }}
                        </p>

                        <div class="flex items-center h-[53px] w-[100%] mt-[48px]">

                            <div class="h-[53px] text-[#707070] w-[102px] bg-[#EFEFEF] flex items-center justify-between
                            p-[14px] rounded-[4px]">
                                <button @click="selectedCount > 1 ? selectedCount-- : false" class="text-[20px]">-</button>
                                {{ selectedCount }}
                                <button @click="selectedCount < eventPr.quantity ? selectedCount++ : false" class="text-[20px]">+</button>
                            </div>
                            <button
                                class="border-[1px] rounded-[4px] font-[700] ml-[23px] border-solid border-[#000000] h-[53px] w-[360px]">ADD
                                TO CART</button>
                        </div>
                        <!-- icons -->
                        <div class="mt-[80px] flex items-center h-[20px] w-[240px]">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#979797" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                            <div class="h-[20px] w-[1px] bg-[#D8D8D8] mx-[39px]"></div>

                            <div class="flex items-center gap-[20px] cursor-pointer">

                                <EmailIcon />
                                <FacebookIcon />
                                <InstagramIcon />
                                <TwitterIcon />
                            </div>


                        </div>
                        <!-- SKU and categories -->
                        <div class="flex items-center mt-[37px]">
                            <p class="text-[#000]">Quantity: <span class="text-[#707070] ml-[12px]">{{ eventPr.quantity}}</span></p>
                        </div>
                        <div class="flex items-center mt-[6px]">
                            <p class="text-[#000]">Categories: <span class="text-[#707070] ml-[12px]">Fashion,
                                    Style</span></p>
                        </div>

                    </div>

                </div>

                <!-- additional information -->
                <div class="mt-[100px] h-[150px] w-[100%] flex flex-col">
                    <div class="flex gap-[96px] text-[20px] text-[#707070]">
                        <button class="text-[#000] font-[600]">Description</button>
                        <button>Additional information</button>
                        <button>Reviews(0)</button>
                    </div>
                    <div class="h-[1px] w-[100%] bg-[#D8D8D8] my-[34px]"></div>
                    <p class="text-[#707070]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
                        augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed
                        quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
                        odio, in molestie diam bibendum sed.</p>
                </div>

                <!-- similar items -->
                <div class="mt-[96px] h-[554px] w-[100%] flex flex-col">
                    <h3 class="text-[#000] text-[26px]">Similar Items</h3>
                    <div class="flex items-center w-[100%] mt-[47px] gap-[54px]">
                        <!-- blocks -->
                        <div class="h-[472px] w-[380px] cursor-pointer w-[300px] 
                        flex flex-col items-start relative">
                            <img class="rounded-[8px] h-[380px] w-[100%] bg-[gray]" src="../assets/images/Img 0111.png"
                                alt="image">

                            <h3 class="mt-[20px] text-[20px]">Ollie Earrings</h3>
                            <p class="mt-[7px] text-[20px] text-[#A18A68]">$ 25.000</p>
                        </div>
                        <div class="h-[472px] w-[380px] cursor-pointer w-[300px] 
                        flex flex-col items-start relative">
                            <img class="rounded-[8px] h-[380px] w-[100%] bg-[gray]" src="../assets/images/Img 0111.png"
                                alt="image">

                            <h3 class="mt-[20px] text-[20px]">Hal Earrings</h3>
                            <p class="mt-[7px] text-[20px] text-[#A18A68]">$ 30.000</p>
                        </div>
                        <div class="h-[472px] w-[380px] cursor-pointer w-[300px] 
                        flex flex-col items-start relative">
                            <img class="rounded-[8px] h-[380px] w-[100%] bg-[gray]" src="../assets/images/Img 0111.png"
                                alt="image">

                            <h3 class="mt-[20px] text-[20px]">Kaede Hair Pin Set Of 3</h3>
                            <p class="mt-[7px] text-[20px] text-[#A18A68]">$ 50.000</p>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </main>
</template>


<style scoped>
.mainImg {
    background-image: url('../assets/images/Img 01 (1).png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>