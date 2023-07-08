import './assets/main.css'
import messages from "@/messages";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from 'unhead'
import { createRouter } from "vue-router";
import App from './App.vue'

const LANGUAGE_DEFAULT = 'ru';
const url = new URL(window.location.href);
const locale = url.pathname.replace(/\//g,'');
const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: LANGUAGE_DEFAULT,
    messages,
});

const head = createHead();
const router = createRouter({
    routes: [],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
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
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
