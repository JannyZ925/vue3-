<template>
  <div class="app">

  </div>
</template>

<script>
import { ref, readonly, isRef, isProxy, isReactive, isReadonly, reactive } from 'vue';
export default {
  setup () {
    let car = reactive({
      name: "奔驰",
      price: "40w"
    })

    let sum = ref(0)
    let car2 = readonly(car)

    // isRef: 检查一个值是否为一个 ref 对象
    console.log(isRef(sum));
    // isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
    console.log(isReactive(car));
    // isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
    console.log(isReadonly(car2));
    // isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
    console.log(isProxy(car));
    console.log(isProxy(car2))


    return {
      car
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>