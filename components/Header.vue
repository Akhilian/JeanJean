<template>
  <section class="h-screen flex flex-col justify-end p-16 bg-cover bg-center text-ocre bg-fond-jeanjean">
    <InfosPratiques />
  </section>
</template>

<script>
import InfosPratiques from '@/components/Organism/InfosPratiques'

export default {
  name: 'EnteteAvecReservation',
  components: { InfosPratiques }
}
</script>
