<template>
  <div class="container container-fluid">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#B592A0" class="bi bi-lungs mt-5" viewBox="0 0 16 16">
            <path d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357V1.5Z"/>
          </svg>
        </div>
        <div class="col">
          <h1 class="display-5 mb-4 mt-5">
            Vitals Form
          </h1>

          <BaseInput
            id="date"
            v-model="vitals.date"
            :inputValue="vitals.date"
            labelText="Date" />

          <BaseInput
            id="height"
            v-model="vitals.height"
            :inputValue="vitals.height"
            labelText="Height" />

          <BaseInput
            id="weight"
            v-model="vitals.weight"
            :inputValue="vitals.weight"
            labelText="Weight" />

          <BaseInput
            id="bmi"
            :labelText="'BMI - ' + bmi"
            v-model="bmi"
            :value="bmi"
            disabled="true" />

          <div class="row mt-3">
            <div class="col">
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-danger">Clear</button>
              </div>
            </div>
            <div class="col"></div>
            <div class="col">
              <div class="d-grid gap-2">
                <button @click="createNewVitals()" to="/form-view/underweight" type="button" class="btn btn-success">Save</button>
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
import { useRoute, useRouter } from 'vue-router'
import BaseInput from '@/components/Common/BaseInput.vue'
import useAxios from '@/composables/useAxios'

export default {
  name: 'VitalsView',
  components: {
    BaseInput
  },
  setup() {
    const vitals = ref({
      date: '',
      height: 0,
      weight: 0,
    })
    const bmi = computed(() => {
      return (Number(vitals.value.weight) / (Number(vitals.value.height) * Number(vitals.value.height))).toFixed(2)
    })

    const { usePost } = useAxios()
    const route = useRoute()
    const router = useRouter()

    async function createNewVitals() {
      const body = {
        patientId: route.params.id,
        bodyMassIndex: bmi.value,
        ...vitals.value
      }
      await usePost('visit/update-vitals', body)
      router.push({ name: 'form-view', params: { type: bmi.value <= 25 ? 'normal' : 'overweight' } })

    }

    return {
      route,
      vitals,
      bmi,
      createNewVitals,
    }
  }
}
</script>
