<template>
  <div class="content">
    <Button></Button>
    <!-- <wLaypage /> -->
    <!-- <Swiper/> -->
  </div>
</template>
<script>
import Button from "../test/Button";
import Swiper from "../test/swiper";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Button,
    Swiper
  }
};
</script>

<style lang="stylus">
.content
 width 100%
</style>
