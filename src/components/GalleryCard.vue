<template>
  <div>
    <v-card max-width="100%" class="cursor_hover_pointer">
      <v-img :src="imgUrl" :lazy-src="imgUrl" max-width="100%" :aspect-ratio="16/9">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        <v-col class="d-flex justify-space-between">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="pink" v-bind="attrs" v-on="on">
                <v-icon>mdi-heart-multiple-outline</v-icon>
              </v-btn>
            </template>
            <span>Munosabat bildirish</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                color="white"
                v-bind="attrs"
                v-on="on"
                @click="openGallery()"
              >
                <v-icon>mdi-fullscreen</v-icon>
              </v-btn>
            </template>
            <span>To'liq oynada ochish</span>
          </v-tooltip>
        </v-col>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
  },
  methods: {
    openGallery() {
      this.$emit("gallery");
    },
  },
};
</script>

<style lang="scss" scoped></style>
