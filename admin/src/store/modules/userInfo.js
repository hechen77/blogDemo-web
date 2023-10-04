export default {
    namespaced: "userInfo",
    state: {
        userInfo: []
    },
    mutations: {
        SET_USERINFO(state,data){
            state.userInfo = data;
        }
    },
    actions: {
    },
    getters: {}
}