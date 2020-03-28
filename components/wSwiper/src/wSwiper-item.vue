<template>
  <div class="swiper-item">
    <ul class="swiper-ul">
      <li v-for="(value,index) in pre" :key="index" :class="index==0?'leave':'enter'">
        <img :src="value" />
      </li>
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
    }
  },
  data() {
    return {
      imgArr: this.imglist,
      listIndex: 0, //当前的索引
      pre: [], // 向上遍历的数组
      next: [], // 向下遍历的数组
      count: 0,
      start: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    changeIndex(index) {
      console.log(index, this.listIndex);
      this.getPre(index);
      this.listIndex = index;
      this.start = false
    },
    getPre(index) {
      if (index < 0) {
        index = this.imgArr.length - 1;
      } else if (index > this.imgArr.length - 1) {
        index = 0;
      }
      this.pre = [this.imgArr[this.listIndex],this.imgArr[index]];
      console.log("翻页", this.pre);
     
    },
    getNext(index) {
      this.next = [this.imgArr[this.listIndex], this.imgArr[index]];
      console.log("向上翻页", this.next);
    }
  },
  created() {},
  mounted() {
    this.pre = this.imgArr.slice(0, 2);
    console.log(this.imgArr, this.pre);
  }
};
</script>
<style lang="stylus" scoped>
.swiper-item {
  width: 100%;
  height: 100%;
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

// .swiper-ul li:not(:first-child) {
// right: -65%;
// }
.leave {
  animation: leave 2s infinite;
}

@keyframes leave {
  to {
    transform: translateX(-100%);
  }

  from {
    transform: translateX(10%);
  }
}

.enter {
  animation: enter 3s infinite;
  animation-delay 1s
  right: 0px;
}

@keyframes enter {
  to {
    transform: translateX(10%);
  }

  from {
    transform: translateX(100%);
  }
}
</style>