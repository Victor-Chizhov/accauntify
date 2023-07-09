<template>
  <section>
    <div class="row my-5">
      <div class="col-sm me-4 pe-3">
        <div class="row">
          <div class="col-2 px-1">
            <img class="img-advantages" src="../assets/banner_2_reference/galochka.jpg" alt="">
          </div>
          <div class="col-10">
            <h1 class="fs-5 pb-2">
              {{ $t('advantages.1.title') }}
            </h1>
            <p>
              {{ $t('advantages.1.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm me-4 pe-3">
        <div class="row">
          <div class="col-2 px-1">
            <img class="img-advantages" src="../assets/banner_2_reference/galochka.jpg" alt="">
          </div>
          <div class="col-10">
            <h1 class="fs-5 pb-2">
              {{ $t('advantages.2.title') }}
            </h1>
            <p>
              {{ $t('advantages.2.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm pe-3">
        <div class="row">
          <div class="col-2 px-1">
            <img class="img-advantages" src="../assets/banner_2_reference/galochka.jpg" alt="">
          </div>
          <div class="col-10">
            <h1 class="fs-5 pb-2">
              {{ $t('advantages.3.title') }}
            </h1>
            <p>
              {{ $t('advantages.3.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

.img-advantages {
  background-size: cover;
  width: 3rem;
}

</style>