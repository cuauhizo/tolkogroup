<script setup>
  import Counter from '@/components/counter.vue';
</script>
<template>
  <section
    id="section3"
    class="bg-tolko-red py-10">
    <div class="container py-3">
      <h2 class="text-3xl md:text-5xl text-center mb-10 font-SemiBoldItalic texto-con-bordes">
        {{ $t('section3.title') }}
      </h2>
      <Counter />
    </div>
  </section>
</template>
