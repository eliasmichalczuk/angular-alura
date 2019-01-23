import { AppPage } from './app.po';
import { Login } from './login.po';
import { Photo } from './photo.po';
import { browser } from 'protractor';

describe('photo detail page', () => {

  const wrongCredentials = {
    user: 'wrongname',
    pass: 'wrongpasswd'
  };
  let page: Photo;
  let login: Login;

  beforeEach(() => {
    page = new Photo();
    login = new Login();
    login.navigateTo();
    login.setCredentials();
  });

  it('should delete photo and disabled url', async () => {
    page.navigateToPhotoUpload();
    page.photoUpload();
    login.navigateTo();
    page.deletePhoto();
    browser.navigate().back();
    expect(login.currentTitle()).toEqual(`Timeline`);
  });


});
