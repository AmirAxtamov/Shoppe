<script setup>
import { ref } from 'vue';



const tab = ref(1)



</script>


<template>
    <div class="mt-[128px] h-[650px] w-[100%]">
        <div class="h-[100%]  w-[500px] m-auto flex flex-col items-center">
            <h3 class="text-[33px] font-[600] text-[#000]">My account</h3>
    
            <div class="h-[60px] w-[500px] rounded-[8px] bg-[#EFEFEF] mt-[64px] flex items-center justify-between">

                <div @click="tab = 1" class="h-[50px] w-[236px] px-[5px] flex items-center justify-center">
                    <button  class="text-[20px] font-[500]"
                        :class="{'rounded-[8px] h-[100%] w-[100%] bg-[#fff] text-[20px] font-[500] ml-[5px]': tab == 1}">Sign
                        In</button>
                </div>
                <div @click="tab = 2" class="h-[50px] w-[236px] flex items-center justify-center">
                    <button class="text-[20px] font-[500] "
                        :class="{'rounded-[8px] h-[50px] w-[236px] bg-[#fff] text-[20px] font-[500] mr-[5px]': tab == 2}">Register</button>
                </div>
            </div>
    
            <!-- sign in -->
            <form v-if="tab == 1" @submit.prevent="" action=""
                class="mt-[126px] flex flex-col w-[100%] gap-[46px]">
    
                <input type="email"
                    class="outline-none h-[39px] w-[100%] bg-[transparent] text-[#707070] text-[14px] py-[12px] border-b-[1px] border-solid border-[#D8D8D8]"
                    placeholder="Email">
                <input type="password"
                    class="outline-none h-[39px] w-[100%] bg-[transparent] text-[#707070] text-[14px] py-[12px] border-b-[1px] border-solid border-[#D8D8D8]"
                    placeholder="Password">
                <div class="flex items-center justify-start mt-[-30px]">
                    <input class="checkbox rounded-[0%] h-[17px] w-[17px]" type="checkbox" name="" id=""><span
                        class="text-[16px] text-[#000] ml-[8px]">Remember me</span>
                </div>
                <button class="w-[100%] h-[53px] font-[700] text-[#fff] bg-[#000] ">SIGN IN</button>
                <p class="text-[#000] mt-[-33px] text-center cursor-pointer">Have you forgotten your password?</p>
            </form>
            <!-- registration -->
            <form v-if="tab == 2" @submit.prevent="" action=""
                class="mt-[80px] flex flex-col w-[100%] gap-[46px]">
    
                <input type="text"
                    class="outline-none h-[39px] w-[100%] bg-[transparent] text-[#707070] text-[14px] py-[12px] border-b-[1px] border-solid border-[#D8D8D8]"
                    placeholder="Name">
                <input type="email"
                    class="outline-none h-[39px] w-[100%] bg-[transparent] text-[#707070] text-[14px] py-[12px] border-b-[1px] border-solid border-[#D8D8D8]"
                    placeholder="Email">
                <input type="password"
                    class="outline-none h-[39px] w-[100%] bg-[transparent] text-[#707070] text-[14px] py-[12px] border-b-[1px] border-solid border-[#D8D8D8]"
                    placeholder="Password">
                <div class="flex items-center justify-start mt-[-30px]">
                    <input class="checkbox rounded-[0%] h-[17px] w-[17px]" type="checkbox" name="" id=""><span
                        class="text-[16px] text-[#000] ml-[8px]">Remember me</span>
                </div>
                <button class="w-[100%] h-[53px] font-[700] text-[#fff] bg-[#000] ">Registration</button>
            </form>
    
        </div>
    </div>
</template>


<style>

</style>