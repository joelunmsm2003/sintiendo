import { SintiendoPage } from './app.po';

describe('sintiendo App', function() {
  let page: SintiendoPage;

  beforeEach(() => {
    page = new SintiendoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
