export function pathTemplate(pathObject) {
  return pathObject.name || pathObject.path;
}

export function resolvedPath(pathObject, ...args) {
  if (typeof pathObject.path === 'function') {
    return pathObject.path(...args);
  }

  return pathObject.path;
}

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
  posts: {
    path: '/posts/',
    forPost: {
      path(postId) {
        return `/posts/${postId}`;
      },
      name: '/posts/:id'
    },
  },
  errors: {
    notFound: {
      path: '/not-found'
    }
  }
}
