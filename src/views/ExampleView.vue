<script setup>
import TimeLine from "@/components/useful/TimeLine.vue";
</script>


<!-- Testing area -->
<template>

  <!-- Timeline display try -->
  <ol class="items-center sm:flex overflow-x-scroll">
    <TimeLine v-for="(day, index) in days" :key="day" v-bind:title="index" v-bind:text="day"  />
  </ol>

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
  mounted() {
    const url =  `https://calendrier.api.gouv.fr/jours-feries/metropole.json`;

    this.days = axios.get(url).then(response => {this.days = response.data})
    console.log(this.days)
  },

};

</script>
