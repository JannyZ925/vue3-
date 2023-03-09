<template>
  <div class="app">
    num： {{ num }}
    <button @click="num++">点我＋1</button>
    <hr />

    msg： {{ msg }}
    <button @click="msg += '!'">修改msg</button>
    <hr />

    姓名： {{ person.name }}
    <button @click="person.name += '~'">修改姓名</button>
    年龄： {{ person.age }}
    <button @click="person.age++">修改年龄</button>
    薪水： {{ person.job.j1.salary }} K
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from "vue";
export default {
  name: "App",
  setup() {
    let num = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 不用指明监视哪个属性，监视的回调中用到哪个属性就会监视哪个属性
    watchEffect(() => {
      const x1 = num.value;
      console.log("watchEffect执行了~");
    });

    return {
      num,
      msg,
      person,
    };
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
