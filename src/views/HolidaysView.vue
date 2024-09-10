<script setup>
import { ref } from 'vue'
import ListItem from "@/components/useful/ListItem.vue";
import TimeLine from "@/components/useful/TimeLine.vue";

const area = ref('');
const year = ref('');

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


  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

    <!-- Select -->
    <div class="sm:col-span-3">
      <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Zone</label>
      <div class="mt-2">
        <select name="area" ref="area" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

          <option disabled selected value="">Choose an option</option>
          <option  v-for="option in listAreas" :key="option" v-bind:value="option">{{ option }}</option>

        </select>
      </div>
    </div>

    <!-- Input number -->
    <div class="sm:col-span-3">
      <label for="year" class="block text-sm font-medium leading-6 text-gray-900">
        <span class="text-sm text-gray-600">Year</span>
      </label>
      <div class="mt-2">
        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">closeDaysYear.fr/</span>
          <input type="number" name="year" ref="year" id="year" autocomplete="" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="">
        </div>
      </div>
    </div>

    <!-- Button submit -->
    <button @click="checkForm()" type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Send
    </button>

  </div>

  <!-- List display 2 -->
  <div class="mt-10 mb-10">
    <ol class="items-center sm:flex overflow-x-scroll">
      <TimeLine v-for="(day, index) in days" :key="day" v-bind:title="index" v-bind:text="day"  />
    </ol>
  </div>



  <!-- List display 1 -->
  <div class="grid justify-items-stretch">
    <div class="px-4 sm:px-0">
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        ...
      </p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">

        <ListItem v-for="(day, index) in days" :key="day" v-bind:title="index" v-bind:text="day"  />

      </dl>
    </div>
  </div>

</template>


<script>
import axios from "axios";

export default{
  data(){
    return {
      days : [],
    };
  },

  // Wait to call method to get data
  methods: {
    checkForm(){

      let area = null;
      this.$refs.area.value ? area = this.$refs.area.value : area = false;

      let year = null;
      this.$refs.year.value ? year = this.$refs.year.value : year = false;

      console.log(year);
      console.log(area);

      let url =  ``;

      if(!area){
        url =  `https://calendrier.api.gouv.fr/jours-feries/metropole.json`;
      }

      if(area && year){
        url =  `https://calendrier.api.gouv.fr/jours-feries/${area}/${year}.json`;
      }

      if(area && !year){
        url =  `https://calendrier.api.gouv.fr/jours-feries/${area}.json`;
      }

      console.log(url);

      this.days = axios.get(url).then(response => {this.days = response.data})
      console.log(this.days)

    }
  },
};

</script>

