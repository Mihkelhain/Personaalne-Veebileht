import { createRouter, createWebHistory } from 'vue-router'
import index from '../Index.vue'
import blog from '../Blog.vue'
import contactMe from '../Contact.vue'
import sshPortal from '../ssh.vue'

const routes = [
    { path: '/', component: index },
    { path: '/blog', component: blog },
    { path: '/contactMe', component: contactMe },
    { path: '/sshPortal', component: sshPortal }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router