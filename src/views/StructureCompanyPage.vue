<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <h3 class="structure_title mb-6">Ma’muriy tuzilish</h3>
      </v-col>
      <v-col cols="12" class="px-lg-10 px-xl-16 px-md-8 px-4">
        <v-card>
          <v-card-text>
            <v-img
              :lazy-src="structureImg"
              max-height="auto"
              max-width="100%"
              :src="structureImg"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import structureComppany from "@/assets/peopleAvatar/structureComppany.png";
export default {
  data() {
    return {
      structureImg: structureComppany,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner_bg {
  background: url("https://www.railway.uz/local/templates/main_v2/img/footer-bg.jpg");
}
.structure_title {
  width: 100%;
  font-size: 34px;
  font-weight: 700;
  color: #41b983;
  text-transform: uppercase;
  text-align: center;
}
</style>
