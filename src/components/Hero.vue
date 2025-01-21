<script setup>
  import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();
  const isMobile = ref(false);
  const videoKey = ref('');
  const idioma = ref(locale);
  const updateIsMobile = () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth <= 426;
      videoKey.value = `${locale.value}-${Date.now()}`;
    }
  };

  const handleScroll = () => {
    // Implementar lógica de scroll aquí si es necesario
  };

  const updateLocale = () => {
    videoKey.value = `${locale.value}-${Date.now()}`; // Update key to force re-render
  };

  onMounted(() => {
    // Verificar que `window` esté disponible antes de usarlo
    if (typeof window !== 'undefined') {
      updateIsMobile();
      window.addEventListener('resize', updateIsMobile);
      window.addEventListener('scroll', handleScroll);
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateIsMobile);
      window.removeEventListener('scroll', handleScroll);
    }
  });

  watchEffect(() => {
    updateLocale(); // Watch locale changes
  });

  const currentVideo = computed(() => {
    if (isMobile.value) {
      return {
        en: '/video/TLK_MainHeaderMovil.webm',
        enMp4: '/video/TLK_MainHeaderMovil.mp4',
        es: '/video/TLK_MainHeaderMovilEs.webm',
        esMp4: '/video/TLK_MainHeaderMovilEs.mp4',
      };
    } else {
      return {
        en: '/video/TLK_MainHeader.webm',
        enMp4: '/video/TLK_MainHeader.mp4',
        es: '/video/TLK_MainHeaderEs.webm',
        esMp4: '/video/TLK_MainHeaderEs.mp4',
      };
    }
  });
</script>

<template>
  <div class="homepage-header-wrapper">
    <div class="contenedor-video">
      <video
        v-if="$i18n.locale === 'en'"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline=""
        :key="videoKey">
        <source
          :src="currentVideo.enMp4"
          type="video/mp4" />
        <source
          :src="currentVideo.en"
          type="video/webm" />
      </video>
      <video
        v-else-if="$i18n.locale === 'es'"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline=""
        :key="videoKey">
        <source
          :src="currentVideo.esMp4"
          type="video/mp4" />
        <source
          :src="currentVideo.es"
          type="video/webm" />
      </video>
    </div>
  </div>
</template>

<style scoped>
  .homepage-header-wrapper {
    position: relative;
    height: 100vh;
  }
  .contenedor-video {
    position: absolute;
    background: #000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .contenedor-video video {
    position: relative;
    top: 50%;
    left: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
</style>
