<template>
  <div class="container container-fluid">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#9C7178" class="bi bi-door-open mt-5" viewBox="0 0 16 16">
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
          </svg>
        </div>
        <div class="col">
          <h1 class="display-5 mb-4 mt-5">
            Registration Page
          </h1>

          <BaseInput
            id="firstName"
            v-model="patient.firstName"
            :inputValue="patient.firstName"
            labelText="First Name" />

            <div v-if="v$.firstName.$dirty || v$.firstName.$model">
              <div class="input-errors mb-2"  v-for="(error, index) of v$.firstName.$silentErrors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
              </div>
            </div>

          <BaseInput
            id="lastName"
            v-model="patient.lastName"
            :inputValue="patient.lastName"
            labelText="Last Name" />

            <div v-if="v$.lastName.$dirty || v$.lastName.$model">
              <div class="input-errors mb-2"  v-for="(error, index) of v$.lastName.$silentErrors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
              </div>
            </div>

          <BaseInput
            id="dateOfBirth"
            type="date"
            v-model="patient.dateOfBirth"
            :inputValue="patient.dateOfBirth"
            labelText="Date of birth" />

            <div v-if="v$.dateOfBirth.$dirty || v$.dateOfBirth.$model">
              <div class="input-errors mb-2"  v-for="(error, index) of v$.dateOfBirth.$silentErrors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
              </div>
            </div>

          <select v-model="patient.gender" class="form-select form-select-lg" aria-label="gender">
            <option value="" selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <div v-if="v$.gender.$dirty || v$.gender.$model">
              <div class="input-errors mb-2"  v-for="(error, index) of v$.gender.$silentErrors" :key="index">
                <div class="text-danger">{{ error.$message }}</div>
              </div>
            </div>

          <div class="row mt-3">
            <div class="col">
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-danger">Clear</button>
              </div>
            </div>
            <div class="col"></div>
            <div class="col">
              <div class="d-grid gap-2">
                <button
                  @click="createNewPatient()"
                  type="button"
                  to="/vitals"
                  class="btn btn-success">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import BaseInput from '@/components/Common/BaseInput.vue'
import useAxios from '@/composables/useAxios'
import { useRouter } from 'vue-router'

export default {
  name: 'RegistrationView',
  components: {
    BaseInput
  },
  setup() {
    const patient = ref({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: ''
    })
    const { usePost } = useAxios()
    const router = useRouter()

    const rules = computed(() => ({
      firstName: { required, minLength: minLength(3) },
      lastName: { required, minLength: minLength(3) },
      gender: { required },
      dateOfBirth: { required }
    }))

    const v$ = useVuelidate(rules, patient)

    async function createNewPatient() {

      if (!v$.value.$invalid) {
        const { ok, data } = await usePost('patient/register', patient.value)
        if (ok) {
          router.push({ name: 'vitals', params: { id: data._id } })
        }
      }
    }

    return {
      v$,
      patient,
      createNewPatient,
    }
  }
}
</script>
