import { beforeEach, describe, it } from '@bigtest/mocha';

import { expect, assert } from 'chai';

import { setupApplicationTest } from 'tests/helpers/mounting';

import page from './page';

describe('Application | <%= classifiedModuleName %>', () => {
  setupApplicationTest();

  it('renders', () => {
    expect(page.text).to.contain('A new component named: <%= classifiedModuleName %>');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
