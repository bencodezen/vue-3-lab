<template>
  <div class="container" ref="cont">
    <slot />
  </div>
</template>

<script>
// @ts-nocheck
export default {
  name: 'Container'
}
</script>

<style>
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-items: space-around;
}
.container.column {
  flex-direction: column;
  justify-items: flex-start;
}
</style>
