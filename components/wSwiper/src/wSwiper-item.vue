<template>
  <div class="swiper-item">
    <ul class="swiper-ul">
      <transition :name="`slide-${type}`">
        <li v-if="show" :key="1">
          <img :src="imgArr[nextIndex]" />
        </li>
      </transition>
      <transition :name="`slide-${type}-old`">
        <li v-if="!show" :key="2">
          <img :src="imgArr[nextIndex]" />
        </li>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  name: "wSwiperItem",
  components: {},
  props: {
    imglist: {
      type: Array
    },
    type: {
      type: String,
      default: "trans"
    }
  },
  data() {
    return {
      imgArr: this.imglist,
      nextIndex: 0, //下一个的索引值
      show: true,
      timeOut: null // 定时器
    };
  },
  watch: {},
  computed: {},
  methods: {
    async changeIndex(index) {
      await this.moveImg(index);
    },
    moveImg(index) {
      this.show = false; // 切换
      setTimeout(() => {
        this.show = true;
        this.nextIndex = index;
      }, 10);
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {
    console.log(this);
  }
};
</script>
<style lang="stylus" scoped>
.swiper-item {
  width: 100%;
  height: calc(100% - 20px);
  z-index: 9999;
  display: flex;
}

.swiper-ul {
  width: 100%;
  height: 100%;
  position: relative;

  li {
    position: absolute;
    height: inherit;
    width: 100%;

    & img {
      width: 100%;
      height: inherit;
    }
  }
}

.swiper-ul li:nth-child(1) {
  z-index: 99;
}

.slide-trans-enter {
  opacity: 0.3;
  transform: translateX(50%);
}

.slide-trans-enter-active {
  transition: all 1s ease-in;
}

.slide-trans-old-leave {
  opacity: 0.3;
}

.slide-trans-old-leave-active {
  opacity: 0;
  transition: all 2s;
  transform: translateX(-100%);
}

.slide-down-enter {
  opacity: 0.3;
  transform: translateY(-50%);
}

.slide-down-enter-active {
  transition: all 1s ease-in;
}

.slide-down-old-leave {
  opacity: 0.3;
}

.slide-down-old-leave-active {
  opacity: 0;
  transition: all 2s;
  transform: translateY(100%);
}
</style>