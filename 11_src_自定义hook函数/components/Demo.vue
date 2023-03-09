<template>
  num： {{ num }}
  <button @click="num++">点我＋1</button>

  <hr />

  <h2>x:{{ point.x }}, y:{{ point.y }}</h2>
</template>
  
<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint"
export default {
  name: "Demo",
  setup() {
    let num = ref(0);

    let point = usePoint();
    
    return {
      num,
      point
    };
  },
};
</script>
  
<style>
</style>
  