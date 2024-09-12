<template>

  <!-- Contact form  -->
  <form @submit.prevent="submit">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>

        <!-- Display errors if there any one -->
        <p class="mt-1 text-sm leading-6 text-gray-600">
          <span v-if="errors.length">
            <b>Please, correct error(s).</b>
            <ul>
              <li v-for="error in errors" :key="error" >{{ error }}</li>
            </ul>
          </span>
        </p>

        <!-- Username -->
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">
              <span class="text-sm text-gray-600">Username : {{username}}</span>
            </label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">closeDaysYear.fr/</span>
                <input v-model="username" type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="">
              </div>
            </div>
          </div>

          <!-- Mail -->
          <div class="sm:col-span-3">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
              Email address : <span class="text-sm text-gray-600"> {{email}}</span>
            </label>
            <div class="mt-2">
              <input v-model="email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>

        <!-- Message -->
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-full">
            <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Message </label>
            <div class="mt-2">
              <textarea v-model="message" id="message" name="message" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your problem.</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Validation button -->
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Send
      </button>
    </div>

  </form>

</template>


<script>
export default{
  el: '#app',
  data() {
    return{
      errors: [],
      username: null,
      email: null,
      message: null,
    }
  },
  methods: {
    submit() {

      console.log('Username', this.username);
      console.log('Email', this.email);
      console.log('Message', this.message);

      // Check all fields
      if(!this.username){
        this.errors.push('Username required.');
      }
      if(!this.email){
        this.errors.push('Email required.');
      }
      if(!this.message){
        this.errors.push('Message required.');
      }

      // If no errors
      if(!this.errors.length){
        this.$router.push('/contactView');
        return true;
      }


    }
  },
};

</script>

