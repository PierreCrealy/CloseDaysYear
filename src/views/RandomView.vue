<template>

  <div class="">
    <h1>Random Holidays View</h1>

    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="fetchData">Get data</button>

  </div>

  <div class="about">

    <pre v-if="days">
      <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Metropole Holidays</h5>
          <RouterLink to="/holidaysView">
            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all
            </a>
          </RouterLink>
        </div>
        <div id="show-data-scroll" class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="(day, index) in days">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="w-8 h-8 rounded-full" src="@/assets/logo.svg" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ index }}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ day }}
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {{ day }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </pre>


  </div>

</template>


<script>
import axios from "axios";
import {RouterLink} from "vue-router";

export default{
  components: {RouterLink},
  data(){
    return {
      days: [],
    };
  },

  // Wait to call method to get data
  methods: {
    fetchData(){

      this.days = axios.get('https://calendrier.api.gouv.fr/jours-feries/metropole.json').then(response => {this.days = response.data})
      console.log(this.days)

      //const response = await fetch('https://randomuser.me/api/');
      //this.data = response.json();

    }
  }

  // Get instantly data from http request
  /*
    mounted() {
      //this.days = axios.get('https://randomuser.me/api/').then(response => {this.days = response.data.results})
      this.days = axios.get('https://calendrier.api.gouv.fr/jours-feries/metropole.json').then(response => {this.days = response.data})
      console.log(this.days)
    },
  */
};

</script>

<style>
@media (min-width: 1024px) {


  #show-data-scroll{
    display: flex;
    align-items: center;

    max-height: 300px;

    overflow: scroll;
  }
}
</style>
