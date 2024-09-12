<script setup>

import TimeLine from "@/components/useful/TimeLine.vue";

// List of all areas for http request
const listAreas = [
    'alsace-moselle',
    'guadeloupe',
    'guyane',
    'la-reunion',
    'martinique',
    'mayotte',
    'metropole',
    'nouvelle-caledonie',
    'polynesie-francaise',
    'saint-barthelemy',
    'saint-martin',
    'saint-pierre-et-miquelon',
    'wallis-et-futuna'
];
</script>


<template>

  <form @submit.prevent="submit">

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

      <!-- Select -->
      <div class="sm:col-span-3">
        <label for="area" class="block text-sm font-medium leading-6 text-gray-900">Zone : {{ area }}</label>
        <div class="mt-2">
          <select name="area" v-model="area" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

            <option disabled selected value="">Choose an option</option>
            <option  v-for="option in listAreas" :key="option" v-bind:value="option">{{ option }}</option>

          </select>
        </div>
      </div>

      <!-- Input number -->
      <div class="sm:col-span-3">
        <label for="year" class="block text-sm font-medium leading-6 text-gray-900">
          <span class="text-sm text-gray-600">Year : {{ year }}</span>
        </label>
        <div class="mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">closeDaysYear.fr/</span>
            <input type="number" name="year" v-model="year" id="year" autocomplete="" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="">
          </div>
        </div>
      </div>

      <!-- Validation button -->
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Send
      </button>

    </div>

  </form>


  <!-- List display -->
  <div class="mt-14 mb-10">
    <ol class="items-center sm:flex overflow-x-scroll">
      <TimeLine v-for="(day, index) in days" :key="day" v-bind:title="index" v-bind:text="day"  />
    </ol>
  </div>

</template>


<script>
import axios from "axios";

export default{
  data(){
    return {
      days : [],
      area : null,
      year : null,
    };
  },

  methods: {
    submit(){

      console.log(this.area);
      console.log(this.year);

      // Build url with available information
      let url =  ``;

      if(!this.area){
        url =  `https://calendrier.api.gouv.fr/jours-feries/metropole.json`;
      }

      if(this.area && this.year){
        url =  `https://calendrier.api.gouv.fr/jours-feries/${this.area}/${this.year}.json`;
      }

      if(this.area && !this.year){
        url =  `https://calendrier.api.gouv.fr/jours-feries/${this.area}.json`;
      }

      console.log(url);

      // Get response from http request
      this.days = axios.get(url).then(response => {this.days = response.data})
      console.log(this.days)

    }
  },
};

</script>

