<script setup>

</script>

<template>
    <div class="not-found">
        <h1>Товар удален или перемещен 😢</h1>
        <p>Извините, но страница, которую вы ищете, была удалена или перемещена.</p>
        <router-link to="/">Вернуться на главную страницу</router-link>
    </div>
</template>


<style scoped>
.not-found {
    text-align: center;
    margin-top: 100px;
    font-size: 45px;
}
</style>