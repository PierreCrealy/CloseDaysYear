<template>
  <div class="about">
    <h1>Random Holidays View</h1>


    <button @click="fetchData">Get data</button>
    <br>

    <div class="show-data-scroll">

      <pre v-if="days">
        <ul>
          <li v-for="(day, index) in days">
            {{index}} : {{day}}
          </li>
        </ul>
      </pre>

    </div>
  </div>

</template>


<script>
import axios from "axios";

export default{
  data(){
    return {
      days: [],
    };
  },

  // Get instantly data from http request
  /*
    mounted() {
      //this.days = axios.get('https://randomuser.me/api/').then(response => {this.days = response.data.results})
      this.days = axios.get('https://calendrier.api.gouv.fr/jours-feries/metropole.json').then(response => {this.days = response.data})
      console.log(this.days)
    },
  */

  // Wait to call method to get data
  methods: {
    fetchData(){

      this.days = axios.get('https://calendrier.api.gouv.fr/jours-feries/metropole.json').then(response => {this.days = response.data})
      console.log(this.days)

      //const response = await fetch('https://randomuser.me/api/');
      //this.data = response.json();

    }
  }
};

</script>

<style>
@media (min-width: 1024px) {


  .show-data-scroll{
    display: flex;
    align-items: center;

    max-width: 80%;
    max-height: 200px;

    overflow: scroll;
  }
}
</style>
