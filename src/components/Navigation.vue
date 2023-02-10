<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">GFC Capital</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-6"
      :class="{ expand: flat }"
    >
      <v-layout align-center justify-space-between>
        <v-toolbar-title
          style="cursor: pointer"
          @click="$vuetify.goTo('#hero')"
        >
          <v-layout align-center>
            <v-img
              src="@/assets/img/trade big.png"
              max-width="45px"
              max-height="45px"
            />
            <h2 class="ml-4" style="color: #128c76; font-size: 1em">
              GFC CAPITAL
            </h2>
          </v-layout>
        </v-toolbar-title>
        <!-- <v-spacer /> -->
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          color="#128c76"
          class="mr-4"
          v-if="isXs"
        />
        <div v-else>
          <v-btn text @click="$vuetify.goTo('#aboutus')">
            <span
              class="mr-2 font-weight-bold text-body-1"
              style="color: #128c76"
              >About us</span
            >
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#howwework')">
            <span
              class="mr-2 font-weight-bold text-body-1"
              style="color: #128c76"
              >How we work</span
            >
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#benefits')">
            <span
              class="mr-2 font-weight-bold text-body-1"
              style="color: #128c76"
              >Benefits</span
            >
          </v-btn>
          <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
            <span
              class="mr-2 font-weight-bold text-body-1"
              style="color: #128c76"
              >Contact us</span
            >
          </v-btn>
        </div>
      </v-layout>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "About us", "#aboutus"],
      ["mdi-currency-usd", "How we work", "#howwework"],
      ["mdi-currency-usd", "Benefits", "#benefits"],
      ["mdi-email-outline", "Contact us", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 980;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
