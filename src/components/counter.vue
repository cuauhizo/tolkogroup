<template>
  <div class="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 counter-container">
    <div class="div-counter">
      <span ref="counter1">{{ contador1 }}</span>
      <h3>
        {{ $t('section3.count1') }}
      </h3>
    </div>
    <div class="div-counter">
      <span>+</span><span ref="counter2">{{ contador2 }}</span>
      <h3>
        {{ $t('section3.count2') }}
      </h3>
    </div>
    <div class="div-counter">
      <span>+</span
      ><span ref="counter2">{{
        $formatNumber(contador3, {
          prefix: '',
          suffix: '',
          decimal: '.',
          thousand: ',',
          precision: 0,
          acceptNegative: true,
          isInteger: false,
        })
      }}</span>
      <h3>
        {{ $t('section3.count3') }}
      </h3>
    </div>
    <div class="div-counter">
      <span>+</span
      ><span ref="counter2">{{
        $formatNumber(contador4, {
          prefix: '',
          suffix: '',
          decimal: '.',
          thousand: ',',
          precision: 0,
          acceptNegative: true,
          isInteger: false,
        })
      }}</span>
      <h3>
        {{ $t('section3.count4') }}
      </h3>
    </div>
    <div class="div-counter">
      <span>+</span><span ref="counter2">{{ contador5 }}</span
      ><span>%</span>
      <h3>
        {{ $t('section3.count5') }}
      </h3>
    </div>
    <div class="div-counter">
      <span>+</span><span ref="counter2">{{ contador6 }}</span>
      <h3>
        {{ $t('section3.count6') }}
      </h3>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  // Contadores
  const contador1 = ref(0);
  const contador2 = ref(0);
  const contador3 = ref(0);
  const contador4 = ref(119000);
  const contador5 = ref(0);
  const contador6 = ref(0);

  const incrementarContador = (contador, limite) => {
    if (contador.value < limite) {
      contador.value++;
    }
  };

  // Observador de intersección
  const observarContadores = () => {
    const contadorContainer = document.querySelector('.counter-container');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intervalo = setInterval(() => {
              incrementarContador(contador1, 10);
              incrementarContador(contador2, 100);
              incrementarContador(contador3, 1000);
              incrementarContador(contador4, 120000);
              incrementarContador(contador5, 300);
              incrementarContador(contador6, 30);
            }, 0.01);
            // Limpiar el intervalo cuando el contador alcance el límite
            if (
              contador1.value >= 10 &&
              contador2.value >= 100 &&
              contador3.value >= 1000 &&
              contador4.value >= 120000 &&
              contador5.value >= 300 &&
              contador6.value >= 30
            ) {
              clearInterval(intervalo);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(contadorContainer);
  };

  onMounted(observarContadores);
</script>

<style scoped>
  .div-counter span {
    font-size: 3rem;
    font-family: 'Franie-SemiBold';
  }
  .div-counter h3 {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .div-counter span {
      font-size: 2.5rem;
    }
  }
</style>
