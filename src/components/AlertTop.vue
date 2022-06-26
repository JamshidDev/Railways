<template>
  <v-row>
    <v-col cols="12">
      <div class="alert_container">
        <div class="alert_content px-8 px-sm-16">
          <div class="content_icon">
            <i class="mdi mdi-information-outline"></i>
          </div>
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
  background-color: #41b983;
  border: 1px solid #41b983;
  position: relative;
  z-index: 12;

  & > .alert_content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & > .content_icon > i {
      font-size: 20px;
      color: #ffffff;
    }
    & > .alert_text {
      color: #ffffff;
      font-size: 14px;
      padding: 4px 20px !important;
    }
  }
}
</style>
