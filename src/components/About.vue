<template>
  <section class="my-5 py-5">
    <div class="row justify-content-between">
      <div class="col-12 col-lg-5 col-md-5 col-lg-4">
        <h2 class="text-dark mb-5 fs-1">
          {{ $t('about.title') }}
        </h2>
      </div>
      <div class="col-12 col-lg-6 col-lg-7">
        <p class="mb-3 text-justify">
          {{ $t('about.description', 1) }}
        </p>
        <p class="text-justify">
          {{ $t('about.description', 2) }}
        </p>
      </div>
    </div>
  </section>

</template>

<script setup>
</script>

<style scoped>
.text-justify {
    text-align: justify;
}
</style>