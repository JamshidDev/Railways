<template >
  <v-container fluid>
    <v-row class="py-16 banner_bg" justify-lg="center">
      <v-col cols="12">
        <h3 class="banner_title mb-10">Murojatlarni tekshirish</h3>
      </v-col>
      <v-row justify="center">
        <v-col cols="11" xl="8" lg="8" md="10">
          <v-card>
            <v-card-title class="blue white--text font-weight-medium">
              Murojadnini kodini kiriting
            </v-card-title>
            <v-card-text>
              <p class="text-lg-body-1 text-xl-body-1 blue--text pt-2 pl-2 text-caption">
                Murojatni tasdiqlash kodini kiritish orqali murojatingiz holatini bilib olishingiz mumkin.
              </p>
              <v-form>
                <v-col cols="12">
                  <div>
                    <div
                      class="ma-auto position-relative"
                      style="max-width: 300px"
                    >
                      <v-otp-input
                        v-model="verifycode"
                        class="blue--text font-weight-bold"
                        length="4"
                        type="number"
                      ></v-otp-input>
                      <v-overlay absolute :value="loading">
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </v-overlay>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn color="primary"  elevation="0" large @click="sendVerify()">Tekshirish</v-btn>
                </v-col>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
            <the-notefication :notefication="notes" :NoteType="'error'" :NoteColor="'red'" :NoteText="`Mavjud bo'lmagan tasdiqlash kodi`"></the-notefication>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
import TheNotefication from '@/components/TheNotefication.vue';
export default {
    components:{
        TheNotefication
    },
      data: () => ({
      verifycode:null,
      loading:false,
      notes:false,

    }),
     methods: {
        sendVerify(){
            console.log(this.verifycode);
            this.controlNotes()
            
        },
        controlNotes(){
            this.notes= !this.notes
            setTimeout(()=>{
                  this.notes= !this.notes
            },3000)
        }
    },
};
</script>
<style lang="scss">
</style>