import { AppPage } from './app.po';
import { Login } from './login.po';

describe('login page', () => {

  const wrongCredentials = {
    user: 'wrongname',
    pass: 'wrongpasswd'
  };
  let loginPage: Login;

  beforeEach(() => {
    loginPage = new Login();
  });

  it('should log in correctly', () => {
    loginPage.navigateTo();
    loginPage.setCredentials();
    //xpect(loginPage.getTitleText()).toEqual('Welcome to alurapic!');
    expect(loginPage.getLogoutButton()).toBe(true);
  });


});
