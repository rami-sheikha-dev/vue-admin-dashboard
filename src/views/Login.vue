<template>
  <div class="login-container">
    <div class="card login-card">
      <div class="card-body">
        <h3 class="card-title mb-4 text-center">Login</h3>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" v-model="email" class="form-control" id="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function login() {
  if (email.value && password.value) {
    const fakeToken = 'fake-jwt-token-123456'
    localStorage.setItem('token', fakeToken)
    router.push('/dashboard')
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}
.login-card {
  width: 100%;
  max-width: 400px;
}
</style>
