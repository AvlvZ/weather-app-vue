<template>
  <div id="app">
    <div class="modal">
      <v-index
          v-if="isIndex"
          v-on:searchCity="modelSearchCity"
      />
      <v-result
          v-else
          :propsSearchData="searchData"
      />
    </div>
    <div class="cover">
      <div class="cover__relative">
        <i-vector1 name="vector1"/>
        <i-vector2 name="vector2"/>
        <i-vector3 name="vector3"/>
        <i-vector4 name="vector4"/>
        <div ref="vector_5">
          <i-vector5 name="vector5"/>
        </div>
        <div class="wind" ref="wind">
          <i-wind1 name="wind1"/>
          <i-wind2 name="wind2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VIndex from "@/components/v-index";
import VResult from "@/components/v-result";
import IVector1 from "@/components/icons/i-vector1";
import IVector2 from "@/components/icons/i-vector2";
import IVector3 from "@/components/icons/i-vector3";
import IVector4 from "@/components/icons/i-vector4";
import IVector5 from "@/components/icons/i-vector5";
import IWind1 from "@/components/icons/i-wind1";
import IWind2 from "@/components/icons/i-wind2";
import {gsap} from "gsap";

export default {
  name: 'App',
  components: {
    IWind2,
    IWind1,
    IVector5,
    IVector4,
    IVector3,
    IVector2,
    IVector1,
    VResult,
    VIndex
  },
  data() {
    return {
      isIndex: true,
      searchData: ""
    }
  },
  methods: {
    modelSearchCity(data) {
      this.isIndex = false;
      this.searchData = data;
    }
  },
  mounted() {
    const {wind} = this.$refs

    gsap.to(wind, {
      scrollTrigger: {
        scrub: 1
      },
      opacity: 1
    })
  }
}
</script>

<style lang="scss">
@import "./src/assets/stylesheets/variables";


.wind {
  opacity: 0;
  z-index: 111;
}

#app {
  height: 200vh;
  text-align: center;
  background: #5D69F6;
  color: #FFF;
}

.modal {
  @include positionFixed(25%, 50%, auto, 50%);
  width: 400px;
  padding: $s-measure * 2;
  background: rgba(215, 152, 249, 0.27);
  box-shadow: inset 0 3.00856px 6.01712px rgba(255, 255, 255, 0.4), inset 0 -3.00856px 9.02569px rgba(255, 255, 255, 0.5), inset 0 -1.50428px 20.0571px rgba(255, 255, 255, 0.24), inset 0 20.0571px 20.0571px rgba(255, 255, 255, 0.24), inset 0 1.00285px 20.5585px rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-radius: $s-measure * 2;
  transform: translate(-50%);
  z-index: 10;
}

.cover {
  @include positionFixed(0, auto, auto, 0);
  @include dimensions(100%, 100vh);
  overflow: hidden;

  .cover__relative {
    position: relative;
    @include dimensions(100%, 100vh);
  }

  .selector {
    @include positionFixed(0, auto, auto, 0);
    @include dimensions(100%, 100vh);
    background: red;
  }
}
</style>
