<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    // показываем что берем 1.options это наш массив и передаем какой тип
    options: Array,
})

// console.log(props.options);

</script>


<template>
    <!-- мы через emit передаем цвета к родительскому -->
    <!-- {{ props.options }} -->
    <select
        @change="$emit('changed', props.options)"
        class="select select-bordered h-[53px] w-[261px] px-[12px] py-[15px] text-[14px] outline-none cursor-pointer rounded-[4px] border-[1px] border-solid border-[#D8D8D8]">
        <!-- мы здесь даем Index это номер и говорим ты становишься selected то есть выбранном если index == 0 -->
        <option v-for="(i, index) of props.options" :key="i.id" :selected="index == 0">{{ i }}</option>
    </select>
</template>

<style></style>