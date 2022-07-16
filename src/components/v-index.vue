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
    <div class="index__description">
      <h2 class="index-description__item">Find Weather of your city</h2>
    </div>
    <div class="index-form">
      <input
          type="search"
          class="index-form__input"
      >
      <input
          type="submit"
          class="index-form__submit"
          value="Искать"
      >
    </div>
  </div>
</template>

<script>
import VBaseIcon from "@/components/v-base-icon";
export default {
  name: "v-index",
  components: {VBaseIcon}
}
</script>

<style scoped>
  .index-header__item {
    font-size: 20px;
    margin-bottom: 32px;
  }
  .index__img {
    width: 80%;
    margin: 0 auto 32px auto;
  }
  .index-description__item {
    font-size: 16px;
    margin-bottom: 32px;
  }
  .index-form__input {
    width: calc(100% - 60px);
    height: 40px;
    border: 2px solid #c0c0c0;
    border-radius: 4px;
  }
  .index-form__submit {
    color: #111;
    width: 60px;
    height: 40px;
    border: 2px solid #c0c0c0;
    background: #FFFFFF;
    border-radius: 4px;
    cursor: pointer;
  }
</style>