<template>
  <div>
    <Plat nom="Meat Ball" description="Lorem ipsum sit dolor amet" prix="20€" />
    <Plat nom="Poisson du jour" description="amet ipsum sit dolor " prix="17€" />
    <Plat nom="Poisson du jour" description="amet sit dolor ipsum ipsum ipsum" prix="16.5€" />
  </div>
</template>

<script>
import Plat from '~/components/Molecule/Plat'

export default {
  name: 'LaCarte',
  components: { Plat }
}
</script>
