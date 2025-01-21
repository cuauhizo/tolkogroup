<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Lenguaje from '@/components/lenguaje.vue';

  const isScrolled = ref(false);
  const showScrollTopButton = ref(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    showScrollTopButton.value = scrollTop > 0;
    isScrolled.value = scrollTop > 50;
  };

  const scrollToSection = (index) => {
    const element = document.getElementById(`section${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <header>
    <div class="fixed md:absolute z-30 w-full">
      <nav
        class="container h-30 flex items-center justify-between px-5 py-3 bg-transparent relative text-white"
        :class="[{ 'bg-scrolled': isScrolled }]">
        <!-- <nav
        class="container h-30 flex items-center justify-between px-5 py-3 bg-transparent relative text-white"> -->
        <a
          href="./"
          class="w-1/3 max-w-[60px]">
          <img
            src="/img/logo-tolko.svg"
            alt="Logo tolko"
            class="w-full" />
        </a>
        <div class="flex items-center justify-end gap-2">
          <input
            type="checkbox"
            id="menu"
            class="peer hidden" />
          <label
            for="menu"
            class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"></label>
          <div
            class="fixed inset-0 bg-gradient-to-b from-white/20 to-tolko-red/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
            <ul
              class="absolute inset-x-0 top-24 p-10 items-center bg-white text-black w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:text-white md:shadow-none text-base md:text-sm lg:text-base">
              <li>
                <a
                  href="#about"
                  @click="scrollToSection(1)">
                  {{ $t('menu.about_us') }}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  @click="scrollToSection(2)">
                  {{ $t('menu.our_services') }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  @click="scrollToSection(3)">
                  {{ $t('menu.join_our_team') }}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="btn btn-red text-white"
                  @click="scrollToSection(4)">
                  {{ $t('menu.get_in_touch_with_us') }}
                </a>
              </li>
            </ul>
          </div>
          <Lenguaje />
        </div>
      </nav>
    </div>
    <button
      @click="scrollToTop"
      v-show="showScrollTopButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </header>
</template>

<style scoped>
  /* Estilos opcionales para el botón de ir arriba */
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #cc0032;
    border: 1px solid #000;
    padding: 15px;
    z-index: 50;
    border-radius: 50%;
  }
  .btn {
    padding: 10px;
    border-radius: 15px;
  }
  .btn:hover {
    opacity: 0.8;
  }
  .btn-red {
    background-color: #cc0032;
    border: 1px solid #ba0331;
  }

  nav {
    margin: 0 auto;
    width: 100%;
  }

  /* Estilos para el estado scrolled */
  .bg-scrolled {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
  }

  /* .backdrop-blur-md {
    backdrop-filter: blur(4px);
  } */

  /* Asegura transiciones suaves */
  /* nav {
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  } */
</style>
