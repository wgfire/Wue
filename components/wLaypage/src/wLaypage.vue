<template>
  <div class="wLaypage">
    <section class="container">
      <div class="row">
        <h1>{{rendData.title}}</h1>
      </div>

      <div class="box-paginacao">
        <!-- <input type="radio" name="input-paginacao" id="paginacao1" checked />
        <input type="radio" name="input-paginacao" id="paginacao2" />
        <input type="radio" name="input-paginacao" id="paginacao3" />
        <input type="radio" name="input-paginacao" id="paginacao4" /> -->
        <div class="box-vitrines">
          <ul :style="ulStyle">
            <div
              v-for="item in rendData.page"
              :key="item.index"
              class="vitrine"
            >
              <h2>{{ item.pageTitle }}</h2>
              <div class="vireinli">
                <li v-for="(items, index) in item.content" :key="index">
                  {{ items }}
                </li>
              </div>
            </div>
          </ul>
          <div class="btn-paginacao">
            <ul>
              <li
                @click="labclik(item.index)"
                v-for="item in rendData.page"
                :key="item.index"
              >
                <label :class="index == item.index ? 'checklab' : ''">{{
                  item.index + 1
                }}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "./index.css";
export default {
  name: "wLaypage",
  components: {},
  props: {},
  data() {
    return {
      ulStyle: {
        transition: "transform .7s ease-in-out",
        transform: "translateY(-369px)"
      },
      index: 0,
      rendData: {
        title: "分页效果",
        page: [
          {
            pageTitle: "第一页",
            content: ["1", "2"],
            index: 0
          },
          {
            pageTitle: "第二页",
            content: ["1", "2"],
            index: 1
          }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    labclik(index) {
      this.index = index;
      let y = index * -369;
      this.ulStyle.transform = `translateY(${y}px)`;
    }
  },
  created() {},
  mounted() {}
};
</script>
