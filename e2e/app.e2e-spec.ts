import { StructdirectivesPage } from './app.po';

describe('structdirectives App', function() {
  let page: StructdirectivesPage;

  beforeEach(() => {
    page = new StructdirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
