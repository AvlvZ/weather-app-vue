<template>
  <div id="app">
    <div class="modal">
      <v-index v-if="isIndex"/>
      <v-result v-else/>
    </div>
  </div>
</template>

<script>

import VIndex from "@/components/v-index";
import VResult from "@/components/v-result";
export default {
  name: 'App',
  components: {
    VResult,
    VIndex
  },
  data() {
    return {
      isIndex: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: #f3dbdb;
}
.modal {
  width: 400px;
  padding: 32px;
  background: #FFF;
  border-radius: 16px;
}
</style>
