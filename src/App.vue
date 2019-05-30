<template>
    <div id="app" class="wrapper">
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
        }
    };
</script>
<style lang="scss">
    * {
        scroll-behavior: smooth;
    }
</style>
