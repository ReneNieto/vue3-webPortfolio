<script setup>
import Header from './Header.vue';
import ReactChat from '../assets/react-Chat.jpeg';
import LoopGallery from '../assets/infinityScroll.jpeg'
import VueChat from '../assets/vue-chat.jpeg'
import Calculator from '../assets/calculator.jpeg'
import Footer from './Footer.vue'

const projects = [
    {
        name: 'Real time chat',
        description: 'A real time chat application built with React.js using using some libraries such as Formik, emojiPicker and ChackraUI .',
        tags: ['HTML', 'Tailwind', 'Charkra.UI', 'JavaScript', 'ReactJs', 'Laravel', 'Mysql'],
        image: ReactChat,
        gitLink: 'https://github.com/ReneNieto/react-chatApp'

    },
    {
        name: 'Loop Galery',
        description: 'A looping scroll gallery built JavaScript.',
        tags: ['HTML', 'css', 'JavaScript'],
        image: LoopGallery,
        gitLink: 'https://github.com/ReneNieto/js-gallery'


    },
    {
        name: 'Calculator',
        description: 'A functional calculator created with JavaScript ',
        tags: ['HTML', 'css', 'JavaScript'],
        image: Calculator,
        gitLink: 'https://github.com/ReneNieto/Calculator'

    },
    {
        name: 'Real time chat',
        description: 'A real time chat application migrated from React.js to Vue 3 using FormKit, Pinia, Avatars and more.',
        tags: ['HTML', 'Tailwind', 'JavaScript', 'VueJs', 'Laravel', 'Mysql'],
        image: VueChat,
        gitLink: 'https://github.com/ReneNieto/vue3-chatApp'


    },

]
console.log(projects[0].gitLink);

</script>
<template >
    <Header />
    <section class="  lg:max-w-screen-xl mx-auto mt-52 mb-52 ">
        <h1 class="font-semibold text-2xl mb-8">Projects</h1>

        <div class="flex flex-wrap justify-center items-center gap-10 w-full">
            <div v-for="item in projects" :key="item.name" class="w-[610px] h-[580px] bg-neutral-700 rounded relative ">
                <div class="flex flex-col h-full">
                    <div class="w-full h-1/2 rounded">
                        <img class="w-full h-[300px] rounded" :src="item.image">
                    </div>
                    <h2 class="text-xl font-semibold uppercase text-white px-4 mt-8 mb-4">{{ item.name }}</h2>
                    <div class="flex flex-wrap items-center w-full gap-2 px-4 mb-4">
                        <a v-for="tag in item.tags" :key="tag" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">{{
                                    tag
                            }}
                        </a>

                    </div>
                    <p class="px-4">
                        {{ item.description }}
                    </p>
                    <a :href='item.gitLink' target="_blank" class="absolute top-0 right-0">
                        <img src="../assets/github.png" alt="">
                    </a>
                </div>
            </div>



        </div>
    </section>

    <Footer />
</template>
<style scoped>
.projectTag {
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
}
</style>
