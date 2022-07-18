<template>
  <v-row>
    <v-col cols="12" class="overflow-x-hidden">
      <div class="alert_container">
        <div class="alert_content px-8 px-sm-16">
          <!-- <div class="content_icon">
            <i class="mdi mdi-information-outline"></i>
          </div> -->
          <div class="alert_text">
            Saytning beta versiyasi sinov holatida ishlamoqda!
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.alert_container {
width: 100%;
background: #5433FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #A5FECB, #20BDFF, #5433FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #A5FECB, #20BDFF, #5433FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border: 1px solid transparent;
  position: relative !important;
  z-index: 12;

  & > .alert_content {
    width: 100% !important;
    display: flex;
    position: relative !important;
    overflow-x: hidden;
    border: 1px solid transparent;
    & > .alert_text {
      color: #f4f4f4;
      font-size: 14px;
      padding: 4px 20px !important;
      text-align: center;
      width: 100% !important;
      right: 0px;
      transform: translateX(0%);
      font-weight: 600;
    }
  }
 
}

</style>
