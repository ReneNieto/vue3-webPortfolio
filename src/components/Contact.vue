<script setup>
import { ref } from 'vue';
import Header from './Header.vue'
import Footer from './Footer.vue';

const form = ref('')
let errorRender = ref(false)
let successRender = ref(false)


async function handleSubmit(event) {
    const status = ref('')
    console.log(status);



    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.value.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            successRender.value = true
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    errorRender.value = false
                } else {
                    errorRender.value = true
                }
            })
        }
    }).catch(error => {
        errorRender = true
    });
}

</script>
<template>
    <Header />
    <div class="w-full h-[calc(100vh-96px)]  flex justify-center items-center">

        <form ref="form" action="https://formspree.io/f/xlezaawo" @submit.prevent="handleSubmit" method="POST"
            class="flex flex-col justify-center">
            <label>Name:</label>
            <input type="text" name="name" placeholder="Bruce Wayne"
                class="mb-8 py-2 px-2 border border-teal-500 rounded-md bg-[#041f31]" />
            <label>Email:</label>
            <input type="email" name="email" placeholder="bwayne@wayne-ent.com"
                class="mb-8  py-2 px-2 border border-teal-500 rounded-md bg-[#041f31]" />
            <label>Message:</label>
            <textarea type="text" name="message" placeholder="Hello!"
                class="mb-8  py-2 px-2 border border-teal-500 rounded-md bg-[#041f31]" />
            <button class="px-56 py-4 rounded-md submitBtn text-black">Submit</button>
            <p v-if="successRender">Thanks for your submission!</p>
            <p v-if="errorRender">Oops! There was a problem submitting your form</p>

        </form>
    </div>

    <Footer />
</template>
<style scoped>
.submitBtn {
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
}
</style>