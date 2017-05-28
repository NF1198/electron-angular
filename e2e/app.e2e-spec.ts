import { ElectronCalculatorPage } from './app.po';

describe('electron-calculator App', () => {
  let page: ElectronCalculatorPage;

  beforeEach(() => {
    page = new ElectronCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
