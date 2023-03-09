<template>
  num： {{ num }}
  <button @click="num++">点我＋1</button>
</template>
  
<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default {
  name: "Demo",
  setup() {
    let num = ref(0);

    // 通过组合式API的方式使用生命周期钩子
    onBeforeMount(() => {
      console.log("---onBeforeMount ---");
    });

    onMounted(() => {
      console.log("---onMounted ---");
    });

    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate ---");
    });

    onUpdated(() => {
      console.log("---onUpdated ---");
    });

    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount ---");
    });

    onUnmounted(() => {
      console.log("---onUnmounted ---");
    });

    return {
      num
    };
  },
};
</script>
  
<style>

</style>
  