<template>

  <v-carousel>
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            
            <v-card class="mx-auto" max-width="375" tile>
              <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                
                <v-row align="end" class="fill-height">
                  
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                  </v-col>
                  
                  <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                      <v-list-item-content>
                        <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                        <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
              <v-btn class="mx-2" fab dark small color="pink">
                <v-icon dark>mdi-fingerprint</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark small color="orange">
                <v-icon dark>mdi-home</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark small color="green">
                <v-icon dark>mdi-phone</v-icon>
              </v-btn>
              
              <v-btn class="mx-2" fab dark small color="red">
                <v-icon dark>mdi-gmail</v-icon>
              </v-btn>
            <!-- Slide {{ i + 1 }} -->
          </div>
        </v-row>

      </v-sheet>

    
    </v-carousel-item>
 
  </v-carousel>
  
<!--   
  
  
  
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Registra-se</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1">
          Continue
        </v-btn>

        <v-btn text>Cancelar</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper> -->
</template>


<style scoped>
</style>

<script>
  export default {
    name: 'Client',
    data () {
      return {
        e1: 0,
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
      }
    },
  }
</script>