<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <h3 class="banner_title mb-6">Korxona va tashkilotlar</h3>
      </v-col>
      <v-col cols="12" class="overflow-y-auto">
        <v-row
          justify="center"
          class="px-6 my-4"
          v-for="(item, i) in companyList"
          :key="i"
        >
          <v-col cols="12" xl="6" lg="8" md="10">
            <div data-aos="fade-left">
              <v-card class="px-xl-4 pt-xl-6 white" elevation="1">
                <v-row>
                  <v-col cols="12" sm="12" xl="4" lg="4" md="4">
                    <v-img
                      height="250"
                      :aspect-ratio="16 / 9"
                      :src="item.company_picture"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="12" xl="8" lg="8" md="4">
                    <v-list color="transparent">
                      <v-list-item>
                        <v-list-item-icon
                          ><v-icon color="primary" size="26"
                            >mdi-apple-keyboard-command</v-icon
                          ></v-list-item-icon
                        >
                        <v-list-item-content>
                          <v-list-item-title
                            class="blu--text font-montserrat font-weight-bold text-no-wrap"
                          >
                            {{ item.company_name }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon
                          ><v-icon color="primary" size="26"
                            >mdi-map-marker</v-icon
                          ></v-list-item-icon
                        >
                        <v-list-item-content>
                          <v-list-item-title class="blu--text font-montserrat">
                            {{ item.company_adress }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon
                          ><v-icon color="primary" size="20"
                            >mdi-phone-classic</v-icon
                          ></v-list-item-icon
                        >
                        <v-list-item-content>
                          <v-list-item-title class="blu--text font-montserrat">
                            {{ item.company_phone }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                       <v-list-item-icon
                          ><v-icon color="primary" size="26"
                            >mdi-account-star</v-icon
                          ></v-list-item-icon
                        >
                        <v-list-item-content>
                          <v-list-item-title class="blu--text font-montserrat">
                            {{ item.company_boss_fullName }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AOS from "aos";
import company_11 from "../assets/companyPicture/company_11.jpg";
import company_12 from "../assets/companyPicture/company_12.jpg";
import company_13 from "../assets/companyPicture/company_13.jpg";

import company_31 from "../assets/companyPicture/company_31.jpg";
import company_41 from "../assets/companyPicture/company_41.jpg";
import company_51 from "../assets/companyPicture/company_51.png";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      companyList: [
        {
          company_name: `"Toshkent mintaqaviy temir yo'l uzeli" Unitar Korxonasi`,
          company_adress: `Toshkent shahar, Mirobod tumani, Turkiston ko'chasi, 7`,
          company_phone: `+998 (371) 299-96-20`,
          company_picture: company_11,
          company_boss_fullName: `Farmonov Ixtiyor Аsrorovich`,
          company_boos_avatar: company_12,
          company_structure: company_13,
        },
         {
          company_name: `"Sogdiana Trans" Sho'ba Korxonasi`,
          company_adress: `Mirobod tumani Аmir Temur koʼchasi 4 uy`,
          company_phone: `+998 (71) 236-49-72`,
          company_picture: company_11,
          company_boss_fullName: `Boboqulov Jamshid Nosirovich`,
          company_boos_avatar: company_12,
          company_structure: company_13,
        },
         {
          company_name: `"O'ztemiryo'lkonteyner" Aksiyadorlik Jamiyati`,
          company_adress: `100060,Toshkent sh., Mirobod tumani, T.Shevchenko koʻchasi, 7`,
          company_phone: `+998 (78) 148-37-78`,
          company_picture: company_31,
          company_boss_fullName: `Kamildjanov Abdumalik Abduvaxitovich`,
          company_boos_avatar: company_12,
          company_structure: company_13,
        },
        {
          company_name: `"O'zvagonta'mir" Aksiyadorlik Jamiyati`,
          company_adress: `Toshkent shahar, Yashnobod tumani Farg'ona yo'li 3 proyezd 163 uy`,
          company_phone: `+998 (95) 143-98-03`,
          company_picture: company_41,
          company_boss_fullName: `Atadjanov Shamurat Xangeldiyevich`,
          company_boos_avatar: company_12,
          company_structure: company_13,
        },
         {
          company_name: `Xovos tarmoq sanitariya epidemiologiya stansiyasi`,
          company_adress: `Sirdaryo viloyati Xovos tumani Xiyobon ko‘chasi-1uy`,
          company_phone: `21-137`,
          company_picture: company_51,
          company_boss_fullName: `Fayzullaev Abdug‘ani Ismatullaevich`,
          company_boos_avatar: company_12,
          company_structure: company_13,
        },
        
      ],
    };
  },
  created() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  },
};
</script>

<style lang="scss" scoped></style>
