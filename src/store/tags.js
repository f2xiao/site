export default {
    namespaced: true,
    state: {
        tags: []
    },
    mutations: {
        getData(state, newData) {
            state.tags = newData;
        }
    },
    actions: {
    }
}