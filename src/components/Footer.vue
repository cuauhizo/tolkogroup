<script setup>
  import { ref } from 'vue';

  const anio = ref(new Date().getFullYear());
  const scrollToSection = (index) => {
    const element = document.getElementById(`section${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<template>
  <footer class="w-full text-gray-700 bg-[#181818]">
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-12 mx-auto md:items-start md:py-12 lg:items-start">
      <div class="text-center md:mx-0 md:text-left">
        <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <img
            src="/img/logo-tolko.svg"
            alt="Logo tolko" />
        </a>
        <!-- Social Icons -->
        <div class="mt-4">
          <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.facebook.com/tolkogroup/"
              alt="Facebook"
              target="_blank">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://twitter.com/tolkogroup"
              alt="Twitter"
              target="_blank">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.instagram.com/grupo_tolko"
              alt="Instagram"
              target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.linkedin.com/company/tolko/"
              alt="Linkedin"
              target="_blank">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="text-center xl:pl-20 md:text-left">
        <h2 class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
          {{ $t('footer.list1.item1') }}
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              @click="scrollToSection(1)">
              {{ $t('footer.list1.item2') }}
            </a>
          </li>
          <li class="mt-3">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              @click="scrollToSection(2)">
              {{ $t('footer.list1.item3') }}
            </a>
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200">
              {{ $t('footer.list1.item4') }}
            </a>
          </li>
        </nav>
      </div>
      <div class="text-center md:text-left">
        <h2 class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
          {{ $t('footer.list2.item1') }}
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200">
              <span class="text-white">{{ $t('footer.list2.item2') }}</span
              ><br />
              {{ $t('footer.list2.item2_1') }}
            </a>
            <br />
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              href="mailto:tolko360@tolkogroup.com"
              >tolko360@tolkogroup.com</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200">
              <span class="text-white">{{ $t('footer.list2.item3') }}</span
              ><br />
              {{ $t('footer.list2.item3_1') }}
            </a>
          </li>
        </nav>
      </div>
      <div class="text-center md:text-left">
        <h2 class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
          {{ $t('footer.list3.item1') }}
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a
              href="mailto:tolko360@tolkogroup.com"
              class="text-gray-500 cursor-pointer hover:text-gray-200">
              tolko360@tolkogroup.com
            </a>
          </li>
          <li class="mt-3">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              @click="scrollToSection(4)">
              {{ $t('footer.list3.item3') }}
            </a>
          </li>
          <li class="mt-3">
            <a
              href="tel:+525567260647"
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              >+52 55 6726 0647</a
            >
          </li>
        </nav>
      </div>
    </div>

    <div class="container px-5 py-4 mx-auto">
      <p class="text-sm text-white text-center">© {{ anio }} {{ $t('footer.copy') }}</p>
    </div>
  </footer>
</template>
