<template>
  <main>
    <div class="container container-fluid">
      <table class="table mt-5">
        <thead>
          <tr>
            <th v-for="header in tableHeader" :key="header.key" scope="col">
            {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(visit, index) in visits" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ visit.patient.firstName + ' ' + visit.patient.lastName }}</td>
            <td>{{ visit.patient.dateOfBirth }}</td>
            <td>
              <span class="badge bg-secondary px-2 py-1" :class="visit.bodyMassIndex < 25 ? 'badge bg-success': 'bg-warning'">
                {{ visit.bodyMassIndex < 25 ? 'normal' : 'overweight' }}
              </span>
            </td>
            <td>{{ visit.date }}</td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import useAxios from '@/composables/useAxios'

export default {
  name: 'PatientListView',
  setup() {
    const tableHeader = ref([
      { key: 'id', label: '#' },
      { key: 'fullnames', label: 'Full Names' },
      { key: 'age', label: 'Age' },
      { key: 'bmiStatus', label: 'BMI Status' },
      { key: 'date', label: 'Date' },
      { key: 'actions', label: 'Actions' }
    ])
    const visits = ref([])

    const { useGet } = useAxios()

    onMounted(async () => {
      const { data } = await useGet('visit/all')
      visits.value = data
    })

    return {
      visits,
      tableHeader
    }
  }
}
</script>
