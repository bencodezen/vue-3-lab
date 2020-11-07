<template>
  <nav class="navbar">
    <div>
      <router-link to="/" class="navbar-item">Home</router-link>
    </div>
    <div>
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/new-post" class="navbar-item">New Post</router-link>
    </div>
  </nav>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.navbar-item {
  padding: 0.75rem;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
