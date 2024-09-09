<script setup>
import { ref } from 'vue'

const zone = ref('')
const annee = ref('')
</script>

<template>

  <div class="about">
    <h1>Contact View</h1>


    <div class="form">

      <select name="zone" ref="zone">
        <option disabled value="">Choisissez une zone</option>
        <option value="metropole">Metropole</option>
        <option value="saint-martin">Saint-martin</option>
        <option value="guadeloupe">Guadeloupe</option>
      </select>

      <input type="number" name="annee" ref="annee" placeholder="Enter a year" />

      <!--
      <p>Année {{annee}}</p>
      <input v-model.number="annee" type="number" name="annee" ref="annee" placeholder="Enter a year" />
      -->

      <button @click="checkForm()">Envoyer la demande</button>
    </div>

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
      days : [],
    };
  },

  // Wait to call method to get data
  methods: {
    checkForm(){

      let zone = null;
      this.$refs.zone.value ? zone = this.$refs.zone.value : zone = false;

      let annee = null;
      this.$refs.annee.value ? annee = this.$refs.annee.value : annee = false;

      console.log(annee);
      console.log(zone);

      let url =  'https://calendrier.api.gouv.fr/jours-feries/';
      console.log(url);

      if(zone && annee){
        url += zone+'/'+annee+'.json';
      }

      if(zone && !annee){
        url += zone+'.json';
      }

      this.days = axios.get(url).then(response => {this.days = response.data})
      console.log(this.days)

    }
  },
};

</script>

<style>
@media (min-width: 1024px) {
  .show-data-scroll{

    max-width: 80%;
    max-height: 200px;

    overflow: scroll;
  }
}
</style>
