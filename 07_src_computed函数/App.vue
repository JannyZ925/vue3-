<template>
  <div class="app">
    姓： <input type="text" v-model="person.firstName"><br><br>
    名： <input type="text" v-model="person.lastName"><br><br>
    全名： <input type="text" v-model="person.fullName">
  </div>
</template>

<script>
import { computed, reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });


    // 简写形式，只读取不修改
    person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    })

    // 完整形式
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        person.firstName = value.split("-")[0]
        person.lastName = value.split("-")[1]
      }
    })

    return {
      person
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
