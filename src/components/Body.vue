<template>
  <section>
      <h1 class="mb-5">
        {{ $t('body.title') }}
      </h1>
      <div class="row img-body__top my-3 ms-1 me-1">
        <div class="col-10 col-sm-8 col-md-6 col-xl-5 offset-1">
          <div class="py-5 text-light">
            <h1 class="mb-4">
              {{ $t('body.1.title') }}
            </h1>
            <p class="fs-5 mb-5">
              {{ $t('body.1.description') }}
            </p>
          </div>
        </div>
      </div>
    <div class="row ms-1 me-1">
      <div class="col-sm img-body__left me-3 mb-3">
        <div class="col-10 col-sm-8 col-md-9 col-xl-6 offset-1">
        <div class="py-5 text-light">
          <h1 class="mb-4 fs-2">
            {{ $t('body.2.title') }}
          </h1>
          <p class="fs-6 mb-3">
            {{ $t('body.2.description') }}
          </p>
        </div>
        </div>
      </div>
      <div class="col-sm img-body__right mb-3">
        <div class="col-10 col-sm-8 col-md-9 col-xl-6 offset-1">
          <div class="py-5 text-light">
            <h1 class="mb-4 fs-2">
              {{ $t('body.3.title') }}
            </h1>
            <p class="fs-6 mb-3">
              {{ $t('body.3.description') }}
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

.img-body__top {
  background-image: url(../assets/banner_2_reference/banner2.jpg);
  background-size: cover;
  border-radius: 25px;
}

.img-body__left {
  background-image: url(../assets/banner_2_reference/banner3.jpg);
  background-size: cover;
  border-radius: 25px;
}

.img-body__right {
  background-image: url(../assets/banner_2_reference/banner4.jpg);
  background-size: cover;
  border-radius: 25px;
}




</style>