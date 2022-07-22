<template>
  <v-container>
    <v-row class="py-16">
      <v-col>
        <div
          class="
            text-uppercase
            green--text
            text-center
            font-weight-bold font-montserrat
            pb-16
          "
          style="font-size: 30px"
        >
          {{ group_1[index].title }}
        </div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center pb-16">
        <v-card>
          <v-img
            :src="group_1[index].boss.avatar"
            :aspect-ratio="3 / 4"
            class="white--text align-end"
          >
            <v-row class="green pt-2 px-4">
              <v-col cols="12" class="pb-0">
                <div
                  class="font-montserrat text-uppercase font-weight-medium pb-2"
                >
                  {{ group_1[index].boss.position }}
                </div>
                <div class="font-montserrat">
                  {{ group_1[index].boss.fullName }}
                </div>
              </v-col>
              <v-col cols="12" class="d-flex justify-space-between pb-4">
                <v-btn icon rounded color="yellow">
                  <v-icon size="30">mdi-star-circle</v-icon>
                </v-btn>
                <v-btn icon rounded color="white">
                  <v-icon size="30">mdi-progress-download</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col
            cols="12"
            xl="3"
            lg="3"
            md="4"
            sm="6"
            v-for="worker in group_1[index].workers"
            :key="worker.fullName"
          >
            <v-card>
              <v-img
                :src="worker.avatar"
                class="white--text align-end"
                max-height="600px"
                height="600px"
              >
                <v-row class="light-blue pt-2 px-4">
                  <v-col cols="12" class="pb-0">
                    <div
                      class="
                        font-montserrat
                        text-uppercase
                        font-weight-medium
                        pb-2
                      "
                    >
                      {{ worker.position }}
                    </div>
                    <div class="font-montserrat">
                      {{ worker.fullName }}
                    </div>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-end pt-0 pb-4">
                    <v-btn icon rounded color="white">
                      <v-icon size="30">mdi-progress-download</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import avatar_8 from "@/assets/employee/avatar_8.jpg";
import avatar_12 from "@/assets/employee/avatar_12.jpg";
import avatar_10 from "@/assets/employee/avatar_10.jpg";
import avatar_11 from "@/assets/employee/avatar_11.jpg";
import avatar_14 from "@/assets/employee/avatar_14.jpg";
import avatar_20 from "@/assets/employee/avatar_20.jpg";

import avatar_17 from "@/assets/employee/avatar_17.jpg";
import avatar_5 from "@/assets/employee/avatar_5.jpg";

import avatar_7 from "@/assets/employee/avatar_7.jpg";
import avatar_4 from "@/assets/employee/avatar_4.jpg";
import avatar_18 from "@/assets/employee/avatar_18.jpg";
import avatar_6 from "@/assets/employee/avatar_6.jpg";
import avatar_13 from "@/assets/employee/avatar_13.jpg";

import avatar_19 from "@/assets/employee/avatar_19.jpg";
import avatar_16 from "@/assets/employee/avatar_16.jpg";
import avatar_15 from "@/assets/employee/avatar_15.jpg";
import avatar_9 from "@/assets/employee/avatar_9.jpg";

export default {
  data() {
    return {
      avatar_8,
      index: 3,
      group_1: [
        {
          title: `Ishchi kadrlar bo'limining tarkibi`,
          boss: {
            fullName: `Nazarmuxamedov Murod Karimberdiyevich`,
            position: `Ishchi kadrlar bo'limi boshlig'i`,
            avatar: avatar_8,
            details: null,
          },
          workers: [
            {
              fullName: `Xadjimuratov Botirjon Baxadirovich`,
              position: `Bosh mutaxassis`,
              avatar: avatar_10,
              details: null,
            },
            {
              fullName: `Kirgizova Nargis Murodullayevna`,
              position: `Bosh mutaxassis`,
              avatar: avatar_14,
              details: null,
            },
            {
              fullName: `Sobirov Jasurbek Abdumajitovich`,
              position: `Yetakchi mutaxassis`,
              avatar: avatar_11,
              details: null,
            },
            {
              fullName: `G'aniyev Raxmatillo Asatovich`,
              position: `1-toifali mutaxassis`,
              avatar: avatar_12,
              details: null,
            },
            {
              fullName: `Raximov Jamshid Shuxrat o'g'li`,
              position: `Ish yurituvchi`,
              avatar: avatar_20,
              details: null,
            },
          ],
        },
        {
          title: `Mukofatlash va unvon berish bo'limi`,
          boss: {
            fullName: `Yo'ldasheva Fotimaxon Ibrohimjanovna`,
            position: `Bo'lim boshlig'i`,
            avatar: avatar_17,
            details: null,
          },
          workers: [
            {
              fullName: `Abdulxayev Shavkatjon Abduqodir o'g'li`,
              position: `1-toifali mutaxassis`,
              avatar: avatar_5,
              details: null,
            },
          ],
        },
        {
          title: `Kadrlar tayorlash va o'quv yurtlari bo'limi tarkibi`,
          boss: {
            fullName: `Mavlanov Axmadjon Xakimjanovich`,
            position: `Bo'lim boshlig'i`,
            avatar: avatar_7,
            details: null,
          },
          workers: [
            {
              fullName: `Ibragimov Shuxrat Shoyizoqovich`,
              position: `Yetakchi mutaxassis`,
              avatar: avatar_4,
              details: null,
            },
            {
              fullName: `Atajanov Sardor Baxtiyarovich`,
              position: `Yetakchi mutaxassis`,
              avatar: avatar_18,
              details: null,
            },
            {
              fullName: `Sarimsakova Nodira Zakirjanovna`,
              position: `Bosh mutaxassis`,
              avatar: avatar_6,
              details: null,
            },
            {
              fullName: `Jo'raboyev Kamoljon Abdumo'minovich`,
              position: `Bosh mutaxassis`,
              avatar: avatar_13,
              details: null,
            },
          ],
        },
        {
          title: `Raxbar kadrlar bo'limi tarkibi`,
          boss: {
            fullName: `Eshqobilov Isroil Abdug'apporovich`,
            position: `Rahbar kadrlar bo'limi boshlig'i`,
            avatar: avatar_19,
            details: null,
          },
          workers: [
            {
              fullName: `Raximova Surayyo Saidmuratovna`,
              position: `Bosh mutaxassis`,
              avatar: avatar_16,
              details: null,
            },
            {
              fullName: `Minbayeva Ra'no Yo'ldashevna`,
              position: `Yetakchi mutaxassis`,
              avatar: avatar_15,
              details: null,
            },
            {
              fullName: `Tashkuziyeva Sevara Kaxramonovna`,
              position: `Bosh mutaxassis`,
              avatar: avatar_9,
              details: null,
            },
          ],
        },
      ],
    };
  },
  created(){
    this.index =this.$route.params.group
  }
};
</script>
<style lang="">
</style>