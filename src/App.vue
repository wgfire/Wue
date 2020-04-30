<template>
  <div class="content">
    <!-- <Button></Button> -->

    <wSwiper :imglist="imglist"></wSwiper>
  </div>
</template>
<script>
import Button from "../test/Button";
export default {
  name: "App",
  data() {
    return {
      imglist: ["/1.jpg", "/2.jpg", "/1.jpg", "/2.jpg"]
    };
  },
  components: {
    Button
  }
};
</script>

<style lang="stylus">
.content
 width 800px
</style>
