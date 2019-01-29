import { browser, by, element } from 'protractor';


export class Login {


  private credentials = { user: 'flavio', pass: '123'};

  setWrongCredentials(): void {
    element(by.className('test-username')).sendKeys('wrongUser');
    element(by.className('test-password')).sendKeys('wrongPassword');
    element(by.className('test-login-button')).click();
  }
  navigateTo() {
    browser.get('/home');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageTitle() {
    return browser.getTitle().then(function(res) {
      return res;
    });
  }

  getUser(): string {
    return this.credentials.user;
  }

  async setCredentials(credentials = this.credentials) {
    // element(by.css('.form-control')).then(itens => {
    //   itens[0].sendKeys(credentials.user);
    //   itens[1].sendKeys(credentials.pass);
    // });
    element(by.className('test-username')).sendKeys(credentials.user);
    element(by.className('test-password')).sendKeys(credentials.pass);
    element(by.className('test-login-button')).click();
  }

  getLogoutButton() {
    return element(by.className('test-logout-button')).isEnabled().then(function(res) {
      return res;
    });
    // return browser.getTitle();
  }

  async currentTitle() {
    const res = await browser.getTitle();
    return res;
  }
}
