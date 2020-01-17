import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        obj: {}
    },
    mutations: {
        linkdata(state,data) {
            Vue.set(state.obj,'objdata',data)
        }
    },
    actions: {}
});
