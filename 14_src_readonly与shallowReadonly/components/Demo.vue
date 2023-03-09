<template>
  <div class="app">
    x的值为:{{ x }}
    <button @click="x++">点我x+1</button>
    姓名： {{ name }}
    <button @click="name += '~'">修改姓名</button>
    年龄： {{ age }}
    <button @click="age++">修改年龄</button>
    薪水： {{ job.j1.salary }} K
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref, reactive, readonly, shallowReadonly, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let x = ref(0)
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 深只读（对象中所有数据都不能改）
    // person = readonly(person)

    // 浅只读（对象的最外层数据不能改）
    person = shallowReadonly(person);

    x = readonly(x)

    return {
      x,
      ...toRefs(person)
    };
  },
};
</script>

<style>
.app {
  width: 550px;
  height: 200px;
  background-color: antiquewhite;
}
</style>
