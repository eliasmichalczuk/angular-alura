import { browser, by, element } from 'protractor';


export class Login {

  private credentials = { user: 'flavio', pass: '123'};

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageTitle(){
    return browser.getTitle();
  }

  setCredentials(credentials = this.credentials) {
    element(by.css('.form-control')).then(itens => {
      itens[0].sendKeys(credentials.user);
      itens[1].sendKeys(credentials.pass);
    })
    //element(by.css('.form-control')).sendKeys(credentials.pass);
    element(by.css('btn-primary')).click();
  }

  getLogoutButton() {
    return element(by.buttonText('Logout')).isEnabled();
  }
}
