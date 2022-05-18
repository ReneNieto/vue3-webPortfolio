<script setup>


</script>
<template >
    <section class="  lg:max-w-screen-xl mx-auto mb-52 ">
        <h1 class="font-semibold text-2xl mb-8">Projects</h1>

        <div class="flex flex-wrap justify-center items-center gap-10 w-full">
            <div class="w-[610px] h-[580px] bg-neutral-700 rounded ">
                <div class="flex flex-col   h-full">
                    <div class="w-full h-1/2 rounded">
                        <img class="w-full h-[300px] rounded" src="../assets/react-Chat.jpeg" alt="">
                    </div>
                    <h2 class="text-xl font-semibold uppercase text-white px-4 mt-8 mb-4">Real time chat</h2>
                    <div class="flex flex-wrap items-center w-full gap-2 px-4">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">HTML
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">Tailwind
                        </a>

                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">JavaScript
                        </a>
                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">ReactJs
                        </a>
                        <a href="https://laravel.com/" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">Laravel
                        </a>
                        <a href="https://pusher.com/docs/" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">Pusher
                        </a>
                    </div>
                    <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptate
                        consequuntur
                        mollitia
                        omnis, laudantium aspernatur dolore aperiam eos nulla a doloremque debitis
                    </p>
                </div>
            </div>


            <div class="w-[610px] h-[580px] bg-neutral-700 rounded ">
                <div class="flex flex-col   h-full">
                    <div class="w-full h-1/2 rounded">
                        <img class="w-full h-[300px] rounded" src="../assets/infinityScroll.jpeg" alt="">
                    </div>
                    <h2 class="text-xl font-semibold uppercase text-white px-4 mt-8 mb-4">looping Gallery</h2>
                    <div class="flex items-center w-full mb-4 px-4">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">HTML
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">CSS
                        </a>

                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                            class="flex justify-center items-center text-xs text-black uppercase px-4 py-2 mx-1 rounded w-fit projectTag">JavaScript
                        </a>
                    </div>
                    <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptate
                        consequuntur
                        mollitia
                        omnis, laudantium aspernatur dolore aperiam eos nulla a doloremque debitis
                    </p>
                </div>
            </div>
        </div>



        <a href="/projects"
            class=" block w-fit px-16 py-4 text-base font-medium text-black rounded mx-auto mt-12  projectsBtn"> SEE
            ALL
            PROJECTS</a>

    </section>


</template>
<style scoped>
.projectsBtn {
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
}

.projectTag {
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
}
</style>