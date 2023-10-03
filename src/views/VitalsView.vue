<template>
  <div class="container container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col">
          <h1 class="display-5 mb-4">
            Vitals Form
          </h1>

          <BaseInput id="date" labelText="Date" />

          <BaseInput id="height" labelText="Height" />

          <BaseInput id="weight" labelText="Weight" />

          <BaseInput id="bmi" labelText="BMI" />

          <div class="row mt-3">
            <div class="col">
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-danger">Clear</button>
              </div>
            </div>
            <div class="col"></div>
            <div class="col">
              <div class="d-grid gap-2">
                <RouterLink to="/form-view/underweight" type="button" class="btn btn-success">Save</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/Common/BaseInput.vue'

export default {
  name: 'VitalsView',
  components: {
    BaseInput
  },
}
</script>
