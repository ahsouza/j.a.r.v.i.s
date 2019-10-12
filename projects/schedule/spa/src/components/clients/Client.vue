<template>
<div>
  <v-carousel>
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        
        <v-row class="fill-height" align="center" justify="center">

          <div class="display-3">
            
            <v-card class="mx-auto" max-width="330" tile>
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
  <br>

<v-dialog v-model="dialog" persistent max-width="920px">
    
     <template align=center v-slot:activator="{ on }">
           <div class="my-2" align=center>
            <v-btn color="primary" fab v-on="on"><v-icon>mdi-plus</v-icon></v-btn>
           </div>
      </template>
    
      <v-card>


        <v-tabs v-model="tab" background-color="deep-purple accent-4" centered dark icons-and-text>
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
              Pessoal
              <v-icon>mdi-account-box</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              Endereço
              <v-icon>mdi-home</v-icon>
            </v-tab>

            <v-tab href="#tab-3">
              PROJETOS
              <v-icon>mdi-source-pull</v-icon>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
              <v-card flat>
                <v-card-text>

                <v-container>
                  <!-- DADOS PESSOAL -->
                  <v-row v-if="i == 1">
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="firstName" label="Nome" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="lastName" label="Sobrenome" required></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field v-model="email" label="Email" required></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="cpf" label="CPF"></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field v-model="telephoneOne" label="Telefone"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="telephoneTwo" label="Telefone 2"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field v-if="telephoneOne && telephoneTwo" v-model="site" label="Site"></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-select v-if="telephoneOne && telephoneTwo" v-model="social" :items="items" label="Redes Sociais"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-if="telephoneOne && telephoneTwo" :label="social" hint="conta do facebook" placeholder="https://facebook.com/"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- // LOCALIZAÇÃO -->
                  <v-row v-if="i == 2">
                    <v-col cols="12" sm="6">
                      <v-select :paises="paises" label="País"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="Cidade" hint="cidade que o cliente mora atualmente" persistent-hint></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" sm="6">
                      <v-select :estado="estado" label="Estado"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="postalCode" label="CEP"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="streetAddress" label="Logradouro"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- // PROJETOS -->
                  <v-row v-if="i == 3">
                    <v-col cols="12" sm="6" md="6">
                      <v-select label="Projetos"></v-select>
                    </v-col>
            
                    <v-col cols="12" sm=6 md=6>
                      <v-text-field label="URL Git"></v-text-field>
                    </v-col>
                  </v-row>

                </v-container>
                </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                 <v-btn color="red darken-4" text @click="dialog = false">cancelar</v-btn>
                 <v-btn color="success" v-on:click="save()" text @click="dialog = false">salvar</v-btn>
                </v-card-actions>

              </v-card>
            </v-tab-item>
          </v-tabs-items>

      </v-card>
    </v-dialog>
</div>
</template>


<style scoped>
</style>

<script>
  export default {
    name: 'Client',
    data () {
      return {
        clientes: [],
        firstName: 'Aníbal',
        lastName: 'Henrique',
        email: 'ahs@ahs.com',
        cpf: '',
        telephone: { optionOne: '', optionTwo: '',},
        site: '',
        social: {facebook: '', linkedin: '', instagram: '', telegram: '', twitter: '' },
        location: {addressCountry: '', addressCity: '', addressState: '', streetAddress: '', numberAddress: '', postalCode: '', latitude: '', longitude: ''},
        e1: 0,
        tab: '',
        dialog: false,
        items: ['Facebook', 'LinkedIn', 'Instagram', 'Telegram', 'Twitter'],
        colors: [ 'secondary', 'deep-purple accent-4', 'primary', 'yellow darken-2', 'orange'],
        paises: ['Argentina', 'Alemanhã', 'Austrália', 'Brasil', 'Bolívia', 'Bulgária', 'Bangladesh', 'Canadá', 'Costa Rica'],
      }
    },
    beforeCreate() {
      console.log('Before Create!')
    },
    created() {
      this.$http.get(this.$url + `/clients`)
        .then(res => {
          this.$store.commit('setClients', JSON.parse(JSON.stringify(res.data)))
      })
      let getClients = this.$store.getters.getClients

      if (getClients) {
        this.clientes = this.$store.getters.getClients
      }
    },
    methods: {
      save() {
        this.$http.post(this.$url + `/clients`, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          cpf: this.cpf,
          site: this.site
        }, {'headers': {'Acces-Control-Allow-Methods': '*', 'Acces-Control-Allow-Origin': '*', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
        .then(res => {
          
          alert(res.data)
          console.log('Cadastro efetuado com sucesso!')
          alert('Cadastro Efetuado com Sucesso!')
          this.$store.commit('setClient', res.data.client)
        
        })
        .catch(e => {
          console.log(e)
          alert(e)
        })
      }
    }  
  }
</script>