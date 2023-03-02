<script src="vuebar.js"></script>
<template>
  <v-container>
    <v-dialog
        v-model="loginPopup"
        persistent
        max-width="500"
        max-height="700"
        class="hidescrollbar"
      >
        <v-card class="px-6 py-6">
          <v-card-title class="d-flex justify-center my-12">
            <v-icon class="text-h4">mdi-calendar</v-icon> <div class="text-h4">Calendario</div> 
          </v-card-title>
          <v-card-subtitle class="mb-3">
            Sign in to use our platform!
          </v-card-subtitle>
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
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Enter Password"
              hint="At least 8 characters"
              counter
              solo
              @click:append="show = !show"
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
              :loading="loading"
              color="info"
              large
              block
              @click="login(email, password, storeHash)"
            >
              SIGN IN
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
          <v-card-title class="text-h5 my-6">
          <v-btn class="mr-2 align-left"><v-icon @click="signupPopup = false">mdi-arrow-left</v-icon></v-btn>
          <div class="align-center">Sign up</div>
          </v-card-title>
          <v-card-text>
            To use our platform you need to create an account. This account is used to store the data which we use to create this service. No personal data is stored nor is any data collected whatsoever.
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="email2"
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
            <v-text-field
              v-model="password2"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-1"
              label="Reenter Password"
              hint="At least 8 characters"
              counter
              solo
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-btn block color="primary" :loader="this.signupLoading" @click="signup(email2, Name, password1, password2)">
              Sign Up
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog
        v-model="customise_calendar"
        persistent
        max-width="800"
        max-height="800"
        class="hidescrollbar"
      >
        <v-card class="hidescrollbar">
          <v-card-title class="text-h5 my-6">
          <v-btn class="mr-2 align-left"><v-icon @click="customise_calendar = false">mdi-arrow-left</v-icon></v-btn>
          <div class="align-center">Customise your calendar</div>
          </v-card-title>
          <v-card-text>
            Entering into the below will change your calendar settings!
          </v-card-text>
          <v-card-text>
            Enter a link for the header image!
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="header_image"
              label="Header image link"
              solo
            ></v-text-field>
          </v-card-actions>
          <v-card-text>
            Enter the title of your calendar!
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="title"
              label="Enter the title of your calendar!"
              solo
            ></v-text-field>
          </v-card-actions>
          <v-card-text>
            Enter a link for the image on the left!
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="left_image"
              label="Enter a link for an image that is shown on the left!"
              solo>
            </v-text-field>
          </v-card-actions>
          <v-card-text>
            Enter the width for the calendar on the left (this element has issues with updating, best to save and view that way!)
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="calendarWidth"
              label="Enter the width of the calendar on the left"
              solo
            ></v-text-field>
          </v-card-actions>
          <v-card-text>
            Enter the html for the main portion of your page
          </v-card-text>
          <v-card-actions>
            <v-textarea
              v-model="main_html"
              label="Enter html for the main body"
              solo>
            </v-textarea>
          </v-card-actions>
          <v-card-text>
            Enter a link for the image on the right
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="right_image"
              label="Enter a link for an image that is shown on the right!"
              solo>
            </v-text-field>
          </v-card-actions>
          <v-card-text>
            Enter the text for the header on the right
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="right_text"
              label="Enter a link for an image that is shown on the right!"
              solo>
            </v-text-field>
          </v-card-actions>
          <v-card-text>
            Enter the html for the right column text area
          </v-card-text>
          <v-card-actions>
            <v-textarea
              v-model="right_html"
              label="Enter a link for an image that is shown on the right!"
              solo>
            </v-textarea>
          </v-card-actions>
          <v-card-text>
            Enter text to replace embed title</v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="embed_text"
              label="Replace the embed text!"
              solo>
            </v-text-field>
          </v-card-actions>
          <v-card-text>
            Enter html to replace the embed</v-card-text>
          <v-card-actions>
            <v-textarea
              v-model="spotify_embed"
              label="Replace the embed!"
              solo>
            </v-textarea>
          </v-card-actions>
          <v-card-actions>
            <v-btn block color="primary" @click="save_calendar(header_image, title, left_image, calendarWidth, main_html, right_image, right_text, right_html, embed_text, spotify_embed)">
              Save
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
        <v-icon class="mr-1">mdi-calendar</v-icon> <div class="text-h5">Calendario</div> 
        <v-toolbar-title class="ml-4">{{ greeting }}, {{ username }}!</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y class open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <div class="d-flex flex-row align-center mr-0" v-bind="attrs" v-on="on" fluid>
              <v-avatar class="ml-2" size="36">
                <v-icon>mdi-cog</v-icon>
              </v-avatar>
            </div>
          </template>
          <v-list>
            <v-list-item>
              <v-switch v-model="$vuetify.theme.dark" @change="changeMode" label="Dark Mode"/>
            </v-list-item>
            <v-list-item>
              <v-btn @click="customise_calendar = 1">
                <v-icon class="mr-1">mdi-calendar</v-icon> Customise Calendar 
              </v-btn>
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
          :src=header_image
          /> 
            <v-row>
              <v-col cols="12" class="text-h2 my-6 ml-2">
                <div v-html="title"></div>
              </v-col>
              <v-col cols="3">
                <v-img :src=left_image />
                <v-row justify="center" class="mt-3" >
                  <v-date-picker
                    v-model="picker"
                    year-icon="mdi-calendar-blank"
                    prev-icon="mdi-skip-previous"
                    next-icon="mdi-skip-next"
                    :width=calendarWidth
                  ></v-date-picker>
                </v-row>
              </v-col>
              <v-col cols="6">
                <div v-html="main_html">

                </div>
              </v-col>
              <v-col cols="3">
                <v-col cols="12" class="my-auto">
                <v-img :src=right_image />
              </v-col>
              <v-col cols="12">
                <div class="currentlyRow text-h4">
                  <div class="mx-2" v-html="right_text">
                  </div>
                </div>
                <div class="ml-4 text-h6 font-weight-regular" v-html="right_html">
                </div>
                <div class="spotifyPlaylist text-h4 my-2">
                  <div class="mx-2" v-html="embed_text"></div>
                </div>
                <div v-html="spotify_embed"></div>
              </v-col>
              </v-col>
            </v-row>
        </v-container>
      </v-sheet>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Home',
    
    data() {
      return {
        greeting: '',
        timestamp: '',
        usersname: 'User',
        email: '',
        email2: '',
        show: '',
        show1: '',
        show2: '',
        password: '',
        storeHash: '',
        loading: false,
        signupLoading: false,
        Name: '',
        password1: '',
        password2: '',
        page: '',
        customise_calendar: 0,
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        user: 0,
        dark: true,
        loginPopup: true,
        title: 'Welcome to Calendario!',
        signupPopup: false,
        calendarWidth: 90,
        header_image: 'https://i.imgur.com/LGhbczm.jpg',
        left_image: 'https://www.indiewire.com/wp-content/uploads/2016/08/no-face.jpg',
        right_image: 'https://beat.com.au/wp-content/uploads/2017/08/myneighbortotoro-still1-e1571270229928.png',
        right_text: 'Waiting to!',
        right_html: "<div>Sign in!</div> <div>Enjoy our service!</div>",
        main_html: "<h3>Welcome!</h3><p>I see you're new around here, there's not a lot you need to understand about calendario, but here are the basics!<br /><br />First of all, you need an account, so if you haven't already sign in/ sign up!<br /><br />Then we get to the fun stuff! You can customise your calendar in the top right, by clicking 'customise calendar', where you can specify a lot about this webpage! You can even change this!<br /><br />There's not much more, hopefully you enjoy our service and if there's any issues at all let us know!<br /><br />Enjoy my friend.</p><p>Love</p><p>The Calendario Team</p>",
        embed_text: 'Listening to!',
        spotify_embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/30kcAxu244i3RX9yt4L6on?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      
        rules: {
        },
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
      fetch_calendar_db(user) {
        var response = axios.post('//localhost:9000/getCalendar/', {user})
          .then(res => {
            console.log(res)
            this.header_image = res.data[0].header_image;
            this.title = sanatizeHtml(res.data[0].title);
            this.left_image = res.data[0].left_image;
            this.calendarWidth = res.data[0].calendarWidth;
            this.main_html = sanitizeHtml(res.data[0].main_html);
            this.right_image = res.data[0].right_image;
            this.right_text = sanatizeHtml(res.data[0].right_text);
            this.right_html = sanatizeHtml(res.data[0].right_html);
            this.embed_text = sanatizeHtml(res.data[0].embed_text);
            this.spotify_embed = res.data[0].spotify_embed;

          })
          .catch(err => console.log('Calendar Error: ', err))
      },
      login(email, password, store) {
        this.loading = true;
        var response = axios.post('//localhost:9000/login/', {email, password})
            .then(res => {
              this.loginPopup = false;
              this.usersname = res.data[0].name;
              this.user = res.data[0].id;
              this.fetch_calendar_db(this.user);
              if (store == true) {
                localStorage.setItem('calendario_user_name', this.usersname);
                localStorage.setItem('calendario_user_id', this.user);
                this.save_calendar(this.header_image, this.title, this.left_image, this.calendarWidth, this.main_html, this.right_image, this.right_text, this.right_html, this.embed_text, this.spotify_embed);
              }
              this.loading = false;
            })
            .catch(err => {
              console.log('Login Error: ', err);
              this.loading = false;
            })
            
      },
      signup(email, name, password1, password2) {
        this.signupLoading = true;
        if (password1 == password2) {
          var password = password1;
          var response = axios.post('//localhost:9000/signup/', {name, email, password})
            .then(res => {
              console.log(res)
              this.signupPopup = false;
            })
            .catch(err => console.log('Login Error: ', err))
        } else {
          console.log('Signup err: passwords do not match');
        }
        this.signupLoading = false;
      },
      logout() {
        this.loginPopup = true;
        this.usersname = "User";
        localStorage.removeItem('calendario_user_name');
        localStorage.removeItem('calendario_user_id');
        this.delete_calendar_local();
        this.$forceUpdate();
        vm.$forceUpdate();
      },
      changeMode(mode) {
        localStorage.setItem('calendario_dark_mode', mode ? 'true' : 'false');
      },
      getMode() {
        var mode = localStorage.getItem('calendario_dark_mode');
        if (mode) {
          this.$vuetify.theme.dark = true;
        }
      },
      getUserData() {
        var name = localStorage.getItem('calendario_user_name');
        var id = localStorage.getItem('calendario_user_id');
        if (name != null && name != "") {
          this.usersname = name;
          this.user = id;
          this.loginPopup = false;
          this.fetch_calendar_local();
        }
        
      },
      save_calendar(header_image, title, left_image, calendarWidth, main_html, right_image, right_text, right_html, embed_text, spotify_embed) {
        if (this.user != 0) {
          localStorage.setItem('calendario_calendar_config_header_image', header_image);
          localStorage.setItem('calendario_calendar_config_title', title);
          localStorage.setItem('calendario_calendar_config_left_image', left_image);
          localStorage.setItem('calendario_calendar_config_calendarWidth', calendarWidth);
          localStorage.setItem('calendario_calendar_config_main_html', main_html);
          localStorage.setItem('calendario_calendar_config_right_image', right_image);
          localStorage.setItem('calendario_calendar_config_right_text', right_text);
          localStorage.setItem('calendario_calendar_config_right_html', right_html);
          localStorage.setItem('calendario_calendar_config_embed_text', embed_text);
          localStorage.setItem('calendario_calendar_config_spotify_embed', spotify_embed);
          this.customise_calendar = 0;
          this.save_calendar_db(this.user, header_image, title, left_image, calendarWidth, main_html, right_image, right_text, right_html, embed_text, spotify_embed)
        } else {
          console.log("Not permitted, no user signed in")
        }
      },
      save_calendar_db(user, image_header, title, left_image, calendarWidth, main_html, right_image, right_text, right_html, embed_text, spotify_embed) {
        this.calendarLoading = true;
        title = sanatizeHtml(title);
        main_html = sanatizeHtml(main_html);
        right_text = sanatizeHtml(right_text);
        right_html = sanatizeHtml(right_html);
        embed_text = sanatizeHtml(embed_text);
        var response = axios.post('//localhost:9000/setCalendar/', {user, image_header, title, left_image, calendarWidth, main_html, right_image, right_text, right_html, embed_text, spotify_embed})
          .then(res => {
            console.log(res)
            this.calendarLoading = false;
            // this.usersname = res.data[0].name;
            // this.user = res.data[0].id;
            // console.log(store);

          })
          .catch(err => console.log('Calendar Error: ', err))
        this.calendarLoading = false;
      },
      fetch_calendar_local() {
        this.header_image = localStorage.getItem('calendario_calendar_config_header_image');
        this.title = localStorage.getItem('calendario_calendar_config_title');
        this.left_image = localStorage.getItem('calendario_calendar_config_left_image');
        this.calendarWidth = localStorage.getItem('calendario_calendar_config_calendarWidth');
        this.main_html = localStorage.getItem('calendario_calendar_config_main_html');
        this.right_image = localStorage.getItem('calendario_calendar_config_right_image');
        this.right_text = localStorage.getItem('calendario_calendar_config_right_text');
        this.right_html = localStorage.getItem('calendario_calendar_config_right_html');
        this.embed_text = localStorage.getItem('calendario_calendar_config_embed_text');
        this.spotify_embed = localStorage.getItem('calendario_calendar_config_spotify_embed');
      },
      delete_calendar_local() {
        localStorage.removeItem('calendario_calendar_config_header_image');
        localStorage.removeItem('calendario_calendar_config_title');
        localStorage.removeItem('calendario_calendar_config_left_image');
        localStorage.removeItem('calendario_calendar_config_calendarWidth');
        localStorage.removeItem('calendario_calendar_config_main_html');
        localStorage.removeItem('calendario_calendar_config_right_image');
        localStorage.removeItem('calendario_calendar_config_right_text');
        localStorage.removeItem('calendario_calendar_config_right_html');
        localStorage.removeItem('calendario_calendar_config_embed_text');
        localStorage.removeItem('calendario_calendar_config_spotify_embed');
      },
    },
    created() {
      setInterval(() => {
        this.getNow();
      }, 1000)
    },
    mounted() {
      this.getNow();
      this.getMode();
      this.getUserData();
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
