<template>
  <v-carousel hide-delimiters show-arrows-on-hover :height="height" cycle>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      :lazy-src="item.src"
      reverse-transition="slide-x-transition"
    >
      <div class="overflow-sheet-dark d-flex align-center"></div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://qarshimtu.uz/76674307957461.jpg",
        },
        {
          src: "https://qarshimtu.uz/76674307957461.jpg",
        },
        {
          src: "https://www.railway.uz/local/templates/main_v2/img/files/main-bg.webp",
        },
      ],
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "500px";
        case "sm":
          return "600px";
        case "md":
          return "600px";
        case "lg":
          return "auto";
        case "xl":
          return "auto";
        default:
          return "100 vh";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow-sheet-dark {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      325.56deg,
      #00a795 -22.1%,
      rgba(0, 167, 149, 0.96875) -0.69%,
      rgba(0, 167, 149, 0) 33.13%
    ),
    linear-gradient(
      160.3deg,
      #00a795 -16.93%,
      rgba(0, 167, 149, 0.96875) -7.7%,
      rgba(0, 167, 149, 0) 48.72%
    );
}
</style>
