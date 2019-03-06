import * as React from 'react';
import { BrowserRouter, Router as GenericRouter } from 'react-router-dom';

<% if (i18n) { %>
import { I18nextProvider } from 'react-i18next';
<% } %>

<% if (jsonapi) { %>
import { APIProvider, strategies } from 'react-orbitjs';
import { baseUrl } from '~/data/store';
import { schema, keyMap } from '~/data/schema';
<% } %>

<% if (redux) { %>
import { ReduxProvider } from '~/redux-store';
<% } %>

import { ScrollToTop } from '~/utils/routing';

import { RouteListener } from './components/route-listener';
import DebugInfo from './components/debug-info';
import RootRoute from './routes/root';


interface IProps {
  initialState: any;
  entryComponent?: React.ComponentType;
  history: any;
}

export default function Application({ initialState, history, entryComponent }: IProps) {
  const Router = history ? GenericRouter : BrowserRouter;
  const Component = entryComponent ? entryComponent : RootRoute;
  const routerProps = {};

  if (history) {
    routerProps.history = history;
  }

  return (
    <% if (i18n) { %>
    <I18nextProvider i18n={i18n}>
      <L10nLoader>
    <% } %>

        <% if (jsonapi) { %>
        <APIProvider
          storeCreator={() =>
            strategies.pessimisticWithRemoteIds.createStore(baseUrl, schema, keyMap)
          }
        >
          <CurrentUserProvider>
        <% } %>

              <% if (redux) { %>
              <ReduxProvider initialState={initialState || {}}>
              <% } %>
                <Router {...routerProps}>
                  <>
                    <RouteListener />
                    <ScrollToTop>
                      <Component />
                    </ScrollToTop>
                    <DebugInfo />
                  </>
                </Router>

              <% if (redux) { %>
              </ReduxProvider>
              <% } %>

        <% if (jsonapi) { %>
          </CurrentUserProvider>
        </APIProvider>
        <% } %>

    <% if (i18n) { %>
      </L10nLoader>
    </I18nextProvider>
    <% } %>
  );
}

