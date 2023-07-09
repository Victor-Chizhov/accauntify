<template>
  <div class="form-floating">
    <input
      :type="type"
      :class="{'form-control': true, 'is-invalid': error }"
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
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
defineProps({
    type: String,
    placeholder: String,
    label: String,
    id: String,
    value: String,
    modelValue: String,
    error: String
})
defineEmits([
    'update:modelValue'
]);
</script>

<style scoped>

.form-floating.required label:after {
    content: "*";
    color: red;
    top: 0;
    position: relative;
    margin-left: 3px;
}

</style>