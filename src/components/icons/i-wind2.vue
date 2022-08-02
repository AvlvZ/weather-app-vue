<template>
  <svg
      data-name="Wind 1"
      width="1405"
      height="190"
      viewBox="0 0 1405 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-html="path"
      class="app__wind wind_2"
  >
  </svg>
</template>

<script>
import icons from "@/icons";

export default {
  name: "i-wind2",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>
.wind_2 {
  position: fixed;
  bottom: 500px;
  left: 0;
  transform: rotate(360deg);
  z-index: 5;
}
</style>