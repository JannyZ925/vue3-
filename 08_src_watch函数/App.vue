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
import { reactive, ref, watch } from "vue";
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

    // 情况一：监视ref定义的一个响应式数据
    watch(
      num,
      (newValue, oldValue) => {
        console.log("num的值变了", newValue, oldValue);
      },
      { immediate: true }
    );

    // 情况二：监视ref定义的多个响应式数据
    watch([num, msg], (newValue, oldValue) => {
      console.log("num或msg的值变了", newValue, oldValue);
    });

    /* 情况三：监视reactive定义的一个响应式数据的全部属性
      注意：1. 这里无法获取正确的oldValue
          2. 强制开启了深度监听(deep配置无效) 
    */
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person的值变了", newValue, oldValue);
      },
      { deep: false }
    );

    // 情况四：监视reactive定义的一个响应式数据的某个属性
    watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log("person的age值变了", newValue, oldValue);
      }
    );

    // 情况五：监视reactive定义的一个响应式数据的某些属性
    watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log("person的age或name变了", newValue, oldValue);
    });

    // 特殊情况
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("person的job变了", newValue, oldValue);
      },
      { deep: true }
    ); //此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效

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
