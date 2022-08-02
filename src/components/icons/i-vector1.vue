<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       data-name="Vector 1"
       width="100%"
       height="391"
       viewBox="0 0 1920 391"
       fill="none"
       v-html="path"
       class="vector_1"
  >

  </svg>
</template>

<script>
import icons from "../../icons";

export default {
  name: "i-vector1",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>
  .vector_1 {
    position: fixed;
    bottom: 0;
    left: 0;
    transition: all .5s linear;
    z-index: 1;
  }
</style>