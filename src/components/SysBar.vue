<template>
    <v-system-bar 
        color=#40E0D0
        app
      >
        <v-spacer></v-spacer>
        <span> 
          <v-card-text class="py-2 gray--text ">
            <strong>{{ new Date().getDate() }}.{{ new Date().getMonth() }} - {{ new Date().getHours()}}:{{ new Date().getMinutes()}}:{{ new Date().getSeconds()}} </strong>
          </v-card-text>
        </span>
    </v-system-bar>
</template>