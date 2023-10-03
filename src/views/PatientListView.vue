<template>
  <main>
    <div class="container container-fluid">
      <table class="table mt-5">
        <thead>
          <tr>
            <th v-for="header in tableHeader" :key="header.key" scope="col">
            {{ header.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bi</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'

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

    return {
      tableHeader
    }
  }
}
</script>
