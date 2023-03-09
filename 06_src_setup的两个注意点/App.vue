<template>
  <div class="app">
    <Demo sex="女" @hello="handleHello">
      <template v-slot:qwe></template>
      <template v-slot:asd></template>
    </Demo>
  </div>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: "App",
  components: { Demo },
  setup() {
    function handleHello(attr) {
      console.log(`触发了Demo的hello事件,参数为${attr}`);
    }

    return {
      handleHello
    }
  },
};
</script>

<style>
.app {
  width: 500px;
  height: 200px;
  background-color: antiquewhite;
}
</style>
