<template>
  <div class="container container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          Column
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
