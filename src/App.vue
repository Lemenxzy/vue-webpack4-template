<template>
    <div class="app_wrap">
        <div class="text_wrap">
            <h1 class="title">
                <p>jekins 自动化部署VUE ~</p>
                <i class="iconfont icon-mofang"></i>
                !
            </h1>
            <p>Jenkins自动部署成功</p>
        </div>
        <div class="img_wrap">
            <img :src="logo" width="500" alt="vue"/>
        </div>
        <div class="test_wrap"></div>
        <div is="Rmarks"></div>
    </div>
</template>

<script>
    import logo from './img/vue.jpeg';
    import Rmarks from './component/Remarks';

    export default {
        name: 'app',
        components: {
            Rmarks
        },
        created() {
            this.logo = logo;
            this.title = '~';
        }
    };
</script>

<style lang="less" scoped>
    .app_wrap{
        text-align: center;
        .text_wrap{
            p{
                color: #37485f;
            }
        }
        .title {
            color: #dc144c;
            p {
                color: #dc144c;
            }
            &:hover{
                color: red;
                transition: all 0.2s ease;
            }
        }
        .test_wrap{
            display: flex;
        }
    }
</style>
