<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      height="250px"
      :src="require(`@/assets/${tkd.image}`)"
    >
     
    </v-img>
    <v-card-title > {{ tkd.name }} </v-card-title>
    <v-card-subtitle class="pb-0">
      {{ tkd.subtitle }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      {{ tkd.description.substring(0,250) }}...
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
      >
        {{ tkd.extra }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ["tkd"]
}
</script>