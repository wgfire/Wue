<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wButtonGroup"
};
</script>

<style scoped lang="stylus">
.w-button-group {
  display: inline-flex;
  vertical-align: middle;

  .wButton {
    margin: 0px;
    border-radius: 0px;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>