import { by, element } from 'protractor';

export class Logout {

    logout() {
        element(by.className('test-logout-button')).click();
    }
}
