<script setup>

</script>
<template>

    <section class="w-full lg:max-w-screen-xl mx-auto flex flex-col items-center">
        <div class="flex items-center w-full justify-center gap-20 mb-8">
            <a href="mailto: nietorene.98@gmail.com">
                <img src="../assets/gmail.png" alt="">
            </a>
            <a href="https://github.com/ReneNieto" target="_blank">
                <img src="../assets/github.png" alt="">
            </a>
            <a href="https://www.linkedin.com/in/rene-nieto-a955b9223/" target="_blank">
                <img src="../assets/linkedin.png" alt="">
            </a>

        </div>
        <div class="w-full flex justify-center items-center gap-20 mb-8 ">
            <router-link :to="'/projects'" >Projects</router-link>
             <router-link :to="'/contact'">Contact</router-link>
        </div>
        <div class="mb-8">
            <p class="">Rene Nieto 2022</p>
        </div>

    </section>
</template>
<style scoped>
</style>
