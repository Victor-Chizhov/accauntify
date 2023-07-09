<template>
  <Navigation />
  <router-view />
  <template v-if="!isPrivacyPolicyRoute">
    <div class="container">
      <Hero/>
      <Advantages/>
      <Body id="features"/>
      <Steps/>
    </div>
    <Form id="trial"/>
    <div class="container">
      <About id="about"/>
      <Banks/>
      <Questions id="questions"/>
      <Comments />
    </div>
  </template>
  <Footer id="contacts"/>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import Body from "@/components/Body.vue";
import Navigation from "@/components/Navigation.vue";
import Advantages from "@/components/Advantages.vue";
import Footer from "@/components/Footer.vue";
import Steps from "@/components/Steps.vue";
import Banks from "@/components/Banks.vue";
import Questions from "@/components/Questions.vue";
import Form from "@/components/Form.vue";
import { useSeoMeta } from 'unhead'
import { useI18n } from "vue-i18n";
import About from "@/components/About.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Comments from "@/components/Comments.vue";

const { t } = useI18n();

useSeoMeta({
    author: t('company'),
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    ogTitle: t('meta.title'),
    ogDescription: t('meta.description'),
    ogSiteName: t('company')
})

const route = useRoute();
const isPrivacyPolicyRoute = computed(() => route.path === '/privacy-policy');





</script>

<style scoped>

</style>