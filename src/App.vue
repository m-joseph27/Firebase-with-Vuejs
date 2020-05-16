<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Aplhabet.id'
      },
      immediate: true
    }
  }
}
</script>
export default {

}

<style>
html, body{
  margin: 0;
  /* max-width: 100%; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
