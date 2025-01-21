<script setup>
  import { ref, watch } from 'vue';
  import axios from 'axios';
  import { reset } from '@formkit/vue';
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();
  const idioma = ref(locale);

  const nombre = ref('');
  const telefono = ref('');
  const email = ref('');
  const servicio = ref('');
  const mensaje = ref('');

  const onSubmit = async () => {
    const form = {
      nombre: nombre.value,
      telefono: telefono.value,
      servicio: servicio.value,
      email: email.value,
      mensaje: mensaje.value,
    };

    try {
      const test = true;

      const url = test ? 'http://localhost:3001' : 'https://www.tolkogroup.com/api';

      console.log('url a usar:' + url);

      await axios.post(url + '/emails', form);
      console.log(form);
      alert('Correo electrónico enviado con éxito');
      // alert(t('section5.form.sendSuccess'));
      console.log('enviado exitosamente');
      // Limpiar el formulario después del envío exitoso
      reset('frmContacto');
    } catch (error) {
      alert('Error al enviar el correo electrónico');
      // alert("t('section5.form.sendError')");
      console.error(error);
    }
  };

  // Observar el cambio de idioma
  watch(idioma, () => {
    // Puedes realizar acciones adicionales aquí cuando cambia el idioma, si es necesario
    reset('frmContacto');
  });
</script>

<template>
  <section
    id="section4"
    class="container py-12 text-black">
    <div class="md:w-2/3 md:mx-auto">
      <h2 class="text-white text-3xl font-bold md:text-4xl text-center mb-10">
        {{ $t('section5.title') }}
      </h2>
      <FormKit
        type="form"
        name="frmContacto"
        id="frmContacto"
        :actions="false"
        @submit="onSubmit">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
          <FormKit
            v-model.trim="nombre"
            type="text"
            id="nombre"
            name="nombre"
            :placeholder="$t('section5.form.placeholderName')"
            validation="required"
            :validationMessages="{
              required: $t('section5.form.requiredName'),
            }" />
          <FormKit
            v-model.trim="telefono"
            type="text"
            id="telefono"
            name="telefono"
            :placeholder="$t('section5.form.placeholderTelephone')"
            validation="required"
            :validationMessages="{
              required: $t('section5.form.requiredTelephone'),
            }" />
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="email"
              type="email"
              id="email"
              name="email"
              :placeholder="$t('section5.form.placeholderEmail')"
              validation="required|email"
              :validationMessages="{
                required: $t('section5.form.requiredEmail'),
                email: $t('section5.form.formatEmail'),
              }" />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model="servicio"
              type="select"
              :label="$t('section5.form.labelService')"
              :placeholder="$t('section5.form.placeholderService')"
              id="servicio"
              name="servicio"
              :options="[
                $t('section5.form.serviceOptions.op1'),
                $t('section5.form.serviceOptions.op2'),
                $t('section5.form.serviceOptions.op3'),
                $t('section5.form.serviceOptions.op4'),
                $t('section5.form.serviceOptions.op5'),
                $t('section5.form.serviceOptions.op6'),
              ]"
              validation="required"
              :validationMessages="{
                required: $t('section5.form.requiredService'),
              }" />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="mensaje"
              name="mensaje"
              id="mensaje"
              type="textarea"
              rows="5"
              cols=""
              :placeholder="$t('section5.form.placeholderMessage')"
              maxlength="250"
              validation="required"
              :validationMessages="{
                required: $t('section5.form.requiredMessage'),
              }" />
          </div>
          <div class="md:col-span-2">
            <FormKit
              type="submit"
              name="submit"
              id="submit-btn">
              {{ $t('section5.form.send') }}
            </FormKit>
          </div>
        </div>
      </FormKit>
    </div>
  </section>
</template>

<style scoped></style>
