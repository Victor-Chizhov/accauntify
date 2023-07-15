<template>
  <nav class="navbar navbar-expand-lg bg-white mt-2">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.svg" width="150">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link fs-7 ps-2" href="/#about">{{ $t('navigation.about') }}</a>
          <a class="nav-link fs-7 ps-2" href="/#contacts">{{ $t('navigation.contacts') }}</a>
          <div class="bg-color ps-2">
<!--            <a class="nav-link active fs-7 text-light" aria-current="page" href="#">Калькулятор</a>-->
            <button
                class="btn btn-primary fs-7 px-3 w-100"
                type="button"
            >
              Калькулятор
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

import Button from "@/components/Form/Button.vue";
</script>

<style scoped>
.fs-7 {
  font-size: 0.9rem;
}


.btn-primary {
  background-color: #537379;
  border: none;
  border-radius: 2rem;
}
.btn-primary:active,
.btn-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(88, 123, 129, 0.5);
  background-color: #5e929b;
}

</style>