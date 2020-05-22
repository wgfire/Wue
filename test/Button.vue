<template>
  <div class="test_button">
       <w-button icon="caidan" iconpostion="iconleft">建军节</w-button>
    <w-button
      icon="qiyijiandangjie"
      iconpostion="iconright"
      :loading="loading"
      @click="loading = !loading"
    >建军节</w-button>
    <w-button-group>
      <w-button icon="qiyijiandangjie" iconpostion="iconleft">建军节</w-button>
    </w-button-group>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        loading: false
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
.test_button{}
</style>