import { LoaderButton } from './loader-button';

describe('LoaderButton', () => {
  let loaderButton: LoaderButton;

  beforeEach(() => {
    loaderButton = new LoaderButton();
  });

  it('builds', () => {
    expect(loaderButton).toBeTruthy();
  });
});
