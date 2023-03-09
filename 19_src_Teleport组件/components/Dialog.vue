<template>
  <div>
    <button @click="showDialog = true">点我弹窗</button>
    <!-- `Teleport` 是一种能够将我们的组件html结构移动到指定位置的技术 -->
    <teleport to="body">
      <div class="mask" v-if="showDialog">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <div>
            这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容
          </div>
          <button @click="showDialog = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let showDialog = ref(false);

    return {
      showDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog {
    width: 300px;
    height: 200px;
    background-color: lightyellow;
    text-align: center;
  }
}
</style>