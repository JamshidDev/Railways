<template>
  <v-carousel  show-arrows-on-hover :height="height" cycle class="rounded-lg">
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
import banner_1 from "@/assets/peopleAvatar/banner_1.svg";
import banner_2 from "@/assets/peopleAvatar/banner_2.png";
import banner_6 from "@/assets/peopleAvatar/banner_6.svg";
import banner_7 from "@/assets/peopleAvatar/banner_7.svg";
import banner_8 from "@/assets/peopleAvatar/banner_8.svg";
import banner_9 from "@/assets/peopleAvatar/banner_9.svg";
export default {
  data() {
    return {
      items: [
        {
          src: banner_2,
        },
        {
          src: banner_1,
        },
        {
          src: banner_6,
        },
        {
          src: banner_7,
        },
        {
          src: banner_8,
        },
        {
          src: banner_9,
        },
      ],
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "300px";
        case "sm":
          return "400px";
        case "md":
          return "500px";
        case "lg":
          return "500px";
        case "xl":
          return "500px";
        default:
          return "500px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow-sheet-dark {
  width: 100%;
  height: 100%;
  // background: linear-gradient(
  //     325.56deg,
  //     #00a795 -22.1%,
  //     rgba(0, 167, 149, 0.96875) -0.69%,
  //     rgba(0, 167, 149, 0) 33.13%
  //   ),
  //   linear-gradient(
  //     160.3deg,
  //     #00a795 -16.93%,
  //     rgba(0, 167, 149, 0.96875) -7.7%,
  //     rgba(0, 167, 149, 0) 48.72%
  //   );
}
</style>
