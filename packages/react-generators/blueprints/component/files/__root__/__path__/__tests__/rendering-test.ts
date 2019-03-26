import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect, assert } from 'chai';

import { mountWithContext } from 'tests/helpers/mounting';

import <%= classifiedModuleName %> from '..';

import page from './page';

describe('Rendering | <%= classifiedModuleName %>', () => {
  beforeEach(async function() {
    await mountWithContext(
      <%= classifiedModuleName %>
    );
  });

  it('renders', () => {
    expect(page.text).to.not.equal('');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
