<template>



  <div class="grid justify-items-stretch">


    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-gray-900">Random Holidays</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="fetchData">
          Get random holidays
        </button>
      </p>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        {{year}}.
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
import ListItem from "@/components/useful/ListItem.vue";

export default{
  components: {ListItem},
  data(){
    return {
      days: [],
      year: null,
    };
  },

  // Wait to call method to get data
  methods: {
    fetchData(){

    /*
      const zones = [
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

        let rdmNumber = Math.floor(Math.random() * (zones.length - 1) ) + 1;

        let zoneRdm = zones[rdmNumber];

        this.zone = zoneRdm;
        const url =  `https://calendrier.api.gouv.fr/jours-feries/${zoneRdm}.json`;
      */


      this.year =  Math.floor(Math.random() * (2028 - 2010) + 2010 ) ;
      const url =  `https://calendrier.api.gouv.fr/jours-feries/metropole/${this.year}.json`;

      this.days = axios.get(url).then(response => {this.days = response.data})
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
