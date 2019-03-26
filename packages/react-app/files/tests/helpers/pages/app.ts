import {
  interactor,
  Interactor,
} from '@bigtest/interactor';

class App {
  // custom interactors here
}

export const AppInteractor = interactor(App);

export type TAppInteractor = App & Interactor;

export default new (AppInteractor as any)('#testing-root') as TAppInteractor;
