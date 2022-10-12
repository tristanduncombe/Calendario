<template>
  <v-container>
    <v-row class="homeImage d-flex">
      <v-container>
        <img
        src='../assets/home_1.jpg'
        class="my-n12 mx-auto justify-center"
        contain
        />    
      </v-container>
    </v-row>
    
    <v-row>
        <!-- <v-col cols="12" class="text-h5 ml-1">
          <div class="text-h5" v-text="greeting + ',' + name + '! ' "></div>
        </v-col>
        <v-col cols="12">
          <div> It's {{timestamp}}</div>
        </v-col> -->
      <v-row class="mainBody ml-1">
         <!-- <v-col cols="12" class="text-h5 ml-1">
          <div class="text-h5" v-text="greeting + ',' + name + '! ' "></div>
        </v-col>
        <v-col cols="12" class="ml-1">
          <div> It's {{timestamp}}</div>
        </v-col> -->
        
        
      </v-row>
      <v-row class="mainBody d-flex">
        <v-col cols="12" class="text-h2">
          home. 
        </v-col>
        <v-row class="colorRow ml-3">
          <v-col cols="12">
          </v-col>
        </v-row>
        <v-col cols="3">
          <v-sheet class="d-flex justify-left">
            <v-img src="https://www.indiewire.com/wp-content/uploads/2016/08/no-face.jpg" width="300" height="300"/>
          </v-sheet>
            
        </v-col>
        <v-cols cols="6">
          <v-sheet class="centerColumn mt-2 ml-12 justify-center" width="600" height="600">
            <v-div class="text-h4 mb-12">
              life right now
            </v-div>
            <v-divider class="my-2"></v-divider>
            <div class="text-h6">
              coming up
            </div>
            <v-calendar
              ref="calendar"
              v-model="value"
            ></v-calendar>

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
          </v-sheet>
        </v-cols>
        <v-col cols="3">

        </v-col>
        <v-col col="12">
          footer!
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    
    data() {
      return {
        greeting: '',
        timestamp: '',
        name: 'Tristan',
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
        {id: 0, name:'INFS3208', type: 'Work', date: new Date(), complete: 1},
        {id: 1, name:'INFS2200', type: 'Work', date: new Date(), complete: 0},
        {id: 2, name:'CSSE2310', type: 'Work', date: new Date(), complete: 0},
        {id: 3, name:'MATH1061', type: 'Work', date: new Date(), complete: 0}]
      }  
    },
    methods: {
      getNow: function() {
        const today = new Date();
        var day = today.getDay();
        if (day == 1) day = "Monday";
        else if (day == 2) day = "Tuesday";
        else if (day == 3) day = "Wednesday";
        else if (day == 4) day = "Thursday";
        else if (day == 5) day = "Friday";
        else if (day == 6) day = "Saturday";
        else day = "Sunday";
        if (today.getMinutes < 10) {
          const time = today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
          this.timestamp = day + ' ' + time;
        } else {
          const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          this.timestamp = day + ' at ' + time;
        }
        if (today.getHours() < 12 && today.getHours() >= 0) {
          this.greeting = "Good Morning"
        } else if (today.getHours() >= 12 && today.getHours() < 17) {
          this.greeting = "Good Afternoon"
        } else {
          this.greeting = "Good Evening"
        }
      }
    },
    created() {
      setInterval(() => {
        this.getNow();
      }, 1000)
    }
  }
  
</script>

<style>
.colorRow {
  background-color: rgb(216, 212, 255);
  width: 400%;
  height: 10px;
}
.mainBody{
    position: absolute;
    top: 500px;
    margin-left: 5%;
    margin-right: 5%;
}
</style>
