import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import IndexRoute from '~/ui/routes/index';
import ErrorRootRoute from '~/ui/routes/errors';

import { paths } from './paths';

export default class RootPage extends React.Component {
  render() {
    return (
      <div className='app-container flex-column align-items-stretch'>
        <div className='ui container'>
          {/* <Notifications /> */}
          {/* <ToastContainer draggable={false} /> */}
        </div>

        <section className='flex flex-grow'>
          <Switch>
            <Route exact path={paths.root.path} component={IndexRoute} />
            <Route exact path={paths.todos.path} component={IndexRoute} />

            <Route component={ErrorRootRoute} />
          </Switch>
        </section>
      </div>
    );
  }
}
