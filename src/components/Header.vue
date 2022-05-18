<script setup>

</script>
<template>
    <section class="w-full lg:max-w-screen-xl mx-auto  h-24">
        <div class="flex items-center justify-between w-full h-full text-[#BDEBEA] px-3">
            <a href="/">Home</a>
            <div class="flex items-center justify-between w-60">
                <router-link :to="'/projects'" class="rounded-md px-5 py-3 ">Projects</router-link>
                <router-link :to="'/contact'" class="btnFocus rounded-md px-5 py-3 ">Contact</router-link>
            </div>
        </div>

    </section>

</template>
<style scoped>
.btnFocus {
    color: black;
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
}
</style>
