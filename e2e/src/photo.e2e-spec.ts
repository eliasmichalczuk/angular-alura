import { AppPage } from './app.po';
import { Login } from './login.po';
import { Photo } from './photo.po';
import { browser, element, by } from 'protractor';
import { Logout } from './logout.po';
import { fakeAsync } from '@angular/core/testing';

describe('photo detail page |', () => {

  const wrongCredentials = {
    user: 'wrongname',
    pass: 'wrongpasswd'
  };
  let page: Photo;
  let login: Login;
  let logout: Logout;

  beforeEach(() => {
    page = new Photo();
    login = new Login();
    logout = new Logout();
    login.navigateTo();
    login.setCredentials();
  });

  it('upload button should be clickable', async () => {
    page.photoUpload();
    login.navigateTo();
    expect(login.currentTitle()).toEqual(`Timeline`);
    page.deletePhoto();
    browser.navigate().back();
    expect(login.currentTitle()).toEqual(`Timeline`);
  });

  // it('should delete a photo', () => {
  //   login.navigateTo();
  //   login.setCredentials();
  //   login.navigateTo();
  //   expect(login.currentTitle()).toEqual(`Timeline`);
  //   page.deletePhoto();
  //   browser.navigate().back();
  //   expect(login.currentTitle()).toEqual(`Timeline`);
  // });

});
