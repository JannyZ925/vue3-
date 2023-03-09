<template>
    <div class="son">
        <h3>我是son组件（孙）</h3>
        <h3>{{ car }}</h3>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    name: "Son",
    setup () {
        // 使用数据
        const car = inject('car')

        return {
            car
        }
    }
}
</script>

<style lang="scss" scoped>
    .son {
        padding: 10px;
        background-color: lightblue;
    }
</style>