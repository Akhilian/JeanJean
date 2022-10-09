<template>
  <div class="font-serif">
    <div class="grid grid-cols-2">
      <div>
        <Header />
        <Footer />
      </div>
      <Menu />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Organism/Menu.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Menu }
})
</script>
