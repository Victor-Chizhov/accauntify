<template>
  <section>
    <div class="row mb-5 py-5">
      <h1>
        {{ $t('banks.title') }}
      </h1>
        <div class="row">
          <div class="col-sm">
            <div class="mt-5 img-size border rounded">
              <img class="img-bank" src="../assets/banks/evoca.png" alt="">
            </div>

            <div class="mt-5 img-size border rounded">
              <img class="img-bank" src="../assets/banks/ameria.png" alt="">
            </div>
          </div>

          <div class="col-sm">
            <div class="mt-5 img-size border rounded">
              <img class="img-bank" src="../assets/banks/ararat.png" alt="">
            </div>

            <div class="mt-5 img-size border rounded">
              <img class="img-bank" src="../assets/banks/ardshin.png" alt="">
            </div>
          </div>

          <div class="col-sm">
            <div class="mt-5 img-size border rounded">
              <img class="img-bank" src="../assets/banks/converse.png" alt="">
            </div>

            <div class="mt-5 img-size border rounded">
              <img class="img-bank" src="../assets/banks/aeb.png" alt="">
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

.img-bank {
  background-size: cover;
  width: 100%;
  height: 100%;
}

.img-size {
  max-width: 170px;
  padding: 0.7rem;
}


</style>