<template>

  <div class="about">
    <h1>Contact View</h1>

    <div id="app">
      <form>

        <p v-if="errors.length">
          <b>Veuillez corrigé les erreurs suivantes:</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>Nom : {{name}}</p>
        <textarea v-model="name"  name="name"  placeholder="Entrer votre nom" />

        <p>Message {{email}}</p>
        <textarea v-model="email"  name="email"  placeholder="Entrer votre mail" />

        <p>Message</p>
        <textarea v-model="message"  name="message"  placeholder="Entrer votre message" />


        <button type="submit" @click="submit">Envoyer la demande</button>
      </form>
    </div>

  </div>

</template>


<script>

import MainMenu from "@/components/Menu.vue";

export default{
  components: {MainMenu},
  el: '#app',
  data() {
    return{
      errors: [],
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    submit() {
      this.errors = [];

      console.log('Nom', this.name);
      console.log('Email', this.email);
      console.log('Message', this.message);

      if(!this.name){
        this.errors.push('Nom nécessaire.');
      }
      if(!this.email){
        this.errors.push('Email nécessaire.');
      }
      if(!this.message){
        this.errors.push('Message nécessaire.');
      }

      if(!this.errors.length){
        this.$router.push('/holidaysView');
        return true;
      }

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
