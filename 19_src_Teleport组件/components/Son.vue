<template>
    <div class="son">
        <h3>我是son组件</h3>
        <Dialog/>
    </div>
</template>

<script>
import Dialog from './Dialog.vue';
export default {
    name: "Son",
    components: {Dialog},
    setup () {

    }
}
</script>

<style lang="scss" scoped>
    .son {
        padding: 10px;
        background-color: lightblue;
    }
</style>