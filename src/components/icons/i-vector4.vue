<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       data-name="Vector 4"
       width="83.125%"
       height="138"
       viewBox="0 0 1596 138"
       fill="none"
       v-html="path"
       class="vector_4"
  >

  </svg>
</template>

<script>
import icons from "../../icons";

export default {
  name: "i-vector4",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>
.vector_4 {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;
}
</style>