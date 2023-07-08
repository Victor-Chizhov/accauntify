<template>
  <section>
    <h1 class="mt-6">
      {{ $t('steps.title') }}
    </h1>
    <div class="row my-5 ms-4 me-4">
      <div class="col-sm me-4">
        <div class="row">
          <div class="row-4 my-5">
            <img class="img-one" src="../assets/numbers/1.png" alt="">
          </div>
          <div class="row-8">
            <h1 class="fs-5 pb-2">
              {{ $t('steps.1.title') }}
            </h1>
            <p>
              {{ $t('steps.1.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm me-4">
        <div class="row">
          <div class="row-4 my-5">
            <img class="img-two" src="../assets/numbers/2.png" alt="">
          </div>
          <div class="row-8">
            <h1 class="fs-5 pb-2">
              {{ $t('steps.2.title') }}
            </h1>
            <p>
              {{ $t('steps.2.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="row">
          <div class="row-4 my-5">
            <img class="img-three" src="../assets/numbers/3.png" alt="">
          </div>
          <div class="row-8">
            <h1 class="fs-5 pb-2">
              {{ $t('steps.3.title') }}
            </h1>
            <p>
              {{ $t('steps.3.description') }}
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

.img-one {
  background-size: cover;
  width: 4rem;
}

.img-two {
  background-size: cover;
  width: 4rem;
}

.img-three {
  background-size: cover;
  width: 4rem;
}

.mt-6 {
  margin-top: 6rem;
}

</style>