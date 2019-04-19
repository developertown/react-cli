import { route } from 'static-route-paths';

export const paths = route({
  root: route(),
  todos: route('todos', {
    show: route(':id'),
  }),

  errors: route({
    notFound: route('not-found'),
  }),
});
