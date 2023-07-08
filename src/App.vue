<template>
  <Navigation />
  <div class="container">
    <Hero/>
    <Advantages />
    <Body/>
    <Steps />
    </div>
  <Form />
  <div class="container">
    <Banks />
    <Questions />
  </div>
  <Footer />
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

</script>

<style scoped>

</style>