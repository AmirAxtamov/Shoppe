<script setup>

</script>


<template>
    <div class="mt-[39px]">
        <div class="flex w-[100%] items-center justify-between">
            <span>On sale</span>
            <!-- <button class="h-[20px] w-[33px] bg-[#707070] rounded-[16px]">
                <div class="rounded-[50%] h-[14px] w-[14px] m-[3px] bg-[#fff]">
                </div>
            </button> -->
            <input type="checkbox" value="synthwave" class="toggle duration-[.3s] theme-controller" />
        </div>
        <div class="mt-[30px] flex w-[100%] items-center justify-between">
            <span>In stock</span>
            <input type="checkbox" value="synthwave" class="toggle duration-[.3s] theme-controller" />
        </div>
    </div>

</template>

<style>
.theme-controller {
    background-color: #707070;
}

.theme-controller:hover {
    background: #A18A68;
}
.theme-controller:checked {
    background: #A18A68;
    border: 1px solid #A18A68;

}
</style>