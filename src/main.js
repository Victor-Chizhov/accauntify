import './assets/main.css'
import messages from "@/messages";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { vMaska } from "maska"
// toast
import Vue3Toastify from "vue3-toastify"
import 'vue3-toastify/dist/index.css';


import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from 'unhead'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";



export const LANGUAGE_DEFAULT = 'ru';
export const url = new URL(window.location.href);
export const locale = url.pathname.split('/')[1];

const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: LANGUAGE_DEFAULT,
    messages,
});

const head = createHead();
const router = createRouter({
    // todo for prod we can delete it
    history: createWebHistory(),
    routes: [
        {
            path: '/privacy-policy',
            component: PrivacyPolicy
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
});

/* add icons to the library */
library.add(
    faHome,
    faEnvelope,
    faPhone
);

document.documentElement.lang = locale
    ? locale
    : LANGUAGE_DEFAULT;

createApp(App)
    .use(i18n)
    .directive("maska", vMaska)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(Vue3Toastify)
    .mount('#app');

export default router;