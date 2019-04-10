import {
  interactor,
  clickable,
  text,
  selectable,
  scoped,
  hasClass,
  isPresent,
  collection,
  Interactor,
} from '@bigtest/interactor';
import { visit, location } from '@bigtest/react';
import { assert } from 'chai';

class Page {
  // custom interactors here

  async navigateTo() {
    await visit(paths.);
  }
}

export const PageInteractor = interactor(Page);

export type TInteractor = Page & Interactor;

export default new (PageInteractor as any)('#testing-root') as TInteractor;
