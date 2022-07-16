<template>
  <div class="v-result">
    <div class="header">
      <h1 class="result-header__item">
        Vue Weather App
      </h1>
    </div>
    <div class="result__info">
      <div class="result-info__item">
        <div class="temp">22°C</div>
        <div class="description">Clear Sky</div>
      </div>
      <div class="result-info__icon">

      </div>
    </div>
    <h2 class="result__city">Buynaksk, RU</h2>
  </div>
</template>

<script>
export default {
  name: "v-result",
  data() {
    return {

    }
  },
  methods: {
    async postFetch() {
      try {
        await fetch('https://api.openweathermap.org/data/2.5/weather?q=Buynaksk&appid=d374e8f9cbae209a96ed51df9e9e5721')
          .then(function (resp) {return resp.json() })
          .then(function (data) {
            console.log(data)
          })
      } catch {
        alert("Error")
      }
    },

  },
  mounted() {
    this.postFetch()
  }
}
</script>

<style scoped>
.result-header__item {
  font-size: 20px;
  margin-bottom: 32px;
}

.result__info {
  display: flex;
  justify-content: space-between;
}
.result-info__item {
  display: flex;
}
</style>