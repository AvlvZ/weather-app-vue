<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       data-name="Vector 2"
       width="100%"
       height="313"
       viewBox="0 0 1920 313"
       fill="none"
       v-html="path"
       class="vector_2"
  >

  </svg>
</template>

<script>
import icons from "../../icons";

export default {
  name: "i-vector2",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>
.vector_2 {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
}

</style>