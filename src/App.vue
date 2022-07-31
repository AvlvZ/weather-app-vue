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
      isIndex: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: url("./assets/img/Banner.png") center no-repeat;
  background-size: cover;
  color: #FFF;
}

.modal {
  width: 400px;
  padding: 32px;
  background: rgba(215, 152, 249, 0.27);
  box-shadow: inset 0 3.00856px 6.01712px rgba(255, 255, 255, 0.4), inset 0 -3.00856px 9.02569px rgba(255, 255, 255, 0.5), inset 0 -1.50428px 20.0571px rgba(255, 255, 255, 0.24), inset 0 20.0571px 20.0571px rgba(255, 255, 255, 0.24), inset 0 1.00285px 20.5585px rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 50px;
}
</style>
