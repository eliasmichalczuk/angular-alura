import { browser, by, element } from 'protractor';


export class Photo {

  private credentials = { user: 'flavio', pass: '123'};

  navigateTo() {
    return browser.get(`/user/${this.credentials.user}`);
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageTitle(){
    return browser.getTitle();
  }

  photoUpload() {
    this.navigateToPhotoUpload();
  }
  
  navigateToPhotoUpload(): any {
    return browser.get(`/user/p/add`);
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
