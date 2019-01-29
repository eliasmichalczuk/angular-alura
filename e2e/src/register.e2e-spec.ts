import { AppPage } from './app.po';
import { Login } from './login.po';
import { Photo } from './photo.po';
import { browser } from 'protractor';
import { Register } from './register.po';
import { Logout } from './logout.po';

describe('photo detail page', () => {


  let page: Photo;
  let login: Login;
  let register: Register;
  let logoutPage: Logout;

  beforeEach(() => {
    page = new Photo();
    login = new Login();
    register = new Register();
    logoutPage = new Logout();
    login.navigateTo();
    // login.setCredentials();
  });

  // it('shoud register and log in with the same credentials', () => {
  //   login.navigateTo();
  //   register.navigateToRegister();
  //   expect(login.currentTitle()).toBe('Sign up');
  //   register.completeForm();
  //   register.navigateToLogin();
  //   expect(browser.getTitle()).toEqual('Timeline');
  // });

});
