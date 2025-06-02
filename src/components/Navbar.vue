<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
</style>
