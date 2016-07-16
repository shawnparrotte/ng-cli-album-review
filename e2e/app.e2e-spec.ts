import { AlbumReviewAppPage } from './app.po';

describe('album-review-app App', function() {
  let page: AlbumReviewAppPage;

  beforeEach(() => {
    page = new AlbumReviewAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
