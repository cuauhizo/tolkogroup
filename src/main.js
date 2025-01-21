import { createSSRApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import { messages } from './lang/messages';
import VueNumberFormat from 'vue-number-format';
import { plugin, defaultConfig } from '@formkit/vue';
import formKitConfig from '/formkit.config.js';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.

export function createApp() {
  const app = createSSRApp(App);

  // Configuración de i18n
  const i18n = createI18n({
    legacy: false,
    locale: 'en', // Idioma por defecto
    fallbackLocale: 'es', // Idioma de respaldo
    messages, // Mensajes de traducción
  });

  // Registra i18n en la aplicación
  app.use(i18n);
  app.use(VueNumberFormat, { prefix: '$ ', decimal: '.', thousand: ',' });
  app.use(plugin, defaultConfig(formKitConfig));

  // Método global de formateo
  app.config.globalProperties.$formatNumber = (value, options) => {
    const defaultOptions = { prefix: '', suffix: '', decimal: '.', thousand: ',', precision: 0 };
    const config = { ...defaultOptions, ...options };

    // Lógica básica de formateo
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: config.precision,
      maximumFractionDigits: config.precision,
    }).format(value);
  };

  return { app };
}
