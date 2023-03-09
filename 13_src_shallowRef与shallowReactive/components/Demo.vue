<template>
  <div class="app">
    x.y的值为:{{ x.y }}
    <button @click="x.y++">点我y+1</button>
    姓名： {{ person.name }}
    <button @click="person.name += '~'">修改姓名</button>
    年龄： {{ person.age }}
    <button @click="person.age++">修改年龄</button>
    薪水： {{ person.job.j1.salary }} K
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref, reactive, shallowRef, shallowReactive } from "vue";
export default {
  name: "Demo",
  setup() {
    // shallowReactive：只处理对象最外层属性的响应式（浅响应式）
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理
    let x = shallowRef({
      y: 1
    })

    return {
      x,
      person,
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
