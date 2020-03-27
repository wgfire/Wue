<template>
  <button class="wButton" :class="iconpostion" @click="$emit('click')">
    <!-- <svg class="icon" v-if="icon && !loading ">
      <use :xlink:href="`#w-${icon}`"></use>
    </svg>-->
    <w-icon :icon="icon" v-if="icon && !loading"></w-icon>
    <w-icon icon="jiazai" v-if="loading" class="loading icon"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "wButton",
  props: {
    icon: {
      type: String
    },
    iconpostion: {
      type: String,
      default: "iconright",
      validator(value) {
        return value == "iconleft" || value == "iconright";
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import './wButton.styl';

@keyframes roate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: roate linear 0.5s infinite;
}
</style>
