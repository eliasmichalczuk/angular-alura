import { AppPage } from './app.po';
import { Login } from './login.po';
import { $, by, element, browser } from 'protractor';
import { element as element1, detectChanges } from '@angular/core/src/render3';

describe('login page', () => {

  const wrongCredentials = {
    user: 'wrongname',
    pass: 'wrongpasswd'
  };
  let loginPage: Login;

  beforeEach(() => {
    loginPage = new Login();
    loginPage.navigateTo();
  });

  it('should log in correctly', async () => {
    // expect(loginPage.getTitleText()).toEqual('Welcome to alurapic!');
    // await loginPage.setCredentials();
    expect(element(by.className('test-username')).isDisplayed()).toBeTruthy();
    // await expect(loginPage.getLogoutButton()).toBe(true);
    expect(element(by.className('test-login-button')).isDisplayed()).toBeTruthy();
    expect(await loginPage.currentTitle()).toBe('Timeline');
  });

  it(' should click login button', async () => {
    element(by.partialLinkText('Register Now')).click();
    expect(browser.getTitle()).toEqual('Sign up');
  });
});
