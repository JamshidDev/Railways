<template >
    <v-alert
      v-if="notefication"
      border="left"
      :color="NoteColor"
      text
      class="notefiction"
      :type="NoteType"
      icon="mdi-alert-circle-outline"
      transition="slide-x-reverse-transition"
    > {{NoteText}}</v-alert>
</template>
<script>
export default {
    props:{
        notefication:{
            type:Boolean,
            default:false
        },
        NoteType:{
          type:String,
          default:"success"
        },
        NoteColor:{
          type:String,
          default:"green"
        },
        NoteText:{
          type:String,
          default:"Muvofaqiyatli bajarildi"
        }
    },
};
</script>
<style lang="scss">
.notefiction{
  position: fixed !important;
  z-index: 9999 !important;
  right: 30px;
  bottom: 30px;
  min-width: 200px !important;
}
</style>