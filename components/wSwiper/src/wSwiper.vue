<template>
  <div class="wSwiper">
    <wSwiperItem :imglist="imglist" ref="wSwiperItem" id="wSwiperid" ></wSwiperItem>
    <div class="dot">
      <ul>
        <li
          v-for="(value,index) in imglist"
          :key="index"
          :class="index ==listIndex?'curli':''"
          @click="changeIndex($event,index)"
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
      listIndex: 0,
      timeOut: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    async changeIndex(ev, index) {
      ev.stopPropagation();
      this.listIndex = index;
      this.stopRun(); // 先停止
      await this.$refs.wSwiperItem.changeIndex(index);

      this.autoRun(index);
    },
    autoRun(index) {
      console.log("运行");
      this.timeOut && this.stopRun();
      let self = this;
      this.listIndex = index || this.listIndex;
      this.timeOut = setInterval(async () => {
        this.listIndex++;
        if (this.listIndex > this.imglist.length - 1) {
          this.listIndex = 0;
        }
        console.log(this.listIndex);
        await self.$refs.wSwiperItem.changeIndex(this.listIndex);
      }, 2500);
    },

    stopRun() {
      console.log("停止");
      clearInterval(this.timeOut);
      this.timeOut = null;
    }
  },
  created() {},
  mounted() {
    // 节流一下
    wSwiperid.addEventListener(
      "mouseover",
      this.$tool.debounce(this.stopRun.bind(this), 2000, true)
    );
    wSwiperid.addEventListener(
      "mouseleave",
      this.$tool.debounce(this.autoRun.bind(this, this.listIndex), 2000, true)
    );
    console.log(this);
    
    this.autoRun(0);
  }
};
</script>
<style lang="stylus" scoped>
.wSwiper {
  height: 40vh;
  width: 100%;
  border: 1px solid #dae2e4;
  box-shadow: 2px -2px 4px 1px #d1e5ec;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  & .dot {
    display: flex;
    justify-content: center;

    li {
      display: inline-block;
      margin-left: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80));
      cursor: pointer;
    }
  }
}

.curli {
  background: linear-gradient(to right, rgb(54, 209, 220), rgb(91, 134, 229)) !important;
}
</style>