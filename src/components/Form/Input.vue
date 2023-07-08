<template>
  <div class="form-floating">
    <input type="{{ type }}" class="form-control" placeholder="{{ placeholder }}" id="{{ id }}" />
    <label for="{{ id }}" class="text-muted">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
    type: String,
    placeholder: String,
    label: String,
    id: String
})
</script>

<style scoped>

</style>