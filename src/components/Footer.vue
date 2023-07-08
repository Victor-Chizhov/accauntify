<template>
  <!-- Footer -->
  <footer class="bg-color text-white mt-6">
    <div class="container">
      <div class="row py-5">
        <div class="col-12 col-md-6 col-lg-5">
          <div class="row">
            <div class="col-12 col-lg-8">
              <img src="../assets/logo_white.svg" alt="" width="200" class="mb-3">
              <p class="opacity-75">
                {{ $t('footer.description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h6 class="text-uppercase fw-bold mb-4 text-white">
            {{ $t('footer.useful') }}
          </h6>
          <p class="opacity-75">
            <a href="#about" class="text-decoration-none text-white">
              {{ $t('footer.about') }}
            </a>
          </p>
          <p class="opacity-75">
            <a href="#features" class="text-decoration-none text-white">
              {{ $t('footer.features') }}
            </a>
          </p>
          <p class="opacity-75">
            <a href="#questions" class="text-decoration-none text-white">
              {{ $t('footer.questions') }}
            </a>
          </p>
          <p class="opacity-75">
            <a href="#trial" class="text-decoration-none text-white">
              {{ $t('footer.trial') }}
            </a>
          </p>
          <p class="opacity-75">
            <a href="#!" class="text-decoration-none text-white">
              {{ $t('footer.action') }}
            </a>
          </p>
          <p class="opacity-75">
            <a href="#!" class="text-decoration-none text-white">
              {{ $t('footer.license') }}
            </a>
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <h6 class="text-uppercase fw-bold mb-4">
            {{ $t('footer.contacts') }}
          </h6>
          <p class="opacity-75">
            <font-awesome-icon icon="fa-solid fa-home" class="me-3" />
            {{ $t('footer.address') }}
          </p>
          <p class="opacity-75">
            <font-awesome-icon icon="fa-solid fa-envelope" class="me-3" />
            info@accountify.site
          </p>
          <p class="opacity-75">
            <font-awesome-icon icon="fa-solid fa-phone" class="me-3" />
            + 374 55 498401
          </p>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.35);">
      © 2021 Copyright {{ $t('company') }}
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script setup>

</script>

<style scoped>

.mt-6 {
  margin-top: 10rem;
}

.bg-color {
  background-color: #537379;
  background-size: cover;
}
</style>