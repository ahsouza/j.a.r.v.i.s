<template>
  <v-app>
    <v-app-bar app>
      
      <v-btn text href="/">
        <span class="mr-2">LOGO</span>
      </v-btn>
      
      <v-spacer></v-spacer>
      
      <v-toolbar-title class="headline text-uppercase">  
        <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn v-on:click="login()" color="dark lighten-2" dark v-on="on">
                    ENTRAR
                  </v-btn>
                </template>

                <v-card>
                  <v-card-text>
                    <br>

                    <v-form ref="form" lazy-validation>
                      <v-text-field v-model="email" label="Login" required></v-text-field>
                      <v-text-field v-model="password" label="Senha" required></v-text-field>
                    </v-form>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="success" @click="dialog = false">
                      ok
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
      </v-toolbar-title>
  
    </v-app-bar>

    <v-content>
      <router-view/> 
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    dialog: false,
    email: '',
    password: ''

  }),
  methods: {
    login() {
      this.$http.post(this.$url + '/users/auth', {
        email: this.email,
        password: this.password
      }).then(res => {
        if (res) {
          console.log('Autenticado com sucesso!')
          this.$store.commit('setUser', res.data.user)
        } else {
          console.log('Erro ao tentar autenticar usuário')
        }
      }).catch(e => {
        console.log(e)
        alert(e)
      })
    }
  }
};
</script>
