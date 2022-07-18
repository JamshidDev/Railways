<template >
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title class="indigo--text text-uppercase"
            >Murojatlar</v-card-title
          >
          <v-tabs
            v-model="tab"
            color="white"
            background-color="primary"
            centered
            icons-and-text
          >
            <v-tabs-slider color="green"></v-tabs-slider>

            <v-tab href="#tab-1" class="font-weight-bold">
              Tasdiqlangan
              <v-icon color="green" size="30">mdi-text-box-check</v-icon>
            </v-tab>

            <v-tab href="#tab-2" class="mx-16 font-weight-bold">
              Yangi murojatlar
              <v-icon color="indigo" size="30"
                >mdi-file-document-multiple-outline</v-icon
              >
            </v-tab>

            <v-tab href="#tab-3" class="font-weight-bold">
              Tasdiqlanmagan
              <v-icon color="red" size="30">mdi-file-document-remove</v-icon>
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="10">
        <v-card>
          <v-tabs-items v-model="tab">
            <v-tab-item :value="'tab-1'">
              <v-card flat>
                <v-card-text>
                  <v-data-table
                    :headers="dessertHeaders"
                    :items="reportList"
                    :single-expand="singleExpand"
                    :expanded.sync="expanded"
                    item-key="name"
                    show-expand
                    class="elevation-0 font-weight-bold"

                  >
                    <template v-slot:top>
                      <v-toolbar flat>
                        <v-toolbar-title class="green--text">Tasdiqlangan murojatlar</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-switch
                          v-model="singleExpand"
                          label="Bittalik expand"
                          class="mt-2"
                        ></v-switch>
                      </v-toolbar>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                      <td
                        :colspan="headers.length"
                        class="font-weight-medium elevation-0 blue--text py-4 px-6"
                      >
                        {{ item.text }}
                      </td>
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item :value="'tab-2'">
              <v-card flat>
                  <v-card-text>
                    <v-data-table
                    :headers="dessertHeaders"
                    :items="reportList"
                    :single-expand="singleExpand"
                    :expanded.sync="expanded"
                    item-key="name"
                    show-expand
                    class="elevation-0 font-weight-bold"

                  >
                    <template v-slot:top>
                      <v-toolbar flat>
                        <v-toolbar-title class="blue--text">Yangi murojatlar</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-switch
                          v-model="singleExpand"
                          label="Bittalik expand"
                          class="mt-2"
                        ></v-switch>
                      </v-toolbar>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                      <td
                        :colspan="headers.length"
                        class="font-weight-medium elevation-0 blue--text py-4 px-6"
                      >
                        {{ item.text }}
                      </td>
                    </template>
                  </v-data-table>
                  </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item :value="'tab-3'">
              <v-card flat>
                <v-card-text>
                  <v-data-table
                    :headers="dessertHeaders"
                    :items="reportList"
                    :single-expand="singleExpand"
                    :expanded.sync="expanded"
                    item-key="name"
                    show-expand
                    class="elevation-0 font-weight-bold"

                  >
                    <template v-slot:top>
                      <v-toolbar flat>
                        <v-toolbar-title class="red--text">Rad etilgan murojatlar</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-switch
                          v-model="singleExpand"
                          label="Bittalik expand"
                          class="mt-2"
                        ></v-switch>
                      </v-toolbar>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                      <td
                        :colspan="headers.length"
                        class="font-weight-medium elevation-0 blue--text py-4 px-6"
                      >
                        {{ item.text }}
                      </td>
                    </template>
                  </v-data-table>

                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      tab: 'tab-2',
      text: "Empty",
      expanded: [],
      singleExpand: false,
      dessertHeaders: [
        {
          text: "Murojatchining (F.I.Sh)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Manzil", value: "adress" },
        { text: "Sana", value: "date" },

        { text: "", value: "data-table-expand" },
      ],
      reportList: [
        {
          name: "Jamshid Raximov Shuxrat o'g'li",
          adress: "Xorazm viloyati, Shovot tumani",
          date: "16/12/2022",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        },
         {
          name: "Qudrat Raximov Shuxrat o'g'li",
          adress: "Xorazm viloyati, Shovot tumani",
          date: "16/12/2022",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        },
         {
          name: "Jasur Raximov Shuxrat o'g'li",
          adress: "Xorazm viloyati, Shovot tumani",
          date: "16/12/2022",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>