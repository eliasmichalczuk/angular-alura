import { AppPage } from './app.po';
import { Login } from './login.po';
import { Photo } from './photo.po';
import { browser, element, by } from 'protractor';
import { Logout } from './logout.po';

describe('photo detail page', () => {

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
    // login.setCredentials();
  });

  it('should delete photo and disabled url', (done) => {
    login.navigateTo();
    login.setCredentials();
    page.navigateToPhotoUpload();
    page.photoUpload();
    login.navigateTo();
    expect(login.currentTitle()).toEqual(`Timeline`);
    page.deletePhoto();
    browser.navigate().back();
    expect(login.currentTitle()).toEqual(`Timeline`);
    return done;
  });


});
