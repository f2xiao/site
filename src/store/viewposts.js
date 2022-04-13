export default {
    namespaced: true,
    state:()=> ({
        tags: [],
        tagsMap:{},
        viewposts: [],
    }),
   mutations: {
       init(state, newPosts) {
           state.viewposts = newPosts;
            state.viewposts.map(item => state.tags.push(...item.tag));
            // console.log(state.tags);
            state.tags.forEach(tag => {
                if (state.tagsMap.hasOwnProperty(tag)) {
                    state.tagsMap[tag]['count']++;
                } else {
                    state.tagsMap[tag] = new Object({ count: 1 });
                }
            });
           
            // console.log(state.tagsMap);
       }, 
    },
}