<script setup>
import EmailIcon from '@/components/icons/EmailIcon.vue';
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import StarsIcon from '@/components/icons/StarsIcon.vue';
import StarsIconWhite from '@/components/icons/StarsIconWhite.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import router from '@/router';
import { useProductsStore } from '@/stores/products';
import { useAccountStore } from '@/stores/account';
// import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

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

const eventImage = ref(0)
const imageLoader = ref(false)
const tab = ref(1)

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

function changeImage(i, index) {

  eventImage.value = index
  imageLoader.value = true

  setTimeout(() => {
    imageLoader.value = false
  }, 600);
}

// const account = useAccountStore()
// function checkAuth() {
//   console.log(account);
//   if(!account.auth ){
//     my_modal_1.showModal()
//   }

// }



let _description = ref()
let _name = ref('')
let _email = ref('')
// let _rating = ref(1)


function addReviewFunc() {
    //   console.log(eventPr.value);
    let reviewProduct = eventPr.value
    console.log(reviewProduct.reviews.push({
      name: _name.value,
      description: _description.value,
      email: _email.value,
      // rating: _rating.value
    }));
    console.log(reviewProduct.reviews)
  //   console.log(eventPrStore);


}

</script>

<template>
    <main class="mt-[128px]">
        <div class="product__main h-[1526px] w-[100%]">
            <div class=" h-[100%] w-[1248px] m-auto flex flex-col">
                <!-- product main -->
                <div class="h-[625px] w-[100%] flex justify-between">
    
                    <div class="left h-[100%] w-[700px] flex">
    
                        <div class="images h-[600px] flex flex-col w-[120px] gap-[40px] overflow-hidden overflow-y-scroll">
                            <img @click="changeImage(i, index)" v-for="(i, index) of eventPr.img" :key="i.id"
                                class="cursor-pointer h-[120px] w-[120px]" :src="i" alt="">
                        </div>
    
                        <div class="flex flex-col ml-[40px]">
                            <div :style="`background-image: url(${eventPr.img[eventImage]});`"
                                class="mainImg cursor-pointer h-[600px] w-[540px] flex flex-col">
                                <div :class="{ imgloaderHide: !imageLoader }"
                                    class="imgloader h-[100%] w-[100%] bg-[#ffffff94]"></div>
                            </div>
                            <div class="border-[1px] mt-[24px] border-solid border-[#D8D8D8]"></div>
                        </div>
    
                    </div>
                    <div class="right h-[100%] w-[486px] flex flex-col">
                        <h2 v-if="eventPr.id" class="text-[26px] font-[500] mb-[23px]">{{ eventPr.title }}</h2>
                        <h2 v-else class="skeleton h-[26px] w-[80%] mb-[23px] "></h2>
                        <p v-if="eventPr.id" class="text-[#A18A68] text-[20px] font-[600]">
                            {{ formattedPrice.format(eventPr.price) }}</p>
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
                                <button @click="selectedCount < eventPr.quantity ? selectedCount++ : false"
                                    class="text-[20px]">+</button>
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
                            <p class="text-[#000]">Quantity: <span class="text-[#707070] ml-[12px]">{{
                                    eventPr.quantity }}</span></p>
                        </div>
                        <div class="flex items-center mt-[6px]">
                            <p class="text-[#000]">Categories: <span class="text-[#707070] ml-[12px]">Fashion,
                                    Style</span></p>
                        </div>
    
                    </div>
    
                </div>
    
                <!-- additional information -->
                <div class="mt-[100px] w-[100%] flex flex-col">
                    <div class="flex gap-[96px] text-[20px] text-[#707070]">
                        <button @click="tab = 1" :class="{ 'text-[#000] font-[600]': tab == 1 }">Description</button>
                        <button @click="tab = 2" :class="{ 'text-[#000] font-[600]': tab == 2 }">Additional
                            information</button>
                        <button @click="tab = 3" :class="{ 'text-[#000] font-[600]': tab == 3 }">Reviews</button>
                    </div>
                    <div class="h-[1px] w-[100%] bg-[#D8D8D8] my-[34px] "></div>
                    <div v-if="tab == 1" class=" text-[#707070]">{{ eventPr.desc }}</div>
                    <div v-if="tab == 2">
                        <ul class="">
                            <li v-for="(info, index) of eventPr.additional" :key="info.id" class="font-[500]">{{ index
                                }}:
                                <span class="text-[#707070] ml-[10px] font-[400]">{{ info }}</span>
                            </li>
                        </ul>
                    </div>
                    <div v-if="tab == 3">
    
                        <div class="w-[100%] flex justify-between mt-[10px]">
    
                            <div class="left h-[100%] w-[580px] flex flex-col ">
                                <h4 class="text-[#000] text-[20px] mb-[76px]">Reviews for {{eventPr.title}}</h4>
                                <div v-for="review of eventPr.reviews" :key="review.id"
                                    class="flex flex-col gap-[16px] mb-[24px]">
                                    <p class="text-[#000] text-[20px] flex items-center">{{ review.name }} <span
                                            class="ml-[16px] text-[14px]  text-[#707070]">{{ review.date }}</span></p>
                                    <div class="flex flex-row">
                                        <StarsIcon v-for="s of review.rating" :key="s.id" />
                                        <StarsIconWhite v-for="star of 5 - review.rating" :key="star.id" />
    
                                    </div>
                                    <p class="mt-[8px] text-[#707070]">{{ review.description }}</p>
                                    <div class="h-[0.1px] bg-[#D8D8D8] w-[100%] mt-[15px]"></div>
                                </div>
    
                            </div>
    
    
                            <!-- form -->
                            <div @submit.prevent="addReviewFunc()" class="right h-[100%] w-[580px] flex flex-col">
                                <h4 class="text-[20px] text-[#000]">Add a Review</h4>
                                <p class="text-[#707070] text-[13px] mt-[11px]">Your email address will not be
                                    published. Required fields are marked *</p>
                                <form action="#" class="flex flex-col gap-[46px] mt-[46px]">
                                    <textarea v-model="_review"
                                        class="resize-none outline-none py-[10px] text-[14px] text-[#707070] border-b-[1px] border-solid border-[#D8D8D8]"
                                        rows="3" cols="40" placeholder="Your Review*"></textarea>
                                    <input type="text" v-model="_name"
                                        class="outline-none h-[35px] w-[100%] text-[#707070] text-[14px] py-[13px] border-b-[1px] border-solid border-[#D8D8D8]"
                                        placeholder="Enter your name*">
                                    <input type="email" v-model="_email"
                                        class="outline-none h-[35px] w-[100%] text-[#707070] text-[14px] py-[13px] border-b-[1px] border-solid border-[#D8D8D8]"
                                        placeholder="Enter your Email*">
                                    <div class="flex items-start mt-[-20px]"><input
                                            class="checkbox rounded-[0%] h-[18px] w-[18px]" type="checkbox" name=""
                                            id=""><span class="text-[12px] text-[#707070] ml-[8px]">Save my name, email,
                                            and website in this browser for the next time I comment</span></div>
    
                                    <div class="flex flex-col">
                                        <p class="text-[#707070] text-[14px]">Your Rating*</p>
                                        <div class="flex flex-row mt-[13px]">
                                            <div class="rating">
                                                <input type="radio" name="rating-1" class="mask mask-star" />
                                                <input type="radio" name="rating-1" class="mask mask-star"
                                                    checked="checked" />
                                                <input type="radio" name="rating-1" class="mask mask-star" />
                                                <input type="radio" name="rating-1" class="mask mask-star" />
                                                <input type="radio" name="rating-1" class="mask mask-star" />
                                            </div>
                                        </div>
                                    </div>
    
                                    <button class="rounded-[4px] h-[53px] w-[123px] bg-[#000] text-[#fff]">Submit</button>
    
                                </form>
                            </div>
                            <!-- modal -->
                            <dialog id="my_modal_1" class="modal">
                                <div class="modal-box">
                                    <h3 class="text-lg font-bold">Hello!</h3>
                                    <p class="py-4">Sign up or log in to your account</p>
                                    <div class="modal-action">
                                        <form method="dialog" class="flex gap-[10px]">
                                            <button @click="$router.push('/registration')" class="btn">Sign Up</button>
                                            <button class="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            <!--  -->
                        </div>
    
                    </div>
    
    
                </div>
    
    
                <!-- similar items -->
                <div class="mt-[96px]  w-[100%] flex flex-col">
                    <h3 class="text-[#000] text-[26px]">Similar Items</h3>
                    <div class="flex items-center w-[100%] mt-[47px] gap-[54px]">
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

.images {
    overflow-y: scroll;
    scrollbar-width: none;
    /* Убирает полосу прокрутки в Firefox */
}

.imgloader {
    backdrop-filter: blur(5px);
}

.imgloaderHide {
    opacity: 0;
    transition-duration: 0s;
    pointer-events: none;
}
</style>