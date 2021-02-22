<template>
  <div id="app">
    <transitions/>
  </div>
</template>

<script>
import Transitions from './views/Transitions.vue'
export default {
  name: 'App',
  components: {
    Transitions
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
.btn {
  background-color: #ccc;
  border: 1px solid #333;
  outline: none;
  padding: 6px;
  display: block;
  width: 100%;
  margin-bottom: 20px;
}
</style>
