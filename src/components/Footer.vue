<script setup>
import FacebookIcon from './icons/FacebookIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
import LinkedInIcon from './icons/LinkedInIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';

</script>


<template>
    <footer class="h-[159px] w-[100%] mt-[249px] mb-[90px]">
        <div class="h-[100%] w-[1248px] flex m-auto">

            <div class="left w-[50%] h-[100%] flex flex-col justify-around">
                <div class="flex h-[50px] gap-[41px]">
                    <button class="text-[#707070]">CONTACT</button>
                    <button class="text-[#707070]">TERMS OF SERVICES</button>
                    <button class="text-[#707070]">SHOPPING AND RETURNS</button>
                </div>
                <p class="h-[20px]">By Amir Axtamov</p>
            </div>

            <div class="right h-[100%] w-[50%] flex flex-col justify-around items-end">

                <!-- input -->
                <div class="w-[396px] h-[50px] flex items-center justify-between relative">
                    <input placeholder="Give an email, get the newsletter." type="text"
                        class="outline-none w-[396px] h-[50px] py-[13px] border-b-[1px] border-solid border-[#707070] bg-[transparent]"
                        name="" id="">
                    <button class="absolute right-[0]">
                        <svg width="25" height="9" viewBox="0 0 25 9" fill="none">
                            <path
                                d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z"
                                fill="#707070" />
                        </svg>

                    </button>
                </div>

                <div class="flex w-[396px] h-[20px] justify-end gap-[30px] cursor-pointer">

                    <LinkedInIcon/>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />


                </div>

            </div>
        </div>
    </footer>
</template>

<style></style>