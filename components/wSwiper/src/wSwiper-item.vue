<template>
  <div class="swiper-item">
      <img src="../../../public/1.jpg"/>
  </div>
</template>

<script>
export default {
  name:"wSwiperItem",
  components:{},
  props:{
    imglist:{
      type:Array
    }
  },
  data(){
    return {
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
.swiper-item {
  width: 100%;
  height: 100%;
  z-index: 9999;
 
}
.swiper-item img {
  width: 100%;
  height:inherit;
}
</style>