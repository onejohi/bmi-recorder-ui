<template>
  <div class="form-check" v-for="option in options" :key="option">
    <input
      class="form-check-input"
      type="radio"
      :id="id"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="inputValue">
    <label class="form-check-label" for="flexRadioDefault1">
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
  },
  emits: ['update:modelValue']
}
</script>