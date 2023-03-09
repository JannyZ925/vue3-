<template>
  <div class="app">
    <h3>我是app组件</h3>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child.vue';
export default {
  components:  {Child},
  setup () {

  }
}
</script>

<style lang="scss" scoped>
  .app{
    padding: 10px;
    background-color: yellowgreen;
  }
</style>