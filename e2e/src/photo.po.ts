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
    browser.waitForAngular();
    browser.navigate().refresh();
    this.navigateToPhotoUpload();
    browser.waitForAngular();
    browser.navigate().refresh();
    const fileToUpload = '../img/uploadTest.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    // browser.wait(function() {
    //   return element(by.className('test-upload-photo')).sendKeys(absolutePath);
    // }, 500).then(() => {
    //   element(by.className('test-photo-upload')).click();
    // });
    element(by.className('test-upload-photo')).sendKeys(absolutePath);
    element(by.className('test-photo-upload')).click();
  }

  async chooseFirstPic() {
    this.navigateTo();
    element.all(by.tagName('img')).first().click();
    return browser.getCurrentUrl();
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
    browser.get(`/p/add`);
  }

  getUser() {
    return this.credentials.user;
  }
}
