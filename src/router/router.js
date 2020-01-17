import Vue from "vue";
import Router from "vue-router";
import Home from "../views/index/index.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        /*概览*/
        {
            path: "/",
            name: "home",
            component: Home
        },

        /*全链路监控*/
        {
            path: "/FulllinkMonitor/FulllinkMonitor1",
            name: "FulllinkMonitor1",
            component: () =>
                import("../views/FulllinkMonitor/FulllinkMonitor1")
        },
        {
            path: "/FulllinkMonitor/FulllinkMonitor2",
            name: "FulllinkMonitor2",
            component: () =>
                import("../views/FulllinkMonitor/FulllinkMonitor2")
        },
        {
            path: "/FulllinkMonitor/FulllinkMonitor3",
            name: "FulllinkMonitor3",
            component: () =>
                import("../views/FulllinkMonitor/FulllinkMonitor3")
        },

        /*资源监控*/
        {
            path: "/ResourcesMonitor/ResourcesMonitor1",
            name: "ResourcesMonitor1",
            component: () =>
                import("../views/ResourcesMonitor/ResourcesMonitor1")
        },
        {
            path: "/ResourcesMonitor/ResourcesMonitor2",
            name: "ResourcesMonitor2",
            component: () =>
                import("../views/ResourcesMonitor/ResourcesMonitor2")
        },
        {
            path: "/ResourcesMonitor/ResourcesMonitor3",
            name: "ResourcesMonitor3",
            component: () =>
                import("../views/ResourcesMonitor/ResourcesMonitor3")
        },

        /*网络监控*/
        {
            path: "/NetworkMonitor/NetworkMonitor1",
            name: "NetworkMonitor1",
            component: () =>
                import("../views/NetworkMonitor/NetworkTopology1")
        },
        {
            path: "/NetworkMonitor/NetworkMonitor2",
            name: "NetworkMonitor2",
            component: () =>
                import("../views/NetworkMonitor/NetworkTopology2")
        },

        /*ogg监控*/
        {
            path: "/OGGMonitor/OGGMonitor1",
            name: "OGGMonitor1",
            component: () =>
                import("../views/OGGMonitor/OGGMonitor1")
        },
        {
            path: "/OGGMonitor/OGGMonitor2",
            name: "OGGMonitor2",
            component: () =>
                import("../views/OGGMonitor/OGGMonitor2")
        },
        {
            path: "/OGGMonitor/OGGMonitor3",
            name: "OGGMonitor3",
            component: () =>
                import("../views/OGGMonitor/OGGMonitor3")
        },

        /*ETL监控*/
        {
            path: "/ETLMonitor/ETLMonitor1",
            name: "ETLMonitor1",
            component: () =>
                import("../views/ETLMonitor/ETLMonitor1")
        },
        {
            path: "/ETLMonitor/ETLMonitor2",
            name: "ETLMonitor2",
            component: () =>
                import("../views/ETLMonitor/ETLMonitor2")
        },
        {
            path: "/ETLMonitor/ETLMonitor3",
            name: "ETLMonitor3",
            component: () =>
                import("../views/ETLMonitor/ETLMonitor3")
        },
        {
            path: "/ETLMonitor/ETLMonitor4",
            name: "ETLMonitor4",
            component: () =>
                import("../views/ETLMonitor/ETLMonitor4")
        },

        /*数据供给监控*/
        {
            path: "/DataSupplyMonitor/DataSupplyMonitor1",
            name: "DataSupplyMonitor1",
            component: () =>
                import("../views/DataSupplyMonitor/DataSupplyMonitor1")
        },
        {
            path: "/DataSupplyMonitor/DataSupplyMonitor2",
            name: "DataSupplyMonitor2",
            component: () =>
                import("../views/DataSupplyMonitor/DataSupplyMonitor2")
        },

        /*告警中心*/
        {
            path: "/GiveAnAlarmMonitor/GiveAnAlarmMonitor1",
            name: "GiveAnAlarmMonitor1",
            component: () =>
                import("../views/GiveAnAlarmMonitor/GiveAnAlarmMonitor1")
        },
        {
            path: "/GiveAnAlarmMonitor/GiveAnAlarmMonitor2",
            name: "GiveAnAlarmMonitor2",
            component: () =>
                import("../views/GiveAnAlarmMonitor/GiveAnAlarmMonitor2")
        },
        {
            path: "/GiveAnAlarmMonitor/GiveAnAlarmMonitor3",
            name: "GiveAnAlarmMonitor3",
            component: () =>
                import("../views/GiveAnAlarmMonitor/GiveAnAlarmMonitor3")
        },

        /*日志中心*/
        {
            path: "/LogCenter/LogCenter1",
            name: "LogCenter1",
            component: () =>
                import("../views/LogCenter/LogCenter1")
        },
        {
            path: "/LogCenter/LogCenter2",
            name: "LogCenter2",
            component: () =>
                import("../views/LogCenter/LogCenter2")
        },

        /*系统设置*/
        {
            path: "/SystemSetup/SystemSetup1",
            name: "SystemSetup",
            component: () =>
                import("../views/SystemSetup/SystemSetup1")
        },
    ]
});
