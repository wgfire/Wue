<template>
  <div class="content">
    <Button></Button>
  </div>
</template>
<script>
  import Button from "../test/Button";
export default {

  name: "App",
  data() {
    return {
     
    };
  },
  components: {
    Button
  }
};
</script>

<style lang="stylus">
.content {
  width: 25%;
  margin: 10% auto;
}
</style>
