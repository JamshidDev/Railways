<template>
  <v-container fluid>
    <v-row class="px-lg-10 px-xl-10">
      <v-col cols="12">
        <v-img
          lazy-src="https://qarshimtu.uz/38127533664561.jpg"
          max-height="autu"
          max-width="100%"
          src="https://qarshimtu.uz/38127533664561.jpg"
        ></v-img>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between">
        <v-btn text>
          <v-icon color="green" class="mr-2">{{ dateIcon }}</v-icon>
          Mar 8 2022
        </v-btn>
        <v-btn text>
          <v-icon color="green" class="mr-2">{{ eyesIcon }}</v-icon>
          293
        </v-btn>
      </v-col>
      <v-col cols="12">
        <div class="news_title font-weight-bold p-2">
          30 iyun – Yoshlar kuni munosabati bilan poytaxtimizdagi “Anhor”
          bog‘ida “O‘zbekiston temir yo‘llari” aksiyadorlik jamiyatining
          iqtidorli, shijoatli va ulkan marralarni qo‘lga kiritgan yoshlarni
          rag‘batlantirishga bag‘ishlangan tantanali “Temiryo‘lchi yoshlar
          forumi” bo‘lib o‘tdi.
        </div>
      </v-col>
      <v-col cols="12">
        <div class="news_subtitle p-2 mb-16">
          Unda “O‘zbekiston temir yo‘llari” aksiyadorlik jamiyati rahbarlari,
          tegishli korxona va tashkilotlar, boshqarma xodimlari hamda tizimida
          faoliyat yuritayotgan yoshlar yetakchilari, faol temiryo‘lchilar,
          davlat va keng jamoatchilik vakillari, shuningdek, ommaviy axborot
          vositalari xodimlari ishtirok etdi. Tadbirda boshqaruv raisi
          o‘rinbosari U.Tursunkulov so‘zga chiqib, butun temiryo‘lchi yoshlarni
          mamlakatimizda keng nishonlanayotgan 30 iyun – Yoshlar kuni bilan
          samimiy muborakbod etdi va tizimda yoshlar siyosatini amalga oshirish
          yo‘lida 13 milliard so‘mdan ortiqrog‘ mablag‘ safarbar etilish ko‘zda
          tutilganligini ta’kidladi. – Siz yoshlarni qiynayotgan har qanday
          muammolarni bartaraf etish, soha rivoji uchun bildirilgan
          takliflaringizni qo‘llab-quvvatlash uchun biz hamisha tayyormiz, –dedi
          U.Tursunkulov. – Faqat sizlardan yagona talab, u ham bo‘lsa yaxshi,
          zamonaviy, malakali mutaxassis bo‘lish uchun barcha imkoniyatlardan
          samarali foydalanish, soha rivojiga o‘z hissangizni qo‘shish, turli
          oqimlarga, guruhlarga qo‘shilib qolmaslik, korrupsiyaga yo‘l
          qo‘ymaslik, yalqovlik, dangasalik, “menga nima” qabilida ish tutishdan
          voz kechish kerak. Har bir yosh oila, korxona, soha, mamlakat, balki
          butun dunyo kelajagi va istiqboliga dahldorligini his qila olishingiz
          lozim. Tashkil etilgan tantanali anjuman davomida shu kunga qadar
          sohada samarali faoliyat yuritayotgan istiqbolli yosh kadrlarni
          tanlash hamda yosh rahbar kadrlarni tayyorlash tizimini
          takomillashtirish maqsadida poyezdlar harakati bilan bog‘liq
          mutaxassisliklar o‘rtasida “Eng faol yosh mutaxassis” tanlovini
          o‘tkazildi. Mazkur 35 yoshgacha bo‘lgan temiryo‘lchilar o‘rtasida
          o‘tkazilgan va 7 ta sohani o‘z ichiga qamrab olgan tanlov –
          tashishlarni tashkil etish, yuk tashish, yo‘l xo‘jaligi,
          lokomotivlardan foydalanish, vagon xo‘jaligi, aloqa va
          signallashtirish, elektr ta’minoti sohalari bo‘yicha samarali tashkil
          etilib, “Temiryo‘lchi yoshlar forumida” 1-o‘rin sohiblari Jamiyat
          rahbariyatining faxriy yorlig‘i, statuetka va 4 yarim million so‘m
          miqdordagi pul mukofoti bilan taqdirlandi. Shuningdek, Jamiyat
          rahbariyati, O‘zbekiston temiryo‘lchilari va transport quruvchilari
          kasaba uyushmasi Respublika Kengashi hamda O‘zbekiston Qizil yarim oy
          jamiyati temir yo‘l mintaqaviy tashkiloti tomonidan tizimda samarali
          foliyat yuritayotgan bir guruh yoshlar yetakchilari esdalik sovg‘alari
          bilan rag‘batlantirildi. “Temiryo‘lchi yoshlar forumi” davomida
          tashkil etilgan turli xil sport va viktarina o‘yinlari hamda yoshlar
          tomonidan tayyorlangan qo‘shiq, raqs va sahna ko‘rinishlari barchaga
          ko‘tarinki kayfiyat ulashdi. Ayniqsa, taniqli san’atkorlar va
          Temiryo‘lchilar madaniyat saroyi ansanbli jamoasi tomonidan ijro
          etilgan kuy va qo‘shiqlar tadbirga o‘zgacha fayz bag‘ishladi.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCalendarRange, mdiEye } from "@mdi/js";
export default {
  data() {
    return {
      dateIcon: mdiCalendarRange,
      eyesIcon: mdiEye,
    };
  },
};
</script>

<style lang="scss" scoped>
.news_subtitle {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
.news_title {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
</style>
