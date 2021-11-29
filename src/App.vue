<template>
  <v-app>
    
    <SysBar></SysBar>

    <AppBar></AppBar>

    <NavDrawer></NavDrawer>

    <Footer></Footer>
    
    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
      
  </v-app>    
  
</template>

<script>
  import AppBar from "@/components/AppBar"
  import Footer from "@/components/Footer"
  import SysBar from "@/components/SysBar"
  import NavDrawer from "@/components/NavDrawer"
  export default {
    name: 'App', 
    components: {
      AppBar,
      Footer, 
      SysBar,
      NavDrawer
    },
    data: () => ({

    }),
}

</script>
