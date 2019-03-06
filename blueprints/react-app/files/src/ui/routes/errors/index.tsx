import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundRoute from './not-found';
import { paths } from '~/ui/routes/paths';
export const NotFound = NotFoundRoute;

export default class ErrorsRootRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={paths.errors.notFound.path} component={NotFoundRoute} />
        <Route component={NotFoundRoute} />
      </Switch>
    );
  }
}
