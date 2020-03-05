<template>
    <div class="index2">
        <p slot="title" class="title">我的处理量</p>
        <Mydisposes ref="myChange" />
    </div>
</template>

<script>
    import Mydisposes from './test'; // 引入子组件：我的处理量

    export default {
        name: 'index2',
        data () {
            return {

            }
        },
        components: {
            Mydisposes
        },
        mounted () {
            window.onresize = () => {
                this.$refs.myChange.my() // 调用子组件的功能 - 图表伸缩响应
            }
        }
    }
</script>

<style lang="less" scoped>

</style>

