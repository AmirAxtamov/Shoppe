<script setup></script>

<template>
    <main class="mt-[128px]">
        <div class="product__main h-[1526px] w-[100%]">
            <div class=" h-[100%] w-[1248px] m-auto flex flex-col">

                <!-- product main -->
                <div class="h-[625px] w-[100%] flex justify-between">

                    <div class="left h-[100%] w-[700px] flex">

                        <div class="images h-[100%] flex flex-col w-[120px] gap-[40px]">
                            <img class="h-[120px] w-[120px]" src="../assets/images/Img 2.png" alt="">
                            <img class="h-[120px] w-[120px]" src="../assets/images/Img 2.png" alt="">
                            <img class="h-[120px] w-[120px]" src="../assets/images/Img 2.png" alt="">
                            <img class="h-[120px] w-[120px]" src="../assets/images/Img 2.png" alt="">
                        </div>

                        <div class="flex flex-col ml-[40px]">
                            <div class="mainImg h-[600px] w-[540px] flex flex-col">
                            </div>
                            <div class="border-[1px] mt-[24px] border-solid border-[#D8D8D8]"></div>
                        </div>

                    </div>

                    <div class="right h-[100%] w-[486px] flex flex-col">
                        <h2 class="text-[26px] font-[500] mb-[23px]">Lira Earrings</h2>
                        <p class="text-[#A18A68] text-[20px] font-[600]">$20.000</p>
                        <div class="mt-[64px] mb-[19px] flex items-center">
                            <svg v-for="s of 5" :key="s.id" class="mr-[5px]" width="18" height="18" viewBox="0 0 18 18"
                                fill="none">
                                <g clip-path="url(#clip0_1_198)">
                                    <path
                                        d="M17.9529 6.90433C17.8344 6.53985 17.5111 6.28181 17.1302 6.24734L11.9341 5.7756L9.88059 0.967905C9.72898 0.614689 9.384 0.386719 9.00002 0.386719C8.61605 0.386719 8.27093 0.614689 8.12028 0.967905L6.06676 5.7756L0.869868 6.24734C0.488911 6.28249 0.166319 6.54054 0.0471156 6.90433C-0.0714014 7.26881 0.0380517 7.66858 0.326173 7.92127L4.25399 11.3654L3.09587 16.4662C3.01114 16.8412 3.15671 17.229 3.4679 17.454C3.63517 17.5755 3.83169 17.6362 4.0289 17.6362C4.19837 17.6362 4.36797 17.5912 4.51945 17.5005L9.00002 14.8215L13.4798 17.5005C13.8084 17.6969 14.2216 17.6789 14.5321 17.454C14.8433 17.229 14.9889 16.8412 14.9042 16.4662L13.7461 11.3654L17.6739 7.92127C17.9619 7.66858 18.0714 7.26963 17.9529 6.90433Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_198">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class="ml-[24px] text-[#707070]">1 customer review</span>

                        </div>

                        <p class="text-[#707070]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat
                            hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris
                            eget arcu facilisis consequat sed eu felis.
                        </p>

                        <div class="flex items-center h-[53px] w-[100%] mt-[48px]">

                            <div class="h-[53px] text-[#707070] w-[102px] bg-[#EFEFEF] flex items-center justify-between
                            p-[14px] rounded-[4px]"><button class="text-[20px]">-</button> 1 <button
                                    class="text-[20px]">+</button></div>
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
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#979797" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                                    <path
                                        d="M9.5 3H6.5C5.94772 3 5.5 3.44772 5.5 4V7H9.5C9.61374 6.99748 9.7216 7.05039 9.78923 7.14188C9.85685 7.23336 9.87578 7.35201 9.84 7.46L9.1 9.66C9.03181 9.86192 8.84312 9.99842 8.63 10H5.5V17.5C5.5 17.7761 5.27614 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.223858 10 0 9.77614 0 9.5V7.5C0 7.22386 0.223858 7 0.5 7H2V4C2 1.79086 3.79086 0 6 0H9.5C9.77614 0 10 0.223858 10 0.5V2.5C10 2.77614 9.77614 3 9.5 3Z"
                                        fill="#979797" />
                                </svg>

                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.50001C6.51472 4.50001 4.5 6.51473 4.5 9.00001C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9.00001C13.5027 7.80572 13.0294 6.65958 12.1849 5.81509C11.3404 4.9706 10.1943 4.49735 9 4.50001ZM6.25 9C6.25 10.5188 7.48122 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9Z"
                                        fill="#979797" />
                                </svg>

                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <path
                                        d="M19.9708 2.46378C19.4547 3.15213 18.8309 3.75258 18.1235 4.24195C18.1235 4.42177 18.1235 4.60158 18.1235 4.79139C18.1292 8.0568 16.8249 11.1879 14.5029 13.4828C12.181 15.7777 9.03567 17.0443 5.77211 16.9988C3.88538 17.0051 2.02281 16.5743 0.330301 15.7401C0.239042 15.7003 0.18018 15.61 0.180527 15.5103V15.4005C0.180527 15.257 0.296758 15.1407 0.440136 15.1407C2.29475 15.0796 4.0832 14.4366 5.55244 13.3026C3.87376 13.2688 2.36338 12.2744 1.66829 10.7453C1.63318 10.6617 1.64411 10.5659 1.69713 10.4925C1.75016 10.419 1.83761 10.3785 1.9279 10.3856C2.43809 10.4369 2.95337 10.3894 3.44561 10.2458C1.59249 9.86109 0.200074 8.32265 0.000797149 6.43969C-0.00628542 6.34936 0.0341943 6.26187 0.107613 6.20882C0.181031 6.15577 0.276775 6.14483 0.360256 6.17996C0.857554 6.39939 1.39439 6.51496 1.93788 6.51961C0.314106 5.45384 -0.387258 3.42672 0.230452 1.58469C0.294214 1.4057 0.447402 1.27347 0.633723 1.2366C0.820043 1.19972 1.01201 1.26365 1.13908 1.40487C3.33027 3.73695 6.34099 5.12662 9.53645 5.28088C9.4546 4.95427 9.41434 4.61862 9.41663 4.28191C9.44652 2.51636 10.5389 0.943567 12.1825 0.299861C13.826 -0.343846 15.6953 0.0689272 16.9153 1.34494C17.747 1.18651 18.551 0.907164 19.3018 0.515789C19.3568 0.481454 19.4265 0.481454 19.4815 0.515789C19.5158 0.57081 19.5158 0.640583 19.4815 0.695604C19.1178 1.52835 18.5035 2.2268 17.7241 2.69355C18.4066 2.6144 19.0771 2.45341 19.7211 2.21404C19.7754 2.17713 19.8466 2.17713 19.9009 2.21404C19.9463 2.23482 19.9802 2.27457 19.9937 2.32269C20.0072 2.37081 19.9988 2.42242 19.9708 2.46378Z"
                                        fill="#979797" />
                                </svg>
                            </div>


                        </div>
                        <!-- SKU and categories -->
                        <div class="flex items-center mt-[37px]">
                            <p class="text-[#000]">SKU: <span class="text-[#707070] ml-[12px]">12</span></p>
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