<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../../static/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>Admin</p>
                    <!-- Status -->
                    <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
                </div>
            </div>
            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="搜索...">
                    <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </form>
            <!-- /.search form -->
            <!-- Sidebar Menu -->
            <ul class="sidebar-menu" data-widget="tree">
                <li v-for="(item,index) in sidebarList" :key="item.key" @click="handleNav(item,index)" :class="[item.children.length?'treeview':'',index===currentIndex?'active':'']">
                    <router-link :to="item.link">
                        <i :class="['fa',item.icon]"></i> <span>{{item.title}}</span>
                        <i v-if="item.children.length" class="fa fa-angle-left pull-right"></i>
                    </router-link>
                    <ul v-if="item.children.length" class="treeview-menu">
                        <li v-for="(citem,cindex) in item.children" :key="citem.key" @click="handleLevel(cindex)" :class="cindex+1===currentLevel?'level-active':''">
                            <router-link :to="citem.link"><i :class="['fa',citem.icon]"></i> <span>{{citem.title}}</span></router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>

</template>

<script>
    import getdata from "./sidebarservice/sidebarservice.js"
    import sidebar from "./sidebarList/sidebarList"
    export default {
        name: 'sidebar',
        data() {
            return {
                currentIndex: 0,
                currentLevel: 0,
                sidebarList: sidebar
            }
        },
        created() {
            getdata
        },
        methods: {
            // 一级目录样式切换
            handleNav(item, index) {
                this.currentIndex = index;
                localStorage.setItem('navIndex', this.currentIndex);
                if (!item.children.length) {
                    this.currentLevel = 0;
                    localStorage.removeItem('levelIndex');
                }

            },

            // 二级目录样式切换
            handleLevel(index) {
                this.currentLevel = index + 1;
                localStorage.setItem('levelIndex', this.currentLevel);
            },
        },

        mounted() {

            if (localStorage.getItem('navIndex')) {
                this.currentIndex = parseInt(localStorage.getItem('navIndex'));
            }
            if (localStorage.getItem('levelIndex')) {
                this.currentLevel = parseInt(localStorage.getItem('levelIndex'));
            }
        },
    }
</script>

<style lang="scss" scoped>
    .level-active {
        a {
            color: #fff !important;
        }
    }
</style>
