<template>
    <div id="app" class="wrapper animate-in">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="content-wrapper">
            <router-view />
        </div>
        <ControlSide></ControlSide>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from "@/components/Header/Header.vue";
    import Footer from "@/components/Footer/Footer.vue";
    import Sidebar from "@/components/Sidebar/Sidebar.vue";
    import ControlSide from "@/components/ControlSide/ControlSide.vue";

    export default {
        name: "home",
        components: {
            Header,
            Footer,
            Sidebar,
            ControlSide
        },

        destroyed() {
            if (localStorage.getItem('navIndex')) {
                localStorage.removeItem('navIndex');
            }
        }
    };
</script>
<style lang="scss">
    * {
        scroll-behavior: smooth;
    }

    // 页面进入动画样式
    .animate-in {
        animation: animate-in .5s forwards;
    }

    // 页面进入动画效果
    @keyframes animate-in {
        from {
            transform: scale(1.1);
        }

        to {
            transform: scale(1);
        }
    }
</style>
