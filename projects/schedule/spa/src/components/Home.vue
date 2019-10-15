<template>
 <v-row align="center" justify="center">

    <v-col cols="12" md="4" sm= "12"  xs="12">
      <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="100%">
          <v-card-text class="my-8 text-center title">Cumpra suas tarefas!</v-card-text>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" md="4" sm= "12"  xs="12">
      <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="100%">

          <div class="my-12 text-center title">
            <v-btn large color="success">ATIVAR CONVITE</v-btn>
          </div>
          
          <v-card-text class="my-2 text-center title">Solicite seu convite e ative para que possa se conectar ao <b>j.a.r.v.i.s</b></v-card-text>

      <v-dialog v-model="dialog" persistent max-width="300px">
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->

          <v-btn large color="primary" v-on="on"><v-icon large>mdi-ticket-account</v-icon>&nbsp;&nbsp;&nbsp;Solicitar convite</v-btn>

        </template>
        <v-card>
          <v-card-title>
            <span class="headline"><v-icon large>mdi-email</v-icon> </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field label="Seu E-mail" required></v-text-field>
                </v-col>

              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">sair</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">enviar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" md="4" sm= "12"  xs="12">
      <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="100%">
          <v-card-text class="my-8 text-center title">Cadastre seu público alvo!</v-card-text>
        </v-card>
      </v-hover>
    </v-col>



  </v-row>
</template>


<style scoped>

</style>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        dialog: false,
        e1: 0,
      }
    },
    
  }
</script>