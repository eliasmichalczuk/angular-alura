import { browser, by, element, $ } from 'protractor';
import { elementContainerEnd } from '@angular/core/src/render3';
import { Observable } from 'rxjs';


export class Photo {

  private credentials = { user: 'flavio', pass: '123'};

  navigateTo() {
    return browser.get(`/user/${this.credentials.user}`);
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageTitle() {
    return browser.getTitle();
  }

  async photoUpload() {
    const path = require('path');
    this.navigateToPhotoUpload();
     const fileToUpload = '../img/uploadTest',
     absolutePath = path.resolve(__dirname, fileToUpload);
     await element(by.className('test-upload-photo')).sendKeys(absolutePath);
     element(by.css('.btn.btn-primary.btn-block')).click();
  }

  async chooseFirstPic() {
    this.navigateTo();
    element.all(by.tagName('img')).first().click();
    return await browser.getCurrentUrl();
  }

  private getLogoutButton() {
    return element(by.className('test-logout-button'));
  }

  deletePhoto() {
    element.all(by.tagName('img')).first().click();
    expect(browser.getTitle()).toEqual('Photo detail');
    element(by.className('test-delete-button')).click();
  }

  navigateToPhotoUpload(): any {
    return browser.get(`/p/add`);
  }

  getUser() {
    return this.credentials.user;
  }

  setCredentials(credentials = this.credentials) {
    // element(by.css('.form-control')).then(itens => {
    //   itens[0].sendKeys(credentials.user);
    //   itens[1].sendKeys(credentials.pass);
    // });
    // element(by.css('.form-control')).sendKeys(credentials.pass);
    element(by.css('btn-primary')).click();
  }

  logoutButtonIsEnabled() {
    return this.getLogoutButton().isEnabled();
  }
}
