<script src="vuebar.js"></script>
<template>
  <v-container>
    <v-dialog
        v-model="loginPopup"
        persistent
        max-width="400"
        max-height="600"
        class="hidescrollbar"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5 text-center font-weight-black mx-12 my-12">
          <div>SIGN</div> <div class="mx-2 text--red">IN</div>
          </v-card-title>
          <v-card-actions>
            <v-text-field
              v-model="email"
              label="Enter Email"
              solo
            ></v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Enter Password"
              hint="At least 8 characters"
              counter
              solo
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-row class="d-inline-flex">
              <v-col cols="12">
                <v-checkbox
                  v-model="storeHash"
                  label="Stay signed in"
                  class="mt-n2"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-actions>
            
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading4"
              :disabled="loading4"
              color="info"
              large
              block
              @click="loader = 'loading4' && login(email, password, storeHash)"
            >
              SIGN IN
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            Not a user? Sign up<div class="ml-1" @click="signupPopup = true"> here </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <v-row justify="center">
      <v-dialog
        v-model="signupPopup"
        persistent
        max-width="400"
        max-height="600"
        class="hidescrollbar"
      >
        <v-card>
          <v-card-title class="text-h5 font-weight-black mx-12 my-6">
          <v-btn class="mr-2"><v-icon @click="signupPopup = false">mdi-arrow-left</v-icon></v-btn>
          <div>SIGN UP</div>
          </v-card-title>
          <v-card-text>
            To use our platform you need to create an account. This account is used to store the data which we use to create this service. No personal data is stored nor is any data collected whatsoever.
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
              solo
            ></v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-text-field
              v-model="Name"
              name="input-10-1"
              label="Enter your name"
              solo
            ></v-text-field>
          </v-card-actions>
          <v-card-text>
            Please keep in mind that this is stored as a plain text password - this may change to being hashed, either way, given that the code is open source, a hash will able to be reversed. I highly suggest that you do not use any password that you use elsewhere or that would cause you any issues should it be gathered by someone who you don't wish.
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="password1"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.email]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Enter Password"
              hint="At least 8 characters"
              counter
              solo
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-text-field
              v-model="password2"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.email]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Reenter Password"
              hint="At least 8 characters"
              counter
              solo
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-btn block color="primary">
              Sign Up
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
      <v-app-bar
        absolute
        elevate-on-scroll
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title v-text="greeting + ', ' + usersname + '! '"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y class open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <div class="d-flex flex-row align-center mr-0" v-bind="attrs" v-on="on" fluid>
              <v-avatar class="ml-2" :color="colorTheme" size="36">
                <v-icon>mdi-cog</v-icon>
              </v-avatar>
            </div>
          </template>
          <v-list>
            <v-list-item>
              <v-switch v-model="$vuetify.theme.dark" @change="changeMode" label="Dark Mode" :color="colorTheme" />
            </v-list-item>
            <v-list-item>
              <v-btn @click="logout()">
                Logout
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-sheet class="pb-6 mb-6">
        <v-container style="height: 1500px;">
          <v-img
          class="mx-auto"
          src='../assets/home_1.jpg'
          /> 
            <v-row>
              <v-col cols="12" class="text-h2 my-6 ml-2">
                home. 
              </v-col>
              <v-col cols="3">
                <v-img src="https://www.indiewire.com/wp-content/uploads/2016/08/no-face.jpg"/>
                <v-row justify="center" class="my-6">
                  <v-date-picker v-model="picker" width="90%"></v-date-picker>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-div class="text-h4 mb-12">
                  life right now
                </v-div>
                <v-divider class="my-2"></v-divider>
                <div class="text-h5">
                  important links!!!!!!!!
                </div>
                <v-row>
                  <v-col cols="4" v-for="link in links" :key="link.id">
                    <v-card @click="goto(link.link)">
                      <v-card-title>
                        {{link.text}}
                      </v-card-title>
                      <v-img :src="`link.link`"/>
                    </v-card>
                  </v-col>
                </v-row>
                <div class="calendarRow mt-4 text-h4">
                  <div class="mx-2">
                      currently!
                    </div>
                </div>

                <div class="mt-6 text-h4 font-weight-light">
                  <div class="ml-2 text-h6">
                    life is busy
                  </div>  
                  <v-data-table
                    :headers="headers"
                    :items="todos"
                    sort-by="date"
                    :items-per-page="5"
                    class="elevation-1"
                    :page.sync="page"
                    hide-default-footer
                  >
                  <template v-slot:header.complete>
                    <v-icon>
                      mdi-checkbox-outline
                    </v-icon>
                  </template>
                  <template v-slot:item.complete="{ item }">
                    <v-simple-checkbox
                      v-model="item.complete"
                    ></v-simple-checkbox>
                  </template>
                  <v-pagination
                    v-model="page"
                    :length="pageCount"
                  ></v-pagination>
                  </v-data-table>
                </div>
              </v-col>
              <v-col cols="3">
                <v-col cols="12" class="my-auto">
                <v-img src="https://beat.com.au/wp-content/uploads/2017/08/myneighbortotoro-still1-e1571270229928.png"/>
              </v-col>
              <v-col cols="12">
                <div class="currentlyRow text-h4">
                  <div class="mx-2">
                    currently!
                  </div>
                </div>
                <v-list>
                    <v-list-item>
                      Cloud Computing Project
                    </v-list-item>
                    <v-list-item>
                      Avoiding Everything Else!
                    </v-list-item>
                  </v-list>
                <div class="spotifyPlaylist text-h4 my-2">
                  <div class="mx-2">
                    listening to!
                  </div>
                </div>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/30kcAxu244i3RX9yt4L6on?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </v-col>
              </v-col>
            </v-row>
        </v-container>
      </v-sheet>
  </v-container>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: 'Home',
    
    data() {
      return {
        greeting: '',
        timestamp: '',
        usersname: 'Tristan',
        user: 1,
        dark: true,
        loginPopup: true,
        signupPopup: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          passwordMatch: (password1, password2) => {
            return password1 == password2
          }
        },
        headers: [
          {
            text: 'task',
            align: 'start',
            value: 'name',
          },
          { text: 'type', value: 'type' },
          { text: 'date', value: 'date' },
          { text: '', value: 'complete', sortable: false },
        ],
        todos: [
        {id: 0, name:'INFS3208', type: 'Work', date: new Date(2022, 9, 21), complete: 1},
        {id: 1, name:'INFS2200', type: 'Work', date: new Date(2022, 9, 21), complete: 0},
        {id: 2, name:'CSSE2310', type: 'Work', date: new Date(2022, 9, 21), complete: 0},
        {id: 3, name:'MATH1061', type: 'Work', date: new Date(2022, 9, 21), complete: 0}],
        links: [
        {id: 0, text: 'blackboard', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/02/13/mary-and-the-witchs-flower-0.jpg', link: 'https://learn.uq.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1'},
        {id: 1, text: 'blackboard', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/02/13/mary-and-the-witchs-flower-0.jpg', link: 'https://learn.uq.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1'},
        {id: 2, text: 'blackboard', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/02/13/mary-and-the-witchs-flower-0.jpg', link: 'https://learn.uq.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1'},
        {id: 3, text: 'blackboard', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/02/13/mary-and-the-witchs-flower-0.jpg', link: 'https://learn.uq.edu.au/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1'}]
      }  
    },
    methods: {
      getNow: function() {
        const today = new Date();
        if (today.getHours() < 12 && today.getHours() >= 0) {
          this.greeting = "Good Morning"
        } else if (today.getHours() >= 12 && today.getHours() < 17) {
          this.greeting = "Good Afternoon"
        } else {
          this.greeting = "Good Evening"
        }
      },
      goto: function(link) {
        window.location.hred = link;
      },
      login(email, password, store) {
        if (email != null && password != null && !store) {
          this.loginPopup = false;
        }
      },
      logout() {
        this.loginPopup = true;
      },
      changeMode(mode) {
        localStorage.setItem('infs3208_dark_mode', mode ? 'true' : 'false');
      },
      // async getUsers() {
      //   console.log(await axios.get('/users/'))
      // }
      
    },
    created() {
      setInterval(() => {
        this.getNow();
      }, 1000)
    },
    mounted() {
      this.getNow();
    }
  }
  
</script>

<style>
.hidescrollbar {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}
.colorRow {
  background-color: rgb(216, 212, 255);
  width: 400%;
  height: 20px;
}
.mainBody{
    position: absolute;
    top: 500px;
    margin-left: 5%;
    margin-right: 5%;
}
</style>
