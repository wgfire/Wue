<template>
  <div class="wSwiper">
    <wSwiperItem :imglist="imglist" :listIndex="listIndex" ref="wSwiperItem"></wSwiperItem>
    <div class="dot">
      <ul>
        <li
          v-for="(value,index) in imglist"
          :key="index"
          :class="index ==listIndex?'curli':''"
          @click="changeIndex(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "wSwiper",
  components: {},
  provide: {},
  props: {},
  data() {
    return {
      imglist: ["/1.jpg", "/2.jpg", "/1.jpg", "/2.jpg"],
      listIndex: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    changeIndex(index) {
      this.listIndex = index;
    }
  },
  created() {},
  mounted() {
    setInterval(() => {
      if (this.listIndex > this.imglist.length) {
        this.listIndex = 0;
      }
      this.$refs.wSwiperItem.changeIndex(this.listIndex++);
    }, 10000);
  }
};
</script>
<style lang="stylus" scoped>
.wSwiper {
  height: 40vh;
  width: 100%;
  border: 1px solid gray;
  position: relative;
  overflow: hidden;

  & .dot {
    position: absolute;
    left: 50%;
    bottom: 6%;
    z-index: 999;
    transform: translate(-50%, -50%);

    li {
      display: inline-block;
      margin-left: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #b8e9ea;
      cursor: pointer;
    }
  }
}

.curli {
  background-color: #1ad0b3 !important;
}
</style>