export default {
    namespaced: true,
    state: {
        tags: [],
        tagsMap:{},
        posts: [],
        projects:[]
    },
    mutations: {
        getPosts(state, newPosts) {
            state.posts = newPosts;
            console.log(state.posts);
            state.posts.map(item => state.tags.push(...item.tag));
            console.log(state.tags);
            state.tags.forEach(tag => {
                if (state.tagsMap.hasOwnProperty(tag)) {
                    state.tagsMap[tag]++;
                } else {
                    state.tagsMap[tag] = 1;
                }
            });
            console.log(state.tagsMap);
        },
        getProjects(state, newProjects) {
            state.projects = newProjects;
            console.log(state.projects);
        }
    },
    actions: {
    }
}