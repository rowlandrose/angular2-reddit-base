export class Angular2RedditBasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-reddit-base-app h1')).getText();
  }
}
