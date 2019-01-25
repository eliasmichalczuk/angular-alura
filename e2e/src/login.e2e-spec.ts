import { AppPage } from './app.po';
import { Login } from './login.po';
import { $, by, element, browser } from 'protractor';
import { element as element1, detectChanges } from '@angular/core/src/render3';
import { Logout } from './logout.po';

describe('login page', () => {

  const wrongCredentials = {
    user: 'wrongname',
    pass: 'wrongpasswd'
  };
  let loginPage: Login;
  let logoutPage: Logout;

  beforeEach(() => {
    loginPage = new Login();
    logoutPage = new Logout();
    loginPage.navigateTo();
  });

  it('should click register now', async () => {
    //   browser.takeScreenshot().then(function (png) {
    //     writeScreenShot(png, 'exception.png');
    // });
      element(by.partialLinkText('Register Now')).click();
      expect(browser.getTitle()).toEqual('Sign up');
    });

  it('should log in correctly', async () => {
    // expect(loginPage.getTitleText()).toEqual('Welcome to alurapic!');
    loginPage.setCredentials();
    // expect(element(by.className('test-username')).isDisplayed()).toBeTruthy();
    // await expect(loginPage.getLogoutButton()).toBe(true);
    // expect(element(by.className('test-login-button')).isDisplayed()).toBeTruthy();
    expect(loginPage.currentTitle()).toBe('Timeline');
  });

  it('should try to log in and get error', () => {
    loginPage.navigateTo();
    logoutPage.logout();
    expect(loginPage.currentTitle()).toBe('Sign in');
    loginPage.setWrongCredentials();
    expect(loginPage.currentTitle()).toBe('Sign in');
  });

  it('should try to access restric page not logged in and get error', () => {
    browser.get('/p/add');
    expect(loginPage.currentTitle()).toBe('Sign in');
  });


  function writeScreenShot(data, filename) {
    const fs = require('fs');
    const stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
});
