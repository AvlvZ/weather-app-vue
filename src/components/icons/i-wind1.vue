<template>
  <svg
      data-name="Wind 1"
      width="450"
      height="383"
      viewBox="0 0 561 383"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-html="path"
      class="app__wind wind_1"
  >
  </svg>
</template>

<script>
import icons from "@/icons";

export default {
  name: "i-wind1",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>
.wind_1 {
  position: fixed;
  bottom: 250px;
  left: 0;
  z-index: 5;
}
</style>