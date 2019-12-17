import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('LoaderButton', () => {
  let element: HTMLStrcLoaderButtonElement;
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<strc-loader-button />');
    
    element = await page.find('strc-loader-button');
  });

  describe('rendering', () => {
    it('creates the element', () => {
      expect(element).toHaveClass('hydrated');
    });
  });
  
  describe('loading', () => {
    describe('not loading', () => {
      it('does not have the loading class applied by default', () => {
        expect(element.firstElementChild).not.toHaveClass('loading')
      });
    });

    describe('is loading', () => {
      beforeEach(async () => {
        element.setProperty('loading', true);
        await page.waitForChanges();
      });
  
      it('applies the loading class, when the loading property is set', () => {
        expect(element.firstElementChild).toHaveClass('loading');
      });
  
      it('gets disabled, when the loading property is set', async () => {
        expect(element.firstElementChild.getAttribute('disabled')).not.toBe(undefined);
      });
    });
  });
});
