<template>
  <div class="container container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col">
          <h1 class="display-5 mb-4">
            Registration Page
          </h1>

          <BaseInput id="firstName" labelText="First Name" />

          <BaseInput id="lastName" labelText="Last Name" />

          <BaseInput id="dateOfBirth" labelText="Date of birth" />

          <select class="form-select form-select-lg" aria-label="gender">
            <option selected>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>

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
import BaseInput from '@/components/Common/BaseInput.vue'

export default {
  name: 'RegistrationView',
  components: {
    BaseInput
  },
}
</script>
