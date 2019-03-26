import { beforeEach, afterEach } from '@bigtest/mocha';
import { setupAppForTesting } from '@bigtest/react';
// import MirageServer, { Factory } from '@bigtest/mirage';
import createHistory from 'history/createMemoryHistory';

import Application from '~/ui/application';
import '~/ui/styles/app.scss';

function resetBrowser() {
  localStorage.clear();
}

export function setupApplicationTest(initialState = {}, history?: History) {
  beforeEach(async function() {
    resetBrowser();

    const historyForTesting = history || createHistory();

    this.app = await setupAppForTesting(Application, {
      props: {
        initialState,
        history: historyForTesting,
      },
    });
  });

  afterEach(() => {
    resetBrowser();
  });
}

// Mounting with context is needed because some components,
// esp those from react-router-dom (such as NavLink)
// require that they be rendered within a Route within a Router.
export const mountWithContext = async (
  Component,
  props = {},
  state = {},
  customHistory = undefined
) => {
  return await setupAppForTesting(Application, {
    props: {
      initialState: state,
      history: customHistory || createHistory(),
      entryComponent: Component,
    },
  });
};
