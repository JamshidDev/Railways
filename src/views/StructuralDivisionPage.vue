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
                    <th class="text-left text-h6">Lavozimi</th>
                    <th class="text-left font-weight-bold">
                      To'lim ism sharifi
                    </th>
                    <th class="text-left font-weight-bold">Bog'lanish</th>
                    <th class="text-left font-weight-bold">Qabul kunlari</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in workers" :key="i" class="py-2">
                    <td>
                      {{ item.position }}
                    </td>
                    <td class="font-weight-bold">
                      {{ item.fullName }}
                    </td>
                    <td>{{ item.contact }}</td>
                    <td>{{ item.visitDays }}</td>
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
      workers: [
        {
          position: ` O'TY AJ Personalni boshqarish va kadrlar tayorlash
          boshqarmasi boshlig'i`,
          fullName: ` To'xtayev Vahobjon Husenovich`,
          contact: `+998(71)2388795`,
          visitDays: `Seshanba, Payshanba | 15:00-18:00`,
        },
        {
          position: ` O'TY AJ Personalni boshqarish va kadrlar tayorlash
          boshqarmasi boshlig'i o'rinbosari`,
          fullName: ` Fazilov Shuxrat Shavkatovich`,
          contact: `+998(71)2388795`,
          visitDays: `Har kuni | 09:00-18:00`,
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
</style>
