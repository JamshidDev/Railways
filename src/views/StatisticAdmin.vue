<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="3" lg="3" md="4" sm="6">
        <v-card elevation="1" class="d-flex flex-column pt-2 grey lighten-4">
          <v-card-text>
            <v-col>
              <v-btn color="red" large text> Kunlik murojatlar</v-btn>
            </v-col>
          </v-card-text>
          <v-progress-circular
            :rotate="360"
            :size="200"
            :width="30"
            :value="80"
            color="red"
            class="mx-auto"
          >
            <span class="red--text text-h4 font-weight-bold"> {{ 80 }}</span>
          </v-progress-circular>
          <p class="py-6 text-h6 red--text mx-auto">Murojatlar</p>
        </v-card>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="4" sm="6">
        <v-card elevation="1" class="d-flex flex-column pt-2 grey lighten-4">
          <v-card-text>
            <v-col>
              <v-btn color="primary" large text> Kunlik Yangiliklar</v-btn>
            </v-col>
          </v-card-text>
          <v-progress-circular
            :rotate="360"
            :size="200"
            :width="30"
            :value="3"
            color="primary"
            class="mx-auto"
          >
            <span class="primary--text text-h4 font-weight-bold"> {{ 3 }}</span>
          </v-progress-circular>
          <p class="py-6 text-h6 primary--text mx-auto">Yangiliklar</p>
        </v-card>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="4" sm="6">
        <v-card elevation="1" class="d-flex flex-column pt-2 grey lighten-4">
          <v-card-text>
            <v-col>
              <v-btn color="light-green accent-3" large text>
                Javob xatlar</v-btn
              >
            </v-col>
          </v-card-text>
          <v-progress-circular
            :rotate="360"
            :size="200"
            :width="30"
            :value="65"
            color="light-green accent-3"
            class="mx-auto"
          >
            <span
              class="light-green--text text--accent-3 text-h4 font-weight-bold"
            >
              {{ 65 }}</span
            >
          </v-progress-circular>
          <p class="py-6 text-h6 light-green--text text--accent-3 mx-auto">
            Javoblar
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="4" sm="6">
        <v-card elevation="1" class="d-flex flex-column pt-2 grey lighten-4">
          <v-card-text>
            <v-col>
              <v-btn color="deep-purple darken-1" large text>
                Umumiy Natijalar</v-btn
              >
            </v-col>
          </v-card-text>
          <v-progress-circular
            :rotate="360"
            :size="200"
            :width="30"
            :value="93"
            color="deep-purple darken-1"
            class="mx-auto"
          >
            <span
              class="deep-purple--text text--darken-1 text-h4 font-weight-bold"
            >
              {{ 93 }}</span
            >
          </v-progress-circular>
          <p class="py-6 text-h6 deep-purple--text text--darken-1 mx-auto">
            Umumiy
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],
    };
  },
};
</script>

<style lang="scss" scoped></style>
