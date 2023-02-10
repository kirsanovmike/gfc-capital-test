<template>
  <v-container class="px-0" fluid>
    <section id="hero">
      <v-parallax src="@/assets/img/bg.jpg" height="860">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col class="mt-n8" cols="12" md="6" xl="8">
                <h1 class="display-2 font-weight-bold mb-4 mt-n10">
                  GET PAID FOR THE PRODUCT TODAY AND INCREASE YOUR CAPABILITIES
                </h1>
                <h1 class="font-weight-light">
                  Trade finance for suppliers of marketplaces and <br />
                  delivery services.
                </h1>
                <v-btn
                  large
                  dark
                  color="#128C76"
                  @click="$vuetify.goTo('#aboutus')"
                  class="mt-5"
                >
                  Find more
                  <v-icon class="ml-2">mdi-arrow-down</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="svg-border-waves text-white">
          <v-img src="@/assets/img/borderWaves.svg" />
        </div>
      </v-parallax>
    </section>
    <section id="aboutus">
      <v-container fluid id="aboutus" class="mt-n10 pt-0">
        <v-row class="mt-n10" align="center" justify="center">
          <v-col class="pt-0" cols="10">
            <h1 class="font-weight-light display-2 mt-6 ml-n4">About us</h1>
            <h1 class="font-weight-light display-1 mb-3 mt-2 ml-n4">Who we are?</h1>
            <v-row class="mt-6" align="center" justify="space-around">
              <p>
                GFC CAPITAL has been operating in the trade finance market since
                2008. The company is currently developing a trade finance
                service in Dubai. A group of international investors led by GFC
                CAPITAL founded a fund to finance trading companies of small and
                medium-sized businesses.
              </p>
            </v-row>
          </v-col>
        </v-row>
        <div class="svg-border-waves">
          <img src="~@/assets/img/wave2.svg" />
        </div>
      </v-container>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.gfc-title {
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Grey / 1 */

  color: #333333;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
