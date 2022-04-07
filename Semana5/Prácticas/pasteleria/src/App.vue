<template>
  <nav>
    <router-link to="/">Cake Wars - Pastelería</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/pastelero">Acceso Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>

body {
  background-color: #fcfcfc;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #000;
  text-align: right;
  padding: 30px;
  margin-bottom: 30px;
}

nav a {
  font-weight: bold;
  color: #FFE81F;
}

nav a.router-link-exact-active {
  color: orange;
}
</style>
