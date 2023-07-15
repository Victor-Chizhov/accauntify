<template>
  <section>
    <h1 class="mt-6">
      {{ $t('steps.title1') }}<span class="border-text">{{ $t('steps.title2') }}</span>
    </h1>
    <div class="row mt-5 mb-7">
      <div class="col-lg me-4">
        <div class="row flex-lg-column">
          <div class="col-3 my-5">
            <img class="img-one" src="../assets/numbers/one1.svg" alt="">
          </div>
          <div class="col">
            <h1 class="fs-4 pb-2 mt-7 border-bottom mb-4">
              {{ $t('steps.1.title') }}
            </h1>
            <p class="opacity-75">
              {{ $t('steps.1.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg me-4">
        <div class="row flex-lg-column">
          <div class="col-3 my-5">
            <img class="img-two" src="../assets/numbers/two1.svg" alt="">
          </div>
          <div class="col">
            <h1 class="fs-4 pb-2 mt-7 border-bottom mb-4">
              {{ $t('steps.2.title') }}
            </h1>
            <p class="opacity-75">
              {{ $t('steps.2.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg">
        <div class="row flex-lg-column">
          <div class="col-3 my-5">
            <img class="img-three" src="../assets/numbers/three1.svg" alt="">
          </div>
          <div class="col">
            <h1 class="fs-4 pb-2 mt-7 border-bottom mb-4">
              {{ $t('steps.3.title') }}
            </h1>
            <p class="opacity-75">
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

.border-text {
  color: #7882ad;
}

.mb-7 {
  margin-bottom: 7rem;
}


@media screen and (max-width: 991px) {
  .mt-7 {
    margin-top: 3rem;
  }
}

</style>