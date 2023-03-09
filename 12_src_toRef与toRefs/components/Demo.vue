<template>
  <div class="app">
    {{ person }} <br>
    姓名： {{ name }}
    <button @click="name += '~'">修改姓名</button>
    年龄： {{ age }}
    <button @click="age++">修改年龄</button>
    薪水： {{ job.j1.salary }} K
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    return {
      person,
      /* // toRef写法
      name: toRef(person, "name"),
      age: toRef(person, "age"),
      salary: toRef(person.job.j1, "salary") */

      // toRefs写法
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
