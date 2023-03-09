<template>
  <div class="app">
    <h3>我是app组件</h3>
    <Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h3>加载中.....</h3>
			</template>
		</Suspense>
  </div>
</template>

<script>
// 静态引入
// import Child from './components/Child.vue';

// 异步引入
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))

export default {
  components: {Child},
  setup () {

    return {
      Child
    }
  }
}
</script>

<style lang="scss" scoped>
  .app{
    padding: 10px;
    background-color: yellowgreen;
  }
</style>