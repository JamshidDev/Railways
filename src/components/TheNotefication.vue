<template >
    <v-alert
      v-if="notefication"
      border="left"
      color="red"
      text
      class="notefiction"
      type="error"
      icon="mdi-alert-circle-outline"
      transition="slide-x-reverse-transition"
    > Parol yoki login noto'g'ri</v-alert>
</template>
<script>
export default {
    props:{
        notefication:{
            type:Boolean,
            default:false
        }
    },
};
</script>
<style lang="scss">
.notefiction{
  position: absolute !important;
  z-index: 200;
  right: 30px;
  bottom: 30px;
  min-width: 200px !important;
}
</style>