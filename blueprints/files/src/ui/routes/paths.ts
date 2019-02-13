export const paths = {
  root: { path: '/' }  ,
  todos: {
    path: '/todos',
    forStatus: { 
      path(status){ 
        return `/todos/${status}`; 
      }, 
      name: '/todos/:status' 
    },
  },
}
