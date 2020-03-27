<template>
  <svg class="icon">
    <use :xlink:href="`#w-${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: "wIcon",
  props: ["icon"]
};
</script>

<style scoped lang='stylus'>
.icon {
  width: 1em;
  height: 1em;
  margin: 0 3px;
  order: 1;
}
</style>