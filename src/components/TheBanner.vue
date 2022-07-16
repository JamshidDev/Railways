<template>
  <div class="banner_bg">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center pt-16 mb-16 pb-16">
          <div class="banner_container mt-16">
            <span class="banner_title">O'zbekiston temir yo'llari</span>
            <span class="banner_subtitle">Aksiyadorlik Jamiyati</span>
            <img
              class="banner_logo"
              src="https://www.railway.uz/local/templates/main_v2/img/logo.webp"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
.banner_container {
  width: 100%;
  padding: 100px 200px;
  background: url("../assets/peopleAvatar/banner_footer.svg");
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  border: 1px solid #3f9f42;
  &::before {
    content: " ";
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    position: absolute;
    backdrop-filter: blur(1px);
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
  & > .banner_title {
    position: absolute;
    top: 30px;
    left: 20px;
    color: #ffffff;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 700;
  }
  & > .banner_subtitle {
    position: absolute;
    top: 80px;
    left: 200px;
    color: #ffffff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
  }
  & > .banner_logo {
    height: 140px;
    position: absolute;
    top: 30px;
    right: 60px;
  }
}
@media only screen and (max-width: 850px) {
  .banner_container {
    padding: 100px 100px;
    height: 200px;
    border-radius: 20px;
    width: calc(100% - 40px);
    // margin: 0px 20px;

    & > .banner_title {
      position: absolute;
      top: 100px;
      width: 100%;
      text-align: center;
      left: 0px !important;
      color: #ffffff;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
    }
    & > .banner_subtitle {
      position: absolute;
      top: 130px;
      width: 100%;
      text-align: center;
      left: 0px !important;
      color: #ffffff;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 700;
    }
    & > .banner_logo {
      height: 60px;
      position: absolute;
      top: 30px;
      left: 0px;
      margin: 0px auto;
    }
  }
}
</style>
