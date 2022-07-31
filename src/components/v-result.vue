<template>
  <div class="v-result">
    <div class="header">
      <h1 class="result-header__item">
        Vue Weather App
      </h1>
    </div>
    <div class="result__info">
      <div class="result-info__item">
        <div class="temp">{{ celsius }}°C</div>
        <div class="description">| {{ weatherMainDescription.toUpperCase() }}</div>
      </div>
      <div class="result-info__icon">
        <img :src="isIcon" alt="weather">
      </div>
    </div>
    <h2 class="result__city">{{ city }}</h2>
    <div class="result__detailed">
      <h6 class="result-detailed__header">Weather Info</h6>
      <div class="result-detailed__item">
        <div class="card">
          <div class="card__icon">
            <i-calendar name="calendar" />
          </div>
          <div class="card__info">
            <div>{{ tomorrow }}</div>
            <div>Date</div>
          </div>
        </div>
        <div class="card">
          <div class="card__icon">
            <i-humidity name="humidity"/>
          </div>
          <div class="card__info">
            <div>{{ humidity }}</div>
            <div>Humidity</div>
          </div>
        </div>
        <div class="card">
          <div class="card__icon">
            <i-wind name="wind" />
          </div>
          <div class="card__info">
            <div>{{ windSpeed }}</div>
            <div>Wind</div>
          </div>
        </div>
        <div class="card">
          <div class="card__icon">
            <i-pressure name="pressure" />
          </div>
          <div class="card__info">
            <div>{{ pressure }}</div>
            <div>Pressure</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {format} from "date-fns";
import ICalendar from "@/components/icons/i-calendar";
import IWind from "@/components/icons/i-wind";
import IHumidity from "@/components/icons/i-humidity";
import IPressure from "@/components/icons/i-pressure";

export default {
  name: "v-result",
  components: {IPressure, IHumidity, IWind, ICalendar},
  data() {
    return {
      city: "",
      celsius: "",
      weatherMainDescription: "",
      tomorrow: "",
      windSpeed: "",
      humidity: "",
      pressure: "",
      isIcon: "",
    }
  },
  methods: {
    async postFetch() {
      try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg,ru&appid=d374e8f9cbae209a96ed51df9e9e5721&units=metric");
        this.city = response.data.name;
        this.celsius = Math.ceil(response.data.main.temp);
        this.weatherMainDescription = response.data.weather[0].description;
        this.windSpeed = response.data.wind.speed;
        this.humidity = response.data.main.humidity;
        this.pressure = response.data.main.pressure;
        this.isIcon = " http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png";
        console.log(this.isIcon)
      } catch {
        alert("Error")
      }
    },
    newDateFunc() {
      const dateFormat = format(new Date(), "dd/MMMM");
      this.tomorrow = dateFormat.replaceAll("/", ".");
    }
  },
  mounted() {
    this.postFetch();
    this.newDateFunc();
  }
}
</script>

<style scoped>
.result-header__item {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 32px;
}

.result__info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
}

.result-info__item {
  display: flex;
}

.result-info__item {
  display: flex;
  align-items: center;
}

.temp {
  font-size: 28px;
  font-weight: 500;
  margin-right: 8px;
}

.result-detailed__header {
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 32px;
  margin-top: 16px;
}

.card {
  display: flex;
  gap: 8px;
}

.result-detailed__item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.description {
  font-size: 14px;
}

.result__city {
  font-weight: 500;
}
</style>