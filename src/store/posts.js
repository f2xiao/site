export default {
    namespaced: true,
    state: {
        tags: null,
        posts:[]
    },
    mutations: {
        getData(state, newData) {
            console.log(newData);
            state.posts = newData;
        }
    },
    actions: {
    }
}