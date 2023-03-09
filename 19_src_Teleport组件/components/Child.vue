<template>
    <div class="child">
        <h3>我是child组件</h3>
        <Son/>
    </div>
</template>

<script>
import Son from './Son.vue';
export default {
    name: "Child",
    components: {Son},
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .child {
        padding: 10px;
        background-color: pink;
    }
</style>