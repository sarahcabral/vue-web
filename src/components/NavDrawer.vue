<template>
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
        <v-list>
          <v-list-item-group v-model="selectedbarItem" color="">
            <v-list-item
              v-for="item in barItems"
              :key="item.title"
              link
              @click="$router.push(item.url)"
            >
              <v-list-item-icon>
                <v-icon> {{item.icon}} </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
        barItems: [
            {
            title: "Taekwondo",
            icon: "mdi-karate",
            url: "/tkd",
            },
            {
            title: "Faixas",
            icon: "mdi-notification-clear-all",
            url: "/faixas",
            },
            {
            title: "Poomsae",
            icon: "mdi-walk",
            url: "/poomsae",
            },
            {
            title: "Aulas",
            icon: "mdi-calendar-month",
            url: "/aulas",
            },
        ],
        selectedbarItem: 0,
    }),
  }
</script>
