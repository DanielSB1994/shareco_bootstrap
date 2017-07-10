import { SharecobootstrapPage } from './app.po';

describe('sharecobootstrap App', () => {
  let page: SharecobootstrapPage;

  beforeEach(() => {
    page = new SharecobootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
