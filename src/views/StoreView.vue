<script setup>

import { useItemsStore } from '@/stores/items.js'
import ListItem from "@/components/useful/ListItem.vue";
const store = useItemsStore();

console.log(store.items);

</script>

<template>


  <!-- Form for add new item -->
  <form @submit.prevent="addItem">

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

      <!-- Name -->
      <div class="sm:col-span-2">
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">
          <span class="text-sm text-gray-600">Name : {{name}}</span>
        </label>
        <div class="mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">closeDaysYear.fr/</span>
            <input v-model="name" type="text" name="name" id="name" autocomplete="" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="">
          </div>
        </div>
      </div>

      <!-- Count -->
      <div class="sm:col-span-2">
        <label for="count" class="block text-sm font-medium leading-6 text-gray-900">
          <span class="text-sm text-gray-600">Count : {{count}}</span>
        </label>
        <div class="mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">closeDaysYear.fr/</span>
            <input v-model="count" type="number" name="count" id="count" autocomplete="" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="">
          </div>
        </div>
      </div>

      <!-- Price -->
      <div class="sm:col-span-2">
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">
          <span class="text-sm text-gray-600">Price : {{price}}</span>
        </label>
        <div class="mt-2">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">closeDaysYear.fr/</span>
            <input v-model="price" type="number" name="price" id="price" autocomplete="" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="">
          </div>
        </div>
      </div>

    </div>

    <!-- Validation button -->
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add new item
        </button>
      </div>
    </div>

  </form>



  <!-- Increment +1 for count of first item -->
  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

    <button @click="store.increment(0)" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Send +1 ({{store.items[0].count}}) for {{store.items[0].name}}

    </button>
  </div>



  <!-- Display all store items -->
  <dl class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">

      <ListItem v-for="item in store.items" :key="item" v-bind:title="item.name" v-bind:text="item.count"></ListItem>

    </dl>
  </dl>


</template>

<script>

import {useItemsStore} from "@/stores/items.js";

export default{
  data(){
    return {
      count : null,
      name : null,
      price : null,
    };
  },
  methods: {

    //function to add a new item into store
    addItem(){
      const store = useItemsStore()
      const newItem = {
        count : this.count,
        name : this.name,
        price : this.price,
      };

      console.log(newItem);

      store.add(newItem);
    }
  }
};

</script>
