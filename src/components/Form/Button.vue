<template>
  <button
    class="btn btn-primary px-5 py-3"
    type="button"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
    text: String
})
</script>

<style scoped>
.btn-primary {
    background-color: #537379;
    border: none;
}
.btn-primary:active,
.btn-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(88, 123, 129, 0.5);
    background-color: #5e929b;
}
</style>