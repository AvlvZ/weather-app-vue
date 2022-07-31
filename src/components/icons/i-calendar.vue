<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       data-name="Layer 1"
       width="45"
       height="45"
       fill="none"
       viewBox="0 0 25 25"
       v-html="path"
  >

  </svg>
</template>

<script>
import icons from "@/icons";

export default {
  name: "i-calendar",
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