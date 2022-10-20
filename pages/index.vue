<template>
  <div class="font-nunito bg-ocre">
    <div class="grid md:grid-flow-col">
      <Header />
      <Separation class="bg-vert" />
      <!--      <Separation class="bg-vertclair" />
      <Separation class="bg-brun" />-->
      <div class="p-8">
        <DecouvrirRestaurant />
        <!--        <Menu class="grow" />-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Organism/Menu.vue'
import Description from '~/components/Organism/Description.vue'
import Separation from '~/components/Molecule/Separation.vue'
import DecouvrirRestaurant from '~/components/Molecule/DecouvrirRestaurant.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { DecouvrirRestaurant, Separation, Description, Menu }
})
</script>
