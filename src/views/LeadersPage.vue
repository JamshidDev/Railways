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
        sm="6"
        md="4"
        lg="3"
        xl="3"
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
        sm="6"
        md="4"
        lg="3"
        xl="3"
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
        sm="6"
        md="4"
        lg="3"
        xl="3"
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
            <v-card-title class="text-h5 grey lighten-2 text-uppercase blue--text">
              {{ dialogTitle }}
            </v-card-title>

            <v-card-text v-html="dialogText" class="pt-4 font-weight-medium blue--text">
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
import avatar_1 from "@/assets/peopleAvatar/avatar_2.jpg";
import avatar_2 from "@/assets/peopleAvatar/avatar_4.jpg";
import avatar_3 from "@/assets/employee/avatar_3.jpg";
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
          phoneText: "+998(71) 238-87-95",
          email: "vahobjonhusenovich@gmail.com",
          visitTime: "Qabul kunlari: Seshanba, Payshanba | 15:00-18:00",
          avatar: avatar_2,
          obligations: `<p class=”m-0 my-1”>Personalii boshkarish va kadrlar tayyorlash boshkarmasi boshlig'i quyidagi vazifalarni bajaradi: </p>
<p class=”m-0 my-1”>-	boshqarma bo'limlari faoliyatini boshqarish va nazorat qilish; </p>

<p class=”m-0 my-1”>-	jamiyat tarkibiy bulimlarida Uzbekistan Respublikasi Kdshunlari- ning, Uzbekistan Respublikasi Prezidenta va xukumatining farmon-lari va karorlarining, Uzbekistan Respublikasi Mexnat Kodeksining, “Uzbekistan temir yullari” AJ Ustavining, Ichki mexnat tartib koi- dalarining, jamiyat raxbariyatining buyruklari va topshiriklarining uz vaktida va sifatli bajarilishini nazorat kilish; </p>
 
<p class=”m-0 my-1”>-	jamiyatning barcha korxonalari, tashkilotlari va tarkibiy bulinmala- rini ommaviy kasb egalari bilan taʼminlash ishlarini tashkil etish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar va tarkibiy bulinmalarda kadrlar kunimsizligi va mexnat intizomi xolatlarini nazorat kilish va kadr¬lar kunimsizligini kamaytirish va mexnat intizomini kuchaytirish buyicha chora-tadbirlar ishlab chikish; </p>

<p class=”m-0 my-1”>-	ish xajmidan kelib chikkan xolda kelajakda ommaviy kasb kadrlariga bulgan extiyojni aniklash va jamiyatga karashli korxonalar kadrlar bulimi xodimlarining uz korxonalarida ishchi-xodimlar sonini ish xajmiga nisbatan muvofiklashtirish buyicha xarakatlarining tugriligi va konuniyligini nazorat kilish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalarning xodimlar bulimlari ishlarini nazorat kilish, kompleks tekshiruvlarda katnashish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalar tomonidan ijtimoiy rivojlanish buyicha rejalarning ishlab chikilishini va ularning amalga oshirilishini nazorat kilish; </p>
<p class=”m-0 my-1”>-	jamiyat raxbariyati bilan kelishgan xolda kadrlar masalalariga oid maʼlumotlarni yukori turuvchi tashkilotlarga, jamiyat Bonщaruvi va Kengashiga takdim etish; </p>
<p class=”m-0 my-1”>-	jamiyat mikyosidagi tantanali tadbirlarni tashkillashtirishda ishti- rok etish; </p>
<p class=”m-0 my-1”>-	“Uzbekiston temir yullari” AJning sifat soxasidagi siyosatida kuzda tutilgan maksadlarni urganish va ularni uz xizmat vakolatlari doira- sida tatbik etish; </p>
<p class=”m-0 my-1”>-	boshkarmaga kelib tushgan arizalar, shikoyatlar va takliflarni kurib chikishda va tegishli karor kabul kilishda katnashish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalar kadrlar bulimlari faoliyatini umumlashtirish, kadrlar kunimsizligi sabablarini urganish va uning oldini olish buyicha te¬gishli chora-tadbirlarni amalga oshirish; </p>
<p class=”m-0 my-1”>-	ish sharoitlarini yaxshilash, ishchi-xodimlarga imtiyozlar berish buyicha yukori raxbariyatga takliflar kiritish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi barcha korxonalar, tarkibiy bulinmalar, tashki¬lotlar va muassasalarni tegishli mutaxassis kadrlar bilan taʼminlash yuzasidan doimiy xamkorlikda ishlash; </p>
<p class=”m-0 my-1”>-	axborot manbalari (internet)dan okilona foydalanish; </p>
`,
          biography: `1983 yilda Buxoro viloyati Olot tumanida tug’ilganman.
<p class=”m-0 my-1”>Millatim-O’zbek.</p>
<p class=”m-0 my-1”>Ma’lumotim-Oliy. </p>

<p class=”m-0 my-1”>2005 Toshkent temir yo'l transporti muhandislari institutini  Tashishni tashkil etish va boshqarish yo’nalishini tugatganman</p>

<p class=”m-0 my-1”>2007 Toshkent temir yo'l transporti muhandislari institutini  Xalqaro yuklar tashish bo’yicha magistraturani tamomlagan.<p>


<p class=”m-0 my-1”>2007-2007- yillar Osiyo temir yo'llar sug'urta kompaniyasi agenti</p>
<p class=”m-0 my-1”>2007-2008-yillar Toshkent temir yo'llar muhandislar instituti "Yuk tijorat ishlari texnologiyasi va stansiyalari" kafedrasi assistenti</p>
<p class=”m-0 my-1”>2008-2009-yillarToshkent temir yo'llar muhandislar instituti "Yuk tijorat ishlari texnologiyasi va statnsiyalar " kafedrasi  assistenti </p>
<p class=”m-0 my-1”>2009-2013-yillar Toshkent temir yo'llar muhandislar instituti "Yuk tijorat ishlari texnologiyasi va statnsiyalar " kafedrasi  assistenti</p>
<p class=”m-0 my-1”>2013-2013-yillar "O'zbekiston temir yo'llari" DATK Toshkent temir yo'l masofasi loyihalar  chiqarish bo'limi texnigi</p>
<p class=”m-0 my-1”>2013-2015-yillar "O'zbekiston temir yo'llari"  DATK  Toshkent mintaqaviy temir yo'l uzeli Toshkent temir yo'l masofasi joriy ta'mir muhandisi, metrologiya va sertifikatsiya muhandisi, iqtisodchi muhandis</p>
<p class=”m-0 my-1”>2015-2017-yillar "O'zbekiston temir yo'llari" AJ 203-tajriba  yo'l mashina stansiyasi iqtisodchi</p>
<p class=”m-0 my-1”>2017-2018-yillar "O'zbekiston temir yo'llari"  AJ "Ekskavatorlar va gusenitsali texnikani ta'mirlash zavodi" unitar korxonasi kadrlar va ishtimoiy masalalar bo'yicha bo'lim boshlig'i, direktor o'rinbosari vazifasini bajaruvchisi</p>
<p class=”m-0 my-1”>2018-2021-yillar "O'zbekiston temir yo'llari"  AJ "Ekskavatorlar va gusenitsali texnikani ta'mirlsh zavodi"  unitar korxonasi ishlab chiqarish bo'yicha direktor o'rinbosari</p>
<p class=”m-0 my-1”>2021-2022-yillar "O'zbekiston temir yo'llari" AJ personalni  boshqarish va kadrlarni tayorlash boshqarmasi boshlig'ining o'rinbosari vazifasini bajaruvchisi, o'rinbosari</p>
<p class=”m-0 my-1”>2022-yildan "O'zbekiston temir yo'llari" AJ personalni  boshqarish va kadrlar tayorlash boshqarmasi boshlig'i</p>

`,
        },
        {
          id: 1,
          position_place: `O'TY AJ Personalni boshqarish va kadrlarni tayorlash boshqarmasi boshlig'i o'rinbosari`,
          fullName: "Saidova Feruza Anvarovna",
          phone: 995016004,
          phoneText: "+998(71) 238-87-95",
          email: "raximovj662@gmail.com",
          visitTime: "Qabul kunlari: Har kuni | 09:00-18:00",
          avatar: avatar_3,
          obligations: `<p class=”m-0 my-1”>Personalii boshkarish va kadrlar tayyorlash boshkarmasi boshlitining urinbosari kuyidagi vazifalarni bajaradi: </p>
<p class=”m-0 my-1”>-	boshkarma bulimlari faoliyatini boshkarish va nazorat kilish; </p>

<p class=”m-0 my-1”>-	jamiyat tarkibiy bulimlarida Uzbekistan Respublikasi Kdshunlari- ning, Uzbekistan Respublikasi Prezidenta va xukumatining farmon-lari va karorlarining, Uzbekistan Respublikasi Mexnat Kodeksining, “Uzbekistan temir yullari” AJ Ustavining, Ichki mexnat tartib koi- dalarining, jamiyat raxbariyatining buyruklari va topshiriklarining uz vaktida va sifatli bajarilishini nazorat kilish; </p>
 
<p class=”m-0 my-1”>-	jamiyatning barcha korxonalari, tashkilotlari va tarkibiy bulinmala- rini ommaviy kasb egalari bilan taʼminlash ishlarini tashkil etish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar va tarkibiy bulinmalarda kadrlar kunimsizligi va mexnat intizomi xolatlarini nazorat kilish va kadr¬lar kunimsizligini kamaytirish va mexnat intizomini kuchaytirish buyicha chora-tadbirlar ishlab chikish; </p>

<p class=”m-0 my-1”>-	ish xajmidan kelib chikkan xolda kelajakda ommaviy kasb kadrlariga bulgan extiyojni aniklash va jamiyatga karashli korxonalar kadrlar bulimi xodimlarining uz korxonalarida ishchi-xodimlar sonini ish xajmiga nisbatan muvofiklashtirish buyicha xarakatlarining tugriligi va konuniyligini nazorat kilish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalarning xodimlar bulimlari ishlarini nazorat kilish, kompleks tekshiruvlarda katnashish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalar tomonidan ijtimoiy rivojlanish buyicha rejalarning ishlab chikilishini va ularning amalga oshirilishini nazorat kilish; </p>
<p class=”m-0 my-1”>-	jamiyat raxbariyati bilan kelishgan xolda kadrlar masalalariga oid maʼlumotlarni yukori turuvchi tashkilotlarga, jamiyat Bonщaruvi va Kengashiga takdim etish; </p>
<p class=”m-0 my-1”>-	jamiyat mikyosidagi tantanali tadbirlarni tashkillashtirishda ishti- rok etish; </p>
<p class=”m-0 my-1”>-	“Uzbekiston temir yullari” AJning sifat soxasidagi siyosatida kuzda tutilgan maksadlarni urganish va ularni uz xizmat vakolatlari doira- sida tatbik etish; </p>
<p class=”m-0 my-1”>-	boshkarmaga kelib tushgan arizalar, shikoyatlar va takliflarni kurib chikishda va tegishli karor kabul kilishda katnashish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalar kadrlar bulimlari faoliyatini umumlashtirish, kadrlar kunimsizligi sabablarini urganish va uning oldini olish buyicha te¬gishli chora-tadbirlarni amalga oshirish; </p>
<p class=”m-0 my-1”>-	ish sharoitlarini yaxshilash, ishchi-xodimlarga imtiyozlar berish buyicha yukori raxbariyatga takliflar kiritish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi barcha korxonalar, tarkibiy bulinmalar, tashki¬lotlar va muassasalarni tegishli mutaxassis kadrlar bilan taʼminlash yuzasidan doimiy xamkorlikda ishlash; </p>
<p class=”m-0 my-1”>-	axborot manbalari (internet)dan okilona foydalanish; </p>`,
          biography: `1981 yilda Farg’ona viloyati Qo’qon shahrida tug’ilganman.
<p class=”m-0 my-1”>Millatim-O’zbek.</p>
<p class=”m-0 my-1”>Ma’lumotim-Oliy. </p>
<p class=”m-0 my-1”>2005 Toshkent temir yo'l transporti muhandislari institutini  Yer usti transporti tizimlari yo’nalishini tugatganman</p>

<p class=”m-0 my-1”>1999-2001-yillar "O'zbekiston temir yo'llari" DAK binolar va inshoatlarga xizmat ko'rsatish direksiyasi mutaxassisi</p>

<p class=”m-0 my-1”>2001-2001-yillar "O'zbekiston temir yo'llari" DAK lokomotivlardan foydalanish boshqarmasi boshlig'ining kadrlar va ijtimoiy masalalar bo'yicha yordamchisi</p>

<p class=”m-0 my-1”>2001-2015-yillar "O'zbekiston temir yo'llari" DAK raisi huzuridagi kotibiyatning ijro etishni nazorat qilish bo'limi noziri, bosh mutaxassisi</p>

<p class=”m-0 my-1”>2015-2015-yillar "O'zbekiston temir yo'llari" AJ kadrlar boshqarmasi boshlig'ining o'rinbosari</p>

<p class=”m-0 my-1”>2015-yildan hozirgi kunga qadar "O'zbekiston temir yo'llari"  AJ personalni boshqarish va kadrlar tayyorlash boshqarmasi boshlig'ining o'rinbosari</p>
`,
        },
        {
          id: 2,
          position_place: `O'TY AJ Personalni boshqarish va kadrlarni tayorlash boshqarmasi boshlig'i o'rinbosari v.b.`,
          fullName: "Fazilov Shuxrat Shavkatovich",
          phone: 995016004,
          phoneText: "+998(71) 238-80-80",
          email: "fazilovsh@gmail.com",
          visitTime: "Qabul kunlari: Har kuni | 09:00-18:00",
          avatar: avatar_1,
          obligations: `<p class=”m-0 my-1”>Personalii boshkarish va kadrlar tayyorlash boshkarmasi boshlitining urinbosari kuyidagi vazifalarni bajaradi: </p>
<p class=”m-0 my-1”>-	boshkarma bulimlari faoliyatini boshkarish va nazorat kilish; </p>

<p class=”m-0 my-1”>-	jamiyat tarkibiy bulimlarida Uzbekistan Respublikasi Kdshunlari- ning, Uzbekistan Respublikasi Prezidenta va xukumatining farmon-lari va karorlarining, Uzbekistan Respublikasi Mexnat Kodeksining, “Uzbekistan temir yullari” AJ Ustavining, Ichki mexnat tartib koi- dalarining, jamiyat raxbariyatining buyruklari va topshiriklarining uz vaktida va sifatli bajarilishini nazorat kilish; </p>
 
<p class=”m-0 my-1”>-	jamiyatning barcha korxonalari, tashkilotlari va tarkibiy bulinmala- rini ommaviy kasb egalari bilan taʼminlash ishlarini tashkil etish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar va tarkibiy bulinmalarda kadrlar kunimsizligi va mexnat intizomi xolatlarini nazorat kilish va kadr¬lar kunimsizligini kamaytirish va mexnat intizomini kuchaytirish buyicha chora-tadbirlar ishlab chikish; </p>

<p class=”m-0 my-1”>-	ish xajmidan kelib chikkan xolda kelajakda ommaviy kasb kadrlariga bulgan extiyojni aniklash va jamiyatga karashli korxonalar kadrlar bulimi xodimlarining uz korxonalarida ishchi-xodimlar sonini ish xajmiga nisbatan muvofiklashtirish buyicha xarakatlarining tugriligi va konuniyligini nazorat kilish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalarning xodimlar bulimlari ishlarini nazorat kilish, kompleks tekshiruvlarda katnashish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalar tomonidan ijtimoiy rivojlanish buyicha rejalarning ishlab chikilishini va ularning amalga oshirilishini nazorat kilish; </p>
<p class=”m-0 my-1”>-	jamiyat raxbariyati bilan kelishgan xolda kadrlar masalalariga oid maʼlumotlarni yukori turuvchi tashkilotlarga, jamiyat Bonщaruvi va Kengashiga takdim etish; </p>
<p class=”m-0 my-1”>-	jamiyat mikyosidagi tantanali tadbirlarni tashkillashtirishda ishti- rok etish; </p>
<p class=”m-0 my-1”>-	“Uzbekiston temir yullari” AJning sifat soxasidagi siyosatida kuzda tutilgan maksadlarni urganish va ularni uz xizmat vakolatlari doira- sida tatbik etish; </p>
<p class=”m-0 my-1”>-	boshkarmaga kelib tushgan arizalar, shikoyatlar va takliflarni kurib chikishda va tegishli karor kabul kilishda katnashish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi korxonalar, tarkibiy bulinmalar, tashkilotlar va muassasalar kadrlar bulimlari faoliyatini umumlashtirish, kadrlar kunimsizligi sabablarini urganish va uning oldini olish buyicha te¬gishli chora-tadbirlarni amalga oshirish; </p>
<p class=”m-0 my-1”>-	ish sharoitlarini yaxshilash, ishchi-xodimlarga imtiyozlar berish buyicha yukori raxbariyatga takliflar kiritish; </p>
<p class=”m-0 my-1”>-	jamiyat tasarrufidagi barcha korxonalar, tarkibiy bulinmalar, tashki¬lotlar va muassasalarni tegishli mutaxassis kadrlar bilan taʼminlash yuzasidan doimiy xamkorlikda ishlash; </p>
<p class=”m-0 my-1”>-	axborot manbalari (internet)dan okilona foydalanish; </p>
`,
          biography: `1986 yilda Toshkent shahrida tug’ilganman
<p class=”m-0 my-1”>Millatim-O’zbek</p>
<p class=”m-0 my-1”>Ma’lumotim-Oliy</p>

<p class=”m-0 my-1”>2011 yilda Toshkent temir yo'l transporti muhandislari institutida Transport vositalarini ishlatish va ta'mirlash yo’nalishini tamomlaganman</p>

<p class=”m-0 my-1”>2011-2014- yillar O'ztemiryo'lyo'lovchi OAJ Toshkent yo'lovchilar tashishni tashkil etish  Toshkent-Janubiy stansiyasi yo'l bo'yicha navbatchisi, Toshkent-Markaziy stansiyasi yo'l bo'yicha navbatchisi, shu stansiya bo'yicha navbatchisi, fuqaro muxofasi bo'yicha muhandisi</p>
<p class=”m-0 my-1”>2014-2016- yillar Toshkent-Janubiy stansiyasi boshlig'i vaziasini vaqtincha bajaruvchisi, bosh muhandisi</p>
<p class=”m-0 my-1”>2016-2017-yillar O'ztemiryo'lyo'lovchi AJ Toshkent-Markaziy Vokzal filiali boshlig'i o'rinbosari </p>
<p class=”m-0 my-1”>2017-2017-yillar O'ztemiryo'lyo'lovchi AJ Farg'ona filiali Andijon vokzali boshlog'i </p>
<p class=”m-0 my-1”>2017-2021-yillar O'ztemiryo'lyo'lovchi AJ Toshkent-Janubiy vokzali boshlig'i</p>
<p class=”m-0 my-1”>2021-2022-yillar O'zbekiston temir yo'llari   AJ personalni boshqarish va kadrlarni tayyorlash boshqarmasining  rahbar  kadrlar  bo'limi  boshlig'i. </p>

<p class=”m-0 my-1”>2022-yil fevral oyidan boshlab hozirgi kunga qadar O'zbekiston temir yo'llari AJ personalni boshqarish va kadrlarni tayorlash boshqarmasi o'rinbosari vazifasini bajaruvchisi</p>`,
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
      this.dialogTitle = "Vazifalari";
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
