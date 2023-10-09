<template>
  <div v-for="option in options" :key="option" class="form-check">
    <input
      class="form-check-input"
        type="radio"
        :name="id"
        :id="option"
        @change="$emit('update:modelValue', option)"
        :checked="option === modelValue">
    <label class="form-check-label" :for="option">
      {{ option }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioInput',
  props: {
    id: {
      type: String,
      default: 'flexRadioDefault1'
    },
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ''
    },
  },
  emits: ['update:modelValue'],
}
</script>