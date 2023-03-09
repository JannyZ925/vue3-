<template>
  <div class="demo">
    姓名：{{ person.name }} 
    年龄：{{ person.age }}
    <button @click="emitHello">触发hello事件</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "Demo",
//   父组件传过来的数据
  props: ["sex"],
//   自定义事件
  emits: ["hello"],
  beforeCreate() {
    // console.log("---beforeCreate---");
  },
//   setup 比 beforeCreate 更早执行
  setup(props, context) {
    // console.log("---setup---");
    // console.log("---props:", props)
    // console.log("---context.attrs:", context.attrs) //相当于Vue2的this.$attrs，如果父组件给子组件传递了数据，而子组件没有用props接收，传过来的数据就会出现在这里
    // console.log("---context.emit:", context.emit)  //触发自定义事件
    console.log("---context.slots:", context.slots) // 插槽

    let person = reactive({
      name: "张姣妮",
      age: 22,
    });

    function emitHello() {
        context.emit('hello', 666)
    }

    return {
      person,
      emitHello
    };
  },
};
</script>

<style lang="less">
.demo {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
</style>