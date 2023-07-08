<template>
  <section>
    <div class="bg-color my-5">
      <div class="container py-1 bg-line">
        <div class="row my-5 justify-content-between py-5">
          <div class="col-12 col-lg-5">
            <div class="mb-4 text-white">
              <h2 class="mb-4 fs-1">
                {{ $t('form.title') }}
              </h2>
              <p class="mb-5 fs-5">
                {{ $t('form.description') }}
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-5">
            <div class="bg-white p-5 border-form shadow">
              <Input
                type="text"
                :label="$t('form.inputs.name.label')"
                id="name"
                :placeholder="$t('form.inputs.name.placeholder')"
                class="mb-4"
              />
              <Input
                type="tel"
                :label="$t('form.inputs.phone.label')"
                id="phone"
                :placeholder="$t('form.inputs.phone.placeholder')"
                class="mb-4"
              />
              <Button
                :text="$t('form.buttons.submit.name')"
                class="w-100 mb-3"
              />
              <p class="text-secondary text-center">
                <small v-html="$t('form.buttons.submit.hint', { link: '!#' })" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import Input from "@/components/Form/Input.vue";
import Button from "@/components/Form/Button.vue";
</script>

<style scoped>
.bg-color {
  background-image: linear-gradient(to right, #537379 100%, #B8D0D8 0%);
  background-size: cover;
}

.border-form {
  border-radius: 2rem;
}
.bg-line {
    background: url('../assets/line.svg') center center no-repeat;
    background-size: cover;
}
</style>