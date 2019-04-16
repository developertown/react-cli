import { route } from '~/utils/routing';

export const paths = {
  root: route(),
  todos: route('todos', {
    show: route(':id'),
  }),

  errors: {
    notFound: route('not-found'),
  },
};
