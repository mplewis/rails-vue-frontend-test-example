<template>
  <div id="app">
    <p>{{ message }}</p>
    <child name="wonderful Rails user" />
  </div>
</template>

<script>
import Child from './child'

export default {
  components: {
    child: Child
  },
  data: function () {
    return {
      message: "Hello! This is Vue. My child component is here:"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
