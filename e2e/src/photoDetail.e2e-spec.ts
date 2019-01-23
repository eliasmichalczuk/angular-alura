import { AppPage } from './app.po';
import { Login } from './login.po';
import { Photo } from './photoDetail.po';

describe('photo detail page', () => {

  const wrongCredentials = {
    user: 'wrongname',
    pass: 'wrongpasswd'
  };
  let page: Photo;

  beforeEach(() => {
    page = new Photo();
    page.navigateTo();
    page.setCredentials();
  });

  it('should log in correctly', () => {
    page.navigateTo();
    page.setCredentials();
    //xpect(page.getTitleText()).toEqual('Welcome to alurapic!');
    expect(page.getLogoutButton()).toBe(true);
  });


});
