<template>
  <div>
    <strong>{{ nom }}</strong>
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
