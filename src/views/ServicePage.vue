<template>
  <v-container fluid style="padding: 0px">
    <v-row class="py-16 banner_bg" justify-lg="center">
      <v-col cols="12">
        <h3 class="service_title mb-10">Interfaol Xizmatlar</h3>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
        cols="12"
        v-for="card in cards"
        :key="card.id"
      >
        <ServiceCard
          :title="card.title"
          :subtitle="card.subtitle"
          :icon="card.icon"
          :cardURL="card.cardURL"
        ></ServiceCard>
      </v-col>
      <v-col cols="12">
        <h3 class="service_title mt-16 pt-16">Ko'p so'raladigan savollar</h3>
      </v-col>
      <v-col cols="12" class="mt-8 pb-16">
        <v-container>
          <v-row justify="center">
            <v-expansion-panels popout>
              <v-expansion-panel v-for="(item, i) in questions" :key="i">
                <v-expansion-panel-header class="font-weight-bold">{{
                  item.question
                }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ item.answer }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12">
        <h3 class="service_title mt-16 pt-16">Ochiq ma‘lumotlar</h3>
      </v-col>
      <v-col cols="12" class="mt-8 pb-16">
        <v-container>
          <v-row justify="center">
            <v-simple-table style="width: 100%">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ServiceCard from "@/components/ServiceCard.vue";

export default {
  components: { ServiceCard },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Murojat yuborish",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Sed tament.",
          icon: "mdi mdi-file-document-edit",
          cardURL: "/card-url",
        },
        {
          id: 2,
          title: "Murojatni tekshirish",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Sed tament.",
          icon: "mdi mdi-text-box-search",
          cardURL: "/card-url",
        },
      ],
      questions: [
        {
          question:
            "Rahbariyat qabuliga qanday qilib yozilish yoki murojaat yo'llash mumkin?",
          answer:
            "Buning uchun yuqoridagi 'Interfaol xizmatlar' menyusidan 'Murojaat yuboris' bo'limiga kiring. Shu yerdan murojaatingizni yo'llashingiz mumkin.",
        },
        {
          question: "Bolalarga qanday chegirmalar mavjud?",
          answer:
            "Yo’lovchi o’zi bilan poezdda 5 yoshgacha bo’lgan bir bolani bepul alohida o’rinsiz olib o’tish huquqiga ega. Sayohat paytida besh yoshgacha bo’lgan birdan ortiq bolali yo’lovchilar bir bolani bepul, qolgan bolalarni 50% li chegirma va alohida joy taqdimi bilan olib o’tiladi. Besh yoshdan o’n yoshgacha bo’lgan bolalarga ham tariff qiymatida 50% li chegirma va alohida joy taqdim etiladi.10 yoshdan oshgan bolalarga kattalarga olinadigan chipta harid qilinadi.  Ushbu chegirmalar O’zbekiston Respublikasi temir yo’l transportida yo’lovchilar, bagaj va yuk bagaj tashish qoidalarini   2012 yil 13 aprel O’zbekiston Respublikasi Vazirlar Mahkamasining 109-son qarori bilan  tasdiqlangan. Qarorni yuklash. https://railway.uz/doc/pravila_perevozok_passajirov-uz.pdf",
        },
        {
          question: "Temir yo'l chiptalarini olishda qanday imtiyozlar mavjud?",
          answer: `O‘zbekiston Respublikasi Vazirlar Mahkamasining 2012 yil 13 apreldagi 109-sonli qarori bilan tasdiqlangan “O‘zbekiston Respublikasi temir yo‘l transportida yo‘lovchilar, bagaj va yuk tashish qoidalari”ga asosan temir yo‘llarda yiliga bir marta bepul yurish huquqi (borish va kelishga) quyidagilarga taqdim qilinadi:  Sovet Ittifoqi Qahramonlari va Shon-shuhrat ordenining uchta darajasi bilan taqdirlangan shaxslarga; Yarador bo‘lgan harbiy xizmatchilar, ishchilar va xizmatchilardan 1 va 2 – guruh urush nogironlari va ularga tenglashtirilgan shaxslarga;  Chernobil AES dagi avariyani bartaraf etuvchilari-nogironlariga (O‘zbekiston Respublikasi hududidagi). Ushbu qarorga muvofiq yiliga bir marta chipta umumiy narxining   50 % chegirmalar taqdim qilish (borish va kelishga) quydagi shaxslarga ko‘zda tutilgan.   -   yarador bo‘lgan harbiy xizmatchilar, ishchilar va xizmatchilardan 3 – guruh urush nogironlari va ularga tenglashtirilgan shaxslarga;  - urush qatnashchilari va ularga tenglashtirilgan shaxslar;  - 1 guruh urush nogironlarini kuzatuvchi shaxslar  50 foizli chegirmalar.
              Mahalliy yo‘nalishlarga 10 nafar va undan ko‘p bo‘lgan yo‘lovchi guruhlarga sotib olinadigan chiptalar uchun chegirmalar miqdori: a) umumiy yo‘nalish masofasi 2000 kmgacha:           - guruhdagilar soni 10 nafardan 24 nafargacha bo‘lganda 10 foizli;           - guruhdagilar soni 25 va undan ortiq kishilik guruh uchun 15 foizli chegirmalar belgilangan.  b) umumiy yo‘nalish masofasi 2000 kmdan ko‘p bo‘lgan taqdirda:           - guruhdagilar soni 10 nafardan 24 nafargacha bo‘lganda 20 foizli;           - guruhdagilar soni 25 va undan ortiq kishilik guruh uchun 30 foizli chegirmalar belgilangan. Yo‘lovchi o‘zi bilan poyezdda 5 yoshgacha bo‘lgan bir bolani bepul alohida o‘rinsiz olib o‘tish huquqiga ega. Sayohat paytida besh yoshgacha bo‘lgan birdan ortiq bolali yo‘lovchilar bir bolani bepul, qolgan bolalarni 50% li chegirma va alohida joy taqdimi bilan olib o‘tiladi. Besh yoshdan o‘n yoshgacha bo‘lgan bolalarga ham tariff qiymatida 50% li chegirma va alohida joy taqdim etiladi.10 yoshdan oshgan bolalarga kattalarga olinadigan chipta harid qilinadi.      O’zbekiston Respublikasi temir yo’l transportida yo’lovchilar, bagaj va yuk bagaj tashish qoidalarini   2012 yil 13 aprel O’zbekiston Respublikasi Vazirlar Mahkamasining 109-son Qarorni yuklash. * * * * * * * * * * * * * * * * * * * * * * * * * *  O‘zbekiston Respublikasi Prezidyentining 2017 yil 18 yanvardagi “2017—2021 yillarda Orolbo‘yi mintaqasini rivojlantirish Davlat dasturi to‘g‘risida” gi PQ-2731 qaroriga asosan  “2017—2021 yillarda Orolbo‘yi mintaqasini rivojlantirish Davlat dasturi to‘g‘risida” gi qaroriga asosan Qoraqalpog‘iston Respublikasi va Xorazm viloyatida istiqomat qiluvchi yo‘lovchilarning tegishli toifalari maxsus imtiyozli tariflar qo‘llanilmoqda.   Jumladan 54-sonli «Toshkent-Ko‘ng‘rod-Toshkent», 56-sonli «Toshkent-Urgench-Toshkent»,  58-sonli «Toshkent-Shovot-Toshkent» yo‘lovichi poyezdlariga quydagi toifadagi shaxslarga chipta sotib olish uchun 50% chegirmalar tarif qismidan taqdim etilmoqda:  - Nafaqaxo‘rlar (shu jumladan 1941-1945 yillar urush qatnashchilari va nogironlari va ularga tenglashtirilgan shaxslar, Chernobil AES avariyasi oqibatlarini bartaraf etish qatnashchilari); - Nogironlar (birinchi, ikkinchi va uchinchi guruh) va nogironlarni kuzatuvchi shaxslar; - Bolaligidan 16 yoshgacha bo‘lgan nogironlar va nogironlarni kuzatuvchi shaxslar; - O‘qishga ketayotgan talabalar; - Fuqarolarni o‘zini o‘zi boshqarish idoralaridan moddiy yordam belgilangan kam ta’minlangan oilalar.   * * * * * * * * * * * * * * * * * * * * * * * * * * O'zbekiston Respublikasi Prezidentining 1992 yil 22 dekabrdagi PF-517-sonli "O'zbekiston Respublikasi talabalari va o’quvchilarining xar yilgi qishki ta'tillari to'g'risida"gi Farmoniga muvofiq, o‘quvchilar va oliy ta’lim o‘quvchilari va talabalarining yillik 2 haftalik qishki ta’tilni o‘tkazish uchun 28 dekabrdan 10 yanvargacha bo‘lgan muddatda chipta sotib olish uchun 50% chegirmalar tarif qismidan taqdim etilmoqda. * * * * * * * * * * * * * * * * * * * * * * * * * *  O‘zbekiston Respublikasi Prezidentining  2020 yil 18 fevraldagi PF–5938-son Farmoni, hamda O‘zbekiston Respublikasi Vazirlar Mahkamasining 2020 yil 28 maydagi  340-sonli qarorining 2-bandida  har yili 1 noyabrdan 30 noyabrgacha “Keksalar uchun turizm oyligi” deb belgilangan.  - “Keksalar uchun turizm oyligi”ni samarali o‘tkazish maqsadida, O‘zbekiston Respublikasi fuqarolari 55 yoshdan yuqori ayollar hamda 60 yoshdan yuqori erkaklarga mamlakat bo‘ylab sayohatni tashkil qilish va turizm oyligi doirasida har yili 1 noyabrdan 30 noyabrgacha  barcha mahalliy yo‘nalishdagi poyezdlarning (“Afrosiyob” elektro poyezdidan tashqari) temir yo‘l chiptalarining tarif kismidan 10% chegirma bilan ta’minlanishi belgilandi. - Maxalliy  № 0961/092, 093/094 “Toshkent – Andijon – Toshkent” poyezdlarining chiptalari yo‘lovchilarga qulaylik va shart-sharoit yaratish maqsadida, chiptalar yotar-buyum joy bilan, hamda yotar – buyum joysiz imtiyozli chiptalar xarid qilish mumkinligini bildiramiz.  * * * * * * * * * * * * * * * * * * * * * * * * * * O‘zbekiston Respublikasi Prezidentining  2019 yil 14 noyabrdagi PF-5875 sonli qarorini bajarish maqsadida bayramlar munosabati bilan 2019 yil 31 dekabrdan 2020 yil 2 yanvarga qadar, 21-23 mart 2020 yil, 2020 yil 31 avgustdan 2 sentyabrgacha O‘zbekiston Respublikasi Prezidentining “2020 yilda rasmiy sanalarni nishonlash davrida qo‘shimcha ishlanmaydigan kunlarni belgilash va dam olish kunlarini ko‘chirish to‘g‘risida” gi farmoniga  asosan, shu jumladan ichki turizm yo‘nalishlarini shakllantirish va chegirmalar tizimini keng joriy etish, bayramlarni nishonlash davrida to‘liq dam olish uchun sharoitlar yaratish ta’minlash maqsadida chipta sotib olish uchun chegirmalar joriy etilgan.   Mahalliy yo‘nalishda qatnovchi barcha yo‘lovchi poyezdlariga  (“Afrosiyob” poyezdlaridan tashqari) chipta olayotganda tarif qismidan quydagi tarzda chegirmalar tadbiq qilinadi;  -  Nafaqaxo‘rlar , nogironligi bor shaxslar shu jumladan 1941-1945 yillar urush qatnashchilari va nogironlari va ularga tenglashtirilgan shaxslarga - 50%; -   Bolaligidan 16 yoshgacha bo‘lgan nogironlar va nogironlarni kuzatuvchi shaxslar; -   O‘qishga ketayotgan talabalar; - Fuqarolarni o‘zini o‘zi boshqarish idoralaridan moddiy yordam belgilangan kam ta’minlangan oilalar; - talabalar, maktab, kolledj, lisey o‘quvchilari , IIV, MV, DXX, DSQ va  DBX tizimidagi o‘quv muassasalari tinglovchilariga -15% ; -  oilalarga -15%; -  kollektiv guruhdagilar -15%; - “Afrosiyob” elektro poyezdiga - 10%.   * * * * * * * * * * * * * * * * * * * * * * * * * *  O‘zbekiston Respublikasi Prezidentining 2017 yil 4 maydagi PQ-2953 sonli qarorining 4-bandi talablarini bajarish maqsadida   “2017−2021 yillarda Xiva shahri va Xorazm viloyat sayyohlik salohiyatini kompleks rivojlantirish Dasturi to‘g‘risida"gi Prezident qaroriga asosan Xorazm viloyati va Xiva shaxriga sayyohlarni jalb qilish maqsadida turistik tashkilotlari buyurtmalari bo‘yicha turistik guruhlarga 56/55-sonli «Toshkent-Urgench-Toshkent», 58/57-sonli «Toshkent-Shovot-Toshkent» yo‘lovichi poyezdlariga chipta sotib olish uchun 15% chegirmalar tarif qismidan taqdim etilmoqda * * * * * * * * * * * * * * * * * * * * * * * * * *  Angren shahrida doimiy ro‘yxatdan o‘tgan va doimiy yashovchi yo‘lovchilar uchun quyidagi yo‘lovchi poyezdlariga 32% chegirma mavjud:  -  № 60/59, 62/61, 98/97, 92 Toshkent-Andijon;    -  № 391/392 Andijon-Buxoro;  -  № 393/394 Andijon-Xiva;  -  №  397/398 Andijon-Termez.
               * * * * * * * * * * * * * * * * * * * * * * * * * *  XALQARO YO’NALISHLARDAGI POYEZDLAR  O‘zbekiston Respublikasi, Rossiya Federasiyasi, Qozoqiston Respublikasi, Qirg‘iziston Respublikasi va Tojikiston Respublikasi temir yo‘l ma’muriyatlarining yo‘lovchilar tashuvchilarning vakolatli vakillari yig‘ilishining protokollari asosida 2019 yil 18 sentyabrda Dushanba shahri.  O‘zbekiston, Qozoqiston va Qirg‘iziston oralig‘ida qatnovchi barcha yo‘lovchi poyezdlar uchun:         SV va kupe vagonlari uchun:  -  yo‘lovchi poyezdi jo‘natiladigan vaqtiga 45 sutkadan 41 sutkagacha bo‘lgan muddatgacha  chipta xarid qilinsa, chipta narxi tarif qismidan 60 % chegirmada,  -  yo‘lovchi poyezdi jo‘natiladigan vaqtiga 40 sutkadan 31 sutkagacha bo‘lgan muddatgacha  chipta xarid qilinsa, chipta narxi tarif qismidan 45 % chegirmada,  -  yo‘lovchi poyezdi jo‘natiladigan vaqtiga 30 sutkadan 6 sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa chipta narxi tarif qismidan 35% chegirmada,  Plaskart vagonlari uchun:  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 45 sutkadan 41sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 50 % chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 40 sutkadan 31 sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 35% chegirmada amalga oshirilishini bildiradi.  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 30 sutkadan 6 sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 25% chegirmada belgilangan.  O‘zbekiston Respublikasi va Rossiya Federasiyasiga qatnovchi yo‘lovchi poyezdlar uchun:  Formirovaniya AO “UTY” nr 5/6 «Tashkent-Moskva», nr 149/150 «Andijan-Moskva», nr 350/350 «Tashkent-Moskva», nr 315/316 «Tashkent-Kazan» poyezdlarining SV va kupe vagonlari uchun:  -  yo‘lovchi poyezdi jo‘natiladigan vaqtiga 45 sutkadan 41 sutkagacha bo‘lgan muddatgacha  chipta xarid qilinsa, chipta narxi tarif qismidan 55% chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 40 sutkadan 31 sutkagacha bo‘lgan muddatgacha  chipta xarid qilinsa, chipta narxi tarif qismidan 45% chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 30 sutkadan 6 sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa chipta narxi tarif qismidan 35 % chegirmada belgilangan.  Plaskart vagonlari uchun:   - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 45 sutkadan 41sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 45 % chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 40 sutkadan 31 sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 35% chegirmada amalga oshirilishini bildiradi.  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 35 sutkadan 6sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 25% chegirmada belgilangan.  Formirovaniya OAO “RJD” nr 323/324 «Tashkent-Volgograd», nr 334/334 «Tashkent-Saratov», nr 369/369 «Tashkent-Novosibirsk», nr 381/381 «Tashkent-Ufa», nr 365/365 «Tashkent-Chelyabinsk», nr 481/482 «Tashkent-Samara»  poyezdlarining SV va kupe vagonlari uchun:  -  yo‘lovchi poyezdi jo‘natiladigan vaqtiga 45 sutkadan 41 sutkagacha bo‘lgan muddatgacha  chipta xarid qilinsa, chipta narxi tarif qismidan 60 % chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 40 sutkadan 31 sutkagacha bo‘lgan muddatgacha  chipta xarid qilinsa, chipta narxi tarif qismidan 40 % chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 30 sutkadan 6 sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa chipta narxi tarif qismidan 35 % chegirmada belgilangan.  Plaskart vagonlari uchun:  -  yo‘lovchi poyezdi jo‘natiladigan vaqtiga 45 sutkadan 41sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 50 % chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 40 sutkadan 31 sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 30 % chegirmada amalga oshirilishini bildiradi.  -     yo‘lovchi poyezdi jo‘natiladigan vaqtiga 30 sutkadan 6sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 25% chegirmada belgilangan.  O‘zbekiston va Tojikiston poyezdlari uchun:     Barcha turdagi vagonlar uchun:                 - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 45 sutkadan 31sutkagacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 45 % chegirmada,  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 30 kundan 4 kungacha bo‘lgan muddatgacha chipta xarid qilinsa, chipta narxi tarif qismidan 35 % chegirma.  - yo‘lovchi poyezdi jo‘natiladigan vaqtiga 3 kundan  0 kungacha 0% chegirma belgilangan.  * * * * * * * * * * * * * * * * * * * * * * * * * *  Kuzatuv kengashining 14.12.2018 yildagi bayoni ijrosi ta’minlash maqsadida Rossiya federasiyasidan O‘zbekiston Respublikasiga qatnovchi barcha yo‘lovchi poyezdlarning plaskart vagonlari uchun 50% chegirma o‘rnatilgan.  O‘zbekiston Respublikasidan Rossiya Federasiyasigaga qatnovchi davlataro qatnovchi yo‘lovchi poyezdlarining plaskart vagonlariga 30 % chegirma o‘rnatilgan.`,
        },
        {
          question:
            "Talon o’rniga va guvohnomani taqdim etish bilan bir yilda bir marta temir yo’l orqali sayohat narhidan 50 %li chegirma huquqi beriladi?",
          answer: `a) Ulug’ vatan urushi 3 guruh nogironlariga;  b) Ulug’ vatan urushi qatnashchilari va ularga tenglashtirilgan: bir yilda bir marta temir yo’l orqali sayohat(2 tarafga) narhidan 50 %li chegirma huquqi beriladigan shaxslarga istagiga ko’ra 2 yil taloni(joriy va o’tgan yil yoki joriy va kelasi yil) evaziga 2 yilda bir marta bepul sayohat (2 tarafga) imkoniga egadirlar.Bunda to’g’ridan to’g’ri yo’nalishda bunday sayohatni rasmiylashtirish“borish” 2 talon , qaytishda esa “qaytish” 2 ta talon evaziga amalga oshiriliadi. Bu tartib shuningdek Ulug’ vatan urushi 3 guruh nogironlariga va Ulug’ vatan urushi qatnashchilariga tenglashtirilgan shaxslarga qo’llaniladi.  Ushbu chegirmalar O’zbekiston Respublikasi temir yo’l transportida yo’lovchilar, bagaj va yuk bagaj tashish qoidalarini   2012 yil 13 aprel O’zbekiston Respublikasi Vazirlar Mahkamasining 109-son qarori bilan  tasdiqlangan. Qarorni yuklash. https://railway.uz/doc/pravila_perevozok_passajirov-uz.pdf`,
        },
        {
          question: `Yo'lovchi tashishni qaysi hujjat tartibga soladi?`,
          answer: `O'zbekiston Respublikasida temir yo'l transportida yo'lovchilar tashish quyidagilar bilan tartibga solinadi.  O'zbekiston Respublikasi Vazirlar Mahkamasining 2012 yil 13 apreldagi 109-sonli qarori bilan tasdiqlangan "O'zbekiston Respublikasi temir yo'l transporti yo'lovchilari, bagaj va yuk yuklarini tashish qoidalari". qoidalarni bu yerdan yuklab olish mumkin.  Vazirlar Mahkamasining qarori bilan tasdiqlangan "Yo'lovchilarni va boshqa odamlarni, qo'l yuklarini, yuklarni temir yo'l stantsiyalarida (stantsiyalarda) tekshirish tartibi to'g'risidagi nizom" va "Temir yo'l stantsiyalarida (stantsiyalarda) yo'lovchilarni va boshqa odamlarni qidirish qoidalari". O'zbekiston Respublikasi Vazirlar Mahkamasining 2011 yil 30 noyabrdagi № 314-sonli qarori. Qoidalarning to'liq matni bu erdan yuklab olinishi mumkin.`,
        },
        {
          question: `Sotib olingan yo'l hujjatini temir yo'l kassasiga qaytarilganda qanday jarimalar qo'llaniladi?`,
          answer: `Ichki va tashqi yo'nalishdagi temir yo'l hujjatlarini topshirish/qaytarish holatlarda jarima undiriladi. O'zbekiston Respublikasi temir yo'l transportida yo'lovchilar, bagaj va yuk bagaj tashish Qoidalariga binoan 2019 yil 15 noyabrdan:  - foydalanilmagan yo'l hujjatini poezd jo'nashidan 24 soat kechiktirilmasdan temir yo'l kassasiga topshirilsa, yo'lovchidan qaytarish jarayoni uchun 5000 so'm + komissiya yig'imi stavkasi;  - foydalanilmagan yo'l hujjatini poezd jo'nashidan 24 soatdan kam, ammo 6 soatdan kechiktirilmasdan temir yo'l kassasiga topshirilsa, yo'lovchidan qaytarish jarayoni uchun 5000 so'm + komissiya yig'imi stavkasi + platskarta qiymatining 50% miqdorida;  - foydalanilmagan yo'l hujjatini poezd jo'nashidan 6 soatdan kam, ammo 1 soatdan kechiktirilib temir yo'l kassasiga topshirilsa, yo'lovchidan qaytarish jarayoni uchun 5000 so'm + komissiya yig'imi stavkasi + platskarta qiymatining 100% miqdorida jarima undiriladi;  - foydalanilmagan yo'l hujjatini poezd jo'nab ketganidan so'ng 1 soatdan keyin temir yo'l kassasiga topshirilsa, yo'l hujjatining narhi (uning to'loq qiymati) qaytarilmaydi;    - foydalanilmagan jamoaviy yo'l hujjatlarini qaytarish jarayonida jarima undirishning boshqa tizim asosida undiriladi (O'zbekiston Respublikasi yo'lovchilarni, qo'l yuki va bagaj yuklarni temir yo'l transporti orqali tashish Qoidasining XI bob, 213, 220-bandlari bilan tanishing). O'zbekiston Respublikasi yo'lovchilarni, qo'l yuki va bagaj yuklarni temir yo'l transporti orqali tashish Qoidasining elektron kurinishini Internetdagi http://lex.uz/pages/getpage.aspx?lact_id=2001189&twolang=true veb-sahifasida o'qishingiz mumkin.`,
        },
        {
          question: `Yo’l hujjatlarini rasmiylashtirish uchun qanday hujjatlar kerak bo’ladi?`,
          answer: `Yo’l hujjatlarini rasmiylashtirish yo’lovchining shaxsini tasdiqlovchi hujjat (passport, harbiy guvohnoma), 16 yoshgacha bo’lgan bolalar uchun, bunda ota-onaning pasportida bolaning yopishtirilgan sur’ati bo’lishi lozim, tug’ilganlik haqida guvohnoma asosida  amalga oshiriladi.Voyaga yetmagan bolalar qonuniy vakillari(ota-ona, buvisi, xolasi)bilan O’zbekiston Respublikasi hududida tashqariga chiqishda ishonchnoma va 16 yoshga yetmagan bolaga tug’ilganlik to’risidagi guvohnoma o’rniga O’zbekiston Respublikasi fuqarosi guvohnomasi bo’lishi shart.`,
        },
      ],

      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
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
