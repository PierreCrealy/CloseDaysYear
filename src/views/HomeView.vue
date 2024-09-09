<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import Items from "@/components/Items.vue";
import UserProfile from "@/components/UserProfile.vue";
import MainMenu from "@/components/Menu.vue";

defineProps({
  name: {
    type  : String,
    required: true
  },

})

</script>

<template>
  <main>
    <UserProfile name="John Smith"/>
    <Items />
  </main>
</template>
