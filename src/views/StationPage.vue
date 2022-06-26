<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <h3 class="station_title mb-6">Stansiyalar</h3>
      </v-col>
      <v-col cols="12" class="mt-8 pb-16">
        <v-container>
          <v-row justify="center">
            <v-simple-table style="width: 100%">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Stansiya nomi</th>
                    <th class="text-left">Masofasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner_bg {
  background: url("https://www.railway.uz/local/templates/main_v2/img/footer-bg.jpg");
}
.station_title {
  width: 100%;
  font-size: 34px;
  font-weight: 700;
  color: #41b983;
  text-transform: uppercase;
  text-align: center;
}
</style>
