<template>
  <v-container fluid>
    <v-row class="pb-16">
      <v-col cols="12">
        <v-card elevation="0">
          <v-card-title class="font-weight-medium text-uppercase"
            >Yangilikni tahrirlash</v-card-title
          >
          <v-divider></v-divider>

          <v-card-text>
            <v-form>
              <v-col cols="12">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  rows="3"
                  label="Yangilik mavzusi"
                  color="primary"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  color="primary"
                  rows="6"
                  label="Yangilik matni"
                ></v-textarea>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-action>
            <v-col cols="12" class="d-flex justify-space-between px-8">
              <v-btn color="warning" @click="goToBack()">Orqaga</v-btn>
              <v-btn color="primary">Saqlash</v-btn>
            </v-col>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToBack() {
      this.$router.push("/admin/news");
    },
  },
};
</script>

<style lang="scss" scoped></style>
