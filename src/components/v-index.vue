<template>
  <div class="v-index">
    <div class="header">
      <h1 class="index-header__item">
        Vue Weather App
      </h1>
    </div>
    <div class="index__img">
      <v-base-icon name="indexWeather"/>
    </div>
    <div class="relative">
      <div class="index__description">
        <h2 class="index-description__item">Find Weather of your city</h2>
      </div>
      <form class="index-form">
        <input
            type="text"
            class="index-form__input"
            v-model="search"
        >
        <input
            type="submit"
            class="index-form__submit"
            value="Искать"
            @click="$emit('searchCity', this.search)"
        >
      </form>
    </div>
  </div>
</template>

<script>
import VBaseIcon from "@/components/icons/i-base-icon";

export default {
  name: "v-index",
  components: {VBaseIcon},
  props: {},
  data() {
    return {
      search: ""
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/stylesheets/variables";

.index-header__item {
  font-size: $s-measure * 1.25;
  margin-bottom: $s-measure * 2;
}

.index__img {
  width: 80%;
  margin: 0 auto $s-measure * 2 auto;
}

.index-description__item {
  font-size: $s-measure;
  margin-bottom: $s-measure * 2;
}

.index-form {
  @include elemFlexPosition(space-between, center, $s-measure / 4);
}

.index-form__input {
  @include dimensions(calc(100% - 60px), 40px);
  border-radius: $s-measure / 4;
  padding: 0 $s-measure;
  border: none;
}

.index-form__submit {
  color: $c-black;
  @include dimensions($s-measure * 4, $s-measure * 2.5);
  background: $c-white;
  border-radius: $s-measure / 4;
  font-weight: 600;
  cursor: pointer;
  border: none;
}
</style>