<template>
  <div class="text-vert font-fraunces bg-ocre">
    <div
      class="
      flex flex-col md:flex-row
      h-screen
      border-solid border-t-8 border-white
      "
    >
      <!-- Colonnes -->
      <div class="basis-1/2 bg-ocre flex flex-col">
        <DescriptionBistrot class="p-8" />

        <MenuBistrot class="mx-auto" />

        <!-- Bouton de réservation -->
        <BoutonReservation />
      </div>
      <div
        class="
        basis-1/2 py-24 md:py-0
        grid justify-items-start
        bg-cover bg-fond-jeanjean bg-right-top"
      >
        <AdresseEtDetails />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BoutonReservation from '~/components/Molecule/BoutonReservation.vue'
import AdresseEtDetails from '~/components/Molecule/AdresseEtDetails.vue'
import DescriptionBistrot from '~/components/Organism/DescriptionBistrot.vue'
import MenuBistrot from '~/components/Organism/MenuBistrot.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { DescriptionBistrot, AdresseEtDetails, BoutonReservation, MenuBistrot }
})
</script>
