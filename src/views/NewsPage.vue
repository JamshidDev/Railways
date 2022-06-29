<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row>
      <v-col cols="12">
        <h1 class="py-16 text-center banner_title">Yangiliklar</h1>
      </v-col>
    </v-row>
    <v-row class="white pt-4 mb-4">
      <v-col cols="12" lg="8" xl="8" md="7">
        <news-banner></news-banner>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        xl="4"
        md="5"
        class="grey lighten-3 mt-4 d-flex flex-column"
      >
        <div class="recently_title font-weight-bold pb-4 pl-4">
          So'ngi yalgiliklar
        </div>
        <news-mini-card
          v-for="(item, i) in newsList"
          :key="i"
          :title="item.title"
          :date="item.date"
          :picture="item.pic"
        ></news-mini-card>
        <v-btn
          color="green"
          class="my-6 mx-auto"
          text
          width="auto"
          rounded
          elevation="2"
          @click="pushRouter()"
          >Barchasini ko'rish</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsBanner from "@/components/NewsBanner.vue";
import NewsMiniCard from "@/components/NewsMiniCard.vue";
export default {
  components: {
    NewsBanner,
    NewsMiniCard,
  },
  data() {
    return {
      newsList: [
        {
          title: `"Ilg'or tajriba maktabi" mavzusida seminar-trening`,
          date: `25-August-2021`,
          pic: `https://qarshimtu.uz/38127533664561.jpg`,
        },
        {
          title: `Yurtimizdagi yirik eksportyor korxonalar mas'ullari bilan uchrashuv`,
          date: `25-Mart-2022`,
          pic: `https://qarshimtu.uz/99819751514561.jpg`,
        },
        {
          title: `"Yagona darcha" dasturidan foydalanish bo'yicha yig'ilish o'tkazildi`,
          date: `25-August-2021`,
          pic: `https://qarshimtu.uz/93018656414561.jpg`,
        },
        {
          title: `"Ilg'or tajriba maktabi" mavzusida seminar-trening`,
          date: `25-August-2021`,
          pic: `https://qarshimtu.uz/38127533664561.jpg`,
        },
        {
          title: `Yurtimizdagi yirik eksportyor korxonalar mas'ullari bilan uchrashuv`,
          date: `25-Mart-2022`,
          pic: `https://qarshimtu.uz/99819751514561.jpg`,
        },
        {
          title: `"Yagona darcha" dasturidan foydalanish bo'yicha yig'ilish o'tkazildi`,
          date: `25-August-2021`,
          pic: `https://qarshimtu.uz/93018656414561.jpg`,
        },
        {
          title: `"Yagona darcha" dasturidan foydalanish bo'yicha yig'ilish o'tkazildi`,
          date: `25-August-2021`,
          pic: `https://qarshimtu.uz/93018656414561.jpg`,
        },
        {
          title: `"Ilg'or tajriba maktabi" mavzusida seminar-trening`,
          date: `25-August-2021`,
          pic: `https://qarshimtu.uz/38127533664561.jpg`,
        },
        {
          title: `Yurtimizdagi yirik eksportyor korxonalar mas'ullari bilan uchrashuv`,
          date: `25-Mart-2022`,
          pic: `https://qarshimtu.uz/99819751514561.jpg`,
        },
        {
          title: `"Yagona darcha" dasturidan foydalanish bo'yicha yig'ilish o'tkazildi`,
          date: `25-August-2021`,
          pic: `https://qarshimtu.uz/93018656414561.jpg`,
        },
      ],
    };
  },
  methods: {
    pushRouter() {
      this.$router.push("/allnews");
    },
  },
};
</script>

<style lang="scss" scoped>
.recently_title {
  font-size: 20px;
  font-family: "Montserrat", sans-serif !important;
}
</style>
