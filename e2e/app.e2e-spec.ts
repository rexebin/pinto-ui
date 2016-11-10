import { PintoUiPage } from './app.po';

describe('pinto-ui App', function() {
  let page: PintoUiPage;

  beforeEach(() => {
    page = new PintoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
