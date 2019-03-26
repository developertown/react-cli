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

class Page {
  // custom interactors here
}

export const PageInteractor = interactor(Page);

export type TInteractor = Page & Interactor;

export default new (PageInteractor as any)('#testing-root') as TInteractor;
