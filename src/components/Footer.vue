<template>
    <v-footer
      app
      color=#4682B4
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <v-spacer></v-spacer>
          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://www.linkedin.com/in/sarah-emilly-0210/" target="_blank"    
            title = "LinkedIn"
            >
              <v-icon size="35px">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://github.com/sarahcabral" target="_blank"   
            title = "Github"
            >
              <v-icon size="35px">mdi-github</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer> 
</template>