<template>
  <div class="app">
    <h3>我是app组件（父）</h3>
    <h3>{{ car }}</h3>
    <Child/>
  </div>
</template>

<script>
import { reactive, provide } from 'vue';
import Child from './components/Child.vue';
export default {
  components:  {Child},
  setup () {
    let car = reactive({
      name: "奔驰",
      price: "40w"
    })

    // 提供数据
    provide('car', car)

    return {
      car
    }
  }
}
</script>

<style lang="scss" scoped>
  .app{
    padding: 10px;
    background-color: yellowgreen;
  }
</style>