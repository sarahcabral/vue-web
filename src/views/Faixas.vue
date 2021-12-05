<template>
  <v-main style="background-color: #8e7ecf; height: 100%">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" style="text-align: justify">
        <h1>Faixas Graduações</h1>
        <v-divider class="background-color: white mb-3"></v-divider>

        <v-row>
          <v-col v-for="(tkd, p) in faixas" :key="p" cols="3">
            <Cards :tkd="tkd" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  components: {
    Cards,
  },
  computed: {
    tkd() {
      return this.$store.state.tkd;
    },
    faixas() {
      return this.tkd.filter((tkd) => tkd.isFaixa);
    },
  },
};
</script>