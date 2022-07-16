<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       data-name="Layer 1"
       width="100%"
       viewBox="0 0 859.11298 632.67948"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       v-html="path"
  >

  </svg>
</template>

<script>
import icons from "../icons";

export default {
  name: "v-base-icon",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>

</style>