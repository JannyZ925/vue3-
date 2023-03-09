<template>
  <div class="app">
    <h3>x的值为:{{ x }}</h3>
    <button @click="x++">点我x+1</button>
    <h3>姓名： {{ name }}</h3>
    <button @click="name += '~'">修改姓名</button>
    <h3>年龄： {{ age }}</h3>
    <button @click="age++">修改年龄</button>
    <h3>薪水： {{ job.j1.salary }} K</h3>
    <button @click="job.j1.salary++">涨薪</button>
    <h3>座驾信息：{{ person.car }}</h3>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">添加一台车</button>
    <button @click="person.car.name='奥迪'">修改车的品牌</button>
    <button @click="person.car.price=50">修改车的价格</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
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

    function showRawPerson() {
      // toRaw 将一个由 reactive 生成的响应式对象转为普通对象
      let p = toRaw(person)
      p.age++
      console.log(p);

      /* // toRaw处理ref构造的数据，依然是响应式
      let x1 = toRaw(x);
      x1.value++;
      console.log(x1); */
    }

    function addCar() {
      let car = {name: "奔驰", price: 40}
      // markRaw 标记一个对象，使其永远不会再成为响应式对象
      person.car = markRaw(car);
    }

    return {
      x,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };
  },
};
</script>

<style>

</style>
