<script setup>
  // import { ref } from 'vue';
  // import { useI18n } from 'vue-i18n';

  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';
  import SeccionUno from './components/SeccionUno.vue';
  import SeccionDos from './components/SeccionDos.vue';
  import SeccionTres from './components/SeccionTres.vue';
  import Contacto from './components/Contacto.vue';
  import Footer from './components/Footer.vue';

  // const { t, locale } = useI18n();
</script>

<template>
  <Header />
  <Hero />
  <main>
    <SeccionUno />
    <SeccionDos />
    <SeccionTres />
    <Contacto />
  </main>
  <Footer />
</template>

<style scoped></style>
