<template>
  <section class="pb-8" id="contact">
    <v-container fluid class="py-2 mb-8">
      <v-row align="center" justify="center">
        <v-col class="px-0" cols="10">
          <v-row justify="center">
            <v-col cols="12">
              <h1 class="font-weight-light display-2 mt-6">Contact us</h1>
              <p
                class="font-weight-light display-1 mb-3 mt-2"
                style="font-size: 28px !important"
              >
                If you are selling goods through a marketplace, write to us
              </p>
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="textArea"
                  :rules="textAreaRules"
                  label="Message"
                  required
                />

                <v-btn
                  color="#128c76"
                  dark
                  rounded
                  block
                  class="mt-3"
                  @click="submit"
                >
                  Start now
                </v-btn>
              </v-form>
              <h3 class="font-weight-light mt-10 mb-n3">
                Or
                <a
                  href="mailto:gfc.capital.dubai@gmail.com?subject=Marketplace seller"
                >
                  contact
                </a>
                by email: gfc.capital.dubai@gmail.com
                <v-btn icon dense @click="copyEmail">
                  <v-icon color="#128c76">mdi-content-copy</v-icon>
                </v-btn>
              </h3>
              <h3 class="font-weight-light mt-3"></h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script>
// import {db} from '@/main'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Looks not like an email",
    ],
    textArea: "",
    textAreaRules: [(v) => !!v || "Message is required"],
    lazy: false,
    snackbar: {
      enabled: false,
      text: "",
      color: "",
    },
  }),
  methods: {
    submit() {
      if (this.valid) {
        alert("Thanks, we will contact you!");
        this.name = "";
        this.email = "";
        this.textArea = "";
        this.lazy = false;
        this.$refs.form.reset();
      } else {
        this.$refs.form.validate();
      }
    },
    copyEmail() {
      this.$clipboard("gfc.capital.dubai@gmail.com");
      this.$notify({
        group: "email",
        title: "Email copied!",
        position: "bottom",
      });
    },
  },
};
</script>
