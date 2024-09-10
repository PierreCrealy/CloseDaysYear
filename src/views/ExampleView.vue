<script setup>
import TimeLine from "@/components/useful/TimeLine.vue";
import { useItemsStore } from '@/stores/items.js'
const store = useItemsStore();
</script>

<template>

    <ol class="items-center sm:flex overflow-x-scroll">
      <TimeLine v-for="(day, index) in days" :key="day" v-bind:title="index" v-bind:text="day"  />
    </ol>







  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

    <!-- Input number -->
    <div class="sm:col-span-3">
      <label for="year" class="block text-sm font-medium leading-6 text-gray-900">
        <span class="text-sm text-gray-600">Name : {{name}}</span>
      </label>
      <div class="mt-2">
        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">closeDaysYear.fr/</span>
          <input v-model="name" type="text" name="name" id="name" autocomplete="" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="">
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button @click="store.setName(name)" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Send new name
      </button>
    </div>

  </div>




  <button @click="store.increment()" type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Send +1 ({{store.count}}) for {{store.name}}
  </button>





</template>

<script>
import axios from "axios";
import {useItemsStore} from "@/stores/items.js";

export default{
  data(){
    return {
      days: [],
      name : null,
    };
  },
  methods: {

  },

  // Get instantly data from http request

  mounted() {
    const url =  `https://calendrier.api.gouv.fr/jours-feries/metropole.json`;

    this.days = axios.get(url).then(response => {this.days = response.data})
    console.log(this.days)
  },

};

</script>

<style>

</style>
