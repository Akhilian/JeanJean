<template>
  <section class="h-screen flex flex-col justify-end p-16 bg-cover bg-center text-ocre bg-fond-jeanjean">
    <!--    <NomDuRestaurant class="place-self-start" />-->
    <InfosPratiques />
  </section>
</template>

<script>
import NomDuRestaurant from '~/components/Atom/NomDuRestaurant'
import InfosPratiques from '@/components/Organism/InfosPratiques'

export default {
  name: 'EnteteAvecReservation',
  components: { InfosPratiques, NomDuRestaurant }
}
</script>
