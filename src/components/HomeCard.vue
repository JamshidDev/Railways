<template >
     <v-hover v-slot="{ hover }">
            <v-card
            max-width="100%"
              :elevation="hover ? 3 : 0"
              :class="{ 'on-hover': hover }"
              class="blue lighten-5 p-4 cursor_hover_pointer"
            >
           <v-card-text class="p-10">
         <v-row>
              <v-col cols="4">
             <v-avatar size="60">
                <v-icon size="60" :color="hover ? 'green' : 'primary'">{{Structures.icon}}</v-icon>
            </v-avatar>
           </v-col>
           <v-col cols="8">
            <div  :class="hover ? 'indigo--text' : 'blue--text'" class="text-h6 text-uppercase text-left">
                {{Structures.title}}
            </div>
           </v-col>
         </v-row>
           </v-card-text>
            </v-card>
          </v-hover>
</template>
<script>
export default {
    props:["Structures"]
    
}
</script>
<style lang="">
    
</style>