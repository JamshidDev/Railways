<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <h3 class="banner_title mb-6">Tarkibiy bo’linmalar</h3>
      </v-col>
      <v-col cols="12" class="mt-8 pb-16">
        <v-container fluid>
          <v-row justify="center">
            <v-simple-table style="width: 100%" class="overflow_table">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left text-h6">
                      <v-btn color="primary" large text>Lavozimi</v-btn>
                    </th>
                    <th class="text-left font-weight-bold">
                      <v-btn color="green" text large>
                        To'lim ism sharifi</v-btn
                      >
                    </th>
                    <th class="text-left font-weight-bold">
                      <v-btn color="pink" text large> Bog'lanish</v-btn>
                    </th>
                    <th class="text-left font-weight-bold">
                      <v-btn color="orange" text large> Qabul kunlari</v-btn>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in workers" :key="i">
                    <td class="py-2">
                      <v-chip class="ma-2" color="primary">
                        {{ item.position }}
                      </v-chip>
                    </td>
                    <td
                      class="font-weight-medium py-2 font-montserrat text-size"
                    >
                      <div class="d-flex flex-column">
                        <v-avatar size="40">
                          <img :src="item.avatar" alt="Not found" />
                        </v-avatar>
                        <span class="pt-2"> {{ item.fullName }}</span>
                      </div>
                    </td>
                    <td class="py-2">
                      <v-chip color="pink" text-color="white" label>
                        <v-icon left> mdi-phone-classic </v-icon>
                        {{ item.contact }}</v-chip
                      >
                    </td>
                    <td class="py-2">
                      <v-chip color="orange" text-color="white" label>
                        <v-icon left> mdi-calendar-clock </v-icon>
                        {{ item.visitDays }}</v-chip
                      >
                    </td>
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
import Avatar_1 from "../assets/employee/avatar_1.jpg";
import Avatar_2 from "../assets/employee/avatar_2.jpg";
import Avatar_3 from "../assets/employee/avatar_3.jpg";
import Avatar_4 from "../assets/employee/avatar_4.jpg";
import Avatar_5 from "../assets/employee/avatar_5.jpg";
import Avatar_6 from "../assets/employee/avatar_6.jpg";
import Avatar_7 from "../assets/employee/avatar_7.jpg";
import Avatar_8 from "../assets/employee/avatar_8.jpg";
import Avatar_9 from "../assets/employee/avatar_9.jpg";
import Avatar_10 from "../assets/employee/avatar_10.jpg";
import Avatar_11 from "../assets/employee/avatar_11.jpg";
import Avatar_12 from "../assets/employee/avatar_12.jpg";
import Avatar_13 from "../assets/employee/avatar_13.jpg";
import Avatar_14 from "../assets/employee/avatar_14.jpg";
import Avatar_15 from "../assets/employee/avatar_15.jpg";
import Avatar_16 from "../assets/employee/avatar_16.jpg";
import Avatar_17 from "../assets/employee/avatar_17.jpg";
import Avatar_18 from "../assets/employee/avatar_18.jpg";
import Avatar_19 from "../assets/employee/avatar_19.jpg";
export default {
  data() {
    return {
      workers: [
        {
          position: ` Boshqarma boshlig'i`,
          fullName: ` To'xtayev Vahobjon Husenovich`,
          contact: `4-84-06`,
          visitDays: `Seshanba, Payshanba | 15:00-18:00`,
          avatar: Avatar_1,
        },
        {
          position: `  Boshqarma boshlig'i o'rinbosari v.b`,
          fullName: ` Saidova Feruza Anvarovna`,
          contact: `4-88-18`,
          visitDays: `Har kuni | 09:00-18:00`,
          avatar: Avatar_3,
        },
        {
          position: `  Boshqarma boshlig'i o'rinbosari v.b`,
          fullName: ` Fazilov Shuxrat Shavkatovich`,
          contact: `4-80-80`,
          visitDays: `Har kuni | 09:00-18:00`,
          avatar: Avatar_2,
        },
        {
          position: `Rahbar kadrlar bo'limi boshlig'i`,
          fullName: `Eshqobilov Isroil Abdug'apporovich `,
          contact: `4-90-20`,
          visitDays: ``,
          avatar: Avatar_19,
        },
        {
          position: `Bosh mutahassis`,
          fullName: `Raximova Surayyo Saidmuratovna  `,
          contact: `4-94-16`,
          visitDays: ``,
          avatar: Avatar_16,
        },
        {
          position: `Bosh mutahassis`,
          fullName: `Tashkuziyeva Sevara Kaxramonovna`,
          contact: `4-11-85`,
          visitDays: ``,
          avatar: Avatar_9,
        },
        {
          position: `Ishchi kadrlar bo'limi boshlig'i`,
          fullName: `Nazarmuxamedov Murod Karimberdiyevich`,
          contact: `4-98-35`,
          visitDays: ``,
          avatar: Avatar_8,
        },
        {
          position: `Bosh mutahassis`,
          fullName: `Kirgizova Nargis Murodullayevna`,
          contact: `4-98-26`,
          visitDays: ``,
          avatar: Avatar_14,
        },
        {
          position: `Bo'lim boshlig'i`,
          fullName: `Mavlanov Axmadjon Xakimjanovich`,
          contact: `4-92-00`,
          visitDays: ``,
          avatar: Avatar_7,
        },
        {
          position: `Yetakchi mutahassis`,
          fullName: `Atajanov Sardor Baxtiyarovich`,
          contact: `4-82-03`,
          visitDays: ``,
          avatar: Avatar_18,
        },
        {
          position: `Bosh mutahassis`,
          fullName: `Sarimsakova Nodira Zakirjanovna`,
          contact: `4-16-46`,
          visitDays: ``,
          avatar: Avatar_6,
        },
        {
          position: `Bosh mutaxassis`,
          fullName: `Jo'raboyev Kamoljon Abdumo'minovich`,
          contact: `4-11-87`,
          visitDays: ``,
          avatar: Avatar_13,
        },
        {
          position: `Bosh mutaxassis`,
          fullName: `Minbayeva Ra'no Yo'ldashevna`,
          contact: `4-93-57`,
          visitDays: ``,
          avatar: Avatar_15,
        },
        //  {
        //   position: `Yordamchi Nimadir`,
        //   fullName: `Shadiyev Shaxruz Baxtiyor o'g'li`,
        //   contact: `4-82-04`,
        //   visitDays: ``,
        //   avatar: Avatar,
        // },
        {
          position: `1-toifali mutaxassis`,
          fullName: `G'aniyev Raxmatillo Asatovich`,
          contact: `4-19-07`,
          visitDays: ``,
          avatar: Avatar_12,
        },
        {
          position: `Bosh mutaxassis`,
          fullName: `Xadjimuratov Botirjon Baxadirovich`,
          contact: `4-19-08`,
          visitDays: ``,
          avatar: Avatar_10,
        },
        {
          position: `Yetakchi mutaxassis`,
          fullName: `Ibragimov Shuxrat Shoyizoqovich`,
          contact: `4-90-22`,
          visitDays: ``,
          avatar: Avatar_4,
        },
        {
          position: `Bo'lim boshlig'i`,
          fullName: `Yuldasheva Fotimaxon Ibroximjanovna`,
          contact: `4-99-70`,
          visitDays: ``,
          avatar: Avatar_17,
        },
        {
          position: `1-toifali mutaxassis`,
          fullName: `Abdulxayev Shavkatjon Abduqodir o'g'li`,
          contact: `4-90-22`,
          visitDays: ``,
          avatar: Avatar_5,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.overflow_table {
  width: 100%;
  overflow: hidden;
}
.text-size {
  font-size: 16px !important;
}
</style>
