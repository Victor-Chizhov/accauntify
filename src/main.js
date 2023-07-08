import './assets/main.css'
import messages from "@/messages";

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from 'unhead'
import App from './App.vue'

const head = createHead();
const LANGUAGE_DEFAULT = 'ru';
const url = new URL(window.location.href);
const locale = url.pathname.replace(/\//g,'');
const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: LANGUAGE_DEFAULT,
    messages,
});

document.documentElement.lang = locale
    ? locale
    : LANGUAGE_DEFAULT;

createApp(App)
    .use(i18n)
    .mount('#app');
