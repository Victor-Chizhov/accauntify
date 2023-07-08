<template>
  <section>
    <div class="row img-banner mt-3 mb-5">
      <div class="col-10 col-sm-8 col-md-6 col-xl-5 offset-1">
        <div class="py-5">
          <h1 class="mb-4">
            {{ $t('hero.title') }}
          </h1>
          <p class="fs-5 mb-5">
            {{ $t('hero.description') }}
          </p>
          <div class="pt-lg-5">
            <!-- import from quiz -->
            <button
              class="btn btn-primary"
              type="button"
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
<style scoped>

.img-banner {
  background-image: url("../assets/banner.jpg");
  border-radius: 1rem;
  background-size: cover;
}



</style>