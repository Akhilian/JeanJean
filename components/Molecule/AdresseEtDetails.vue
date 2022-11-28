<template>
  <div class="p-8 bg-brunFonce text-white flex flex-col gap-4 md:gap-8">
    <div>
      <TitreInfosPratiques>
        Adresse
      </TitreInfosPratiques>
      <DetailsInfosPratiques>
        37 Avenue Du Capitaine Glarner<br>
        93400 Saint-Ouen Sur Seine
      </DetailsInfosPratiques>
    </div>
    <div>
      <TitreInfosPratiques>
        Horaires
      </TitreInfosPratiques>
      <DetailsInfosPratiques>
        Du lundi au vendredi<br>
        12h-14h30 / 18h-22h00
      </DetailsInfosPratiques>
    </div>
    <div>
      <TitreInfosPratiques>
        Contact
      </TitreInfosPratiques>
      <DetailsInfosPratiques>
        01.82.02.26.83<br>
        contact@jeanjeanrestaurant.fr
      </DetailsInfosPratiques>
    </div>
  </div>
</template>
<script lang="ts">
import TitreInfosPratiques from '~/components/Molecule/TitreInfosPratiques.vue'
import DetailsInfosPratiques from '~/components/Molecule/DetailsInfosPratiques.vue'

export default {
  name: 'AdresseEtDetails',
  components: { DetailsInfosPratiques, TitreInfosPratiques }
}
</script>
