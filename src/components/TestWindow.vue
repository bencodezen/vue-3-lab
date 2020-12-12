<script>
export default {}
</script>

<template>
  <div id="test-window"></div>
  <teleport to="#test-window" :disabled="showTeleport">
    <p>Hello teleport!</p>
  </teleport>
</template>

<style>
#test-window {
  border: 2px solid red;
  padding: 2rem;
}
</style>
