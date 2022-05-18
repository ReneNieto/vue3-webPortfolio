import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import ProjectView from '../components/ProjectView.vue'
import Contact from '../components/Contact.vue'




const routes = [
    { path: '/', name: 'Home' ,component: Home },
    { path: '/projects',name: 'Projects', component: ProjectView , },
    { path: '/contact',name: 'Contact' , component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router