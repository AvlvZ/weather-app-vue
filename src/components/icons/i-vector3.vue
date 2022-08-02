<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       data-name="Vector 3"
       width="94.8958333%"
       height="210"
       viewBox="0 0 1822 210"
       fill="none"
       v-html="path"
       class="vector_3"
  >

  </svg>
</template>

<script>
import icons from "../../icons";

export default {
  name: "i-vector3",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>
.vector_3 {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 3;
}

</style>