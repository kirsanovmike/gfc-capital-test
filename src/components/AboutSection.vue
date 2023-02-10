<template>
  <section id="howwework">
    <v-container fluid class="pt-2 py-10">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="start">
            <v-col class="px-0" cols="12" md="12">
              <h1 class="font-weight-light display-2 mt-10">How we work</h1>
              <h1 class="font-weight-light display-1 mb-3 mt-2">
                Interaction scheme
              </h1>
            </v-col>
          </v-row>
          <v-row class="mt-n6" align="center" justify="center">
            <v-col class="px-0" cols="12" md="7">
              <v-row class="mt-4">
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/marketplace.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    You are marketplace seller - delivery of goods to the
                    marketplace
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/patient.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Request - place a request for financing, after approval,
                    transfer the right to claim the debt to the marketplace.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/verified.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Approval - the service requests confirmation from the
                    marketplace that the supplier has completed the delivery.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/hand.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Money - receive money from the service.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/commission (2).png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Commission - pay a commission to the service.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="pr-0 d-none d-md-flex mr-n2">
              <v-layout style="height: 100%" align-center justify-center>
                <v-img
                  src="@/assets/img/diagram.png"
                  class="d-block ml-auto mr-auto"
                  max-width="320px"
                />
              </v-layout>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
