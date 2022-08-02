<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       data-name="Vector 5"
       width="67.34375%"
       height="138"
       viewBox="0 0 1293 138"
       fill="none"
       v-html="path"
       class="vector_5"
  >

  </svg>
</template>

<script>
import icons from "../../icons";

export default {
  name: "i-vector5",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>
.vector_5 {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;
}
</style>