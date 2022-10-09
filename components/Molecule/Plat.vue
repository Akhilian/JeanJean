<template>
  <div>
    <h1>{{ nom }}</h1>
    <div>{{ description }}</div>
    <div>{{ prix }}</div>
  </div>
</template>
<script>
export default {
  name: 'Plat',
  props: ['nom', 'prix', 'description']
}
</script>
