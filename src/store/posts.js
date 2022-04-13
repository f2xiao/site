export default {
    namespaced: true,
    state: {
        tags: [],
        tagsMap:{},
        posts:[]
    },
    mutations: {
        getData(state, newData) {
            state.posts = newData;
            console.log(state.posts);
            state.posts.map(item => state.tags.push(...item.tag));
            console.log(state.tags);
        }
    },
    actions: {
    }
}