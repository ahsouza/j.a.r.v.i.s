<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col sm="6" md="5" lg="6">
        <v-card class="pa-2" outlined tile>
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
        </v-card>
      </v-col>
      <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
        <v-card class="pa-2" outlined tile>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on }">
                <v-btn color="red lighten-2" dark v-on="on">
                  ENTRAR
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                  Autenticação
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="success" text @click="dialog = false">
                    continue
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
</style>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        e1: 0,
        dialog: false
      }
    },
  }
</script>