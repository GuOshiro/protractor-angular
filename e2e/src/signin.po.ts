import { browser, by, element } from 'protractor';

export class SigninPage {
  acessarHome() {
    return browser.get('/#/home');
  }
  verificarUrl() {
    return browser.getCurrentUrl();
  }
}
