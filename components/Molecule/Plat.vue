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
  props: {
    nom: { type: String, required: true },
    prix: { type: String, required: true },
    description: { type: String, required: true }
  }
}
</script>
