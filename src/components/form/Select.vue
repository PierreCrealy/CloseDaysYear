<script setup>
defineProps({
  selectName: {
    type: String,
    required: true
  },
  selectOption: {
    type: Array,
    required: true
  },
})
</script>

<template>

  <div class="sm:col-span-3">
    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">{{ selectName }}</label>
    <div class="mt-2">
      <select name="{{inputName}}" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

        <option disabled selected value="">Choose an option</option>
        <option  v-for="option in selectOption" :key="option" value="{{option}}">{{ option }}</option>

      </select>
    </div>
  </div>

</template>

