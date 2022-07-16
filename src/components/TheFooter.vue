<template>
  <v-row class="footer_container">
    <v-col cols="12" lg="3" md="6" sm="6" class="pl-sm-10 px-12 px-md-4">
      <div class="footer_content">
        <div class="content_logo mb-4 mt-16">
          <img
            src="https://www.railway.uz/local/templates/main_v2/img/logo.webp"
            alt="Footer logo not found"
          />
        </div>
        <div class="content_text px-lg-10 mb-4">
          "O'zbekiston temir yo'llari" Aksiyadorlik Jamiyati Personalni boshqarish va kadrlar tayorlash boshqarmasining veb sahifasi
        </div>
         <div class="content_text px-lg-10 mb-10">
          Saytdagi maʼlumotlardan foydalanish vaqtida manba sifatida nok.uz saytini koʻrsatish shart.
        </div>
        <div class="content_socials mb-8">
          <div class="social">
            <i class="mdi mdi-send-circle"></i>
          </div>
          <div class="social">
            <i class="mdi mdi-instagram"></i>
          </div>
          <div class="social">
            <i class="mdi mdi-facebook"></i>
          </div>
          <div class="social">
            <i class="mdi mdi-youtube"></i>
          </div>
        </div>
      </div>
    </v-col>
    <v-col
      cols="12"
      lg="3"
      md="6"
      sm="6"
      class="pr-sm-10 px-12 px-md-4 mb-4 mt-16"
    >
      <h3 class="footer_contact_title mb-12">Bog'lanish</h3>

      <div class="contact_content mb-4">
        <div class="contact_title">Manzil:</div>
        <div class="contact_details">
          O‘zbekiston Respublikasi, Toshkent, 100060, Т. Shevchenko ko‘chasi, 7
        </div>
      </div>
      <div class="contact_content mb-4">
        <div class="contact_title">Telefon:</div>
        <div class="contact_details">+998 (99) 5016004</div>
      </div>
      <div class="contact_content mb-4">
        <div class="contact_title">Pochta:</div>
        <div class="contact_details">raximovj662@gmail.com</div>
      </div>
      <div class="contact_content mb-4">
        <div class="contact_title">Ish vaqti:</div>
        <div class="contact_details">09:00 - 18:00</div>
      </div>
      <div class="contact_content mb-4">
        <div class="contact_title">Tushlik:</div>
        <div class="contact_details">13:00 - 14:00</div>
      </div>
    </v-col>
    <v-col
      cols="12"
      lg="3"
      md="6"
      sm="12"
      class="pl-sm-10 px-12 px-md-4 mb-4 mt-16"
    >
      <h3 class="footer_contact_title mb-12">Asosiy</h3>

      <div class="contact_content mb-4">
        <router-link to="/leaders">Rahbariyat</router-link>
      </div>
      <div class="contact_content mb-4">
        <router-link to="/services">Ko'p so'raladigan savollar</router-link>
      </div>
      <div class="contact_content mb-4">
        <router-link to="https://telegram.me/JAmacoder"
          >Admin bilan bog'lanish</router-link
        >
      </div>
      <div class="contact_content mb-4">
        <router-link to="/functional">Funksiya va vazifalar</router-link>
      </div>
      <div class="contact_content mb-4">
        <router-link to="/services">Murojat yuborish</router-link>
      </div>
    </v-col>
    <v-col
      cols="12"
      lg="3"
      md="6"
      sm="12"
      class="pr-sm-10 px-12 px-md-4 mb-4 mt-16"
    >
      <h3 class="footer_contact_title mb-12">Statistika</h3>
      <div class="contact_content mb-4">
        <div class="contact_title">Oxirgi yangilanish</div>
        <div class="contact_details">
          16.07.2022 17:30:15
        </div>
      </div>
       <div class="contact_content mb-4">
        <div class="contact_title">Onlayn foydalanuvchilar soni:</div>
        <div class="contact_details">
          1 
        </div>
      </div>
    </v-col>
    <v-col cols="12">
      <p class="copy_right pt-6 pb-8">
        Sayt <a href="https://jamacoder.uz/">Jamacoder</a> tomonidan ishlab
        chiqilgan.
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer_container {
  background-color: #071327;
}
.footer_content {
  display: flex;
  flex-direction: column;

  & > .content_logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 80px;
    }
  }
  & > .content_text {
    width: 100%;
    color: #ffffff;
    font-size: 15px;
  }
  .content_socials {
    display: flex;
    justify-content: space-evenly;
    & > .social {
      padding: 2px 8px;
      border-radius: 100px;
      background-color: #ffffff;
      transition: all 0.3s ease-out;
      &:hover {
        cursor: pointer;
        background-color: #3f9f42;
        & > i {
          color: #ffffff;
        }
      }

      & > i {
        font-size: 24px;
        color: #666666;
      }
    }
  }
}
.footer_contact_title {
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
}
.contact_content {
  display: flex;
  // justify-content: space-between;
  gap: 20px;
  & > a {
    text-decoration: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    &:hover {
      color: #3f9f42;
    }
  }

  & > .contact_title {
    color: #b8b8b9;
    font-weight: 600;
    font-size: 15px;
    min-width: 100px;
  }
  & > .contact_details {
    color: #ffffff;
    font-size: 14px;
  }
}
.copy_right {
  width: calc(100% - 40px);
  display: flex;
  margin: 0px 20px;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border-top: 1px solid #ffffff;
  & > a {
    color: #3f9f42;
    margin: 0px 5px;
    text-decoration: none;
  }
}
</style>
