<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        
        <span>J.A.R.V.I.S</span>
        
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn text href="/cadastro">
        <span class="mr-2">cadastre-se</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/> 
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    //
  }),
};
</script>
