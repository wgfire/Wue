<template>
  <svg class="icon">
    <use :xlink:href="`#w-${this.icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: "wIcon",
  props: {
    icon: {
      type: String
    },
    url: {
      type: String
    }
  },
  data() {
    return {
      expr: [`#w-${this.icon}`, this.icon]
    };
  },
  computed: {
    getExpr() {
      if (!this.url) {
        return this.expr[0];
      }
      return this.expr[1];
    }
  },
  methods: {
   
  },
  created() {
    
  }
};
</script>

<style scoped lang="stylus">
.icon {
  width: 1em;
  height: 1em;
  margin: 0 3px;
  order: 1;
}
</style>
