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
          <a class="nav-link active fs-7" aria-current="page" href="#">Калькулятор</a>
          <a class="nav-link fs-7" href="#about">{{ $t('navigation.about') }}</a>
          <a class="nav-link fs-7" href="#contacts">{{ $t('navigation.contacts') }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>

.fs-7 {
  font-size: 0.9rem;
}

</style>