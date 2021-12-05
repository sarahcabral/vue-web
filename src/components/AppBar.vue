<template>
    <v-app-bar 
        app       
        color=#48D1CC
        elevate-on-scroll
        short
        height = "40"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>WTF TAEKWONDO</v-toolbar-title>
        <v-spacer>
        </v-spacer>
        <v-toolbar-items short>
          <v-btn outlined class="mx-0" @click="$router.push('/')" >Taekwondo</v-btn>
          <v-btn outlined class="mx-0" @click="$router.push('/faixas')" >Faixas</v-btn>
          <v-btn outlined class="mx-0" @click="$router.push('/poomsae')" >Poomsae</v-btn>
          <v-btn outlined class="mx-0" @click="$router.push('/aulas')" >Aulas</v-btn>
        </v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>
