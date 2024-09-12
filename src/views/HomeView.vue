<script setup>
import FeatureSection from "@/components/useful/FeatureSection.vue";
import PricingSection from "@/components/useful/PricingSection.vue";

const fakeText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione";
</script>

<template>

  <FeatureSection
      v-bind:third-sec-text="fakeText"
      third-sec-title="Section One"

      v-bind:second-sec-text="fakeText"
      second-sec-title="Section Two"

      v-bind:first-sec-text="fakeText"
      first-sec-title="Section Three"

      v-bind:text="fakeText"
      sub-title="Sub title"
      main-title="Main title"
  />

  <PricingSection
      money="EUR" price="349€ "

      included-four="Included Four"
      included-three="Included Three"
      included-two="Included Two"
      included-one="Included One"

      v-bind:card-description="fakeText"
      card-title="Card title"

      v-bind:description="fakeText"
      title="Main title"
  />


</template>
