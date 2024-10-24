<script setup>
import GoodsMain from "@/components/GoodsMain.vue";

</script>

<template>
  <main>
    <div class="first__screen h-[646px] w-[100%] mt-[16px]">
      <div class="first__screen__wrapper h-[646px] w-[1248px] m-auto rounded-[16px]">
        <div class="first__screen__wrappper__text h-[100%] w-[50%] px-[39px] flex flex-col items-start justify-center">

          <h2 class="text-[43px]">Gold big hoops </h2>
          <p class="text-[35px]">$ 68,00</p>
          <button class="bg-[transparent] text-[20px] h-[53px] w-[193px] mt-[40px] rounded-[6px] border-[2px] border-solid border-[#fff]">View Product</button>

        </div>
      </div>
    </div>
    <GoodsMain />
  </main>
</template>

<style scoped>
.first__screen__wrapper{
  background-image: url('../assets/images/first-screen2.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

</style>