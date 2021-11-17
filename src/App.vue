<template>
  <v-app>
    <v-system-bar 
        app
        fixed
        
        color=#40E0D0
      >
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>21:00</span>
    </v-system-bar>
    <!-- Talvez ficasse melhor sem o absolute no app-bar, não consegui me decidir -->
    <v-app-bar 
        app        
        absolute
        color=#48D1CC
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Minha coleção</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        right
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://lh3.googleusercontent.com/a-/AOh14GjwTfDRpsveuMCytkB0IW8GQ27ZYn5DcXYhK4e7a3Q=s360-p-rw-no"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sarah Emilly
              </v-list-item-title>
              <v-list-item-subtitle>sarah@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Galerias</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Compartilhados comigo</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-timeline
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
        >
        <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="text-h6">
                Lorem Ipsum Dolor
              </v-card-title>
              <v-card-text class="white text--primary">
                <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                <v-btn
                  :color="item.color"
                  class="mx-0"
                  outlined
                >
                  Button
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-main>
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
          <font color="white"> 
            <h2>
              <strong class="subheading">Conecte-se comigo nas minhas redes!</strong> </h2>
          </font>
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
    <v-bottom-navigation
      app
      :value="value"
      color=#008080
      grow
    >
      <v-btn>
        <span>Recentes</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favoritos</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    
    }),
    
  }
</script>