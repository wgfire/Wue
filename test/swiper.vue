<template>
  <div class="wrapper">
    <wSwiper :imglist="imglist"></wSwiper>
  </div>
</template>

<script>

export default {
  props: {},
  data() {
    return {
      imglist: ["/1.jpg", "/2.jpg", "/1.jpg", "/2.jpg"]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" scoped></style>
