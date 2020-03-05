export default [{
    icon: 'fa-home',
    title: '概览',
    link: '/',
    children: []
}, {
    icon: 'fa-eercast',
    title: '全链路监控',
    link: '/FulllinkMonitor/FulllinkMonitor1',
    children: [{
        icon: 'fa-link',
        title: '全链路总览',
        link: '/FulllinkMonitor/FulllinkMonitor1'
    }, {
        icon: 'fa-link',
        title: '数据波动列表',
        link: '/FulllinkMonitor/FulllinkMonitor2'
    }, {
        icon: 'fa-link',
        title: '数据波动详情',
        link: '/FulllinkMonitor/FulllinkMonitor3'
    }]
}, {
    icon: 'fa-cube',
    title: '资源监控',
    link: '/ResourcesMonitor/ResourcesMonitor1',
    children: [{
        icon: 'fa-link',
        title: '主机总览',
        link: '/ResourcesMonitor/ResourcesMonitor1'
    }, {
        icon: 'fa-link',
        title: '主机列表',
        link: '/ResourcesMonitor/ResourcesMonitor2'
    }, {
        icon: 'fa-link',
        title: '主机详情',
        link: '/ResourcesMonitor/ResourcesMonitor3'
    }]
}, {
    icon: 'fa-feed',
    title: '网络监控',
    link: '/NetworkMonitor/NetworkMonitor1',
    children: [{
        icon: 'fa-link',
        title: '网络拓扑',
        link: '/NetworkMonitor/NetworkMonitor1'
    }, {
        icon: 'fa-link',
        title: '网络时延',
        link: '/NetworkMonitor/NetworkMonitor2'
    }]
},
    {
        icon: 'fa-sitemap',
        title: 'OGG监控',
        link: '/OGGMonitor/OGGMonitor1',
        children: [{
            icon: 'fa-link',
            title: 'OGG进程总览',
            link: '/OGGMonitor/OGGMonitor1'
        }, {
            icon: 'fa-link',
            title: 'OGG采集进程监控',
            link: '/OGGMonitor/OGGMonitor2'
        }, {
            icon: 'fa-link',
            title: 'OGG解析进程监控',
            link: '/OGGMonitor/OGGMonitor3'
        }]
    },
    {
        icon: 'fa-bars',
        title: 'ETL服务器监控',
        link: '/ETLMonitor/ETLMonitor1',
        children: [{
            icon: 'fa-link',
            title: '模型变更监控',
            link: '/ETLMonitor/ETLMonitor1'
        }, {
            icon: 'fa-link',
            title: '采集数据量监控',
            link: '/ETLMonitor/ETLMonitor2'
        },
            {
                icon: 'fa-link',
                title: 'ETL作业总览',
                link: '/ETLMonitor/ETLMonitor3'
            },
            {
                icon: 'fa-link',
                title: 'ETL作业监控',
                link: '/ETLMonitor/ETLMonitor4'
            },]
    },
    {
        icon: 'fa-database',
        title: '数据供给监控',
        link: '/DataSupplyMonitor/DataSupplyMonitor1',
        children: [{
            icon: 'fa-link',
            title: '数据供给统计',
            link: '/DataSupplyMonitor/DataSupplyMonitor1'
        }, {
            icon: 'fa-link',
            title: '数据波动监控',
            link: '/DataSupplyMonitor/DataSupplyMonitor2'
        }]
    },
    {
        icon: 'fa-bug',
        title: '告警中心',
        link: '/GiveAnAlarmMonitor/GiveAnAlarmMonitor11',
        children: [{
            icon: 'fa-link',
            title: '规则管理',
            link: '/GiveAnAlarmMonitor/GiveAnAlarmMonitor1'
        }, {
            icon: 'fa-link',
            title: '通知组管理',
            link: '/GiveAnAlarmMonitor/GiveAnAlarmMonitor2'
        }, {
            icon: 'fa-link',
            title: '事件记录',
            link: '/GiveAnAlarmMonitor/GiveAnAlarmMonitor3'
        }]
    },
    {
        icon: 'fa-file-o',
        title: '日志中心',
        link: '/LogCenter/LogCenter1',
        children: [{
            icon: 'fa-link',
            title: '日志分析',
            link: '/LogCenter/LogCenter1'
        }, {
            icon: 'fa-link',
            title: '日志下载',
            link: '/LogCenter/LogCenter2'
        }]
    },
    {
        icon: 'fa-cog',
        title: '系统设置',
        link: '/SystemSetup/SystemSetup1',
        children: [{
            icon: 'fa-link',
            title: '系统设置',
            link: '/SystemSetup/SystemSetup1'
        }]
    },
]
