// 引入的不再是Vue构造函数，而是createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')


/* // 创建应用实例对象app，类似于vm，但比vm更轻
const app = createApp(App);
app.mount('#app');
console.log(app); */

/* setTimeout(() => {
    // 卸载，页面变成空白
    app.unmount('#app');
}, 1000) */
