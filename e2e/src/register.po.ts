import { browser, by, element } from 'protractor';

export class Register {
    private registerData = {
        email: 'test@protractor.com',
        fullName: 'Test protractor',
        userName: 'testProtrac',
        password: 'password'
    };

    navigateToRegister() {
        element(by.partialLinkText('Register Now')).click();
    }

    completeForm() {
        element(by.className('test-email')).sendKeys(this.registerData.email);
        element(by.className('test-fullName')).sendKeys(this.registerData.fullName);
        element(by.className('test-userName')).sendKeys(this.registerData.userName);
        element(by.className('test-password')).sendKeys(this.registerData.password);
        element(by.className('test-signUp-button')).click();
    }

    navigateToLogin() {
        browser.get('/');
        element(by.className('test-username')).clear();
        element(by.className('test-password')).clear();
        element(by.className('test-username')).sendKeys('flavio');
        element(by.className('test-password')).sendKeys('123');
        element(by.className('test-login-button')).click();
    }
}
