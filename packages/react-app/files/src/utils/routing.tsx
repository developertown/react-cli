import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

class ScrollToTopOnLocationChange extends React.Component<any, any> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    const props = this.props as RouteComponentProps;
    const didLocationChange = props.location !== prevProps.location;

    if (didLocationChange) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export const ScrollToTop = withRouter(ScrollToTopOnLocationChange);

export function withResetScroll(WrappedComponent) {
  return (props) => (
    <ScrollToTop>
      <WrappedComponent {...props} />
    </ScrollToTop>
  );
}


interface NestedRoutes {
  [key: string]: Route;
}

class Route {
  private _path: string;

  // still private, but shhh, don't tell anyone
  _subRoutes: NestedRoutes;
  _parent: Route;

  _pathBuilder: (...args: any[]) => string;

  constructor(path: string = '', subRoutes?: NestedRoutes) {
    this._path = path;
    this._subRoutes = subRoutes;
  }

  get path() {
    let fullPath = '/';

    if (this._parent) {
      fullPath = `${this._parent.path}/${this._path}`;
    }

    return fullPath;
  }

  resolve(...args: any[]) {
    return this._pathBuilder(...args);
  }
}

export function route<TNested extends NestedRoutes = undefined>(
  path = '',
  nestedRoutes?: TNested
): Route & TNested {
  let routeEntry = new Route(path, nestedRoutes);
  let subRoutes = routeEntry._subRoutes;

  if (subRoutes) {
    Object.keys(subRoutes).forEach((key) => {
      let routeEntry = subRoutes[key];

      routeEntry._parent = routeEntry;
    });
  }

  return routeEntry as Route & TNested;
}
