import Vue from "vue";
import Router from "vue-router";
import Home from "../views/index/index.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/other",
            name: "other",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "../views/other/other.vue")
        },
        {
            path: "/multiLevel/level1",
            name: "level1",
            component: () =>
                import("../views/multiLevel/level-1.vue")
        },
        {
            path: "/multiLevel/level2",
            name: "level2",
            component: () =>
                import("../views/multiLevel/level-2.vue")
        }
    ]
});
