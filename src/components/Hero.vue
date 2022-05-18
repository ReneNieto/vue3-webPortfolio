<script setup>

</script>
<template>


    <section class="w-full lg:max-w-screen-xl mx-auto mb-52">

        <div class=" flex  items-center justify-between w-full">
            <div class="w-1/2">
                <h2>Web Developer</h2>
                <h1 class="heroHighlight">Rene Nieto</h1>
                <p>
                    Hello, I'm always looking for new challenges and opportunities to learn new things,
                    drop me a line!.
                </p>
          
                <router-link :to="'/contact'"  class="inline-block mt-10 px-5 py-3 mx-4 text-black rounded heroContact ">Contact Me</router-link>
                <a download href="./cv.pdf"
                    class="inline-block mt-10 px-10 py-3 mx-4 text-black rounded heroContact ">CV</a>
            </div>
            <div class="w-1/2">
                <img src="../assets/heroPicture.png" class="w-full h-full" alt="">

            </div>
        </div>

    </section>
</template>
<style scoped>
.heroHighlight {
    font-size: 72px;
    font-weight: 600;
    font-size: 72px;
    line-height: 88px;
    letter-spacing: 0.04em;
    background: #00F5A0;
    background: linear-gradient(to right, #00F5A0 0%, #00D9F5 75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.heroContact {
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
}
</style>
