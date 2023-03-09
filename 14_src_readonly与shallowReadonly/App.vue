<template>
  <button @click="showDemo = !showDemo">切换显示/隐藏</button>
  <Demo v-if="showDemo"/>
</template>

<script>
import Demo from './components/Demo.vue';
import { ref } from 'vue';
export default {
  name: "App",
  components: {Demo},
  setup() {
    let showDemo = ref(true)

    return {
      showDemo
    }
  },
};
</script>

<style>

</style>
