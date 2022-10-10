<template>
  <v-container>
    <v-row class="homeImage">
      <img
        src='../assets/home_1.jpg'
        class="my-n12"
        contain
        />      
    </v-row>
    <div>Good Evening, Tristan</div>
        <div>{{today}}</div>
    <v-row class="imageText">
        
    </v-row>

    <div class="mainBody my-12">
      <v-row class="text-h2 ml-1">
        home. 
      </v-row>
      <v-row >
        <v-col class="leftColumn">
          <v-img src="https://media3.giphy.com/media/Sp7IpE95BqzOU/giphy.gif" max-height="300" max-width="300"/>
          <div class="courses mt-6 text-h4 font-weight-light">
            <div class="ml-2">
              To do:
            </div>  
          </div>
          <div v-for="course in courses" :key="course.id" class="my-2 ml-4 font-weight-light text-decoration-underline">
            {{course.name}}
          </div>
        </v-col>
        <v-col cols="4">
          <v-row class="text-h2 ml-1">
            home. 
          </v-row>
        </v-col>
        
      </v-row>
    </div>
      
      
    
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        today: new Date().toLocaleString(),
        courses: [
        {id: 0, name:'INFS3208'},
        {id: 1, name:'INFS2200'},
        {id: 2, name:'CSSE2310'},
        {id: 3, name:'MATH1061'}]
      }  
    }
  }
  
</script>

<style>
.homeImage {
    position: absolute;
    top: -500px;

}

.imageText {
    text-align: center;
} 
.mainBody{
    position: absolute;
    top: 500px;
    margin-left: 5%;
    margin-right: 5%;
}
.courses{
    background-color: rgb(216, 212, 255);
}
</style>
