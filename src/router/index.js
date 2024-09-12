import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RandomView from "@/views/RandomView.vue";
import GetHolidaysView from "@/views/HolidaysView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import StoreView from "@/views/StoreView.vue";
import ExampleView from "@/views/ExampleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/randomDays',
      name: 'randomDays',
      component: RandomView
    },
    {
      path: '/holidaysView',
      name: 'holidaysView',
      component: GetHolidaysView
    },
    {
      path: '/contactView',
      name: 'contactView',
      component: ContactView
    },
    {
      path: '/storeView',
      name: 'storeView',
      component: StoreView
    },
    {
      path: '/exampleView',
      name: 'exampleView',
      component: ExampleView
    },
  ]
})

export default router
