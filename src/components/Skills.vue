<script setup>
import html from '../assets/skills/html.svg'
import css from '../assets/skills/css3.svg'
import js from '../assets/skills/js.svg'
import vue from '../assets/skills/vue.svg'
import react from '../assets/skills/react.svg'
import laravel from '../assets/skills/laravel.svg'
import tailwind from '../assets/skills/tailwind.svg'
import php from '../assets/skills/php.svg'

const skills = [
    {
        name: 'HTML',
        icon: html,
        color: '#e34c26'
    },
    {
        name: 'CSS',
        icon: css,
        color: '#2965f1'
    },
    {
        name: 'JavaScript',
        icon: js,
        color: '#f0db4f'
    },
    {
        name: 'Vue',
        icon: vue,
        color: '#41b883'
    },
    {
        name: 'React',
        icon: react,
        color: '#61dafb'
    },
    {
        name: 'Laravel',
        icon: laravel,
        color: '#f78f'
    },
    {
        name: 'Tailwind',
        icon: tailwind,
        color: '#00d2ff'
    },
    {
        name: 'PHP',
        icon: php,
        color: '#4f5d95'
    }
]
</script>
<template>

    <section class="w-full lg:max-w-screen-xl mx-auto  mb-52">
        <h1 class="font-semibold text-2xl mb-8">Skills</h1>
        <div class="flex justify-evenly items-center flex-wrap gap-4">
            <div v-for="item in skills" :key="item.name" class="w-1/5 h-1/2 flex flex-col items-center justify-center">
                <img :src="item.icon" class="w-24 h-full mb-8">
                <p :style="`color: ${item.color}`">{{ item.name }}</p>
            </div>
        </div>
    </section>
</template>
