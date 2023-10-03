<template>
  <div class="form-floating mb-3">
    <input
      :type="type"
      :class="classList"
      :id="id"
      :placeholder="placeholder">
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
    labelText: {
      type: String,
      default: 'Input'
    }
  }
}
</script>