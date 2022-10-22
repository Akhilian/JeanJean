<template>
  <div class="bg-ocre">
    <div class="grid md:grid-flow-col">
      <Header />
      <Separation class="bg-vert" />
      <div class="p-8">
        <DecouvrirRestaurant />
        <HorairesOuverture />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Separation from '~/components/Molecule/Separation.vue'
import DecouvrirRestaurant from '~/components/Molecule/DecouvrirRestaurant.vue'
import HorairesOuverture from '~/components/Molecule/HorairesOuverture.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HorairesOuverture, DecouvrirRestaurant, Separation }
})
</script>
