import {reactive, onMounted, onUnmounted } from 'vue'

export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });

  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log("x:", point.x, "y:", point.y);
  }

  // 组件挂载时给window添加监听事件
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  // 组件卸载时给window卸载监听事件
  onUnmounted(() => {
    window.removeEventListener("click", savePoint);
  });

  return point;
}
