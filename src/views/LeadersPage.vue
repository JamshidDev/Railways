<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <h3 class="service_title mb-6">Rahbariyat</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="5"
        lg="4"
        xl="4"
        class="mb-6 px-sm-4 px-lg-2 px-md-0 px-8"
      >
        <leader-card-vue
          :user_id="leaders[0].id"
          :user_img="leaders[0].avatar"
          :user_position="leaders[0].position_place"
          :user_fullname="leaders[0].fullName"
          :user_phone="leaders[0].phoneText"
          :user_tell="leaders[0].phone"
          :user_email="leaders[0].email"
          :user_visittime="leaders[0].visitTime"
          @openPanel="autoOpenPanel($event)"
          @openDialog="autoOpenDialog($event)"
        ></leader-card-vue>
      </v-col>
    </v-row>
    <v-row justify="center" justify-md="space-beetwen" class="pb-16">
      <v-col
        cols="12"
        sm="8"
        md="5"
        lg="4"
        xl="4"
        class="mb-6 px-sm-4 px-lg-2 px-md-0 px-8 mx-md-1"
      >
        <leader-card-vue
          :user_id="leaders[1].id"
          :user_img="leaders[1].avatar"
          :user_position="leaders[1].position_place"
          :user_fullname="leaders[1].fullName"
          :user_phone="leaders[1].phoneText"
          :user_tell="leaders[1].phone"
          :user_email="leaders[1].email"
          :user_visittime="leaders[1].visitTime"
          @openPanel="autoOpenPanel($event)"
          @openDialog="autoOpenDialog($event)"
        ></leader-card-vue>
      </v-col>
      <v-col
        cols="12"
        sm="8"
        md="5"
        lg="4"
        xl="4"
        class="mb-6 px-sm-4 px-lg-2 px-md-0 px-8 mx-md-1"
      >
        <leader-card-vue
          :user_id="leaders[2].id"
          :user_img="leaders[2].avatar"
          :user_position="leaders[2].position_place"
          :user_fullname="leaders[2].fullName"
          :user_phone="leaders[2].phoneText"
          :user_tell="leaders[2].phone"
          :user_email="leaders[2].email"
          :user_visittime="leaders[2].visitTime"
          @openPanel="autoOpenPanel($event)"
          @openDialog="autoOpenDialog($event)"
        ></leader-card-vue>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-dialog v-model="dialog" width="800">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2 text-uppercase">
              {{ dialogTitle }}
            </v-card-title>

            <v-card-text class="pt-4 font-weight-bold">
              {{ dialogText }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                Tanishdim
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeaderCardVue from "@/components/LeaderCard.vue";
import avatar_1 from "@/assets/peopleAvatar/avatar_1.svg";
import avatar_2 from "@/assets/peopleAvatar/avatar_4.jpg";
export default {
  components: {
    LeaderCardVue,
  },
  data() {
    return {
      dialogText: null,
      dialogTitle: null,
      dialog: false,
      leaders: [
        {
          id: 0,
          position_place: `O'TY AJ Personalni boshqarish va kadrlarni tayorlash boshqarmasi boshlig'i`,
          fullName: "To'xtayev Vahobjon Husenovich",
          phone: 995016004,
          phoneText: "+998(71)2388795",
          email: "vahobjonhusenovich@gmail.com",
          visitTime: "Qabul kunlari: Seshanba, Payshanba | 15:00-18:00",
          avatar: avatar_2,
          obligations: ` Uzel faoliyati va uning ijro etuvchi apparatining umumiy
              boshqaruvini amalga oshiradi; "O'zbekiston temir yo'llari"AJ nizom
              talablari va uzelga yuklangan vazifalarni bajarishga shaxsan
              mas‘ul; Uzel boshlig'i o'rinbosarlarining o'rtasida javobgarlikni
              taqsimlaydi, uzel faoliyatini va masalalarini hal qilishda
              ularning vakolatlarini belgilaydi; O'zbekiston Respublikasi
              Prezidenti, Vazirlar Mahkamasi va Oliy Majlis normativ
              hujjatlarining bajarilishini nazorat qiladi; "O'zbekiston temir
              yo'llari" AJ buyruqlari va farmoyishlarini, uzel nizomida
              ko'rsatilgan vazifalarni amalga oshiradi. Uzelning samaradorligini
              ta'minlaydi, uning umumiy yakuniy natijalarini ta'minlaydi va
              poyezdlar harakati xavfsizligini takomillashtirish bo'yicha
              chora-tadbirlarni amalga oshiradi; Uzelning moliyaviy va xo'jalik
              ishlarini rejalashtirish va kadrlar siyosatini amalga oshirish
              bo'yicha nazorat qiladi. Uzel faoliyati masalalarini muhokama
              qilish va hal qilishda adolatlilik prinsipini, iqtisodiy va
              ma'muriy boshqaruv usullarining kombinatsiyasini, buyruqning
              birligini va ahil jamoa prinsipini ta'minlaydi.`,
          biography: `12 avgust 1983 yil Buxoro viloyati Olot tumani jayxunobod MFY 167 uyda tug’ulganman. Otam To’xtayev Xusen Xudoyberdiyev 3-noyabr 1958 yil Buxoro viloyati Olot tumanida tug’ulgan. Olot to’quv fabrikasida kassir lavozimida ishlaganlar. 2001 yilda vafot etgan.
Onam To’xtayeva (Bozorova) Bozorgul Yog’mirovna  27-sentyabr 1960 yilda Buxoro viloyati Olot tumanida tug’ilgan. M.Hamrayev fermer xo’jaligida ishlaganlar, hozirgi kunda nafaqada.
Ma’lumotim oliy 2005 yil Toshkent temir yo’llari muhandislari institutining bakalavr yo’nalishida Transport vositalarini ishlatish va ta’mirlash muhandisi, 2007 yil maskur Oligohning magistrature yo’nalishining Xalqaro yuklar tashish yo’nalishini tugatganman.
2007 yil Osiyo temir yo’llar sug’urtalash kompaniyasining agenti, 2007-2013 yillarda Toshkent temir yo’llar muhandislar institute asistenti, Loyihalar chiqarish bo’limiga mehanik, 2013-2015 yillarda Toshkent temir yo’l masofasi muhandisi, 
2013-2014 yillarda Meterologiya va Sertifikatsiya muhandisi, 2014-2015 yillarda Iqtisodchi muhandis, 2015-2017 yillarda 203 Tajriba yo’l mashina stansiyasi iqtisodchisi,  2017 yilda “Ekskavatorlar va gusenitsali mehanikani ta’mirlash zavodi” unitar korxonasi, Kadrlar va Ijtimoiy masalalar bo’yicha bo’lim boshlig’I, 2017-2021 yillarda Ishlab chiqarish bo’yicha direktor o’rinbosari lavozimida ishlaganman.
2010 yilda Pedagog grashlar dasturi Diplomi, 2014 yil yosh mutahassislar Respublika tanlovida ishtirokim uchun sertifikat bilan taqdirlandim.
Oilaliman, ikki nafar farzandning otasiman. Muqaddam sudlanmaganman.
`,
        },
        {
          id: 1,
          position_place: `O'TY AJ Personalni boshqarish va kadrlarni tayorlash boshqarmasi boshlig'i o'rinbosari`,
          fullName: "Saidova Feruza Anvarovna",
          phone: 995016004,
          phoneText: "+998(71)2388795",
          email: "raximovj662@gmail.com",
          visitTime: "Qabul kunlari: Har kuni | 09:00-18:00",
          avatar: avatar_1,
          obligations: ` Uzel faoliyati va uning ijro etuvchi apparatining umumiy
              boshqaruvini amalga oshiradi; "O'zbekiston temir yo'llari"AJ nizom
              talablari va uzelga yuklangan vazifalarni bajarishga shaxsan
              mas‘ul; Uzel boshlig'i o'rinbosarlarining o'rtasida javobgarlikni
              taqsimlaydi, uzel faoliyatini va masalalarini hal qilishda
              ularning vakolatlarini belgilaydi; O'zbekiston Respublikasi
              Prezidenti, Vazirlar Mahkamasi va Oliy Majlis normativ
              hujjatlarining bajarilishini nazorat qiladi; "O'zbekiston temir
              yo'llari" AJ buyruqlari va farmoyishlarini, uzel nizomida
              ko'rsatilgan vazifalarni amalga oshiradi. Uzelning samaradorligini
              ta'minlaydi, uning umumiy yakuniy natijalarini ta'minlaydi va
              poyezdlar harakati xavfsizligini takomillashtirish bo'yicha
              chora-tadbirlarni amalga oshiradi; Uzelning moliyaviy va xo'jalik
              ishlarini rejalashtirish va kadrlar siyosatini amalga oshirish
              bo'yicha nazorat qiladi. Uzel faoliyati masalalarini muhokama
              qilish va hal qilishda adolatlilik prinsipini, iqtisodiy va
              ma'muriy boshqaruv usullarining kombinatsiyasini, buyruqning
              birligini va ahil jamoa prinsipini ta'minlaydi.`,
          biography: `1980-yilda Qashqadaryo viloyati Yakkabog‘ tumanida tug‘ilgan.

            Millati – O‘zbek.

            Ma'lumoti – Oliy.

            2004-yil Toshkent temir yo‘l muhandislari institutida bakalavr darajasini tamomlagan.

            2001-2007 yillar – Qarshi bekati vagonlar tezligini kamaytiruvchi, operator, bekat navbatchisi;

            2007-2008 yillar –“Qarshi-Termiz” MTU mehnat muhofazasi va texnika xavfsizligi muhandisi, tashish jarayoni texnologiyasini nazorat qilish va o‘qitish yo‘riqchisi;

2008-2010 yillar – Qarshi bekati boshlig‘i o‘rinbosari;

2010-2011 yillar – Qashqadaryo bekati boshlig‘i, Sho'rtan bekati boshlig‘i;

2011-2012 yillar – G‘uzor bekati boshlig‘i;

2012-2017 yillar – “Qarshi MTU” UK yuk va tijorat ishlari bo‘limi boshlig‘i;

2017-yil – Kengsoy bekati boshlig‘i vazifasini vaqtincha bajaruvchi va Kengsoy bekati boshlig‘i;

2017-2018 yillar – “Qarshi MTU” UK boshlig‘i o‘rinbosari - yuk tashish va stansiyalar bilan ishlash bo‘limi boshlig‘i v.b.;

2018-yildan boshlab shu kunga qadar “Qarshi MTU” UK boshlig'i o'rinbosari - yuk tashish va stansiyalar bilan ishlash bo‘limi boshlig‘i.`,
        },
        {
          id: 2,
          position_place: `O'TY AJ Personalni boshqarish va kadrlarni tayorlash boshqarmasi boshlig'i o'rinbosari`,
          fullName: "Fazilov Shuxrat Shavkatovich",
          phone: 995016004,
          phoneText: "+998(71)2388080",
          email: "fazilovsh@gmail.com",
          visitTime: "Qabul kunlari: Har kuni | 09:00-18:00",
          avatar: avatar_1,
          obligations: ` Uzel faoliyati va uning ijro etuvchi apparatining umumiy
              boshqaruvini amalga oshiradi; "O'zbekiston temir yo'llari"AJ nizom
              talablari va uzelga yuklangan vazifalarni bajarishga shaxsan
              mas‘ul; Uzel boshlig'i o'rinbosarlarining o'rtasida javobgarlikni
              taqsimlaydi, uzel faoliyatini va masalalarini hal qilishda
              ularning vakolatlarini belgilaydi; O'zbekiston Respublikasi
              Prezidenti, Vazirlar Mahkamasi va Oliy Majlis normativ
              hujjatlarining bajarilishini nazorat qiladi; "O'zbekiston temir
              yo'llari" AJ buyruqlari va farmoyishlarini, uzel nizomida
              ko'rsatilgan vazifalarni amalga oshiradi. Uzelning samaradorligini
              ta'minlaydi, uning umumiy yakuniy natijalarini ta'minlaydi va
              poyezdlar harakati xavfsizligini takomillashtirish bo'yicha
              chora-tadbirlarni amalga oshiradi; Uzelning moliyaviy va xo'jalik
              ishlarini rejalashtirish va kadrlar siyosatini amalga oshirish
              bo'yicha nazorat qiladi. Uzel faoliyati masalalarini muhokama
              qilish va hal qilishda adolatlilik prinsipini, iqtisodiy va
              ma'muriy boshqaruv usullarining kombinatsiyasini, buyruqning
              birligini va ahil jamoa prinsipini ta'minlaydi.`,
          biography: `1980-yilda Qashqadaryo viloyati Yakkabog‘ tumanida tug‘ilgan.

            Millati – O‘zbek.

            Ma'lumoti – Oliy.

            2004-yil Toshkent temir yo‘l muhandislari institutida bakalavr darajasini tamomlagan.

            2001-2007 yillar – Qarshi bekati vagonlar tezligini kamaytiruvchi, operator, bekat navbatchisi;

            2007-2008 yillar –“Qarshi-Termiz” MTU mehnat muhofazasi va texnika xavfsizligi muhandisi, tashish jarayoni texnologiyasini nazorat qilish va o‘qitish yo‘riqchisi;

2008-2010 yillar – Qarshi bekati boshlig‘i o‘rinbosari;

2010-2011 yillar – Qashqadaryo bekati boshlig‘i, Sho'rtan bekati boshlig‘i;

2011-2012 yillar – G‘uzor bekati boshlig‘i;

2012-2017 yillar – “Qarshi MTU” UK yuk va tijorat ishlari bo‘limi boshlig‘i;

2017-yil – Kengsoy bekati boshlig‘i vazifasini vaqtincha bajaruvchi va Kengsoy bekati boshlig‘i;

2017-2018 yillar – “Qarshi MTU” UK boshlig‘i o‘rinbosari - yuk tashish va stansiyalar bilan ishlash bo‘limi boshlig‘i v.b.;

2018-yildan boshlab shu kunga qadar “Qarshi MTU” UK boshlig'i o'rinbosari - yuk tashish va stansiyalar bilan ishlash bo‘limi boshlig‘i.`,
        },
      ],
    };
  },
  methods: {
    controlDialog() {
      this.dialog = !this.dialog;
    },
    autoOpenPanel(id) {
      this.dialog = !this.dialog;
      this.dialogTitle = "Tarjimai hol";
      this.dialogText = this.leaders[id].biography;
    },
    autoOpenDialog(id) {
      this.dialog = !this.dialog;
      this.dialogTitle = "Majburiyatlari";
      this.dialogText = this.leaders[id].obligations;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner_bg {
  background: url("https://www.railway.uz/local/templates/main_v2/img/footer-bg.jpg");
}
.service_title {
  width: 100%;
  font-size: 34px;
  font-weight: 700;
  color: #41b983;
  text-transform: uppercase;
  text-align: center;
}
</style>
