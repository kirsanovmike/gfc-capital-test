<template>
  <v-app>
    <notifications group="email" />
    <navigation :color="color" :flat="flat" />
    <v-main style="padding-top: 60px">
      <home />
      <about-us />
      <about />
      <pricing />
      <!-- <download /> -->
      <contact />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="#128c76"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style scoped>
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
// import download from "./components/DownloadSection";
import pricing from "./components/PricingSection";
import contact from "./components/ContactSection";
import AboutUs from "./components/AboutUs.vue";

export default {
  name: "App",

  components: {
    navigation,
    foote,
    home,
    about,
    // download,
    pricing,
    contact,
    AboutUs,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "#171b34";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "#171b34";
        this.flat = false;
      } else {
        this.color = "#171b34";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style lang="scss">
.vue-notification-group {
  width: 60% !important;
  max-width: 300px;
  top: auto !important;
  bottom: 0px !important;
}

.vue-notification {
  color: white;
  background: #128c76 !important;
  opacity: 0.95;
  border-left: 5px solid #0c5e4f !important;
}
</style>
