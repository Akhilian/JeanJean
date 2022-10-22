<template>
  <div class="font-cantata bg-ocre text-vert">
    <div class="flex flex-col-reverse md:flex-row border-solid border-t-8 border-white h-screen md:p-8">
      <div class="basis-1/3 bg-cover bg-fond-jeanjean bg-right-top border-solid md:border-8 shadow-xl" />
      <div class="basis-2/3 text-center p-8 grid gap-8 max-w-xl m-auto">
        <img src="/photos/logo.png" alt="JeanJean" class="h-44 md:h-60 m-auto">
        <h2 class="font-cantata font-semibold text-3xl tracking-wide leading-6">
          découvrez un bistrot moderne, au cœur du quartier Garibaldi.
        </h2>
        <h3 class="font-medium text-2xl text-xl">
          Avec un menu rythmé par les saisons, les plats sont conçus sous vos yeux à partir de produits bruts.
        </h3>
        <HorairesOuverture />
        <div>
          Reserver
          <a href="tel:+33102030405">Par téléphone</a>
          <a href="mailto:xxxx@xx.xx">Par email</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HorairesOuverture from '~/components/Molecule/HorairesOuverture.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HorairesOuverture }
})
</script>
