<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="0">
          <v-col cols="12" class="d-flex justify-end pb-10">
            <v-btn color="primary" class="white--text" @click="pushAddNews()"
              >Adding</v-btn
            >
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="pt-16">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
        xl="3"
        v-for="item in 10"
        :key="item"
      >
        <v-card width="100%">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-action>
            <v-col cols="12" class="font-weight-medium">
              Favqulodda vaziyatlar sodir bo'lganda bajarilishi lozim bo'lgan
              ishlar doirasida o'tkazilgan maxsus-taktik o‘quv mashg'uloti
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" class="d-flex justify-space-between">
              <v-btn color="primary" text>Edit</v-btn>
              <v-btn color="error" text>Delete</v-btn>
            </v-col>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="py-16">
        <div class="text-center">
          <v-pagination
            v-model="currentPage"
            :length="10"
            circle
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    pushAddNews() {
      this.$router.push("/admin/addnews");
    },
  },
};
</script>

<style lang="scss" scoped></style>
