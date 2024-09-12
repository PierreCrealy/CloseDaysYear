<script setup>

import {RouterView} from 'vue-router'
import MainMenu from "@/components/Menu.vue";

</script>

<template>
  <MainMenu></MainMenu>

  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <div>

        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Welcome</h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Close Days / Year.</p>
        </div>

        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <!-- Place where display view content -->
           <RouterView/>
          </dl>
        </div>

      </div>

    </div>
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
