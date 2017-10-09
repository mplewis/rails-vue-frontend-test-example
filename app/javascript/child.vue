<template>
  <p><em>{{ message }}</em></p>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
  },
  data: function() {
    return {
      message: `Hello, ${this.name}! I'm the child component.`
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
