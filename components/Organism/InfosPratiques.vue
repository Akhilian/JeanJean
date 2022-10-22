<template>
  <div class="border-solid border border-vert backdrop-blur-md p-4">
    <AdresseRestaurant />
    <HorairesOuverture />
  </div>
</template>
<script>
import AdresseRestaurant from '@/components/Molecule/Adresse'
import HorairesOuverture from '@/components/Molecule/HorairesOuverture'

export default {
  name: 'InfosPratiques',
  components: {
    AdresseRestaurant,
    HorairesOuverture
  }
}
</script>
