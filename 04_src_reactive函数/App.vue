<template>
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <h2>岗位：{{ person.job.name }}</h2>
  <h2>薪水：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobbies }}</h2>
  <h2>测试reactive是否能深层次监测数据改变： {{ person.job.a.b.c }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // reactive接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
    let person = reactive({
      name: "张姣妮",
      age: 22,
      job: {
        name: "UI设计师",
        salary: "20K",
        a: {
          b: {
            c: 100,
          },
        },
      },
      hobbies: ["抽烟", "喝酒", "烫头"]
    });

    function changeInfo() {
      person.name = "张妮妮";
      person.age = 21,
      person.job.name = "前端工程师",
      person.job.salary = "30K",
      person.job.a.b.c = 200,
      person.hobbies[0] = "学习";
    }

    return {
      person,
      changeInfo,
    };
  },
};
</script>

<style>
</style>
