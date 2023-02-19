<template>
  <section id="aboutus">
    <v-container fluid id="aboutus" class="mt-n10 pt-0">
      <v-row class="mt-n10" align="center" justify="center">
        <v-col class="pt-0" cols="10">
          <h1 class="font-weight-light display-2 mt-2 ml-n4">About us</h1>
          <h1 class="font-weight-light display-1 mb-3 mt-2 ml-n4">
            Who we are?
          </h1>
          <v-row class="mt-6" align="center" justify="space-around">
            <p>
              CAPITAL GFC has been operating in the trade finance market since
              2008. The company is currently developing a trade finance service
              in Dubai. A group of international investors led by CAPITAL GFC
              founded a fund to finance trading companies of small and
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
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
