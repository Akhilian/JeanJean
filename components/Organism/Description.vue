<template>
  <div class="grid grid-flow-row gap-2">
    <Qui />
    <p class="text-xl">
      "Jeanjean", c'est le moyen pour moi de mettre mon apprentissage au service de ma vision, vous retrouverez ici les belles volailles de mon père accompagnées d'une purée "à la Robuchon" ou encore
      une tarte tatin régressive flambée au calvados de mon grand-père.
    </p>
    <DecouvrirRestaurant />
  </div>
</template>

<script>
import Qui from '~/components/Molecule/Qui'
import DecouvrirRestaurant from '~/components/Molecule/DecouvrirRestaurant'

export default {
  name: 'Description',
  components: { DecouvrirRestaurant, Qui }
}
</script>
