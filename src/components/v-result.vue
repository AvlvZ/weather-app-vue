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
            <i-calendar name="calendar"/>
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
            <i-wind name="wind"/>
          </div>
          <div class="card__info">
            <div>{{ windSpeed }}</div>
            <div>Wind</div>
          </div>
        </div>
        <div class="card">
          <div class="card__icon">
            <i-pressure name="pressure"/>
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
  props: {
    propsSearchData: {
      type: String,
      default() {
        return ""
      }
    }
  },
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
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.propsSearchData}&appid=d374e8f9cbae209a96ed51df9e9e5721&units=metric`);
        this.city = response.data.name;
        this.celsius = Math.ceil(response.data.main.temp);
        this.weatherMainDescription = response.data.weather[0].description;
        this.windSpeed = response.data.wind.speed;
        this.humidity = response.data.main.humidity;
        this.pressure = response.data.main.pressure;
        this.isIcon = " http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png";
        console.log(this.isIcon);
        console.log(this.propsSearchData)
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

<style lang="scss">
@import "./src/assets/stylesheets/variables";

.result-header__item {
  font-size: $s-measure * 1.25;
  margin-bottom: $s-measure * 2;
  font-weight: 500;
}

.result__info {
  @include elemFlexPosition(space-between, center, 0);
  margin-bottom: $s-measure * 4;
}

.result-info__item {
  @include elemFlexPosition(flex-start, center, 0);
}

.result-info__item {
  @include elemFlexPosition(flex-start, center, 0);
}

.temp {
  font-size: $s-measure * 2;
  font-weight: 500;
  margin-right: $s-measure / 2;
}

.result-detailed__header {
  font-size: $s-measure;
  font-weight: 500;
  text-align: left;
  margin-bottom: $s-measure * 2;
  margin-top: $s-measure;
}

.card {
  @include elemFlexPosition(flex-start, center, $s-measure / 2);
}

.result-detailed__item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $s-measure * 2;
}

.description {
  font-size: $s-measure;
}

.result__city {
  font-weight: 500;
}
</style>