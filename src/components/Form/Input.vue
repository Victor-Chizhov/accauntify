<template>
  <div class="form-floating">
    <input
      :type="type"
      class="form-control"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label
      :for="id"
      class="text-muted"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
defineProps({
    type: String,
    placeholder: String,
    label: String,
    id: String,
    value: String,
    modelValue: String
})
defineEmits([
    'update:modelValue'
]);
</script>

<style scoped>

</style>