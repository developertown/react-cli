import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store, compose } from 'redux';

import { reducers } from './reducers';
import { middleware, setup as setupMiddleware } from './middleware';
import { default as enhancers } from './enhancers';

export interface IProps {
  initialState?: any;
  children: any;
}

export default class ReduxProvider extends React.Component<IProps> {
  store: Store;

  constructor(props) {
    super(props);

    const { initialState } = props;

    // this is intentionally a class property.
    // we don't want the store re-created during any
    // lifecycle event.
    this.store = this.initRedux(initialState);
  }

  initRedux(initialState: any): Store {
    const fromLS = localStorage.getItem('reduxState');
    const persistedState = fromLS ? JSON.parse(fromLS) : {};

    const state = {
      ...(initialState || {}),
      ...persistedState,
    };

    const store = createStore(
      reducers,
      state,
      compose(
        // sagas, maybe thunks, etc
        applyMiddleware(...middleware),
        // e.g.: dev tools
        enhancers
      )
    );

    // Start sagas, etc
    setupMiddleware(store);

    // persist certain things between reloads
    store.subscribe(() => {
      const currentState = store.getState();
      const { currentOrganizationId, columnSelections } = currentState.data;
      const toPersist = {
        data: {
          currentOrganizationId,
          columnSelections,
          rowSelections: {},
        },
        ui: currentState.ui,
      };

      try {
        localStorage.setItem('reduxState', JSON.stringify(toPersist));
      } catch (e) {
        console.error(toPersist, e);
        throw e;
      }
    });

    return store;
  }

  render() {
    const { children } = this.props;

    const isFunction = typeof children === 'function';

    return (
      <Provider store={this.store}>
        {isFunction ? children({ store: this.store }) : children}
      </Provider>
    );
  }
}
