<template>
  <v-main style="background-color: #8e7ecf; height: 100%">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" style="text-align: justify">
        <h1>Taekwondo</h1>
        <v-divider class="background-color: white mb-3"></v-divider>
        <v-btn text @click = fetch() > TEXTO </v-btn>
        <v-row>
          <v-col v-for="(tkd, p) in home" :key="p" cols="3">
            <Cards :tkd="tkd" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Cards from "@/components/Cards.vue";
import axios from 'axios';
export default {
  components: {
    Cards,
  },
  computed: {
    tkd() {
      return this.$store.state.tkd;
    },
    home() {
      return this.tkd.filter((tkd) => tkd.isHome);
    },
  },
  methods:{
    fetch(){
      console.log("TESTE")
      axios.get("https://calendarific.com/api/v2")
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
    }
  }
};
</script>