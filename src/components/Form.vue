<template>
  <section>
    <div class="bg-color my-5">
      <div class="container">
        <div class="row my-5">
          <div class="col-12 col-sm-8 col-md-6 col-xl-5 my-6 mx-auto">
            <div class="bg-light p-5 border-form">
              <h1 class="mb-4 fs-2 text-dark">
                {{ $t('form.title') }}
              </h1>
              <p class="mb-5 text-dark fs-5">
                {{ $t('form.description') }}
              </p>
              <button class="btn btn-primary px-4 py-2" type="button">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.bg-color {
  background-image: linear-gradient(to right, #B8D0D8 0%, #537379 100%);
  background-size: cover;
}

.border-form {
  border-radius: 2rem;
}

.my-6 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.btn-primary {
  background-color: #537379;
  border-color: white;
  border-radius: 2rem;
}



</style>