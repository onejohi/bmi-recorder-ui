<template>
  <div class="form-floating mb-2">
    <input
      :type="type"
      :class="classList"
      :id="id"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="inputValue"
      :placeholder="placeholder"
      :disabled="disabled">
    <label :for="id">{{ labelText }}</label>

  </div>
  
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    classList: {
      type: String,
      default: 'form-control'
    },
    id: {
      type: String,
      default: 'floatingInput'
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputValue: {
      type: (String || Number),
    },
    labelText: {
      type: String,
      default: 'Input'
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['update:modelValue']
}
</script>