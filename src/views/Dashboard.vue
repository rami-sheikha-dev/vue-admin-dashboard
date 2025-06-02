<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row my-4">
      <div class="col-md-3 mb-3" v-for="card in cards" :key="card.title">
        <div class="card text-white bg-primary h-100">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text fs-4">{{ card.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <ChartComponent />

    <div class="row mb-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header">Users Table (from Fake API)</div>
          <div class="card-body table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.username }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import ChartComponent from '../components/ChartComponent.vue'

const cards = ref([
  { title: 'Users', value: 10 },
  { title: 'Orders', value: 158 },
  { title: 'Revenue', value: '$12,500' },
  { title: 'Conversion Rate', value: '3.8%' }
])

const users = ref([])

onMounted(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  users.value = await res.json()
})
</script>
