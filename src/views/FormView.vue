<template>
  <div class="container container-fluid">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-person-raised-hand mt-5" viewBox="0 0 16 16">
            <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z"/>
            <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
          </svg>
        </div>
        <div class="col">
          <h1 class="display-5 mb-4">
            Normal Weight
          </h1>

          <p class="h5">General Health</p>

          <RadioInput id="date" labelText="Date" />

          <div class="row mt-3">
            <div class="col">
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-danger">Clear</button>
              </div>
            </div>
            <div class="col"></div>
            <div class="col">
              <div class="d-grid gap-2">
                <RouterLink type="button" to="/vitals" class="btn btn-success">Save</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/Common/RadioInput.vue'

export default {
  name: 'FormView',
  components: {
    RadioInput
  },
}
</script>
