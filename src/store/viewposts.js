export default {
    namespaced: true,
    state:()=> ({
        tags: {},
        viewposts:[] ,
    }),
   mutations: {
       init(state, payload) {
           state.viewposts = payload;
           state.viewposts.forEach(post => {
            post.tag.forEach(tag=>{
                if(state.tags.hasOwnProperty(tag)){
                  state.tags[tag] ++;
                }else{
                  state.tags[tag] = 1;
                }
                })
            });
       }, 
    },
}