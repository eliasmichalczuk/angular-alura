import { Photo } from './photo.po';
import { Login } from './login.po';
import { Logout } from './logout.po';
import { browser, element, by } from 'protractor';

describe('add photo page |', () => {
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

    it('cancel button should return to timeline', () => {
       element(by.className('test-addPhoto')).click();
       element(by.className('test-cancel-button')).click();
       expect(browser.getTitle()).toEqual('Timeline');
       logout.logout();
    });
});

