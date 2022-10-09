<template>
  <section class="h-screen flex p-16">
    <div class="grow flex flex-col bg-cover bg-center bg-fond-header">
      <div class="m-auto">
        <NomDuRestaurant />
      </div>
      <div class="text-center py-16">
        <BoutonReservation />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 bg-white p-8">
        <AdresseRestaurant />
        <HorairesOuverture />
      </div>
    </div>
  </section>
</template>

<script>
import AdresseRestaurant from '~/components/Molecule/Adresse'
import HorairesOuverture from '~/components/Molecule/HorairesOuverture'
import BoutonReservation from '~/components/Molecule/BoutonReservation'
import NomDuRestaurant from '~/components/Atom/NomDuRestaurant'
export default {
  name: 'EnteteAvecReservation',
  components: { NomDuRestaurant, BoutonReservation, HorairesOuverture, AdresseRestaurant }
}
</script>
