<template>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h2>岗位：{{ job.name }}</h2>
  <h2>薪水：{{ job.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref("张姣妮")
    let age = ref(22)
    let job = ref({
      name: "UI设计师",
      salary: "20K"
    })

    // 此时的 name 和 age 是引用对象，值储存在 value 属性中
    function changeInfo() {
      name.value = "张妮妮"
      age.value = 21,
      job.value.name = "前端工程师",
      job.value.salary = "30K"
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

<style>

</style>
