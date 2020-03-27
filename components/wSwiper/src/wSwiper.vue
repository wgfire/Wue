<template>
  <div class="wSwiper">
    <wSwiperItem  :imglist="imglist"></wSwiperItem>
    <div class="dot">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"wSwiper",
  components:{},
  props:{},
  data(){
    return {
      imglist:[]
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
.wSwiper{
  height 40vh
  width 100%
  position relative
  & .dot {
    position absolute;
    buttom 6%
    left 50%
    transform translate(-50%,-50%)
    li{
      width 8px;
      height 8px;
      border-radius:50%;
      background-color gray;
      cursor pointer
    }
  }
}

.curli{
  background-color red
  }

</style>