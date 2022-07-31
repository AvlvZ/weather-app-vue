<template>
  <svg
      data-name="Layer 4"
      width="45"
      height="45"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      v-html="path"
  >
  </svg>
</template>

<script>
import icons from "@/icons";

export default {
  name: "i-wind",
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