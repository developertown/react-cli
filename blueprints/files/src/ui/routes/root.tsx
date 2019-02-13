import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import IndexRoute from '@ui/routes/index';
import LoginRoute from '@ui/routes/login';
import TasksRoute from '@ui/routes/tasks';
import AdminRoute from '@ui/routes/admin';
import InvitationsRoute from '@ui/routes/invitations';
import RequestOrgAccessRoute from '@ui/routes/request-access-for-organization';
import RequestOrgAccessSuccessRoute from '@ui/routes/request-access-for-organization/success';
import OrganizationsRoute from '@ui/routes/organizations';
import DirectoryRoute from '@ui/routes/project-directory';
import ProjectsRoute from '@ui/routes/projects';
import UsersRoute from '@ui/routes/users';
import OpenSourceRoute from '@ui/routes/open-source';
import ErrorRootRoute from '@ui/routes/errors';

import Workflow from './workflow';
import { paths } from './paths';

export default class RootPage extends React.Component {
  render() {
    return (
      <div className='app-container flex-column align-items-stretch'>
        <div className='ui container'>
          {/* <Notifications /> */}
          <ToastContainer draggable={false} />
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
